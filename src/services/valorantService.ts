import type { GameMode } from "../constants/valorantModes";
import { getPlayerCardAssetByUuid } from "../api/valorantAssetsApi";

import type {
  ActPeakRank,
  MatchPlayer,
  PlayerData,
  RecentMatch,
  TopAgentStat,
  WeaponKill,
} from "../types/valorant";
import type { ValorantActAsset } from "../types/valorantAssets";

const API_KEY = import.meta.env.VITE_HENRIK_API_KEY;

const STAT_MATCH_LIMIT = 20;
const RECENT_MATCH_LIMIT = 10;
const ACT_PEAK_LIMIT = 4;

type HenrikAccountResponse = {
  status: number;
  data?: {
    name: string;
    tag: string;
    region?: string;
    account_level?: number;
    card?: string;
  };
};

type HenrikRankTier = {
  id?: number;
  name?: string;
};

type HenrikSeasonalMmr = {
  season?: {
    id?: string;
    short?: string;
  };
  wins?: number;
  games?: number;
  end_tier?: HenrikRankTier;
  end_rr?: number;
  ranking_schema?: string;
  act_wins?: HenrikRankTier[];
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
    seasonal?: HenrikSeasonalMmr[];
  };
};

type HenrikMatchesResponse = {
  status: number;
  data?: HenrikMatch[];
};

type HenrikKillEvent = Record<string, unknown>;

type HenrikDamageData = {
  dealt?: number;
  dealt_amount?: number;
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
  kills?: HenrikKillEvent[];
};

type HenrikMatchPlayer = {
  name?: string;
  tag?: string;
  team?: "Red" | "Blue" | string;
  character?: string;
  damage_made?: number;
  damage?: HenrikDamageData;
  stats?: {
    kills?: number;
    deaths?: number;
    assists?: number;
    score?: number;
    bodyshots?: number;
    headshots?: number;
    legshots?: number;
    damage_made?: number;
    damage?: HenrikDamageData;
  };
};

type AgentAccumulator = {
  matches: number;
  kills: number;
  deaths: number;
};

type ParsedMatch = {
  recentMatch: RecentMatch;
  headshots: number;
  totalShots: number;
  hasWon: boolean;
  damageDealt: number;
  rounds: number;
};

type CalculatedPlayerStats = {
  kd: number;
  winRate: string;
  hsRate: string;
  acs: number;
  adr: number;
  kills: number;
  deaths: number;
  assists: number;
  topAgents: TopAgentStat[];
  weaponKills: WeaponKill[];
  recentMatches: RecentMatch[];
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
  if (numbers.length === 0) {
    return 0;
  }

  const total = numbers.reduce((sum, value) => sum + value, 0);

  return Number((total / numbers.length).toFixed(1));
}

function normalizeModeName(value: string | undefined): GameMode {
  const mode = value
    ?.toLowerCase()
    .replace(/\s/g, "")
    .replace(/-/g, "");

  if (!mode) return "all";

  if (mode.includes("competitive")) {
    return "competitive";
  }

  if (mode.includes("unrated")) {
    return "unrated";
  }

  if (mode.includes("swiftplay")) {
    return "swiftplay";
  }

  if (mode.includes("deathmatch") && mode.includes("team")) {
    return "teamdeathmatch";
  }

  if (mode.includes("deathmatch")) {
    return "deathmatch";
  }

  if (mode.includes("spikerush")) {
    return "spikerush";
  }

  return "all";
}

function getMatchMode(match: HenrikMatch): GameMode {
  return normalizeModeName(match.metadata?.mode ?? match.metadata?.mode_id);
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

function getMatchDate(match: HenrikMatch) {
  const playedAt = getPlayedAt(match);

  if (!playedAt) {
    return null;
  }

  const date = new Date(playedAt);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
}

function resolveSelectedAct(
  selectedAct: string,
  acts: ValorantActAsset[]
): ValorantActAsset | null {
  if (selectedAct === "current") {
    return acts.find((act) => act.isActive) ?? null;
  }

  return acts.find((act) => act.uuid === selectedAct) ?? null;
}

function isMatchInAct(match: HenrikMatch, act: ValorantActAsset | null) {
  if (!act) {
    return true;
  }

  const matchDate = getMatchDate(match);

  if (!matchDate) {
    return false;
  }

  const start = act.startTime ? new Date(act.startTime) : null;
  const end = act.endTime ? new Date(act.endTime) : null;

  if (!start || !end) {
    return true;
  }

  return start <= matchDate && matchDate <= end;
}

function filterMatches(
  matches: HenrikMatch[],
  selectedMode: GameMode,
  selectedAct: string,
  acts: ValorantActAsset[]
) {
  const act = resolveSelectedAct(selectedAct, acts);

  return matches.filter((match) => {
    const modeMatches =
      selectedMode === "all" || getMatchMode(match) === selectedMode;

    const actMatches = isMatchInAct(match, act);

    return modeMatches && actMatches;
  });
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

function getPlayerDamage(player: HenrikMatchPlayer) {
  const damageCandidates = [
    player.damage_made,
    player.stats?.damage_made,
    player.damage?.dealt,
    player.damage?.dealt_amount,
    player.stats?.damage?.dealt,
    player.stats?.damage?.dealt_amount,
  ];

  const damage = damageCandidates.find(
    (value) => typeof value === "number" && Number.isFinite(value)
  );

  return damage ?? 0;
}

function isSamePlayer(
  player: HenrikMatchPlayer,
  playerName: string,
  playerTag: string
) {
  return (
    player.name?.toLowerCase() === playerName.toLowerCase() &&
    player.tag?.toLowerCase() === playerTag.toLowerCase()
  );
}

function getStringValue(value: unknown) {
  return typeof value === "string" ? value : null;
}

function getNestedObject(value: unknown): Record<string, unknown> | null {
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }

  return null;
}

function getWeaponName(kill: HenrikKillEvent) {
  const directWeaponName =
    getStringValue(kill.damage_weapon_name) ??
    getStringValue(kill.weapon_name) ??
    getStringValue(kill.weaponName);

  if (directWeaponName) {
    return directWeaponName;
  }

  const weaponObject = getNestedObject(kill.weapon);

  if (weaponObject) {
    return (
      getStringValue(weaponObject.name) ??
      getStringValue(weaponObject.displayName) ??
      getStringValue(weaponObject.display_name) ??
      "Unknown"
    );
  }

  const damageWeaponObject = getNestedObject(kill.damage_weapon);

  if (damageWeaponObject) {
    return (
      getStringValue(damageWeaponObject.name) ??
      getStringValue(damageWeaponObject.displayName) ??
      getStringValue(damageWeaponObject.display_name) ??
      "Unknown"
    );
  }

  return "Unknown";
}

function isTargetKillEvent(
  kill: HenrikKillEvent,
  playerName: string,
  playerTag: string
) {
  const targetRiotId = `${playerName}#${playerTag}`.toLowerCase();

  const directKillerName =
    getStringValue(kill.killer_display_name) ??
    getStringValue(kill.killerDisplayName) ??
    getStringValue(kill.killer_name);

  if (directKillerName?.toLowerCase() === targetRiotId) {
    return true;
  }

  const killerObject = getNestedObject(kill.killer);

  if (killerObject) {
    const killerName = getStringValue(killerObject.name);
    const killerTag = getStringValue(killerObject.tag);

    if (
      killerName &&
      killerTag &&
      `${killerName}#${killerTag}`.toLowerCase() === targetRiotId
    ) {
      return true;
    }
  }

  return false;
}

function getWeaponKills(
  match: HenrikMatch,
  playerName: string,
  playerTag: string
): WeaponKill[] {
  const killEvents = match.kills ?? [];

  const weaponCounts = killEvents.reduce<Record<string, number>>(
    (acc, kill) => {
      if (!isTargetKillEvent(kill, playerName, playerTag)) {
        return acc;
      }

      const weaponName = getWeaponName(kill);

      if (!weaponName || weaponName.toLowerCase() === "unknown") {
        return acc;
      }

      acc[weaponName] = (acc[weaponName] ?? 0) + 1;

      return acc;
    },
    {}
  );

  return Object.entries(weaponCounts)
    .map(([weapon, kills]) => ({
      weapon,
      kills,
    }))
    .sort((a, b) => b.kills - a.kills);
}

function mergeWeaponKills(matches: RecentMatch[]): WeaponKill[] {
  const weaponCounts = matches.reduce<Record<string, number>>((acc, match) => {
    match.weaponKills?.forEach((item) => {
      acc[item.weapon] = (acc[item.weapon] ?? 0) + item.kills;
    });

    return acc;
  }, {});

  return Object.entries(weaponCounts)
    .map(([weapon, kills]) => ({
      weapon,
      kills,
    }))
    .sort((a, b) => b.kills - a.kills)
    .slice(0, 5);
}

function getTopAgents(matches: RecentMatch[]): TopAgentStat[] {
  const agentStats = matches.reduce<Record<string, AgentAccumulator>>(
    (acc, match) => {
      if (!acc[match.agent]) {
        acc[match.agent] = {
          matches: 0,
          kills: 0,
          deaths: 0,
        };
      }

      acc[match.agent].matches += 1;
      acc[match.agent].kills += match.kills;
      acc[match.agent].deaths += match.deaths;

      return acc;
    },
    {}
  );

  const getMatchWeight = (matches: number) => {
    if (matches === 1) {
      return 0.85;
    }

    if (matches === 2) {
      return 0.95;
    }

    return 1;
  };

  return Object.entries(agentStats)
    .map(([agent, { matches, kills, deaths }]) => {
      const kd = Number((kills / Math.max(deaths, 1)).toFixed(2));
      const score = kd * getMatchWeight(matches);

      return {
        agent,
        matches,
        kd,
        score,
      };
    })
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      if (b.kd !== a.kd) {
        return b.kd - a.kd;
      }

      return b.matches - a.matches;
    })
    .slice(0, 3)
    .map(({ agent, matches, kd }) => ({
      agent,
      matches,
      kd,
    }));
}

function getMatchPlayers(
  match: HenrikMatch,
  targetPlayer: HenrikMatchPlayer,
  playerName: string,
  playerTag: string
) {
  const players = match.players?.all_players ?? [];
  const rounds = getRoundCount(match);

  const mappedPlayers: MatchPlayer[] = players.map((player) => ({
    name: player.name ?? "Unknown",
    tag: player.tag ?? "",
    team: player.team ?? "Unknown",
    agent: player.character ?? "Unknown",
    kills: player.stats?.kills ?? 0,
    deaths: player.stats?.deaths ?? 0,
    assists: player.stats?.assists ?? 0,
    acs: getPlayerAcs(player, rounds),
    isCurrentPlayer: isSamePlayer(player, playerName, playerTag),
  }));

  const targetTeam = targetPlayer.team?.toLowerCase();

  const allyTeam = mappedPlayers
    .filter((player) => player.team.toLowerCase() === targetTeam)
    .sort((a, b) => b.acs - a.acs);

  const enemyTeam = mappedPlayers
    .filter((player) => player.team.toLowerCase() !== targetTeam)
    .sort((a, b) => b.acs - a.acs);

  return {
    allyTeam,
    enemyTeam,
  };
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

  const matchMvp = playersWithAcs.reduce((best, current) =>
    current.acs > best.acs ? current : best
  );

  const sameTeamPlayers = playersWithAcs.filter(
    (item) =>
      item.player.team?.toLowerCase() === targetPlayer.team?.toLowerCase()
  );

  if (sameTeamPlayers.length === 0) {
    return {
      isMatchMvp: false,
      isTeamMvp: false,
    };
  }

  const teamMvp = sameTeamPlayers.reduce((best, current) =>
    current.acs > best.acs ? current : best
  );

  const targetName = targetPlayer.name?.toLowerCase();
  const targetTag = targetPlayer.tag?.toLowerCase();

  const matchesTarget = (player: HenrikMatchPlayer | undefined) =>
    player?.name?.toLowerCase() === targetName &&
    player?.tag?.toLowerCase() === targetTag;

  const isMatchMvp = matchesTarget(matchMvp.player);
  const isTeamMvp = !isMatchMvp && matchesTarget(teamMvp.player);

  return {
    isMatchMvp,
    isTeamMvp,
  };
}

function parseMatch(
  match: HenrikMatch,
  playerName: string,
  playerTag: string
): ParsedMatch | null {
  const targetPlayer = match.players?.all_players?.find((player) =>
    isSamePlayer(player, playerName, playerTag)
  );

  if (!targetPlayer) {
    return null;
  }

  const rounds = getRoundCount(match);

  const playerKills = targetPlayer.stats?.kills ?? 0;
  const playerDeaths = targetPlayer.stats?.deaths ?? 0;
  const playerAssists = targetPlayer.stats?.assists ?? 0;

  const acs = getPlayerAcs(targetPlayer, rounds);
  const damageDealt = getPlayerDamage(targetPlayer);

  const isRedTeam = targetPlayer.team?.toLowerCase() === "red";

  const hasWon = Boolean(
    isRedTeam ? match.teams?.red?.has_won : match.teams?.blue?.has_won
  );

  const headshots = targetPlayer.stats?.headshots ?? 0;
  const bodyshots = targetPlayer.stats?.bodyshots ?? 0;
  const legshots = targetPlayer.stats?.legshots ?? 0;

  const mvpInfo = getMvpInfo(match, targetPlayer);

  const teams = getMatchPlayers(match, targetPlayer, playerName, playerTag);

  const recentMatch: RecentMatch = {
    result: hasWon ? "Win" : "Lose",
    mode: getMatchMode(match),
    agent: targetPlayer.character ?? "Unknown",
    map: match.metadata?.map ?? "Unknown Map",
    kills: playerKills,
    deaths: playerDeaths,
    assists: playerAssists,
    acs,
    playedAt: getPlayedAt(match),

    score: getMatchScore(match, targetPlayer.team),

    isMatchMvp: mvpInfo.isMatchMvp,
    isTeamMvp: mvpInfo.isTeamMvp,

    allyTeam: teams.allyTeam,
    enemyTeam: teams.enemyTeam,

    weaponKills: getWeaponKills(match, playerName, playerTag),
  };

  return {
    recentMatch,
    headshots,
    totalShots: headshots + bodyshots + legshots,
    hasWon,
    damageDealt,
    rounds,
  };
}

function createEmptyPlayerStats(): CalculatedPlayerStats {
  return {
    kd: 0,
    winRate: "0%",
    hsRate: "0%",
    acs: 0,
    adr: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
    topAgents: [],
    weaponKills: [],
    recentMatches: [],
  };
}

function calculatePlayerStats(
  playerName: string,
  playerTag: string,
  matches: HenrikMatch[],
  selectedMode: GameMode,
  selectedAct: string,
  acts: ValorantActAsset[]
): CalculatedPlayerStats {
  const filteredMatches = filterMatches(
    matches,
    selectedMode,
    selectedAct,
    acts
  );

  const parsedMatches = filteredMatches
    .map((match) => parseMatch(match, playerName, playerTag))
    .filter((match): match is ParsedMatch => match !== null);

  if (parsedMatches.length === 0) {
    return createEmptyPlayerStats();
  }

  const statMatches = parsedMatches.slice(0, STAT_MATCH_LIMIT);

  const recentMatches = parsedMatches
    .slice(0, RECENT_MATCH_LIMIT)
    .map((match) => match.recentMatch);

  const statRecentMatches = statMatches.map((match) => match.recentMatch);

  const kills = statRecentMatches.map((match) => match.kills);
  const deaths = statRecentMatches.map((match) => match.deaths);
  const assists = statRecentMatches.map((match) => match.assists);
  const acsList = statRecentMatches.map((match) => match.acs);

  const wins = statMatches.filter((match) => match.hasWon).length;

  const totalKills = kills.reduce((sum, value) => sum + value, 0);
  const totalDeaths = deaths.reduce((sum, value) => sum + value, 0);

  const totalHeadshots = statMatches.reduce(
    (sum, match) => sum + match.headshots,
    0
  );

  const totalShotCount = statMatches.reduce(
    (sum, match) => sum + match.totalShots,
    0
  );

  const totalDamage = statMatches.reduce(
    (sum, match) => sum + match.damageDealt,
    0
  );

  const totalRounds = statMatches.reduce((sum, match) => sum + match.rounds, 0);

  const topAgents = getTopAgents(statRecentMatches);
  const weaponKills = mergeWeaponKills(statRecentMatches);

  return {
    kd: Number((totalKills / Math.max(totalDeaths, 1)).toFixed(2)),

    winRate: `${Math.round((wins / statMatches.length) * 100)}%`,

    hsRate:
      totalShotCount > 0
        ? `${Math.round((totalHeadshots / totalShotCount) * 100)}%`
        : "0%",

    acs: Math.round(average(acsList)),

    adr:
      totalRounds > 0
        ? Number((totalDamage / totalRounds).toFixed(1))
        : 0,

    kills: average(kills),
    deaths: average(deaths),
    assists: average(assists),

    topAgents,
    weaponKills,
    recentMatches,
  };
}

function getHighestTierFromActWins(
  actWins: HenrikRankTier[] | undefined,
  fallbackTier: HenrikRankTier | undefined
) {
  const validActWins = (actWins ?? []).filter(
    (tier) => typeof tier.id === "number" && tier.name
  );

  if (validActWins.length > 0) {
    return validActWins.reduce((best, current) => {
      const bestId = best.id ?? 0;
      const currentId = current.id ?? 0;

      return currentId > bestId ? current : best;
    });
  }

  if (fallbackTier?.name) {
    return fallbackTier;
  }

  return null;
}

function getActSortTime(act: ValorantActAsset | undefined) {
  if (!act?.startTime) {
    return 0;
  }

  const time = new Date(act.startTime).getTime();

  return Number.isNaN(time) ? 0 : time;
}

function buildActPeakRanks(
  seasonal: HenrikSeasonalMmr[] | undefined,
  acts: ValorantActAsset[]
): ActPeakRank[] {
  if (!seasonal || seasonal.length === 0) {
    return [];
  }

  return seasonal
    .map((season) => {
      const actId = season.season?.id;

      if (!actId) {
        return null;
      }

      const matchedAct = acts.find((act) => act.uuid === actId);

      if (!matchedAct) {
        return null;
      }

      const highestTier = getHighestTierFromActWins(
        season.act_wins,
        season.end_tier
      );

      if (!highestTier?.name) {
        return null;
      }

      return {
        actId,
        actLabel: matchedAct.shortLabel,
        rank: highestTier.name,
        sortTime: getActSortTime(matchedAct),
      };
    })
    .filter(
      (
        item
      ): item is ActPeakRank & {
        sortTime: number;
      } => item !== null
    )
    .sort((a, b) => b.sortTime - a.sortTime)
    .slice(0, ACT_PEAK_LIMIT)
    .map(({ actId, actLabel, rank }) => ({
      actId,
      actLabel,
      rank,
    }));
}

export async function getPlayerProfile(
  playerName: string,
  selectedMode: GameMode = "all",
  selectedAct: string = "current",
  acts: ValorantActAsset[] = []
): Promise<PlayerData> {
  const { name, tag } = splitPlayer(playerName);

  if (!API_KEY) {
    throw new Error("Henrik API Key가 설정되지 않았습니다.");
  }

  const accountResult = await fetchWithAuth<HenrikAccountResponse>(
    `https://api.henrikdev.xyz/valorant/v2/account/${encodeURIComponent(
      name
    )}/${encodeURIComponent(tag)}`
  );

  if (!accountResult.data) {
    throw new Error("플레이어 계정 정보를 찾을 수 없습니다.");
  }

  let playerCard: PlayerData["playerCard"] = null;

if (accountResult.data.card) {
  try {
    playerCard = await getPlayerCardAssetByUuid(
      accountResult.data.card
    );
  } catch (error) {
    console.log("PLAYER CARD ASSET ERROR:", error);
  }
}

  const region = accountResult.data.region ?? "Unknown";

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
      )}/${encodeURIComponent(name)}/${encodeURIComponent(
        tag
      )}?size=${STAT_MATCH_LIMIT}`
    );
  } catch (error) {
    console.log("MATCH API ERROR:", error);
  }

  const matchStats = calculatePlayerStats(
    name,
    tag,
    matchesResult?.data ?? [],
    selectedMode,
    selectedAct,
    acts
  );

  const actPeakRanks = buildActPeakRanks(mmrResult?.data?.seasonal, acts);

  return {
    name: `${accountResult.data.name ?? name}#${
      accountResult.data.tag ?? tag
    }`,

    level: accountResult.data.account_level ?? 0,

    region,

    playerCard,

    rank: mmrResult?.data?.current?.tier?.name ?? "Unrated",

    rr:
      mmrResult?.data?.current?.rr ??
      mmrResult?.data?.current?.ranking_in_tier ??
      0,

    peakRank: mmrResult?.data?.peak?.tier?.name ?? "Unrated",

    ...matchStats,

    actPeakRanks,

    recentMatches: matchStats.recentMatches,
  };
}