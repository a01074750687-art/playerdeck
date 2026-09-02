import { proPlayers } from "../data/pro";

const LEADERBOARD_REGIONS = [
  "ap",
] as const;

const LEADERBOARD_PAGE_SIZE = 1000;
const MAX_PLAYERS_PER_REGION = 5000;

const RANK_CACHE_DURATION =
  5 * 60 * 1000;

type LeaderboardRegion =
  (typeof LEADERBOARD_REGIONS)[number];

type HenrikLeaderboardTier =
  | number
  | {
      id?: number;
      name?: string;
    };

type HenrikLeaderboardPlayer = {
  name?: string;
  tag?: string;

  leaderboard_rank?: number;

  tier?: HenrikLeaderboardTier;
  rr?: number;
};

type HenrikLeaderboardResponse = {
  status: number;

  results?: {
    total?: number;
    returned?: number;
    before?: number;
    after?: number;
  };

  data?: {
    updated_at?: string;

    players?: HenrikLeaderboardPlayer[];
  };
};

type ProAccountOwner = {
  playerId: string;
  playerSlug: string;
  nickname: string;
  teamShortName: string | null;
};

type RankScore = {
  tierOrder: number;
  rr: number;
};

export type ProRankedEntry = {
  rank: number;

  playerId: string;
  playerSlug: string;
  nickname: string;

  teamShortName: string | null;

  tier: string;
  tierOrder: number;
  rr: number;

  riotId: string;

  leaderboardRegion: LeaderboardRegion;
  leaderboardRank: number | null;
};

type RegionState = {
  region: LeaderboardRegion;

  startIndex: number;
  done: boolean;

  boundary: RankScore | null;
};

type CachedRanking = {
  expiresAt: number;
  entries: ProRankedEntry[];
};

const TIER_NAMES: Record<
  number,
  string
> = {
  0: "Unrated",

  3: "Iron 1",
  4: "Iron 2",
  5: "Iron 3",

  6: "Bronze 1",
  7: "Bronze 2",
  8: "Bronze 3",

  9: "Silver 1",
  10: "Silver 2",
  11: "Silver 3",

  12: "Gold 1",
  13: "Gold 2",
  14: "Gold 3",

  15: "Platinum 1",
  16: "Platinum 2",
  17: "Platinum 3",

  18: "Diamond 1",
  19: "Diamond 2",
  20: "Diamond 3",

  21: "Ascendant 1",
  22: "Ascendant 2",
  23: "Ascendant 3",

  24: "Immortal 1",
  25: "Immortal 2",
  26: "Immortal 3",

  27: "Radiant",
};

const TIER_ORDER_BY_NAME: Record<
  string,
  number
> = Object.entries(
  TIER_NAMES,
).reduce<Record<string, number>>(
  (result, [id, name]) => {
    result[name.toLowerCase()] =
      Number(id);

    return result;
  },
  {},
);

let rankingCache: CachedRanking | null =
  null;

let pendingRankingRequest:
  | Promise<ProRankedEntry[]>
  | null = null;

function normalizeRiotId(
  name: string,
  tag: string,
) {
  return `${name.trim().toLowerCase()}#${tag
    .trim()
    .toLowerCase()}`;
}

function getTierId(
  tier: HenrikLeaderboardTier | undefined,
): number {
  if (typeof tier === "number") {
    return tier;
  }

  if (
    tier &&
    typeof tier.id === "number"
  ) {
    return tier.id;
  }

  const tierName =
    tier?.name?.trim().toLowerCase();

  if (!tierName) {
    return 0;
  }

  return (
    TIER_ORDER_BY_NAME[tierName] ?? 0
  );
}

function getTierName(
  tier: HenrikLeaderboardTier | undefined,
): string {
  if (
    tier &&
    typeof tier === "object" &&
    tier.name
  ) {
    return tier.name;
  }

  const tierId = getTierId(tier);

  return (
    TIER_NAMES[tierId] ??
    `Tier ${tierId}`
  );
}

function getPlayerRankScore(
  player: HenrikLeaderboardPlayer,
): RankScore {
  return {
    tierOrder: getTierId(player.tier),
    rr:
      typeof player.rr === "number"
        ? player.rr
        : 0,
  };
}

function compareRankScore(
  first: RankScore,
  second: RankScore,
) {
  if (
    first.tierOrder !==
    second.tierOrder
  ) {
    return (
      second.tierOrder -
      first.tierOrder
    );
  }

  return second.rr - first.rr;
}

function compareRankedEntries(
  first: ProRankedEntry,
  second: ProRankedEntry,
) {
  const rankComparison =
    compareRankScore(
      {
        tierOrder: first.tierOrder,
        rr: first.rr,
      },
      {
        tierOrder: second.tierOrder,
        rr: second.rr,
      },
    );

  if (rankComparison !== 0) {
    return rankComparison;
  }

  return first.nickname.localeCompare(
    second.nickname,
  );
}

function createProAccountMap() {
  const accountMap = new Map<
    string,
    ProAccountOwner
  >();

  proPlayers
    .filter(
      (player) =>
        player.region === "Pacific" &&
        (player.status === "Active" ||
          player.status ===
            "Substitute") &&
        (player.riotAccounts?.length ??
          0) > 0,
    )
    .forEach((player) => {
      player.riotAccounts?.forEach(
        (account) => {
          const riotId =
            normalizeRiotId(
              account.name,
              account.tag,
            );

          accountMap.set(riotId, {
            playerId: player.id,
            playerSlug: player.slug,
            nickname:
              player.nickname,
            teamShortName:
              player.team?.shortName ??
              null,
          });
        },
      );
    });

  return accountMap;
}

async function fetchLeaderboardPage(
  region: LeaderboardRegion,
  startIndex: number,
): Promise<HenrikLeaderboardResponse> {
  const path =
    `/valorant/v3/leaderboard/` +
    `${region}/pc` +
    `?size=${LEADERBOARD_PAGE_SIZE}` +
    `&start_index=${startIndex}`;

  const response = await fetch(
    `/api/henrik?path=${encodeURIComponent(
      path,
    )}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  );

  const result: unknown =
    await response
      .json()
      .catch(() => null);

  if (!response.ok) {
    const errorMessage =
      result &&
      typeof result === "object" &&
      "error" in result &&
      typeof result.error === "string"
        ? result.error
        : `리더보드 요청 실패: ${response.status}`;

    throw new Error(errorMessage);
  }

  return result as HenrikLeaderboardResponse;
}

function addLeaderboardPlayers(
  players: HenrikLeaderboardPlayer[],
  region: LeaderboardRegion,
  accountMap: Map<
    string,
    ProAccountOwner
  >,
  bestPlayerEntries: Map<
    string,
    ProRankedEntry
  >,
) {
  players.forEach((leaderboardPlayer) => {
    if (
      !leaderboardPlayer.name ||
      !leaderboardPlayer.tag
    ) {
      return;
    }

    const riotId =
      normalizeRiotId(
        leaderboardPlayer.name,
        leaderboardPlayer.tag,
      );

    const owner =
      accountMap.get(riotId);

    if (!owner) {
      return;
    }

    const tierOrder = getTierId(
      leaderboardPlayer.tier,
    );

    if (tierOrder <= 0) {
      return;
    }

    const candidate: ProRankedEntry = {
      rank: 0,

      playerId: owner.playerId,
      playerSlug: owner.playerSlug,
      nickname: owner.nickname,

      teamShortName:
        owner.teamShortName,

      tier: getTierName(
        leaderboardPlayer.tier,
      ),

      tierOrder,

      rr:
        typeof leaderboardPlayer.rr ===
        "number"
          ? leaderboardPlayer.rr
          : 0,

      riotId: `${leaderboardPlayer.name}#${leaderboardPlayer.tag}`,

      leaderboardRegion: region,

      leaderboardRank:
        typeof leaderboardPlayer.leaderboard_rank ===
        "number"
          ? leaderboardPlayer.leaderboard_rank
          : null,
    };

    const previous =
      bestPlayerEntries.get(
        owner.playerId,
      );

    if (
      !previous ||
      compareRankedEntries(
        candidate,
        previous,
      ) < 0
    ) {
      bestPlayerEntries.set(
        owner.playerId,
        candidate,
      );
    }
  });
}

function getLeaderboardBoundary(
  players: HenrikLeaderboardPlayer[],
): RankScore | null {
  for (
    let index = players.length - 1;
    index >= 0;
    index -= 1
  ) {
    const player = players[index];

    const score =
      getPlayerRankScore(player);

    if (score.tierOrder > 0) {
      return score;
    }
  }

  return null;
}

function isBoundaryBelowTopTen(
  boundary: RankScore,
  tenthPlace: ProRankedEntry,
) {
  const comparison =
    compareRankScore(
      boundary,
      {
        tierOrder:
          tenthPlace.tierOrder,
        rr: tenthPlace.rr,
      },
    );

  return comparison >= 0;
}

async function requestProRankedTop10() {
  const accountMap =
    createProAccountMap();

  const bestPlayerEntries =
    new Map<
      string,
      ProRankedEntry
    >();

  const regionStates =
    LEADERBOARD_REGIONS.map<RegionState>(
      (region) => ({
        region,
        startIndex: 1,
        done: false,
        boundary: null,
      }),
    );

  while (
    regionStates.some(
      (state) => !state.done,
    )
  ) {
    const activeStates =
      regionStates.filter(
        (state) => !state.done,
      );

    const responses =
      await Promise.all(
        activeStates.map(
          async (state) => ({
            state,
            response:
              await fetchLeaderboardPage(
                state.region,
                state.startIndex,
              ),
          }),
        ),
      );

    responses.forEach(
      ({ state, response }) => {
        const players =
          response.data?.players ?? [];

        addLeaderboardPlayers(
          players,
          state.region,
          accountMap,
          bestPlayerEntries,
        );

        state.boundary =
          getLeaderboardBoundary(
            players,
          );

        const hasMoreByApi =
          typeof response.results?.after ===
          "number"
            ? response.results.after > 0
            : players.length ===
              LEADERBOARD_PAGE_SIZE;

        const nextStartIndex =
          state.startIndex +
          LEADERBOARD_PAGE_SIZE;

        const reachedLimit =
          nextStartIndex >
          MAX_PLAYERS_PER_REGION;

        if (
          !hasMoreByApi ||
          players.length === 0 ||
          reachedLimit
        ) {
          state.done = true;
          return;
        }

        state.startIndex =
          nextStartIndex;
      },
    );

    const currentTopTen = [
      ...bestPlayerEntries.values(),
    ]
      .sort(compareRankedEntries)
      .slice(0, 10);

    if (currentTopTen.length < 10) {
      continue;
    }

    const tenthPlace =
      currentTopTen[9];

    const canStop =
      regionStates.every(
        (state) =>
          state.done ||
          (state.boundary !== null &&
            isBoundaryBelowTopTen(
              state.boundary,
              tenthPlace,
            )),
      );

    if (canStop) {
      break;
    }
  }

  return [
    ...bestPlayerEntries.values(),
  ]
    .sort(compareRankedEntries)
    .slice(0, 10)
    .map((entry, index) => ({
      ...entry,
      rank: index + 1,
    }));
}

export async function getProRankedTop10(): Promise<
  ProRankedEntry[]
> {
  const now = Date.now();

  if (
    rankingCache &&
    rankingCache.expiresAt > now
  ) {
    return rankingCache.entries;
  }

  if (pendingRankingRequest) {
    return pendingRankingRequest;
  }

  pendingRankingRequest =
    requestProRankedTop10();

  try {
    const entries =
      await pendingRankingRequest;

    rankingCache = {
      entries,
      expiresAt:
        Date.now() +
        RANK_CACHE_DURATION,
    };

    return entries;
  } finally {
    pendingRankingRequest = null;
  }
}