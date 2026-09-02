import {
  ArrowUpRight,
  Search,
  Star,
  X,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/common/Header";
import { searchProPlayers } from "../data/pro";
import useFavorites, {
  type FavoriteValorantAccount,
} from "../hooks/useFavorites";
import {
  getCachedProRankedTop10,
  getProRankedTop10,
  type ProRankedEntry,
} from "../services/proRankedService";

const RECENT_SEARCHES_STORAGE_KEY =
  "valorant_recent_searches";

const DEFAULT_RECENT_SEARCHES = [
  "TenZ#NA1",
  "aspas#BR1",
  "Meteor#KR1",
];

const RANK_ROTATION_INTERVAL = 3500;
const RANK_FADE_DURATION = 220;

function loadRecentSearches(): string[] {
  try {
    const saved = localStorage.getItem(
      RECENT_SEARCHES_STORAGE_KEY,
    );

    if (!saved) {
      return DEFAULT_RECENT_SEARCHES;
    }

    const parsed: unknown =
      JSON.parse(saved);

    if (
      Array.isArray(parsed) &&
      parsed.every(
        (item) =>
          typeof item === "string",
      )
    ) {
      return parsed;
    }

    return DEFAULT_RECENT_SEARCHES;
  } catch {
    return DEFAULT_RECENT_SEARCHES;
  }
}

const formatFavoriteRiotId = (
  favorite: FavoriteValorantAccount,
) => `${favorite.name}#${favorite.tag}`;

export default function Valorant() {
  const navigate = useNavigate();

  const {
    valorantAccountFavorites,
    removeFavorite,
  } = useFavorites();

  const [playerName, setPlayerName] =
    useState("");

  const [
    recentSearches,
    setRecentSearches,
  ] = useState<string[]>(
    loadRecentSearches,
  );

  const [
    proRankedPlayers,
    setProRankedPlayers,
  ] = useState<ProRankedEntry[]>(
    () => getCachedProRankedTop10(),
  );

  const [
    activeRankIndex,
    setActiveRankIndex,
  ] = useState(0);

  const [
    isRankVisible,
    setIsRankVisible,
  ] = useState(true);

  const proPlayerResults = useMemo(() => {
    const keyword = playerName.trim();

    if (
      keyword.length < 2 ||
      keyword.includes("#")
    ) {
      return [];
    }

    return searchProPlayers(keyword)
      .filter(
        (player) =>
          (player.riotAccounts?.length ??
            0) > 0,
      )
      .slice(0, 3);
  }, [playerName]);

  const activeRankedPlayer =
    proRankedPlayers[
      activeRankIndex
    ] ?? null;

  useEffect(() => {
    localStorage.setItem(
      RECENT_SEARCHES_STORAGE_KEY,
      JSON.stringify(recentSearches),
    );
  }, [recentSearches]);

  useEffect(() => {
    let cancelled = false;

    const loadProRankedTop10 =
      async () => {
        try {
          const ranking =
            await getProRankedTop10();

          if (cancelled) {
            return;
          }

          setProRankedPlayers(ranking);
          setActiveRankIndex(0);
          setIsRankVisible(true);
        } catch (error) {
          console.error(
            "PRO RANKED TOP 10 ERROR:",
            error,
          );
        }
      };

    void loadProRankedTop10();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (
      proRankedPlayers.length <= 1
    ) {
      return;
    }

    let fadeTimeout:
      | ReturnType<typeof setTimeout>
      | undefined;

    const rotationInterval =
      setInterval(() => {
        setIsRankVisible(false);

        fadeTimeout = setTimeout(() => {
          setActiveRankIndex(
            (previousIndex) =>
              (previousIndex + 1) %
              proRankedPlayers.length,
          );

          setIsRankVisible(true);
        }, RANK_FADE_DURATION);
      }, RANK_ROTATION_INTERVAL);

    return () => {
      clearInterval(
        rotationInterval,
      );

      if (fadeTimeout) {
        clearTimeout(fadeTimeout);
      }
    };
  }, [proRankedPlayers.length]);

  const addRecentSearch = (
    name: string,
  ) => {
    setRecentSearches(
      (previousSearches) => {
        const filteredSearches =
          previousSearches.filter(
            (item) =>
              item.toLowerCase() !==
              name.toLowerCase(),
          );

        return [
          name,
          ...filteredSearches,
        ].slice(0, 5);
      },
    );
  };

  const searchPlayer = () => {
    const trimmedPlayerName =
      playerName.trim();

    if (!trimmedPlayerName) {
      alert(
        "라이엇 ID 또는 프로 선수 닉네임을 입력해 주세요.",
      );

      return;
    }

    if (
      !trimmedPlayerName.includes("#") &&
      proPlayerResults.length > 0
    ) {
      return;
    }

    addRecentSearch(
      trimmedPlayerName,
    );

    navigate(
      `/valorant/player/${encodeURIComponent(
        trimmedPlayerName,
      )}`,
    );

    setPlayerName("");
  };

  const moveToPlayerProfile = (
    name: string,
  ) => {
    addRecentSearch(name);

    navigate(
      `/valorant/player/${encodeURIComponent(
        name,
      )}`,
    );
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden px-5 py-8 sm:px-8 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-320px] h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[140px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-360px] right-[-240px] h-[600px] w-[600px] rounded-full bg-slate-700/10 blur-[150px]"
        />

        <section className="relative mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-3xl flex-col justify-center">
          <header className="mb-5 text-center sm:mb-6">
            <h1 className="text-5xl font-black tracking-[-0.035em] sm:text-6xl md:text-7xl">
              <span className="text-white">
                Deck
              </span>

              <span className="text-red-400">
                .GG
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg font-bold leading-8 text-slate-200 sm:mt-6 sm:text-xl md:text-2xl">
              <span className="block sm:inline">
                전적 조회부터 내가 좋아하는
              </span>{" "}

              <span className="block whitespace-nowrap text-red-400 sm:inline">
                선수와 팀 정보까지.
              </span>
            </p>
          </header>

          {activeRankedPlayer && (
            <button
              type="button"
              onClick={() =>
                navigate(
                  `/valorant/pros/${activeRankedPlayer.playerSlug}`,
                )
              }
              className="mx-auto mb-5 flex h-11 w-full max-w-[620px] items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-[#080c17] px-3 transition-colors hover:border-red-400/30 sm:mb-6 sm:px-4"
            >
              <div
                className={`flex w-full min-w-0 items-center justify-center gap-1.5 whitespace-nowrap transition-all duration-200 sm:gap-2 ${
                  isRankVisible
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-1 opacity-0"
                }`}
              >
                <span className="shrink-0 text-[9px] font-black uppercase tracking-[0.14em] text-red-400 sm:text-[10px]">
                  PRO RANKED
                </span>

                <span className="shrink-0 text-xs font-black text-slate-500">
                  #{activeRankedPlayer.rank}
                </span>

                <span className="min-w-0 truncate text-sm font-black text-white">
                  {
                    activeRankedPlayer.nickname
                  }
                </span>

                {activeRankedPlayer.teamShortName && (
                  <span className="hidden shrink-0 text-[11px] font-bold text-slate-600 sm:inline">
                    {
                      activeRankedPlayer.teamShortName
                    }
                  </span>
                )}

                <span className="shrink-0 text-slate-700">
                  ·
                </span>

                <span className="shrink-0 text-xs font-bold text-slate-300 sm:text-sm">
                  {
                    activeRankedPlayer.tier
                  }
                </span>

                <span className="shrink-0 text-xs font-black text-red-300 sm:text-sm">
                  {
                    activeRankedPlayer.rr
                  }{" "}
                  RR
                </span>

                <ArrowUpRight
                  size={13}
                  className="hidden shrink-0 text-slate-600 sm:block"
                />
              </div>
            </button>
          )}

          <div className="rounded-2xl border border-white/[0.09] bg-[#080c17] p-4 sm:p-5">
            <div className="mb-4 flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-slate-950">
                <Search
                  size={17}
                  className="text-red-400"
                />
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400">
                  Player Search
                </p>

                <h2 className="mt-1 text-base font-black text-white sm:text-lg">
                  라이엇 ID 또는 프로 선수
                  검색
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative min-w-0 flex-1">
                <Search
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                />

                <input
                  id="riot-id"
                  type="text"
                  autoComplete="off"
                  spellCheck={false}
                  value={playerName}
                  onChange={(event) =>
                    setPlayerName(
                      event.target.value,
                    )
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter"
                    ) {
                      searchPlayer();
                    }
                  }}
                  placeholder="라이엇 ID 또는 선수 닉네임"
                  className="h-14 w-full rounded-xl border border-white/[0.09] bg-slate-950 px-4 pl-11 text-[15px] font-medium text-white outline-none transition-colors placeholder:text-slate-600 focus:border-red-400/50"
                />
              </div>

              <button
                type="button"
                onClick={searchPlayer}
                className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-xl bg-red-500 px-6 text-sm font-black text-white transition-colors hover:bg-red-400 sm:min-w-[132px]"
              >
                전적 검색

                <ArrowUpRight
                  size={16}
                />
              </button>
            </div>

            <div className="mt-3 flex flex-col gap-1 text-[11px] font-medium text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <span>
                예: TenZ#NA1
              </span>

              <span>
                프로 선수는 닉네임으로 검색
              </span>
            </div>

            {proPlayerResults.length > 0 && (
              <div className="mt-5 border-t border-white/[0.08] pt-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                    Pro Players
                  </p>

                  <span className="text-[11px] font-bold text-slate-600">
                    {
                      proPlayerResults.length
                    }
                    명
                  </span>
                </div>

                <div className="space-y-2">
                  {proPlayerResults.map(
                    (proPlayer) => (
                      <div
                        key={proPlayer.id}
                        className="rounded-xl border border-white/[0.08] bg-slate-950/70 p-4 transition-colors hover:border-white/[0.14]"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <button
                            type="button"
                            onClick={() =>
                              navigate(
                                `/valorant/pros/${proPlayer.slug}`,
                              )
                            }
                            className="group min-w-0 text-left"
                          >
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-md bg-red-500 px-2 py-1 text-[9px] font-black uppercase tracking-[0.1em] text-white">
                                Pro
                              </span>

                              <span className="text-base font-black text-white transition-colors group-hover:text-red-300">
                                {
                                  proPlayer.nickname
                                }
                              </span>

                              {proPlayer.team && (
                                <span className="text-[11px] font-bold text-slate-500">
                                  {
                                    proPlayer
                                      .team
                                      .shortName
                                  }
                                </span>
                              )}

                              <ArrowUpRight
                                size={14}
                                className="text-slate-600 transition-colors group-hover:text-red-300"
                              />
                            </div>

                            <p className="mt-1.5 text-[11px] font-semibold text-slate-600">
                              {
                                proPlayer.primaryRole
                              }

                              {proPlayer.realName
                                ? ` · ${proPlayer.realName}`
                                : ""}
                            </p>
                          </button>

                          <div className="flex flex-wrap gap-2">
                            {proPlayer.riotAccounts?.map(
                              (account) => {
                                const riotId = `${account.name}#${account.tag}`;

                                return (
                                  <button
                                    key={riotId.toLowerCase()}
                                    type="button"
                                    onClick={() =>
                                      moveToPlayerProfile(
                                        riotId,
                                      )
                                    }
                                    className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-bold text-slate-300 transition-colors hover:border-red-400/30 hover:text-white"
                                  >
                                    <span>
                                      {
                                        riotId
                                      }
                                    </span>

                                    <ArrowUpRight
                                      size={12}
                                      className="text-red-400"
                                    />
                                  </button>
                                );
                              },
                            )}
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>

          {valorantAccountFavorites.length >
            0 && (
            <section className="mt-6 rounded-2xl border border-white/[0.09] bg-[#080c17] p-5 transition-colors hover:border-amber-300/20 sm:p-7">
              <div className="mb-5 flex items-center gap-2">
                <Star
                  size={17}
                  className="text-amber-200"
                  fill="currentColor"
                />

                <h2 className="text-base font-black tracking-tight text-white">
                  즐겨찾기
                </h2>

                <span className="ml-auto text-xs font-bold text-slate-500">
                  {
                    valorantAccountFavorites.length
                  }
                  명
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {valorantAccountFavorites.map(
                  (favorite) => {
                    const riotId =
                      formatFavoriteRiotId(
                        favorite,
                      );

                    return (
                      <div
                        key={riotId.toLowerCase()}
                        className="inline-flex items-center overflow-hidden rounded-xl border border-amber-300/20 bg-amber-300/[0.05]"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            moveToPlayerProfile(
                              riotId,
                            )
                          }
                          className="px-4 py-2.5 text-sm font-bold text-amber-100 transition-colors hover:bg-amber-300/[0.08]"
                        >
                          {riotId}
                        </button>

                        <button
                          type="button"
                          aria-label={`${riotId} 즐겨찾기 해제`}
                          title="즐겨찾기 해제"
                          onClick={() =>
                            removeFavorite(
                              favorite,
                            )
                          }
                          className="flex h-full items-center border-l border-amber-300/15 px-3 text-amber-200/60 transition-colors hover:bg-amber-300/[0.08] hover:text-amber-100"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    );
                  },
                )}
              </div>
            </section>
          )}

          {recentSearches.length > 0 && (
            <section className="mt-6 rounded-2xl border border-white/[0.09] bg-[#080c17] p-5 transition-colors hover:border-red-400/20 sm:p-7">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-base font-black tracking-tight text-white">
                  최근 검색
                </h2>

                <button
                  type="button"
                  onClick={
                    clearRecentSearches
                  }
                  className="rounded-lg px-2 py-1 text-xs font-bold text-slate-500 transition-colors hover:text-red-400"
                >
                  전체 삭제
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                {recentSearches.map(
                  (name) => (
                    <button
                      type="button"
                      key={name}
                      onClick={() =>
                        moveToPlayerProfile(
                          name,
                        )
                      }
                      className="rounded-full border border-white/[0.09] bg-slate-950 px-4 py-2.5 text-sm font-bold text-slate-300 transition-colors hover:border-red-400/40 hover:text-white"
                    >
                      {name}
                    </button>
                  ),
                )}
              </div>
            </section>
          )}
        </section>
      </main>
    </div>
  );
}