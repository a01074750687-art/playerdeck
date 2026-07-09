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

function getSelectedActLabel(
  acts: ValorantActAsset[],
  selectedAct: string
) {
  if (selectedAct === "current") {
    const activeAct = acts.find((act) => act.isActive);

    return activeAct
      ? `Current · ${activeAct.shortLabel}`
      : "Current Act";
  }

  const act = acts.find((item) => item.uuid === selectedAct);

  return act?.shortLabel ?? "Selected Act";
}

function EmptyMatchState({
  selectedMode,
  selectedActLabel,
}: {
  selectedMode: GameMode;
  selectedActLabel: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-800/70 p-6 text-center sm:p-8">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-2xl">
        !
      </div>

      <p className="text-lg font-black text-white">
        조회 가능한 전적이 없습니다.
      </p>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        선택한 조건의 최근 경기 데이터를 찾지 못했습니다.
        <br />
        현재 조건:{" "}
        <span className="font-bold text-slate-200">
          {selectedActLabel}
        </span>{" "}
        /{" "}
        <span className="font-bold text-slate-200">
          {selectedMode}
        </span>
      </p>

      <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-left sm:px-5">
        <p className="text-sm font-bold text-slate-300">
          지난 Act를 선택한 경우
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Henrik API에서 제공되는 최근 경기 범위 안에 해당 Act 경기가
          없으면 전적이 표시되지 않을 수 있습니다. Current Act 또는 All
          모드로 다시 확인해보세요.
        </p>
      </div>
    </div>
  );
}

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
  const selectedActLabel = getSelectedActLabel(acts, selectedAct);

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900 p-4 sm:p-6">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-black">Recent Matches</h2>

          <p className="mt-1 text-sm text-slate-500">
            최근 경기와 모드별 전적을 확인하세요.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:justify-end">
          <ActFilter
            acts={acts}
            selectedAct={selectedAct}
            onChangeAct={onChangeAct}
            loading={actLoading}
          />

          <p className="whitespace-nowrap text-sm text-slate-500">
            {matches.length} matches
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[180px_1fr]">
        <aside className="rounded-2xl border border-white/10 bg-slate-950/60 p-3 lg:h-fit">
          <p className="mb-3 px-2 text-xs font-bold text-slate-500">
            GAME MODE
          </p>

          <div className="flex gap-2 overflow-x-auto pb-1 pr-1 lg:block lg:max-h-[360px] lg:space-y-2 lg:overflow-y-auto lg:pb-0">
            {GAME_MODES.map((mode) => {
              const isSelected = selectedMode === mode.value;

              return (
                <button
                  key={mode.value}
                  onClick={() => onChangeMode(mode.value)}
                  className={
                    isSelected
                      ? "shrink-0 rounded-xl border border-red-400 bg-red-500 px-2.5 py-2 text-left text-xs font-bold text-white shadow-lg shadow-red-500/20 transition lg:w-full lg:px-3 lg:text-sm"
                      : "shrink-0 rounded-xl border border-white/10 bg-slate-800/70 px-2.5 py-2 text-left text-xs font-bold text-slate-400 transition hover:border-red-400 hover:bg-slate-800 hover:text-white lg:w-full lg:px-3 lg:text-sm"
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
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-800 transition duration-300 hover:border-red-400/70 hover:-translate-y-1"
                >
                  <div className="relative h-36 overflow-hidden sm:h-40">
                    <MapThumbnail mapName={match.map} />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />

                    <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                      <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-slate-300 backdrop-blur sm:text-xs">
                        {match.mode} • {formatTimeAgo(match.playedAt)}
                      </span>
                    </div>

                    <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
                      <div
                        className={
                          match.result === "Win"
                            ? "rounded-2xl border border-emerald-400/40 bg-emerald-500/20 px-3 py-2 text-right text-xs font-black text-emerald-300 backdrop-blur sm:px-4 sm:text-sm"
                            : "rounded-2xl border border-red-400/40 bg-red-500/20 px-3 py-2 text-right text-xs font-black text-red-300 backdrop-blur sm:px-4 sm:text-sm"
                        }
                      >
                        <p>{match.result === "Win" ? "VICTORY" : "DEFEAT"}</p>

                        <p className="mt-1 text-[11px] opacity-80 sm:text-xs">
                          {match.score.ally} : {match.score.enemy}
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-300 sm:text-sm">
                        Map
                      </p>

                      <h3 className="text-2xl font-black leading-tight sm:text-3xl">
                        {match.map}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 rounded-2xl border border-white/10 bg-slate-950/80 p-2">
                          <AgentIcon agentName={match.agent} size="lg" />
                        </div>

                        <div className="min-w-0">
                          <h4 className="truncate text-2xl font-black">
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

                      <div className="shrink-0 sm:text-right">
                        <PerformanceBadge match={match} />
                      </div>
                    </div>

                    {isOpen && <MatchDetailPanel match={match} />}

                    <div className="mt-5 h-px bg-white/10" />

                    <div className="mt-3 flex items-center justify-end text-sm">
                      <button
                        onClick={() => setOpenedIndex(isOpen ? null : index)}
                        className="rounded-xl px-3 py-2 font-bold text-red-400 transition hover:bg-red-500/10 hover:text-red-300 group-hover:translate-x-1"
                      >
                        {isOpen ? "상세 닫기 ↑" : "상세 보기 →"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <EmptyMatchState
              selectedMode={selectedMode}
              selectedActLabel={selectedActLabel}
            />
          )}
        </div>
      </div>
    </section>
  );
}