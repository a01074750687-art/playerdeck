import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/common/Header";

const RECENT_SEARCHES_STORAGE_KEY = "valorant_recent_searches";

const DEFAULT_RECENT_SEARCHES = ["TenZ#NA1", "aspas#BR1", "Meteor#KR1"];

function loadRecentSearches(): string[] {
  try {
    const saved = localStorage.getItem(RECENT_SEARCHES_STORAGE_KEY);

    if (!saved) {
      return DEFAULT_RECENT_SEARCHES;
    }

    const parsed: unknown = JSON.parse(saved);

    if (
      Array.isArray(parsed) &&
      parsed.every((item) => typeof item === "string")
    ) {
      return parsed;
    }

    return DEFAULT_RECENT_SEARCHES;
  } catch {
    return DEFAULT_RECENT_SEARCHES;
  }
}

export default function Valorant() {
  const navigate = useNavigate();

  const [playerName, setPlayerName] = useState("");
  const [recentSearches, setRecentSearches] =
    useState<string[]>(loadRecentSearches);

  useEffect(() => {
    localStorage.setItem(
      RECENT_SEARCHES_STORAGE_KEY,
      JSON.stringify(recentSearches)
    );
  }, [recentSearches]);

  const addRecentSearch = (name: string) => {
    setRecentSearches((previousSearches) => {
      const filteredSearches = previousSearches.filter(
        (item) => item.toLowerCase() !== name.toLowerCase()
      );

      return [name, ...filteredSearches].slice(0, 5);
    });
  };

  const searchPlayer = () => {
    const trimmedPlayerName = playerName.trim();

    if (!trimmedPlayerName) {
      alert("라이엇 ID를 입력해 주세요.");
      return;
    }

    addRecentSearch(trimmedPlayerName);

    navigate(
      `/valorant/player/${encodeURIComponent(trimmedPlayerName)}`
    );

    setPlayerName("");
  };

  const moveToPlayerProfile = (name: string) => {
    addRecentSearch(name);
    navigate(`/valorant/player/${encodeURIComponent(name)}`);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem(RECENT_SEARCHES_STORAGE_KEY);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden px-5 py-12 sm:px-8 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-320px] h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[140px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-360px] right-[-240px] h-[600px] w-[600px] rounded-full bg-slate-700/10 blur-[150px]"
        />

        <section className="relative mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-3xl flex-col justify-center">
          <header className="mb-12 text-center sm:mb-14">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-red-400 sm:text-sm">
              Competitive Stats Platform
            </p>

            <h1 className="text-5xl font-black tracking-[-0.06em] sm:text-6xl md:text-7xl">
              <span className="text-white">Deck</span>
              <span className="text-red-400">.GG</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              라이엇 ID를 검색하고
              <br className="sm:hidden" /> 상세한 전적을 확인해보세요.
            </p>
          </header>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:border-red-400/30 sm:p-7">
            <label
              htmlFor="riot-id"
              className="mb-3 block text-sm font-bold text-slate-300"
            >
              라이엇 ID
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="riot-id"
                type="text"
                autoComplete="off"
                spellCheck={false}
                value={playerName}
                onChange={(event) => setPlayerName(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    searchPlayer();
                  }
                }}
                placeholder="라이엇 ID를 입력하세요"
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
              게임 이름과 태그를 함께 입력해 주세요. 예: TenZ#NA1
            </p>
          </div>

          <section className="mt-6 rounded-3xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-xl transition-all duration-300 hover:border-red-400/20 sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-lg font-black tracking-tight text-white">
                최근 검색
              </h2>

              {recentSearches.length > 0 && (
                <button
                  type="button"
                  onClick={clearRecentSearches}
                  className="rounded-lg px-2 py-1 text-xs font-bold text-slate-500 transition-colors duration-300 hover:text-red-400"
                >
                  전체 삭제
                </button>
              )}
            </div>

            {recentSearches.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {recentSearches.map((name) => (
                  <button
                    type="button"
                    key={name}
                    onClick={() => moveToPlayerProfile(name)}
                    className="rounded-full border border-white/10 bg-slate-950/80 px-4 py-2.5 text-sm font-bold text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-400/60 hover:text-white"
                  >
                    {name}
                  </button>
                ))}
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