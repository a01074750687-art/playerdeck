import { getPlayerCardAssetByUuid } from "../api/valorantAssetsApi";
import type { GameMode } from "../constants/valorantModes";

import type {
  ActPeakRank,
  MatchPlayer,
  PlayerData,
  RecentMatch,
  TopAgentStat,
  WeaponKill,
} from "../types/valorant";

import type { ValorantActAsset } from "../types/valorantAssets";

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

type HenrikRound = {
  winning_team?: string;
  end_type?: string;
  bomb_planted?: boolean;
  bomb_defused?: boolean;
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
  rounds?: HenrikRound[];
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

  firstKills: number;
  firstDeaths: number;
};

type CalculatedPlayerStats = {
  kd: number;
  winRate: string;
  hsRate: string;
  acs: number;
  adr: number;

  games: number;
  firstKills: number;
  firstDeaths: number;

  kills: number;
  deaths: number;
  assists: number;

  topAgents: TopAgentStat[];
  weaponKills: WeaponKill[];
  recentMatches: RecentMatch[];
};

type PlayerProfileSource = {
  account: NonNullable<HenrikAccountResponse["data"]>;
  region: string;
  playerCard: PlayerData["playerCard"];
  mmrResult: HenrikMmrV3Response | null;
  matches: HenrikMatch[];
  statsCache: Map<string, CalculatedPlayerStats>;
};

type GetPlayerProfileOptions = {
  forceRefresh?: boolean;
};

const PLAYER_PROFILE_CACHE_LIMIT = 20;

const playerProfileCache = new Map<
  string,
  PlayerProfileSource
>();

const playerProfileRequestCache = new Map<
  string,
  Promise<PlayerProfileSource>
>();

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
  const targetUrl = new URL(url);

  if (targetUrl.hostname !== "api.henrikdev.xyz") {
    throw new Error("허용되지 않은 API 주소입니다.");
  }

  const path = `${targetUrl.pathname}${targetUrl.search}`;
  const proxyUrl = `/api/henrik?path=${encodeURIComponent(path)}`;

  const response = await fetch(proxyUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const result: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    const errorMessage =
      result &&
      typeof result === "object" &&
      "error" in result &&
      typeof result.error === "string"
        ? result.error
        : `API 요청 실패: ${response.status}`;

    throw new Error(errorMessage);
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
  const normalizedMode = value
    ?.toLowerCase()
    .replace(/\s/g, "")
    .replace(/-/g, "")
    .replace(/_/g, "");

  if (!normalizedMode) {
    return "all";
  }

  if (normalizedMode.includes("competitive")) {
    return "competitive";
  }

  if (normalizedMode.includes("unrated")) {
    return "unrated";
  }

  if (normalizedMode.includes("swiftplay")) {
    return "swiftplay";
  }

  if (
    normalizedMode.includes("deathmatch") &&
    normalizedMode.includes("team")
  ) {
    return "teamdeathmatch";
  }

  if (normalizedMode.includes("deathmatch")) {
    return "deathmatch";
  }

  if (normalizedMode.includes("spikerush")) {
    return "spikerush";
  }

  return "all";
}

function getMatchMode(match: HenrikMatch): GameMode {
  return normalizeModeName(
    match.metadata?.mode ?? match.metadata?.mode_id
  );
}

function getPlayedAt(match: HenrikMatch): string | null {
  if (match.metadata?.started_at) {
    return match.metadata.started_at;
  }

  if (match.metadata?.game_start) {
    return new Date(match.metadata.game_start * 1000).toISOString();
  }

  return null;
}

function getMatchDate(match: HenrikMatch): Date | null {
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

function isMatchInAct(
  match: HenrikMatch,
  act: ValorantActAsset | null
): boolean {
  if (!act) {
    return true;
  }

  const matchDate = getMatchDate(match);

  if (!matchDate) {
    return false;
  }

  const startDate = act.startTime
    ? new Date(act.startTime)
    : null;

  const endDate = act.endTime
    ? new Date(act.endTime)
    : null;

  if (!startDate || !endDate) {
    return true;
  }

  if (
    Number.isNaN(startDate.getTime()) ||
    Number.isNaN(endDate.getTime())
  ) {
    return true;
  }

  return matchDate >= startDate && matchDate <= endDate;
}

function filterMatches(
  matches: HenrikMatch[],
  selectedMode: GameMode,
  selectedAct: string,
  acts: ValorantActAsset[]
): HenrikMatch[] {
  const selectedActAsset = resolveSelectedAct(selectedAct, acts);

  return matches.filter((match) => {
    const matchMode = getMatchMode(match);

    const modeMatches =
      selectedMode === "all" || matchMode === selectedMode;

    const actMatches = isMatchInAct(match, selectedActAsset);

    return modeMatches && actMatches;
  });
}

function getMatchScore(
  match: HenrikMatch,
  playerTeam: string | undefined
) {
  const redScore = match.teams?.red?.rounds_won ?? 0;
  const blueScore = match.teams?.blue?.rounds_won ?? 0;

  const isRedTeam = playerTeam?.toLowerCase() === "red";

  return {
    ally: isRedTeam ? redScore : blueScore,
    enemy: isRedTeam ? blueScore : redScore,
  };
}

function getRoundCount(match: HenrikMatch): number {
  const redScore = match.teams?.red?.rounds_won ?? 0;
  const blueScore = match.teams?.blue?.rounds_won ?? 0;

  return Math.max(redScore + blueScore, 1);
}

function getPlayerAcs(
  player: HenrikMatchPlayer,
  rounds: number
): number {
  const score = player.stats?.score ?? 0;

  return Math.round(score / Math.max(rounds, 1));
}

function getPlayerDamage(player: HenrikMatchPlayer): number {
  const damageCandidates = [
    player.damage_made,
    player.stats?.damage_made,
    player.damage?.dealt,
    player.damage?.dealt_amount,
    player.stats?.damage?.dealt,
    player.stats?.damage?.dealt_amount,
  ];

  const damage = damageCandidates.find(
    (value): value is number =>
      typeof value === "number" && Number.isFinite(value)
  );

  return damage ?? 0;
}

function getHeadshotRate(
  headshots: number,
  bodyshots: number,
  legshots: number
): number {
  const totalShots = headshots + bodyshots + legshots;

  if (totalShots <= 0) {
    return 0;
  }

  return Math.round((headshots / totalShots) * 100);
}

function isSamePlayer(
  player: HenrikMatchPlayer,
  playerName: string,
  playerTag: string
): boolean {
  return (
    player.name?.toLowerCase() === playerName.toLowerCase() &&
    player.tag?.toLowerCase() === playerTag.toLowerCase()
  );
}

function getStringValue(value: unknown): string | null {
  return typeof value === "string" ? value : null;
}

function getNestedObject(
  value: unknown
): Record<string, unknown> | null {
  if (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  ) {
    return value as Record<string, unknown>;
  }

  return null;
}

function getNumberValue(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value)
    ? value
    : null;
}

function getKillRound(kill: HenrikKillEvent): number | null {
  return (
    getNumberValue(kill.round) ??
    getNumberValue(kill.round_number) ??
    getNumberValue(kill.roundNumber)
  );
}

function getKillTimeInRound(
  kill: HenrikKillEvent
): number | null {
  return (
    getNumberValue(kill.kill_time_in_round) ??
    getNumberValue(kill.killTimeInRound)
  );
}

function getKillEventRiotId(
  kill: HenrikKillEvent,
  role: "killer" | "victim"
): string | null {
  const directDisplayName =
    role === "killer"
      ? getStringValue(kill.killer_display_name) ??
        getStringValue(kill.killerDisplayName) ??
        getStringValue(kill.killer_name)
      : getStringValue(kill.victim_display_name) ??
        getStringValue(kill.victimDisplayName) ??
        getStringValue(kill.victim_name);

  if (directDisplayName) {
    return directDisplayName.toLowerCase();
  }

  const playerObject = getNestedObject(kill[role]);

  if (!playerObject) {
    return null;
  }

  const name = getStringValue(playerObject.name);
  const tag = getStringValue(playerObject.tag);

  if (!name || !tag) {
    return null;
  }

  return `${name}#${tag}`.toLowerCase();
}

function getFirstDuelStats(
  match: HenrikMatch,
  playerName: string,
  playerTag: string
): {
  firstKills: number;
  firstDeaths: number;
} {
  const targetRiotId =
    `${playerName}#${playerTag}`.toLowerCase();

  const firstKillByRound = new Map<
    number,
    {
      kill: HenrikKillEvent;
      time: number;
    }
  >();

  (match.kills ?? []).forEach((kill) => {
    const round = getKillRound(kill);
    const time = getKillTimeInRound(kill);

    if (round === null || time === null) {
      return;
    }

    const current = firstKillByRound.get(round);

    if (!current || time < current.time) {
      firstKillByRound.set(round, {
        kill,
        time,
      });
    }
  });

  let firstKills = 0;
  let firstDeaths = 0;

  firstKillByRound.forEach(({ kill }) => {
    const killerRiotId =
      getKillEventRiotId(kill, "killer");
    const victimRiotId =
      getKillEventRiotId(kill, "victim");

    if (
      killerRiotId === targetRiotId &&
      victimRiotId !== targetRiotId
    ) {
      firstKills += 1;
      return;
    }

    if (
      victimRiotId === targetRiotId &&
      killerRiotId !== targetRiotId
    ) {
      firstDeaths += 1;
    }
  });

  return {
    firstKills,
    firstDeaths,
  };
}

function getWeaponName(kill: HenrikKillEvent): string {
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

  const damageWeaponObject = getNestedObject(
    kill.damage_weapon
  );

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
): boolean {
  const targetRiotId =
    `${playerName}#${playerTag}`.toLowerCase();

  const directKillerName =
    getStringValue(kill.killer_display_name) ??
    getStringValue(kill.killerDisplayName) ??
    getStringValue(kill.killer_name);

  if (directKillerName?.toLowerCase() === targetRiotId) {
    return true;
  }

  const killerObject = getNestedObject(kill.killer);

  if (!killerObject) {
    return false;
  }

  const killerName = getStringValue(killerObject.name);
  const killerTag = getStringValue(killerObject.tag);

  if (!killerName || !killerTag) {
    return false;
  }

  return (
    `${killerName}#${killerTag}`.toLowerCase() ===
    targetRiotId
  );
}

function getWeaponKills(
  match: HenrikMatch,
  playerName: string,
  playerTag: string
): WeaponKill[] {
  const killEvents = match.kills ?? [];

  const weaponCounts = killEvents.reduce<Record<string, number>>(
    (accumulator, kill) => {
      if (!isTargetKillEvent(kill, playerName, playerTag)) {
        return accumulator;
      }

      const weaponName = getWeaponName(kill);

      if (
        !weaponName ||
        weaponName.toLowerCase() === "unknown"
      ) {
        return accumulator;
      }

      accumulator[weaponName] =
        (accumulator[weaponName] ?? 0) + 1;

      return accumulator;
    },
    {}
  );

  return Object.entries(weaponCounts)
    .map(([weapon, kills]) => ({
      weapon,
      kills,
    }))
    .sort((first, second) => second.kills - first.kills);
}

function mergeWeaponKills(
  matches: RecentMatch[]
): WeaponKill[] {
  const weaponCounts = matches.reduce<Record<string, number>>(
    (accumulator, match) => {
      match.weaponKills?.forEach((weaponKill) => {
        accumulator[weaponKill.weapon] =
          (accumulator[weaponKill.weapon] ?? 0) +
          weaponKill.kills;
      });

      return accumulator;
    },
    {}
  );

  return Object.entries(weaponCounts)
    .map(([weapon, kills]) => ({
      weapon,
      kills,
    }))
    .sort((first, second) => second.kills - first.kills)
    .slice(0, 5);
}

function getTopAgents(
  matches: RecentMatch[]
): TopAgentStat[] {
  const agentStats = matches.reduce<
    Record<string, AgentAccumulator>
  >((accumulator, match) => {
    if (!accumulator[match.agent]) {
      accumulator[match.agent] = {
        matches: 0,
        kills: 0,
        deaths: 0,
      };
    }

    accumulator[match.agent].matches += 1;
    accumulator[match.agent].kills += match.kills;
    accumulator[match.agent].deaths += match.deaths;

    return accumulator;
  }, {});

  const getMatchWeight = (matchCount: number) => {
    if (matchCount === 1) {
      return 0.85;
    }

    if (matchCount === 2) {
      return 0.95;
    }

    return 1;
  };

  return Object.entries(agentStats)
    .map(([agent, stats]) => {
      const kd = Number(
        (
          stats.kills / Math.max(stats.deaths, 1)
        ).toFixed(2)
      );

      return {
        agent,
        matches: stats.matches,
        kd,
        score: kd * getMatchWeight(stats.matches),
      };
    })
    .sort((first, second) => {
      if (second.score !== first.score) {
        return second.score - first.score;
      }

      if (second.kd !== first.kd) {
        return second.kd - first.kd;
      }

      return second.matches - first.matches;
    })
    .slice(0, 3)
    .map(({ agent, matches: matchCount, kd }) => ({
      agent,
      matches: matchCount,
      kd,
    }));
}

function getMatchPlayers(
  match: HenrikMatch,
  targetPlayer: HenrikMatchPlayer,
  playerName: string,
  playerTag: string
): {
  allyTeam: MatchPlayer[];
  enemyTeam: MatchPlayer[];
} {
  const players = match.players?.all_players ?? [];
  const rounds = getRoundCount(match);

  const mappedPlayers: MatchPlayer[] = players.map(
    (player) => ({
      name: player.name ?? "Unknown",
      tag: player.tag ?? "",
      team: player.team ?? "Unknown",
      agent: player.character ?? "Unknown",

      kills: player.stats?.kills ?? 0,
      deaths: player.stats?.deaths ?? 0,
      assists: player.stats?.assists ?? 0,

      acs: getPlayerAcs(player, rounds),

      isCurrentPlayer: isSamePlayer(
        player,
        playerName,
        playerTag
      ),
    })
  );

  const targetTeam = targetPlayer.team?.toLowerCase();

  const allyTeam = mappedPlayers
    .filter(
      (player) =>
        player.team.toLowerCase() === targetTeam
    )
    .sort((first, second) => second.acs - first.acs);

  const enemyTeam = mappedPlayers
    .filter(
      (player) =>
        player.team.toLowerCase() !== targetTeam
    )
    .sort((first, second) => second.acs - first.acs);

  return {
    allyTeam,
    enemyTeam,
  };
}

function getMvpInfo(
  match: HenrikMatch,
  targetPlayer: HenrikMatchPlayer
): {
  isMatchMvp: boolean;
  isTeamMvp: boolean;
} {
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

  const matchMvp = playersWithAcs.reduce(
    (bestPlayer, currentPlayer) =>
      currentPlayer.acs > bestPlayer.acs
        ? currentPlayer
        : bestPlayer
  );

  const sameTeamPlayers = playersWithAcs.filter(
    ({ player }) =>
      player.team?.toLowerCase() ===
      targetPlayer.team?.toLowerCase()
  );

  if (sameTeamPlayers.length === 0) {
    return {
      isMatchMvp: false,
      isTeamMvp: false,
    };
  }

  const teamMvp = sameTeamPlayers.reduce(
    (bestPlayer, currentPlayer) =>
      currentPlayer.acs > bestPlayer.acs
        ? currentPlayer
        : bestPlayer
  );

  const targetName = targetPlayer.name?.toLowerCase();
  const targetTag = targetPlayer.tag?.toLowerCase();

  const matchesTargetPlayer = (
    player: HenrikMatchPlayer | undefined
  ) => {
    return (
      player?.name?.toLowerCase() === targetName &&
      player?.tag?.toLowerCase() === targetTag
    );
  };

  const isMatchMvp = matchesTargetPlayer(matchMvp.player);

  const isTeamMvp =
    !isMatchMvp &&
    matchesTargetPlayer(teamMvp.player);

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

  const targetPlayer =
    match.players?.all_players?.find((player) =>
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

  const isRedTeam =
    targetPlayer.team?.toLowerCase() === "red";

  const hasWon = Boolean(
    isRedTeam
      ? match.teams?.red?.has_won
      : match.teams?.blue?.has_won
  );

  const headshots =
    targetPlayer.stats?.headshots ?? 0;

  const bodyshots =
    targetPlayer.stats?.bodyshots ?? 0;

  const legshots =
    targetPlayer.stats?.legshots ?? 0;

  const totalShots =
    headshots + bodyshots + legshots;

  const hsRate = getHeadshotRate(
    headshots,
    bodyshots,
    legshots
  );

  const mvpInfo = getMvpInfo(match, targetPlayer);

  const firstDuelStats = getFirstDuelStats(
    match,
    playerName,
    playerTag
  );

  const teams = getMatchPlayers(
    match,
    targetPlayer,
    playerName,
    playerTag
  );

  const recentMatch: RecentMatch = {
    result: hasWon ? "Win" : "Lose",
    mode: getMatchMode(match),

    agent: targetPlayer.character ?? "Unknown",
    map: match.metadata?.map ?? "Unknown Map",

    kills: playerKills,
    deaths: playerDeaths,
    assists: playerAssists,

    acs,
    hsRate,

    playedAt: getPlayedAt(match),

    score: getMatchScore(
      match,
      targetPlayer.team
    ),

    isMatchMvp: mvpInfo.isMatchMvp,
    isTeamMvp: mvpInfo.isTeamMvp,

    allyTeam: teams.allyTeam,
    enemyTeam: teams.enemyTeam,

    weaponKills: getWeaponKills(
      match,
      playerName,
      playerTag
    ),

    rounds:
      match.rounds?.map((round) => ({
        winningTeam: round.winning_team ?? "",
        endType: round.end_type ?? "",
        bombPlanted: Boolean(round.bomb_planted),
        bombDefused: Boolean(round.bomb_defused),
      })) ?? [],
  };

  return {
    recentMatch,
    headshots,
    totalShots,
    hasWon,
    damageDealt,
    rounds,
    firstKills: firstDuelStats.firstKills,
    firstDeaths: firstDuelStats.firstDeaths,
  };
}

function createEmptyPlayerStats(): CalculatedPlayerStats {
  return {
    kd: 0,
    winRate: "0%",
    hsRate: "0%",
    acs: 0,
    adr: 0,

    games: 0,
    firstKills: 0,
    firstDeaths: 0,

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
    .map((match) =>
      parseMatch(match, playerName, playerTag)
    )
    .filter(
      (match): match is ParsedMatch =>
        match !== null
    );

  if (parsedMatches.length === 0) {
    return createEmptyPlayerStats();
  }

  const statMatches = parsedMatches.slice(
    0,
    STAT_MATCH_LIMIT
  );

  const recentMatches = parsedMatches
    .slice(0, RECENT_MATCH_LIMIT)
    .map((match) => match.recentMatch);

  const statRecentMatches = statMatches.map(
    (match) => match.recentMatch
  );

  const kills = statRecentMatches.map(
    (match) => match.kills
  );

  const deaths = statRecentMatches.map(
    (match) => match.deaths
  );

  const assists = statRecentMatches.map(
    (match) => match.assists
  );

  const acsList = statRecentMatches.map(
    (match) => match.acs
  );

  const wins = statMatches.filter(
    (match) => match.hasWon
  ).length;

  const totalKills = kills.reduce(
    (sum, value) => sum + value,
    0
  );

  const totalDeaths = deaths.reduce(
    (sum, value) => sum + value,
    0
  );

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

  const totalRounds = statMatches.reduce(
    (sum, match) => sum + match.rounds,
    0
  );

  const firstKills = statMatches.reduce(
    (sum, match) => sum + match.firstKills,
    0
  );

  const firstDeaths = statMatches.reduce(
    (sum, match) => sum + match.firstDeaths,
    0
  );

  return {
    kd: Number(
      (
        totalKills / Math.max(totalDeaths, 1)
      ).toFixed(2)
    ),

    winRate: `${Math.round(
      (wins / statMatches.length) * 100
    )}%`,

    hsRate:
      totalShotCount > 0
        ? `${Math.round(
            (totalHeadshots / totalShotCount) * 100
          )}%`
        : "0%",

    acs: Math.round(average(acsList)),

    adr:
      totalRounds > 0
        ? Number(
            (
              totalDamage / totalRounds
            ).toFixed(1)
          )
        : 0,

    games: statMatches.length,
    firstKills,
    firstDeaths,

    kills: average(kills),
    deaths: average(deaths),
    assists: average(assists),

    topAgents: getTopAgents(statRecentMatches),

    weaponKills: mergeWeaponKills(
      statRecentMatches
    ),

    recentMatches,
  };
}

function getHighestTierFromActWins(
  actWins: HenrikRankTier[] | undefined,
  fallbackTier: HenrikRankTier | undefined
): HenrikRankTier | null {
  const validActWins = (actWins ?? []).filter(
    (
      tier
    ): tier is HenrikRankTier & {
      id: number;
      name: string;
    } =>
      typeof tier.id === "number" &&
      typeof tier.name === "string"
  );

  if (validActWins.length > 0) {
    return validActWins.reduce(
      (bestTier, currentTier) =>
        currentTier.id > bestTier.id
          ? currentTier
          : bestTier
    );
  }

  if (fallbackTier?.name) {
    return fallbackTier;
  }

  return null;
}

function getActSortTime(
  act: ValorantActAsset | undefined
): number {
  if (!act?.startTime) {
    return 0;
  }

  const time = new Date(
    act.startTime
  ).getTime();

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

      const matchedAct = acts.find(
        (act) => act.uuid === actId
      );

      if (!matchedAct) {
        return null;
      }

      const highestTier =
        getHighestTierFromActWins(
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
    .sort(
      (first, second) =>
        second.sortTime - first.sortTime
    )
    .slice(0, ACT_PEAK_LIMIT)
    .map(
      ({
        actId,
        actLabel,
        rank,
      }) => ({
        actId,
        actLabel,
        rank,
      })
    );
}

function getPlayerProfileCacheKey(
  name: string,
  tag: string
) {
  return `${name.trim().toLowerCase()}#${tag
    .trim()
    .toLowerCase()}`;
}

function rememberPlayerProfileSource(
  cacheKey: string,
  source: PlayerProfileSource
) {
  if (playerProfileCache.has(cacheKey)) {
    playerProfileCache.delete(cacheKey);
  }

  playerProfileCache.set(cacheKey, source);

  while (
    playerProfileCache.size >
    PLAYER_PROFILE_CACHE_LIMIT
  ) {
    const oldestKey =
      playerProfileCache.keys().next().value;

    if (typeof oldestKey !== "string") {
      break;
    }

    playerProfileCache.delete(oldestKey);
  }
}

async function requestPlayerProfileSource(
  name: string,
  tag: string
): Promise<PlayerProfileSource> {
  const accountResult =
    await fetchWithAuth<HenrikAccountResponse>(
      `https://api.henrikdev.xyz/valorant/v2/account/${encodeURIComponent(
        name
      )}/${encodeURIComponent(tag)}`
    );

  if (!accountResult.data) {
    throw new Error(
      "플레이어 계정 정보를 찾을 수 없습니다."
    );
  }

  const account = accountResult.data;
  const region = account.region ?? "Unknown";

  const playerCardPromise: Promise<
    PlayerData["playerCard"]
  > = account.card
    ? getPlayerCardAssetByUuid(account.card).catch(
        (error) => {
          console.error(
            "PLAYER CARD ASSET ERROR:",
            error
          );

          return null;
        }
      )
    : Promise.resolve(null);

  const mmrPromise =
    fetchWithAuth<HenrikMmrV3Response>(
      `https://api.henrikdev.xyz/valorant/v3/mmr/${encodeURIComponent(
        region
      )}/pc/${encodeURIComponent(
        name
      )}/${encodeURIComponent(tag)}`
    ).catch((error) => {
      console.error("MMR API ERROR:", error);

      return null;
    });

  const matchesPromise =
    fetchWithAuth<HenrikMatchesResponse>(
      `https://api.henrikdev.xyz/valorant/v3/matches/${encodeURIComponent(
        region
      )}/${encodeURIComponent(
        name
      )}/${encodeURIComponent(
        tag
      )}?size=${STAT_MATCH_LIMIT}`
    ).catch((error) => {
      console.error("MATCH API ERROR:", error);

      return null;
    });

  const [
    playerCard,
    mmrResult,
    matchesResult,
  ] = await Promise.all([
    playerCardPromise,
    mmrPromise,
    matchesPromise,
  ]);

  return {
    account,
    region,
    playerCard,
    mmrResult,
    matches: matchesResult?.data ?? [],
    statsCache: new Map(),
  };
}

async function loadPlayerProfileSource(
  playerName: string,
  forceRefresh = false
): Promise<PlayerProfileSource> {
  const { name, tag } =
    splitPlayer(playerName);

  const cacheKey =
    getPlayerProfileCacheKey(name, tag);

  if (!forceRefresh) {
    const cachedSource =
      playerProfileCache.get(cacheKey);

    if (cachedSource) {
      return cachedSource;
    }

    const pendingRequest =
      playerProfileRequestCache.get(cacheKey);

    if (pendingRequest) {
      return pendingRequest;
    }
  }

  const request = requestPlayerProfileSource(
    name,
    tag
  );

  if (!forceRefresh) {
    playerProfileRequestCache.set(
      cacheKey,
      request
    );
  }

  try {
    const source = await request;

    rememberPlayerProfileSource(
      cacheKey,
      source
    );

    return source;
  } finally {
    if (
      playerProfileRequestCache.get(
        cacheKey
      ) === request
    ) {
      playerProfileRequestCache.delete(cacheKey);
    }
  }
}

function buildPlayerProfile(
  source: PlayerProfileSource,
  selectedMode: GameMode,
  selectedAct: string,
  acts: ValorantActAsset[]
): PlayerData {
  const accountName =
    source.account.name ?? "Unknown";
  const accountTag =
    source.account.tag ?? "Unknown";

  const statsCacheKey =
    `${selectedMode}:${selectedAct}`;

  let matchStats =
    source.statsCache.get(statsCacheKey);

  if (!matchStats) {
    matchStats = calculatePlayerStats(
      accountName,
      accountTag,
      source.matches,
      selectedMode,
      selectedAct,
      acts
    );

    source.statsCache.set(
      statsCacheKey,
      matchStats
    );
  }

  const actPeakRanks = buildActPeakRanks(
    source.mmrResult?.data?.seasonal,
    acts
  );

  return {
    name: `${accountName}#${accountTag}`,

    level:
      source.account.account_level ?? 0,

    region: source.region,

    playerCard: source.playerCard,

    rank:
      source.mmrResult?.data?.current?.tier
        ?.name ?? "Unrated",

    rr:
      source.mmrResult?.data?.current?.rr ??
      source.mmrResult?.data?.current
        ?.ranking_in_tier ??
      0,

    peakRank:
      source.mmrResult?.data?.peak?.tier
        ?.name ?? "Unrated",

    kd: matchStats.kd,
    winRate: matchStats.winRate,
    hsRate: matchStats.hsRate,
    acs: matchStats.acs,

    adr: matchStats.adr,
    games: matchStats.games,
    firstKills: matchStats.firstKills,
    firstDeaths: matchStats.firstDeaths,

    kills: matchStats.kills,
    deaths: matchStats.deaths,
    assists: matchStats.assists,

    topAgents: matchStats.topAgents,
    weaponKills: matchStats.weaponKills,
    actPeakRanks,
    recentMatches: matchStats.recentMatches,
  };
}

export async function prefetchPlayerProfile(
  playerName: string
): Promise<void> {
  await loadPlayerProfileSource(playerName);
}

export async function getPlayerProfile(
  playerName: string,
  selectedMode: GameMode = "all",
  selectedAct: string = "current",
  acts: ValorantActAsset[] = [],
  options: GetPlayerProfileOptions = {}
): Promise<PlayerData> {
  const source =
    await loadPlayerProfileSource(
      playerName,
      options.forceRefresh ?? false
    );

  return buildPlayerProfile(
    source,
    selectedMode,
    selectedAct,
    acts
  );
}
