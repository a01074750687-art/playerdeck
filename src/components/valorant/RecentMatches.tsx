import AgentIcon from "./AgentIcon";
import { GAME_MODES, type GameMode } from "../../constants/valorantModes";
import type { RecentMatch } from "../../types/valorant";

type RecentMatchesProps = {
  matches: RecentMatch[];
  selectedMode: GameMode;
  onChangeMode: (mode: GameMode) => void;
};

export default function RecentMatches({
  matches,
  selectedMode,
  onChangeMode,
}: RecentMatchesProps) {
  return (
    <section className="bg-slate-900 border border-white/10 rounded-3xl p-6">
      <h2 className="text-xl font-bold mb-5">Recent Matches</h2>

      <div className="grid lg:grid-cols-[180px_1fr] gap-5">
        <aside className="bg-slate-950/60 border border-white/10 rounded-2xl p-3 h-fit">
          <p className="text-xs text-slate-500 font-bold mb-3 px-2">
            GAME MODE
          </p>

          <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
            {GAME_MODES.map((mode) => {
              const isSelected = selectedMode === mode.value;

              return (
                <button
                  key={mode.value}
                  onClick={() => onChangeMode(mode.value)}
                  className={
                    isSelected
                      ? "w-full text-left bg-red-500 text-white border border-red-400 px-3 py-2 rounded-xl text-sm font-bold transition"
                      : "w-full text-left bg-slate-800/70 text-slate-400 border border-white/10 hover:border-red-400 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-xl text-sm font-bold transition"
                  }
                >
                  {mode.label}
                </button>
              );
            })}
          </div>
        </aside>

        <div className="space-y-3">
          {matches.length > 0 ? (
            matches.map((match, index) => (
              <div
                key={`${match.agent}-${match.map}-${index}`}
                className="bg-slate-800 rounded-2xl px-4 py-4 hover:bg-slate-700/70 transition"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <AgentIcon agentName={match.agent} />

                    <div>
                      <p className="font-bold">{match.agent}</p>
                      <p className="text-sm text-slate-400">{match.map}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span
                      className={
                        match.result === "Win"
                          ? "text-emerald-400 font-bold"
                          : "text-red-400 font-bold"
                      }
                    >
                      {match.result}
                    </span>

                    <p className="text-xs text-slate-500 mt-1">
                      {match.mode}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 text-sm text-slate-300 mt-3">
                  <p>K {match.kills}</p>
                  <p>D {match.deaths}</p>
                  <p>A {match.assists}</p>
                  <p>ACS {match.acs}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-slate-800 rounded-2xl p-8 text-center">
              <p className="text-slate-400 font-bold">
                해당 모드의 최근 경기가 없습니다.
              </p>
              <p className="text-slate-500 text-sm mt-2">
                다른 모드를 선택해보세요.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}