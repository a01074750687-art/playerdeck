import { useState } from "react";

import ActFilter from "./ActFilter";
import AgentIcon from "./AgentIcon";
import AgentRoleBadge from "./AgentRoleBadge";
import MapThumbnail from "./MapThumbnail";
import MatchDetailPanel from "./MatchDetailPanel";
import PerformanceBadge from "./PerformanceBadge";

import {
  GAME_MODES,
  type GameMode,
} from "../../constants/valorantModes";
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

type MatchStatItemProps = {
  label: string;
  value: string | number;
  description?: string;
  highlight?: "default" | "good" | "great" | "danger";
};

function getSelectedActLabel(
  acts: ValorantActAsset[],
  selectedAct: string
) {
  if (selectedAct === "current") {
    const activeAct = acts.find(
      (act) => act.isActive
    );

    return activeAct
      ? `Current · ${activeAct.shortLabel}`
      : "Current Act";
  }

  const act = acts.find(
    (item) => item.uuid === selectedAct
  );

  return act?.shortLabel ?? "Selected Act";
}

function getKdRatio(
  kills: number,
  deaths: number
) {
  if (deaths === 0) {
    return kills.toFixed(2);
  }

  return (kills / deaths).toFixed(2);
}

function getKdaRatio(
  kills: number,
  deaths: number,
  assists: number
) {
  if (deaths === 0) {
    return (kills + assists).toFixed(2);
  }

  return (
    (kills + assists) /
    deaths
  ).toFixed(2);
}

function getKillParticipation(
  kills: number,
  assists: number,
  allyScore: number
) {
  const estimatedTeamKills = Math.max(
    allyScore * 5,
    1
  );

  const participation =
    ((kills + assists) /
      estimatedTeamKills) *
    100;

  return Math.min(
    Math.round(participation),
    100
  );
}

function getPerformanceText(
  match: RecentMatch
) {
  const kd =
    match.deaths === 0
      ? match.kills
      : match.kills / match.deaths;

  if (
    match.isMatchMvp ||
    kd >= 1.6 ||
    match.acs >= 300
  ) {
    return "압도적인 경기";
  }

  if (
    match.isTeamMvp ||
    kd >= 1.2 ||
    match.acs >= 240
  ) {
    return "좋은 활약";
  }

  if (kd >= 0.9) {
    return "안정적인 경기";
  }

  return "아쉬운 경기";
}

function getStatHighlight(
  value: number,
  thresholds: {
    great: number;
    good: number;
    danger?: number;
  }
): MatchStatItemProps["highlight"] {
  if (value >= thresholds.great) {
    return "great";
  }

  if (value >= thresholds.good) {
    return "good";
  }

  if (
    thresholds.danger !== undefined &&
    value < thresholds.danger
  ) {
    return "danger";
  }

  return "default";
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
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-2xl font-black text-red-300">
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
          Henrik API에서 제공되는 최근 경기 범위 안에 해당
          Act 경기가 없으면 전적이 표시되지 않을 수 있습니다.
          Current Act 또는 All 모드로 다시 확인해보세요.
        </p>
      </div>
    </div>
  );
}

function MatchStatItem({
  label,
  value,
  description,
  highlight = "default",
}: MatchStatItemProps) {
  const valueClassName = {
    default: "text-white",
    good: "text-sky-300",
    great: "text-emerald-300",
    danger: "text-red-300",
  }[highlight];

  const borderClassName = {
    default:
      "border-white/5 bg-slate-950/45",
    good:
      "border-sky-400/15 bg-sky-500/5",
    great:
      "border-emerald-400/15 bg-emerald-500/5",
    danger:
      "border-red-400/15 bg-red-500/5",
  }[highlight];

  return (
    <div
      className={`rounded-2xl border px-3 py-3 ${borderClassName}`}
    >
      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>

      <p
        className={`mt-1 text-xl font-black tracking-tight sm:text-2xl ${valueClassName}`}
      >
        {value}
      </p>

      {description && (
        <p className="mt-1 truncate text-[10px] font-medium text-slate-600">
          {description}
        </p>
      )}
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
  const [openedIndex, setOpenedIndex] =
    useState<number | null>(null);

  const selectedActLabel =
    getSelectedActLabel(
      acts,
      selectedAct
    );

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900 p-4 sm:p-6">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-black text-white">
            Recent Matches
          </h2>

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

          <p className="whitespace-nowrap rounded-full border border-white/10 bg-slate-950/50 px-3 py-1.5 text-xs font-bold text-slate-400">
            {matches.length} matches
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[180px_1fr]">
        <aside className="rounded-2xl border border-white/10 bg-slate-950/60 p-3 lg:h-fit">
          <p className="mb-3 px-2 text-xs font-bold tracking-wider text-slate-500">
            GAME MODE
          </p>

          <div className="flex gap-2 overflow-x-auto pb-1 pr-1 lg:block lg:max-h-[360px] lg:space-y-2 lg:overflow-y-auto lg:pb-0">
            {GAME_MODES.map((mode) => {
              const isSelected =
                selectedMode === mode.value;

              return (
                <button
                  key={mode.value}
                  type="button"
                  onClick={() =>
                    onChangeMode(
                      mode.value
                    )
                  }
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
            matches.map(
              (match, index) => {
                const isOpen =
                  openedIndex === index;

                const kdRatio =
                  Number(
                    getKdRatio(
                      match.kills,
                      match.deaths
                    )
                  );

                const kdaRatio =
                  Number(
                    getKdaRatio(
                      match.kills,
                      match.deaths,
                      match.assists
                    )
                  );

                const killParticipation =
                  getKillParticipation(
                    match.kills,
                    match.assists,
                    match.score.ally
                  );

                const scoreDifference =
                  Math.abs(
                    match.score.ally -
                      match.score.enemy
                  );

                const isWin =
                  match.result === "Win";

                return (
                  <article
                    key={`${match.agent}-${match.map}-${match.playedAt}-${index}`}
                    className={
                      isWin
                        ? "group overflow-hidden rounded-3xl border border-emerald-400/20 bg-slate-800 shadow-lg shadow-emerald-950/10 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-950/30"
                        : "group overflow-hidden rounded-3xl border border-red-400/15 bg-slate-800 shadow-lg shadow-red-950/10 transition duration-300 hover:-translate-y-1 hover:border-red-400/45 hover:shadow-xl hover:shadow-red-950/30"
                    }
                  >
                    <div className="relative h-40 overflow-hidden sm:h-44">
                      <div className="h-full w-full transition duration-700 group-hover:scale-105">
                        <MapThumbnail
                          mapName={
                            match.map
                          }
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/10" />

                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                      <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/75 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-300 backdrop-blur sm:text-xs">
                          <span
                            className={
                              isWin
                                ? "h-1.5 w-1.5 rounded-full bg-emerald-400"
                                : "h-1.5 w-1.5 rounded-full bg-red-400"
                            }
                          />

                          {match.mode}

                          <span className="text-slate-600">
                            •
                          </span>

                          {formatTimeAgo(
                            match.playedAt
                          )}
                        </span>
                      </div>

                      <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
                        <div
                          className={
                            isWin
                              ? "min-w-[92px] rounded-2xl border border-emerald-400/40 bg-emerald-500/20 px-3 py-2 text-right text-emerald-300 backdrop-blur sm:min-w-[110px] sm:px-4"
                              : "min-w-[92px] rounded-2xl border border-red-400/40 bg-red-500/20 px-3 py-2 text-right text-red-300 backdrop-blur sm:min-w-[110px] sm:px-4"
                          }
                        >
                          <p className="text-[10px] font-black tracking-[0.18em] sm:text-xs">
                            {isWin
                              ? "VICTORY"
                              : "DEFEAT"}
                          </p>

                          <p className="mt-1 text-lg font-black leading-none text-white sm:text-xl">
                            {
                              match.score
                                .ally
                            }{" "}
                            :{" "}
                            {
                              match.score
                                .enemy
                            }
                          </p>
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                            Map
                          </p>

                          <h3 className="truncate text-2xl font-black leading-tight text-white sm:text-3xl">
                            {match.map}
                          </h3>
                        </div>

                        <div className="hidden shrink-0 text-right sm:block">
                          <p className="text-xs font-black text-slate-300">
                            {
                              getPerformanceText(
                                match
                              )
                            }
                          </p>

                          <p className="mt-1 text-[10px] text-slate-500">
                            점수 차이{" "}
                            {
                              scoreDifference
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5">
                      <div className="grid gap-5 xl:grid-cols-[minmax(220px,0.85fr)_minmax(360px,1.25fr)_auto] xl:items-start">
                        <div className="flex min-w-0 items-start gap-4">
                          <div className="shrink-0 rounded-2xl border border-white/10 bg-slate-950/80 p-2 shadow-inner shadow-black/30">
                            <AgentIcon
                              agentName={
                                match.agent
                              }
                              size="lg"
                            />
                          </div>

                          <div className="min-w-0">
                            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                              Agent
                            </p>

                            <h4 className="mt-1 truncate text-2xl font-black text-white">
                              {
                                match.agent
                              }
                            </h4>

                            <div className="mt-2">
                              <AgentRoleBadge
                                agentName={
                                  match.agent
                                }
                              />
                            </div>

                            <div className="mt-4">
                              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                                K / D / A
                              </p>

                              <p className="mt-1 whitespace-nowrap text-xl font-black tracking-tight text-white sm:text-2xl">
                                {
                                  match.kills
                                }{" "}
                                /{" "}
                                {
                                  match.deaths
                                }{" "}
                                /{" "}
                                {
                                  match.assists
                                }
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                          <MatchStatItem
                            label="K/D"
                            value={kdRatio.toFixed(
                              2
                            )}
                            description="킬 / 데스"
                            highlight={getStatHighlight(
                              kdRatio,
                              {
                                great: 1.5,
                                good: 1.1,
                                danger: 0.8,
                              }
                            )}
                          />

                          <MatchStatItem
                            label="KDA"
                            value={kdaRatio.toFixed(
                              2
                            )}
                            description="킬 + 어시스트"
                            highlight={getStatHighlight(
                              kdaRatio,
                              {
                                great: 2.2,
                                good: 1.5,
                                danger: 1,
                              }
                            )}
                          />

                          <MatchStatItem
                            label="ACS"
                            value={match.acs}
                            description="평균 전투 점수"
                            highlight={getStatHighlight(
                              match.acs,
                              {
                                great: 280,
                                good: 220,
                                danger: 150,
                              }
                            )}
                          />

                          <MatchStatItem
                            label="KP"
                            value={`${killParticipation}%`}
                            description="추정 킬 관여"
                            highlight={getStatHighlight(
                              killParticipation,
                              {
                                great: 60,
                                good: 40,
                                danger: 25,
                              }
                            )}
                          />
                        </div>

                        <div className="flex min-w-[120px] justify-start xl:justify-end">
                          <PerformanceBadge
                            match={match}
                          />
                        </div>
                      </div>

                      <div className="mt-5 rounded-2xl border border-white/5 bg-slate-950/35 px-4 py-3 sm:flex sm:items-center sm:justify-between">
                        <div>
                          <p className="text-xs font-black text-slate-300">
                            {
                              getPerformanceText(
                                match
                              )
                            }
                          </p>

                          <p className="mt-1 text-[11px] text-slate-500">
                            {isWin
                              ? `${scoreDifference}라운드 차이로 승리했습니다.`
                              : `${scoreDifference}라운드 차이로 패배했습니다.`}
                          </p>
                        </div>

                        <div className="mt-3 flex items-center justify-end sm:mt-0">
                          <button
                            type="button"
                            onClick={() =>
                              setOpenedIndex(
                                isOpen
                                  ? null
                                  : index
                              )
                            }
                            className={
                              isOpen
                                ? "inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-black text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                                : "inline-flex items-center justify-center rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-2.5 text-sm font-black text-red-300 transition hover:border-red-400/60 hover:bg-red-500/20 hover:text-white"
                            }
                          >
                            {isOpen
                              ? "상세 닫기 ↑"
                              : "상세 보기 →"}
                          </button>
                        </div>
                      </div>

                      {isOpen && (
                        <MatchDetailPanel
                          match={match}
                        />
                      )}
                    </div>
                  </article>
                );
              }
            )
          ) : (
            <EmptyMatchState
              selectedMode={
                selectedMode
              }
              selectedActLabel={
                selectedActLabel
              }
            />
          )}
        </div>
      </div>
    </section>
  );
}