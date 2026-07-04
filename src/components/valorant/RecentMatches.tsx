import { useState } from "react";

import ActFilter from "./ActFilter";
import AgentIcon from "./AgentIcon";
import AgentRoleBadge from "./AgentRoleBadge";
import MapThumbnail from "./MapThumbnail";
import MatchDetailPanel from "./MatchDetailPanel";
import PerformanceBadge from "./PerformanceBadge";

import { GAME_MODES, type GameMode } from "../../constants/valorantModes";
import type { RecentMatch } from "../../types/valorant";
import type { ValorantActAsset } from "../../types/valorantAssets";
import { formatTimeAgo } from "../../utils/formatTimeAgo";

type RecentMatchesProps = {
  matches: RecentMatch[];
  selectedMode: GameMode;
  onChangeMode: (mode: GameMode) => void;

  acts: ValorantActAsset[];
  selectedAct: string;
  onChangeAct: (actId: string) => void;
  actLoading?: boolean;
};

export default function RecentMatches({
  matches,
  selectedMode,
  onChangeMode,
  acts,
  selectedAct,
  onChangeAct,
  actLoading = false,
}: RecentMatchesProps) {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  return (
    <section className="bg-slate-900 border border-white/10 rounded-3xl p-6">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <h2 className="text-xl font-black">Recent Matches</h2>
          <p className="text-sm text-slate-500 mt-1">
            최근 경기와 모드별 전적을 확인하세요.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3">
          <ActFilter
            acts={acts}
            selectedAct={selectedAct}
            onChangeAct={onChangeAct}
            loading={actLoading}
          />

          <p className="text-sm text-slate-500 whitespace-nowrap">
            {matches.length} matches
          </p>
        </div>
      </div>

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
                      ? "w-full text-left bg-red-500 text-white border border-red-400 px-3 py-2 rounded-xl text-sm font-bold transition shadow-lg shadow-red-500/20"
                      : "w-full text-left bg-slate-800/70 text-slate-400 border border-white/10 hover:border-red-400 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-xl text-sm font-bold transition"
                  }
                >
                  {mode.label}
                </button>
              );
            })}
          </div>
        </aside>

        <div className="space-y-5">
          {matches.length > 0 ? (
            matches.map((match, index) => {
              const isOpen = openedIndex === index;

              return (
                <article
                  key={`${match.agent}-${match.map}-${match.playedAt}-${index}`}
                  className="group overflow-hidden rounded-3xl bg-slate-800 border border-white/10 hover:border-red-400/70 hover:-translate-y-1 transition duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <MapThumbnail mapName={match.map} />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />

                    <div className="absolute top-4 left-4">
                      <span className="bg-slate-950/70 border border-white/10 backdrop-blur px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-slate-300">
                        {match.mode} • {formatTimeAgo(match.playedAt)}
                      </span>
                    </div>

                    <div className="absolute right-4 top-4">
                      <div
                        className={
                          match.result === "Win"
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 px-4 py-2 rounded-2xl text-sm font-black backdrop-blur text-right"
                            : "bg-red-500/20 text-red-300 border border-red-400/40 px-4 py-2 rounded-2xl text-sm font-black backdrop-blur text-right"
                        }
                      >
                        <p>{match.result === "Win" ? "VICTORY" : "DEFEAT"}</p>
                        <p className="text-xs mt-1 opacity-80">
                          {match.score.ally} : {match.score.enemy}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-4 right-4 bottom-4">
                      <p className="text-sm text-slate-300 font-bold uppercase tracking-wider">
                        Map
                      </p>
                      <h3 className="text-3xl font-black leading-tight">
                        {match.map}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl bg-slate-950/80 border border-white/10 p-2 shrink-0">
                          <AgentIcon agentName={match.agent} size="lg" />
                        </div>

                        <div>
                          <h4 className="text-2xl font-black">
                            {match.agent}
                          </h4>

                          <div className="mt-2">
                            <AgentRoleBadge agentName={match.agent} />
                          </div>

                          <div className="mt-4">
                            <p className="text-2xl font-black tracking-tight">
                              {match.kills} / {match.deaths} / {match.assists}
                            </p>

                            <p className="mt-1 text-sm text-slate-400">
                              ACS{" "}
                              <span className="font-black text-white">
                                {match.acs}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0">
                        <PerformanceBadge match={match} />
                      </div>
                    </div>

                    {isOpen && <MatchDetailPanel match={match} />}

                    <div className="mt-5 h-px bg-white/10" />

                    <div className="mt-4 flex items-center justify-end text-sm">
                      <button
                        onClick={() => setOpenedIndex(isOpen ? null : index)}
                        className="text-red-400 hover:text-red-300 font-bold transition group-hover:translate-x-1"
                      >
                        {isOpen ? "Close Match ↑" : "View Match →"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="bg-slate-800 rounded-2xl p-8 text-center">
              <p className="text-slate-400 font-bold">
                해당 조건의 최근 경기가 없습니다.
              </p>
              <p className="text-slate-500 text-sm mt-2">
                다른 모드나 Act를 선택해보세요.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}