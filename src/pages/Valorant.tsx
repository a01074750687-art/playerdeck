import { ArrowUpRight, Star, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/common/Header";
import { searchProPlayers } from "../data/pro";
import useFavorites, {
  type FavoriteValorantAccount,
} from "../hooks/useFavorites";

const RECENT_SEARCHES_STORAGE_KEY =
  "valorant_recent_searches";

const DEFAULT_RECENT_SEARCHES = [
  "TenZ#NA1",
  "aspas#BR1",
  "Meteor#KR1",
];

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
          (player.riotAccounts?.length ?? 0) > 0,
      )
      .slice(0, 3);
  }, [playerName]);

  const [
    recentSearches,
    setRecentSearches,
  ] = useState<string[]>(
    loadRecentSearches,
  );

  useEffect(() => {
    localStorage.setItem(
      RECENT_SEARCHES_STORAGE_KEY,
      JSON.stringify(recentSearches),
    );
  }, [recentSearches]);

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

    localStorage.removeItem(
      RECENT_SEARCHES_STORAGE_KEY,
    );
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
          <header className="mb-9 text-center sm:mb-14">
            <h1 className="text-5xl font-black tracking-[-0.06em] sm:text-6xl md:text-7xl">
              <span className="text-white">
                Deck
              </span>

              <span className="text-red-400">
                .GG
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg font-bold leading-8 text-slate-200 sm:text-xl md:text-2xl">
              <span className="block sm:inline">
              전적 조회부터 내가 좋아하는
              </span>{" "}

              <span className="block whitespace-nowrap text-red-400 sm:inline">
                선수와 팀 정보까지.
              </span>
            </p>

          </header>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:border-red-400/30 sm:p-7">
            <label
              htmlFor="riot-id"
              className="mb-3 block text-sm font-bold text-slate-300"
            >
              라이엇 ID 또는 프로 선수
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
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
                className="h-14 min-w-0 flex-1 rounded-2xl border border-white/10 bg-slate-950/90 px-5 text-base text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-red-400 focus:ring-2 focus:ring-red-500/20"
              />

              <button
                type="button"
                onClick={searchPlayer}
                className="h-14 shrink-0 rounded-2xl bg-red-500 px-8 text-sm font-black text-white shadow-lg shadow-red-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-400 active:translate-y-0 sm:min-w-40"
              >
                전적 검색
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-600">
              라이엇 ID는 게임 이름과 태그를 함께 입력해 주세요.
              예: TenZ#NA1 · 프로 선수는 닉네임으로 검색할 수 있습니다.
            </p>

            {proPlayerResults.length > 0 && (
              <div className="mt-5 border-t border-white/10 pt-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                    프로 선수 검색 결과
                  </p>

                  <span className="text-xs font-bold text-slate-600">
                    {proPlayerResults.length}명
                  </span>
                </div>

                <div className="space-y-3">
                  {proPlayerResults.map((proPlayer) => (
                    <div
                      key={proPlayer.id}
                      className="rounded-2xl border border-blue-400/15 bg-slate-950/70 p-4 transition-all duration-200 hover:border-blue-400/30"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <button
                          type="button"
                          onClick={() =>
                            navigate(
                              `/valorant/pros/${proPlayer.slug}`,
                            )
                          }
                          className="group min-w-0 text-left"
                        >
                          <div className="flex flex-wrap items-center gap-2.5">
                            <span className="inline-flex -skew-x-12 items-center bg-blue-600 px-2.5 py-1 shadow-[0_0_14px_rgba(37,99,235,0.22)]">
                              <span className="skew-x-12 text-[10px] font-black italic tracking-[-0.04em] text-white">
                                PRO
                              </span>
                            </span>

                            <span className="text-lg font-black text-white transition group-hover:text-blue-200">
                              {proPlayer.nickname}
                            </span>

                            {proPlayer.team && (
                              <span className="text-xs font-bold text-slate-500">
                                {proPlayer.team.shortName}
                              </span>
                            )}

                            <ArrowUpRight
                              size={15}
                              className="text-slate-600 transition group-hover:text-blue-300"
                            />
                          </div>

                          <p className="mt-1.5 text-xs font-semibold text-slate-500">
                            {proPlayer.primaryRole}
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
                                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm font-bold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-400/40 hover:bg-red-500/10 hover:text-white"
                                >
                                  <span>{riotId}</span>

                                  <span className="text-[10px] font-black text-red-300">
                                    전적 보기
                                  </span>
                                </button>
                              );
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <section className="mt-6 rounded-3xl border border-amber-300/10 bg-slate-900/50 p-5 backdrop-blur-xl transition-all duration-300 hover:border-amber-300/20 sm:p-7">
            <div className="mb-5 flex items-center gap-2">
              <Star
                size={18}
                className="text-amber-200"
                fill="currentColor"
              />

              <h2 className="text-lg font-black tracking-tight text-white">
                즐겨찾기
              </h2>

              <span className="ml-auto text-xs font-bold text-slate-500">
                {
                  valorantAccountFavorites.length
                }
                명
              </span>
            </div>

            {valorantAccountFavorites.length >
            0 ? (
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
                        className="inline-flex items-center overflow-hidden rounded-xl border border-amber-300/20 bg-amber-300/[0.06]"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            moveToPlayerProfile(
                              riotId,
                            )
                          }
                          className="px-4 py-2.5 text-sm font-bold text-amber-100 transition hover:bg-amber-300/10"
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
                          className="flex h-full items-center border-l border-amber-300/15 px-3 text-amber-200/60 transition hover:bg-amber-300/10 hover:text-amber-100"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    );
                  },
                )}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 bg-slate-950/40 px-5 py-8 text-center">
                <Star
                  size={22}
                  className="mx-auto text-slate-600"
                />

                <p className="mt-3 text-sm text-slate-500">
                  즐겨찾기한 라이엇 ID가
                  없습니다.
                </p>

                <p className="mt-1 text-xs text-slate-600">
                  전적 페이지에서 별을 눌러
                  자주 보는 계정을 저장해
                  보세요.
                </p>
              </div>
            )}
          </section>

          <section className="mt-6 rounded-3xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-xl transition-all duration-300 hover:border-red-400/20 sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-lg font-black tracking-tight text-white">
                최근 검색
              </h2>

              {recentSearches.length > 0 && (
                <button
                  type="button"
                  onClick={
                    clearRecentSearches
                  }
                  className="rounded-lg px-2 py-1 text-xs font-bold text-slate-500 transition-colors duration-300 hover:text-red-400"
                >
                  전체 삭제
                </button>
              )}
            </div>

            {recentSearches.length > 0 ? (
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
                      className="rounded-full border border-white/10 bg-slate-950/80 px-4 py-2.5 text-sm font-bold text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-400/60 hover:text-white"
                    >
                      {name}
                    </button>
                  ),
                )}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 bg-slate-950/40 px-5 py-8 text-center">
                <p className="text-sm text-slate-500">
                  최근 검색 기록이 없습니다.
                </p>
              </div>
            )}
          </section>
        </section>
      </main>
    </div>
  );
}