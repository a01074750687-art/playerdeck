import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DEFAULT_RECENT_SEARCHES = ["TenZ#NA1", "aspas#BR1", "Meteor#KR1"];

export default function Valorant() {
  const navigate = useNavigate();

  const [playerName, setPlayerName] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    const saved = localStorage.getItem("valorant_recent_searches");

    if (saved) {
      return JSON.parse(saved);
    }

    return DEFAULT_RECENT_SEARCHES;
  });

  useEffect(() => {
    localStorage.setItem(
      "valorant_recent_searches",
      JSON.stringify(recentSearches)
    );
  }, [recentSearches]);

  const searchPlayer = () => {
    const name = playerName.trim();

    if (!name) {
      alert("플레이어 이름을 입력해 주세요.");
      return;
    }

    addRecentSearch(name);
    navigate(`/valorant/player/${encodeURIComponent(name)}`);
    setPlayerName("");
  };

  const addRecentSearch = (name: string) => {
    setRecentSearches((prev) => {
      const filtered = prev.filter((item) => item !== name);
      return [name, ...filtered].slice(0, 5);
    });
  };

  const moveToPlayerProfile = (name: string) => {
    addRecentSearch(name);
    navigate(`/valorant/player/${encodeURIComponent(name)}`);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("valorant_recent_searches");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <section className="max-w-4xl mx-auto">
        <p className="text-red-400 font-bold mb-3">VALORANT</p>

        <h1 className="text-5xl font-black mb-4">Valorant Tracker</h1>

        <p className="text-slate-400 text-lg mb-10">
          플레이어 이름을 검색하고 전적 정보를 확인해보세요.
        </p>

        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
          <label className="block text-sm text-slate-400 mb-3">
            Player Name
          </label>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchPlayer();
                }
              }}
              placeholder="예: TenZ#NA1"
              className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-red-400"
            />

            <button
              onClick={searchPlayer}
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold transition"
            >
              Search
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Recent Search</h2>

            {recentSearches.length > 0 && (
              <button
                onClick={clearRecentSearches}
                className="text-sm text-slate-500 hover:text-red-400 transition"
              >
                Clear
              </button>
            )}
          </div>

          {recentSearches.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {recentSearches.map((name) => (
                <button
                  key={name}
                  onClick={() => moveToPlayerProfile(name)}
                  className="bg-slate-900 border border-white/10 hover:border-red-400 text-slate-300 px-4 py-2 rounded-full transition"
                >
                  {name}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-sm">최근 검색 기록이 없습니다.</p>
          )}
        </div>
      </section>
    </main>
  );
}