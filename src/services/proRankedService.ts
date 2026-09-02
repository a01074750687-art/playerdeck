import { proPlayers } from "../data/pro";

const LEADERBOARD_REGIONS = [
  "ap",
] as const;

/**
 * 우선 한 번에 최대 5000명을 요청한다.
 *
 * API가 요청 크기를 제한해서 더 적게 반환하면
 * 아래 FALLBACK_PAGE_SIZE 단위로 나머지만 이어서 조회한다.
 */
const LEADERBOARD_TARGET_SIZE = 5000;
const LEADERBOARD_FALLBACK_PAGE_SIZE = 1000;

/**
 * 10분 동안은 API를 다시 호출하지 않고
 * 저장된 최신 랭킹을 그대로 사용한다.
 */
const RANK_CACHE_DURATION =
  10 * 60 * 1000;

/**
 * 최신 캐시가 만료됐더라도 최대 6시간까지는
 * 이전 성공 데이터를 즉시 화면에 보여준다.
 *
 * 그 뒤 백그라운드에서 최신 데이터를 받아 교체한다.
 */
const RANK_STALE_CACHE_DURATION =
  6 * 60 * 60 * 1000;

const RANK_STORAGE_KEY =
  "deckgg_pro_ranked_cache_v1";

type LeaderboardRegion =
  (typeof LEADERBOARD_REGIONS)[number];

type HenrikLeaderboardTier =
  | number
  | {
      id?: number;
      name?: string;
    };

type HenrikLeaderboardPlayer = {
  puuid?: string;

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

type ProAccountMaps = {
  byPuuid: Map<
    string,
    ProAccountOwner
  >;

  byRiotIdFallback: Map<
    string,
    ProAccountOwner
  >;
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

type CachedRanking = {
  savedAt: number;
  expiresAt: number;
  entries: ProRankedEntry[];
};

class LeaderboardRequestError extends Error {
  status: number;

  constructor(
    status: number,
    message: string,
  ) {
    super(message);

    this.name =
      "LeaderboardRequestError";

    this.status = status;
  }
}

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
    result[
      name.toLowerCase()
    ] = Number(id);

    return result;
  },
  {},
);

let rankingCache:
  | CachedRanking
  | null = null;

let pendingRankingRequest:
  | Promise<ProRankedEntry[]>
  | null = null;

function normalizeRiotId(
  name: string,
  tag: string,
) {
  return `${name
    .trim()
    .toLowerCase()}#${tag
    .trim()
    .toLowerCase()}`;
}

function normalizePuuid(
  puuid: string,
) {
  return puuid
    .trim()
    .toLowerCase();
}

function getTierId(
  tier:
    | HenrikLeaderboardTier
    | undefined,
): number {
  if (
    typeof tier === "number"
  ) {
    return tier;
  }

  if (
    tier &&
    typeof tier.id === "number"
  ) {
    return tier.id;
  }

  const tierName =
    tier?.name
      ?.trim()
      .toLowerCase();

  if (!tierName) {
    return 0;
  }

  return (
    TIER_ORDER_BY_NAME[
      tierName
    ] ?? 0
  );
}

function getTierName(
  tier:
    | HenrikLeaderboardTier
    | undefined,
): string {
  if (
    tier &&
    typeof tier === "object" &&
    tier.name
  ) {
    return tier.name;
  }

  const tierId =
    getTierId(tier);

  return (
    TIER_NAMES[tierId] ??
    `Tier ${tierId}`
  );
}

function compareRankedEntries(
  first: ProRankedEntry,
  second: ProRankedEntry,
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

  if (first.rr !== second.rr) {
    return second.rr - first.rr;
  }

  return first.nickname.localeCompare(
    second.nickname,
  );
}

function isProRankedEntry(
  value: unknown,
): value is ProRankedEntry {
  if (
    !value ||
    typeof value !== "object"
  ) {
    return false;
  }

  const entry =
    value as Partial<ProRankedEntry>;

  return (
    typeof entry.rank ===
      "number" &&
    typeof entry.playerId ===
      "string" &&
    typeof entry.playerSlug ===
      "string" &&
    typeof entry.nickname ===
      "string" &&
    (typeof entry.teamShortName ===
      "string" ||
      entry.teamShortName ===
        null) &&
    typeof entry.tier ===
      "string" &&
    typeof entry.tierOrder ===
      "number" &&
    typeof entry.rr ===
      "number" &&
    typeof entry.riotId ===
      "string" &&
    entry.leaderboardRegion ===
      "ap" &&
    (typeof entry.leaderboardRank ===
      "number" ||
      entry.leaderboardRank ===
        null)
  );
}

function readStoredRanking(
  allowStale: boolean,
): CachedRanking | null {
  if (
    typeof window ===
    "undefined"
  ) {
    return null;
  }

  try {
    const raw =
      window.localStorage.getItem(
        RANK_STORAGE_KEY,
      );

    if (!raw) {
      return null;
    }

    const parsed: unknown =
      JSON.parse(raw);

    if (
      !parsed ||
      typeof parsed !== "object"
    ) {
      window.localStorage.removeItem(
        RANK_STORAGE_KEY,
      );

      return null;
    }

    const cache =
      parsed as Partial<CachedRanking>;

    if (
      typeof cache.savedAt !==
        "number" ||
      typeof cache.expiresAt !==
        "number" ||
      !Array.isArray(
        cache.entries,
      ) ||
      !cache.entries.every(
        isProRankedEntry,
      )
    ) {
      window.localStorage.removeItem(
        RANK_STORAGE_KEY,
      );

      return null;
    }

    const now = Date.now();

    if (
      now - cache.savedAt >
      RANK_STALE_CACHE_DURATION
    ) {
      window.localStorage.removeItem(
        RANK_STORAGE_KEY,
      );

      return null;
    }

    if (
      !allowStale &&
      cache.expiresAt <= now
    ) {
      return null;
    }

    return {
      savedAt:
        cache.savedAt,

      expiresAt:
        cache.expiresAt,

      entries:
        cache.entries,
    };
  } catch {
    return null;
  }
}

function saveRanking(
  entries: ProRankedEntry[],
) {
  const now = Date.now();

  const cache: CachedRanking = {
    savedAt: now,

    expiresAt:
      now +
      RANK_CACHE_DURATION,

    entries,
  };

  rankingCache = cache;

  if (
    typeof window ===
    "undefined"
  ) {
    return;
  }

  try {
    window.localStorage.setItem(
      RANK_STORAGE_KEY,
      JSON.stringify(cache),
    );
  } catch {
    // localStorage 사용이 불가능한 환경에서는
    // 메모리 캐시만 사용한다.
  }
}

/**
 * 화면 최초 렌더링에서 사용할 수 있는
 * 마지막 성공 랭킹.
 *
 * 최대 6시간까지 stale 데이터를 허용한다.
 */
export function getCachedProRankedTop10(): ProRankedEntry[] {
  const now = Date.now();

  if (
    rankingCache &&
    now - rankingCache.savedAt <=
      RANK_STALE_CACHE_DURATION
  ) {
    return rankingCache.entries;
  }

  const stored =
    readStoredRanking(true);

  if (!stored) {
    return [];
  }

  rankingCache = stored;

  return stored.entries;
}

function createProAccountMaps(): ProAccountMaps {
  const byPuuid = new Map<
    string,
    ProAccountOwner
  >();

  const byRiotIdFallback =
    new Map<
      string,
      ProAccountOwner
    >();

  proPlayers
    .filter(
      (player) =>
        player.region ===
          "Pacific" &&
        (player.status ===
          "Active" ||
          player.status ===
            "Substitute") &&
        (player.riotAccounts
          ?.length ?? 0) > 0,
    )
    .forEach((player) => {
      player.riotAccounts?.forEach(
        (account) => {
          const owner: ProAccountOwner =
            {
              playerId:
                player.id,

              playerSlug:
                player.slug,

              nickname:
                player.nickname,

              teamShortName:
                player.team
                  ?.shortName ??
                null,
            };

          const puuid =
            account.puuid
              ?.trim();

          if (puuid) {
            const normalizedPuuid =
              normalizePuuid(
                puuid,
              );

            const existingOwner =
              byPuuid.get(
                normalizedPuuid,
              );

            if (
              existingOwner &&
              existingOwner.playerId !==
                owner.playerId
            ) {
              console.warn(
                "[PRO RANKED] 중복 PUUID:",
                puuid,
                existingOwner.nickname,
                owner.nickname,
              );

              return;
            }

            byPuuid.set(
              normalizedPuuid,
              owner,
            );

            return;
          }

          const riotId =
            normalizeRiotId(
              account.name,
              account.tag,
            );

          byRiotIdFallback.set(
            riotId,
            owner,
          );
        },
      );
    });

  return {
    byPuuid,
    byRiotIdFallback,
  };
}

function findProAccountOwner(
  leaderboardPlayer:
    HenrikLeaderboardPlayer,

  accountMaps: ProAccountMaps,
): ProAccountOwner | null {
  const puuid =
    leaderboardPlayer.puuid
      ?.trim();

  if (puuid) {
    const owner =
      accountMaps.byPuuid.get(
        normalizePuuid(
          puuid,
        ),
      );

    if (owner) {
      return owner;
    }
  }

  if (
    !leaderboardPlayer.name ||
    !leaderboardPlayer.tag
  ) {
    return null;
  }

  const riotId =
    normalizeRiotId(
      leaderboardPlayer.name,
      leaderboardPlayer.tag,
    );

  return (
    accountMaps
      .byRiotIdFallback
      .get(riotId) ??
    null
  );
}

async function fetchLeaderboardPage(
  region: LeaderboardRegion,
  startIndex: number,
  size: number,
): Promise<HenrikLeaderboardResponse> {
  const path =
    `/valorant/v3/leaderboard/` +
    `${region}/pc` +
    `?size=${size}` +
    `&start_index=${startIndex}`;

  const response = await fetch(
    `/api/henrik?path=${encodeURIComponent(
      path,
    )}`,
    {
      method: "GET",

      headers: {
        Accept:
          "application/json",
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
      typeof result ===
        "object" &&
      "error" in result &&
      typeof result.error ===
        "string"
        ? result.error
        : `리더보드 요청 실패: ${response.status}`;

    throw new LeaderboardRequestError(
      response.status,
      errorMessage,
    );
  }

  return result as HenrikLeaderboardResponse;
}

function responseHasMore(
  response:
    HenrikLeaderboardResponse,

  playerCount: number,
  requestedSize: number,
) {
  if (
    typeof response.results
      ?.after === "number"
  ) {
    return (
      response.results.after > 0
    );
  }

  return (
    playerCount ===
    requestedSize
  );
}

async function fetchLeaderboardPaginated(
  region: LeaderboardRegion,
): Promise<
  HenrikLeaderboardPlayer[]
> {
  const allPlayers:
    HenrikLeaderboardPlayer[] = [];

  let startIndex = 1;

  while (
    allPlayers.length <
    LEADERBOARD_TARGET_SIZE
  ) {
    const remaining =
      LEADERBOARD_TARGET_SIZE -
      allPlayers.length;

    const size = Math.min(
      LEADERBOARD_FALLBACK_PAGE_SIZE,
      remaining,
    );

    const response =
      await fetchLeaderboardPage(
        region,
        startIndex,
        size,
      );

    const players =
      response.data?.players ?? [];

    if (players.length === 0) {
      break;
    }

    allPlayers.push(
      ...players,
    );

    if (
      !responseHasMore(
        response,
        players.length,
        size,
      )
    ) {
      break;
    }

    startIndex +=
      players.length;
  }

  return allPlayers.slice(
    0,
    LEADERBOARD_TARGET_SIZE,
  );
}

async function fetchLeaderboardPlayers(
  region: LeaderboardRegion,
): Promise<
  HenrikLeaderboardPlayer[]
> {
  try {
    /**
     * 가장 빠른 경로:
     * 5000명을 한 번에 요청.
     */
    const firstResponse =
      await fetchLeaderboardPage(
        region,
        1,
        LEADERBOARD_TARGET_SIZE,
      );

    const firstPlayers =
      firstResponse.data
        ?.players ?? [];

    if (
      firstPlayers.length === 0
    ) {
      return [];
    }

    /**
     * 실제로 5000명을 받았거나
     * API상 다음 데이터가 없다면 끝.
     */
    if (
      firstPlayers.length >=
        LEADERBOARD_TARGET_SIZE ||
      !responseHasMore(
        firstResponse,
        firstPlayers.length,
        LEADERBOARD_TARGET_SIZE,
      )
    ) {
      return firstPlayers.slice(
        0,
        LEADERBOARD_TARGET_SIZE,
      );
    }

    /**
     * API가 size=5000을 받았지만
     * 내부적으로 더 작은 크기로 제한해 반환한 경우.
     *
     * 이미 받은 데이터는 재요청하지 않고
     * 나머지만 1000명 단위로 이어서 받는다.
     */
    const allPlayers = [
      ...firstPlayers,
    ];

    let startIndex =
      firstPlayers.length + 1;

    while (
      allPlayers.length <
      LEADERBOARD_TARGET_SIZE
    ) {
      const remaining =
        LEADERBOARD_TARGET_SIZE -
        allPlayers.length;

      const size = Math.min(
        LEADERBOARD_FALLBACK_PAGE_SIZE,
        remaining,
      );

      const response =
        await fetchLeaderboardPage(
          region,
          startIndex,
          size,
        );

      const players =
        response.data?.players ??
        [];

      if (
        players.length === 0
      ) {
        break;
      }

      allPlayers.push(
        ...players,
      );

      if (
        !responseHasMore(
          response,
          players.length,
          size,
        )
      ) {
        break;
      }

      startIndex +=
        players.length;
    }

    return allPlayers.slice(
      0,
      LEADERBOARD_TARGET_SIZE,
    );
  } catch (error) {
    /**
     * API가 size=5000 자체를 허용하지 않는 경우
     * 기존 방식인 1000명 페이지 조회로 자동 fallback.
     *
     * 429는 fallback하지 않는다.
     * 요청을 더 보내면 rate limit이 악화되기 때문.
     */
    if (
      error instanceof
        LeaderboardRequestError &&
      (error.status === 400 ||
        error.status === 422)
    ) {
      return fetchLeaderboardPaginated(
        region,
      );
    }

    throw error;
  }
}

function addLeaderboardPlayers(
  players:
    HenrikLeaderboardPlayer[],

  region:
    LeaderboardRegion,

  accountMaps:
    ProAccountMaps,

  bestPlayerEntries: Map<
    string,
    ProRankedEntry
  >,
) {
  players.forEach(
    (leaderboardPlayer) => {
      const owner =
        findProAccountOwner(
          leaderboardPlayer,
          accountMaps,
        );

      if (!owner) {
        return;
      }

      if (
        !leaderboardPlayer.name ||
        !leaderboardPlayer.tag
      ) {
        return;
      }

      const tierOrder =
        getTierId(
          leaderboardPlayer.tier,
        );

      if (
        tierOrder <= 0
      ) {
        return;
      }

      const candidate:
        ProRankedEntry = {
        rank: 0,

        playerId:
          owner.playerId,

        playerSlug:
          owner.playerSlug,

        nickname:
          owner.nickname,

        teamShortName:
          owner.teamShortName,

        tier:
          getTierName(
            leaderboardPlayer.tier,
          ),

        tierOrder,

        rr:
          typeof leaderboardPlayer
            .rr === "number"
            ? leaderboardPlayer.rr
            : 0,

        riotId:
          `${leaderboardPlayer.name}` +
          `#${leaderboardPlayer.tag}`,

        leaderboardRegion:
          region,

        leaderboardRank:
          typeof leaderboardPlayer
            .leaderboard_rank ===
          "number"
            ? leaderboardPlayer
                .leaderboard_rank
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
    },
  );
}

async function requestProRankedTop10(): Promise<
  ProRankedEntry[]
> {
  const accountMaps =
    createProAccountMaps();

  const bestPlayerEntries =
    new Map<
      string,
      ProRankedEntry
    >();

  const regionResults =
    await Promise.all(
      LEADERBOARD_REGIONS.map(
        async (region) => ({
          region,

          players:
            await fetchLeaderboardPlayers(
              region,
            ),
        }),
      ),
    );

  regionResults.forEach(
    ({
      region,
      players,
    }) => {
      addLeaderboardPlayers(
        players,
        region,
        accountMaps,
        bestPlayerEntries,
      );
    },
  );

  return [
    ...bestPlayerEntries.values(),
  ]
    .sort(
      compareRankedEntries,
    )
    .slice(0, 10)
    .map(
      (entry, index) => ({
        ...entry,

        rank:
          index + 1,
      }),
    );
}

/**
 * 최신 랭킹을 가져온다.
 *
 * 1. 메모리의 10분 캐시
 * 2. localStorage의 10분 캐시
 * 3. API 요청
 *
 * 순서로 동작한다.
 */
export async function getProRankedTop10(): Promise<
  ProRankedEntry[]
> {
  const now =
    Date.now();

  if (
    rankingCache &&
    rankingCache.expiresAt >
      now
  ) {
    return rankingCache.entries;
  }

  const storedFresh =
    readStoredRanking(false);

  if (storedFresh) {
    rankingCache =
      storedFresh;

    return storedFresh.entries;
  }

  if (
    pendingRankingRequest
  ) {
    return pendingRankingRequest;
  }

  pendingRankingRequest =
    requestProRankedTop10();

  try {
    const entries =
      await pendingRankingRequest;

    saveRanking(entries);

    return entries;
  } catch (error) {
    /**
     * 최신 데이터 요청에 실패했더라도
     * 최근 6시간 이내 성공 데이터가 있으면
     * 티커를 없애지 않고 기존 랭킹을 유지한다.
     */
    const stale =
      readStoredRanking(true);

    if (stale) {
      rankingCache = stale;

      return stale.entries;
    }

    throw error;
  } finally {
    pendingRankingRequest =
      null;
  }
}