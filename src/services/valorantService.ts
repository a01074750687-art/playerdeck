import { mockPlayer } from "../mocks/valorantMock";
import type { GameMode } from "../constants/valorantModes";
import type { PlayerData, RecentMatch } from "../types/valorant";

const API_KEY = import.meta.env.VITE_HENRIK_API_KEY;

type HenrikAccountResponse = {
  status: number;
  data?: {
    name: string;
    tag: string;
    region?: string;
    account_level?: number;
  };
};

type HenrikMmrV3Response = {
  status: number;
  data?: {
    current?: {
      tier?: {
        name?: string;
      };
      rr?: number;
      ranking_in_tier?: number;
    };
    peak?: {
      tier?: {
        name?: string;
      };
    };
  };
};

type HenrikMatchesResponse = {
  status: number;
  data?: HenrikMatch[];
};

type HenrikMatch = {
  metadata?: {
    map?: string;
    mode?: string;
    mode_id?: string;
    started_at?: string;
    game_start?: number;
  };
  players?: {
    all_players?: HenrikMatchPlayer[];
  };
  teams?: {
    red?: {
      has_won?: boolean;
      rounds_won?: number;
    };
    blue?: {
      has_won?: boolean;
      rounds_won?: number;
    };
  };
};

type HenrikMatchPlayer = {
  name?: string;
  tag?: string;
  team?: "Red" | "Blue" | string;
  character?: string;
  stats?: {
    kills?: number;
    deaths?: number;
    assists?: number;
    score?: number;
    bodyshots?: number;
    headshots?: number;
    legshots?: number;
  };
};

function splitPlayer(player: string) {
  const [name, tag] = player.split("#");

  if (!name || !tag) {
    throw new Error("플레이어 이름은 TenZ#NA1 형식으로 입력하세요.");
  }

  return {
    name: name.trim(),
    tag: tag.trim(),
  };
}

async function fetchWithAuth<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Authorization: API_KEY,
      Accept: "application/json",
    },
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status}`);
  }

  return result as T;
}

function average(numbers: number[]) {
  if (numbers.length === 0) return 0;

  const total = numbers.reduce((sum, value) => sum + value, 0);
  return Number((total / numbers.length).toFixed(1));
}

function normalizeModeName(value: string | undefined): GameMode {
  const mode = value?.toLowerCase().replace(/\s/g, "").replace(/-/g, "");

  if (!mode) return "all";

  if (mode.includes("competitive")) return "competitive";
  if (mode.includes("unrated")) return "unrated";
  if (mode.includes("swiftplay")) return "swiftplay";
  if (mode.includes("deathmatch") && mode.includes("team")) {
    return "teamdeathmatch";
  }
  if (mode.includes("deathmatch")) return "deathmatch";
  if (mode.includes("spikerush")) return "spikerush";

  return "all";
}

function getMatchMode(match: HenrikMatch): GameMode {
  return normalizeModeName(match.metadata?.mode ?? match.metadata?.mode_id);
}

function filterMatchesByMode(matches: HenrikMatch[], selectedMode: GameMode) {
  if (selectedMode === "all") return matches;

  return matches.filter((match) => getMatchMode(match) === selectedMode);
}

function getPlayedAt(match: HenrikMatch) {
  if (match.metadata?.started_at) {
    return match.metadata.started_at;
  }

  if (match.metadata?.game_start) {
    return new Date(match.metadata.game_start * 1000).toISOString();
  }

  return null;
}

function getMatchScore(match: HenrikMatch, playerTeam: string | undefined) {
  const redScore = match.teams?.red?.rounds_won ?? 0;
  const blueScore = match.teams?.blue?.rounds_won ?? 0;

  const isRedTeam = playerTeam?.toLowerCase() === "red";

  return {
    ally: isRedTeam ? redScore : blueScore,
    enemy: isRedTeam ? blueScore : redScore,
  };
}

function getRoundCount(match: HenrikMatch) {
  const redScore = match.teams?.red?.rounds_won ?? 0;
  const blueScore = match.teams?.blue?.rounds_won ?? 0;

  return Math.max(redScore + blueScore, 1);
}

function getPlayerAcs(player: HenrikMatchPlayer, rounds: number) {
  const score = player.stats?.score ?? 0;
  return Math.round(score / rounds);
}

function getMvpInfo(match: HenrikMatch, targetPlayer: HenrikMatchPlayer) {
  const players = match.players?.all_players ?? [];
  const rounds = getRoundCount(match);

  if (players.length === 0) {
    return {
      isMatchMvp: false,
      isTeamMvp: false,
    };
  }

  const playersWithAcs = players.map((player) => ({
    player,
    acs: getPlayerAcs(player, rounds),
  }));

  const matchMvp = playersWithAcs.reduce((best, current) => {
    return current.acs > best.acs ? current : best;
  });

  const sameTeamPlayers = playersWithAcs.filter(
    (item) =>
      item.player.team?.toLowerCase() === targetPlayer.team?.toLowerCase()
  );

  const teamMvp = sameTeamPlayers.reduce((best, current) => {
    return current.acs > best.acs ? current : best;
  }, sameTeamPlayers[0]);

  const targetName = targetPlayer.name?.toLowerCase();
  const targetTag = targetPlayer.tag?.toLowerCase();

  const isSamePlayer = (player: HenrikMatchPlayer | undefined) => {
    return (
      player?.name?.toLowerCase() === targetName &&
      player?.tag?.toLowerCase() === targetTag
    );
  };

  return {
    isMatchMvp: isSamePlayer(matchMvp.player),
    isTeamMvp: isSamePlayer(teamMvp?.player),
  };
}

function calculatePlayerStats(
  playerName: string,
  playerTag: string,
  matches: HenrikMatch[],
  selectedMode: GameMode
) {
  const filteredMatches = filterMatchesByMode(matches, selectedMode);
  const recentMatches: RecentMatch[] = [];

  let wins = 0;

  const kills: number[] = [];
  const deaths: number[] = [];
  const assists: number[] = [];
  const acsList: number[] = [];
  const headshots: number[] = [];
  const totalShots: number[] = [];
  const agents: string[] = [];

  filteredMatches.slice(0, 10).forEach((match) => {
    const targetPlayer = match.players?.all_players?.find(
      (player) =>
        player.name?.toLowerCase() === playerName.toLowerCase() &&
        player.tag?.toLowerCase() === playerTag.toLowerCase()
    );

    if (!targetPlayer) return;

    const rounds = getRoundCount(match);

    const playerKills = targetPlayer.stats?.kills ?? 0;
    const playerDeaths = targetPlayer.stats?.deaths ?? 0;
    const playerAssists = targetPlayer.stats?.assists ?? 0;
    const acs = getPlayerAcs(targetPlayer, rounds);

    const isRedTeam = targetPlayer.team?.toLowerCase() === "red";
    const hasWon = isRedTeam
      ? match.teams?.red?.has_won
      : match.teams?.blue?.has_won;

    if (hasWon) wins += 1;

    const agent = targetPlayer.character ?? "Unknown";
    const map = match.metadata?.map ?? "Unknown Map";
    const mode = getMatchMode(match);
    const score = getMatchScore(match, targetPlayer.team);
    const mvpInfo = getMvpInfo(match, targetPlayer);

    kills.push(playerKills);
    deaths.push(playerDeaths);
    assists.push(playerAssists);
    acsList.push(acs);
    agents.push(agent);

    const hs = targetPlayer.stats?.headshots ?? 0;
    const bs = targetPlayer.stats?.bodyshots ?? 0;
    const ls = targetPlayer.stats?.legshots ?? 0;

    headshots.push(hs);
    totalShots.push(hs + bs + ls);

    recentMatches.push({
      result: hasWon ? "Win" : "Lose",
      mode,
      agent,
      map,
      kills: playerKills,
      deaths: playerDeaths,
      assists: playerAssists,
      acs,
      playedAt: getPlayedAt(match),
      score,
      isMatchMvp: mvpInfo.isMatchMvp,
      isTeamMvp: mvpInfo.isTeamMvp,
    });
  });

  const totalKills = kills.reduce((sum, value) => sum + value, 0);
  const totalDeaths = deaths.reduce((sum, value) => sum + value, 0);

  const totalHeadshots = headshots.reduce((sum, value) => sum + value, 0);
  const totalShotCount = totalShots.reduce((sum, value) => sum + value, 0);

  const agentCounts = agents.reduce<Record<string, number>>((acc, agent) => {
    acc[agent] = (acc[agent] ?? 0) + 1;
    return acc;
  }, {});

  const topAgents = Object.entries(agentCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([agent]) => agent)
    .slice(0, 3);

  return {
    kd: Number((totalKills / Math.max(totalDeaths, 1)).toFixed(2)),
    winRate:
      recentMatches.length > 0
        ? `${Math.round((wins / recentMatches.length) * 100)}%`
        : mockPlayer.winRate,
    hsRate:
      totalShotCount > 0
        ? `${Math.round((totalHeadshots / totalShotCount) * 100)}%`
        : mockPlayer.hsRate,
    acs: Math.round(average(acsList)),
    adr: mockPlayer.adr,
    kills: average(kills),
    deaths: average(deaths),
    assists: average(assists),
    topAgents: topAgents.length > 0 ? topAgents : mockPlayer.topAgents,
    recentMatches:
      recentMatches.length > 0 ? recentMatches : mockPlayer.recentMatches,
  };
}

export async function getPlayerProfile(
  playerName: string,
  selectedMode: GameMode = "all"
): Promise<PlayerData> {
  const { name, tag } = splitPlayer(playerName);

  if (!API_KEY) {
    return {
      ...mockPlayer,
      name: `${name}#${tag}`,
    };
  }

  try {
    const accountResult = await fetchWithAuth<HenrikAccountResponse>(
      `https://api.henrikdev.xyz/valorant/v2/account/${encodeURIComponent(
        name
      )}/${encodeURIComponent(tag)}`
    );

    const region = accountResult.data?.region ?? mockPlayer.region;

    let mmrResult: HenrikMmrV3Response | null = null;
    let matchesResult: HenrikMatchesResponse | null = null;

    try {
      mmrResult = await fetchWithAuth<HenrikMmrV3Response>(
        `https://api.henrikdev.xyz/valorant/v3/mmr/${encodeURIComponent(
          region
        )}/pc/${encodeURIComponent(name)}/${encodeURIComponent(tag)}`
      );
    } catch (error) {
      console.log("MMR API ERROR:", error);
    }

    try {
      matchesResult = await fetchWithAuth<HenrikMatchesResponse>(
        `https://api.henrikdev.xyz/valorant/v3/matches/${encodeURIComponent(
          region
        )}/${encodeURIComponent(name)}/${encodeURIComponent(tag)}`
      );
    } catch (error) {
      console.log("MATCH API ERROR:", error);
    }

    const matchStats = calculatePlayerStats(
      name,
      tag,
      matchesResult?.data ?? [],
      selectedMode
    );

    return {
      ...mockPlayer,
      ...matchStats,
      name: `${accountResult.data?.name ?? name}#${
        accountResult.data?.tag ?? tag
      }`,
      level: accountResult.data?.account_level ?? mockPlayer.level,
      region,
      rank: mmrResult?.data?.current?.tier?.name ?? mockPlayer.rank,
      rr:
        mmrResult?.data?.current?.rr ??
        mmrResult?.data?.current?.ranking_in_tier ??
        mockPlayer.rr,
      peakRank: mmrResult?.data?.peak?.tier?.name ?? mockPlayer.peakRank,
    };
  } catch (error) {
    console.log("ACCOUNT API ERROR:", error);

    return {
      ...mockPlayer,
      name: `${name}#${tag}`,
    };
  }
}