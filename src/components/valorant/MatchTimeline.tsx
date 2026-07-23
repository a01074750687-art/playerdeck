import { Fragment } from "react";

import type { RoundResult } from "../../types/valorant";
import RoundEventIcon from "./RoundEventIcon";

type MatchTimelineProps = {
  rounds: RoundResult[];
};

type FixedTeam = "blue" | "red" | "unknown";
type RoundSide = "defense" | "attack" | "unknown";

function normalizeValue(value?: string) {
  return value?.trim().toLowerCase() ?? "";
}

function getFixedTeam(winningTeam?: string): FixedTeam {
  const normalizedTeam = normalizeValue(winningTeam);

  if (normalizedTeam.includes("blue")) {
    return "blue";
  }

  if (normalizedTeam.includes("red")) {
    return "red";
  }

  return "unknown";
}

/**
 * Henrik API의 winningTeam은 Blue/Red 고정 팀을 반환한다.
 *
 * 1~12라운드
 * Blue: 수비
 * Red: 공격
 *
 * 13~24라운드
 * Blue: 공격
 * Red: 수비
 *
 * 25라운드 이후
 * 라운드마다 진영이 교대된다.
 */
function getRoundSide(
  winningTeam: string | undefined,
  roundNumber: number,
): RoundSide {
  const fixedTeam = getFixedTeam(winningTeam);

  if (fixedTeam === "unknown") {
    return "unknown";
  }

  if (roundNumber <= 12) {
    return fixedTeam === "blue" ? "defense" : "attack";
  }

  if (roundNumber <= 24) {
    return fixedTeam === "blue" ? "attack" : "defense";
  }

  const isFirstOvertimeSide = (roundNumber - 25) % 2 === 0;

  if (isFirstOvertimeSide) {
    return fixedTeam === "blue" ? "defense" : "attack";
  }

  return fixedTeam === "blue" ? "attack" : "defense";
}

function getSideLabel(side: RoundSide) {
  switch (side) {
    case "defense":
      return "수비 승리";

    case "attack":
      return "공격 승리";

    default:
      return "라운드 종료";
  }
}

function getSideShortLabel(side: RoundSide) {
  switch (side) {
    case "defense":
      return "DEF";

    case "attack":
      return "ATK";

    default:
      return "END";
  }
}

function getSideCardClass(side: RoundSide) {
  switch (side) {
    case "defense":
      return [
        "border-cyan-400/25",
        "bg-gradient-to-b from-cyan-400/10 via-slate-950/55 to-slate-950/80",
        "hover:border-cyan-300/60",
        "hover:shadow-[0_14px_34px_rgba(8,145,178,0.18)]",
      ].join(" ");

    case "attack":
      return [
        "border-rose-400/25",
        "bg-gradient-to-b from-rose-400/10 via-slate-950/55 to-slate-950/80",
        "hover:border-rose-300/60",
        "hover:shadow-[0_14px_34px_rgba(225,29,72,0.18)]",
      ].join(" ");

    default:
      return [
        "border-slate-700/80",
        "bg-gradient-to-b from-slate-800/70 to-slate-950/80",
        "hover:border-slate-500",
        "hover:shadow-[0_14px_34px_rgba(2,6,23,0.35)]",
      ].join(" ");
  }
}

function getRoundNumberClass(side: RoundSide) {
  switch (side) {
    case "defense":
      return "border-cyan-400/30 bg-cyan-400/10 text-cyan-200";

    case "attack":
      return "border-rose-400/30 bg-rose-400/10 text-rose-200";

    default:
      return "border-slate-600 bg-slate-800 text-slate-300";
  }
}

function getSideBadgeClass(side: RoundSide) {
  switch (side) {
    case "defense":
      return [
        "border-cyan-400/30",
        "bg-cyan-400/10",
        "text-cyan-200",
        "shadow-[0_0_12px_rgba(34,211,238,0.08)]",
      ].join(" ");

    case "attack":
      return [
        "border-rose-400/30",
        "bg-rose-400/10",
        "text-rose-200",
        "shadow-[0_0_12px_rgba(251,113,133,0.08)]",
      ].join(" ");

    default:
      return "border-slate-600 bg-slate-800 text-slate-300";
  }
}

function getWinnerDotClass(side: RoundSide) {
  switch (side) {
    case "defense":
      return "bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.7)]";

    case "attack":
      return "bg-rose-300 shadow-[0_0_10px_rgba(253,164,175,0.7)]";

    default:
      return "bg-slate-500";
  }
}

function getEndTypeLabel(round: RoundResult) {
  const normalizedEndType = normalizeValue(round.endType);

  if (
    round.bombDefused ||
    normalizedEndType.includes("defus")
  ) {
    return "스파이크 해제";
  }

  if (
    normalizedEndType.includes("detonat") ||
    normalizedEndType.includes("explode")
  ) {
    return "스파이크 폭발";
  }

  if (
    normalizedEndType.includes("timer") ||
    normalizedEndType.includes("time expired") ||
    normalizedEndType.includes("timeout")
  ) {
    return "시간 종료";
  }

  if (
    normalizedEndType.includes("eliminat") ||
    normalizedEndType.includes("kill")
  ) {
    return "상대 팀 전멸";
  }

  if (round.bombPlanted) {
    return "스파이크 설치";
  }

  return round.endType || "라운드 종료";
}

function getFixedTeamLabel(team: FixedTeam) {
  switch (team) {
    case "blue":
      return "Blue Team";

    case "red":
      return "Red Team";

    default:
      return "Unknown";
  }
}

function TimelineDivider({
  label,
  description,
  symbol,
}: {
  label: string;
  description: string;
  symbol: string;
}) {
  return (
    <div className="flex min-h-32 w-16 shrink-0 items-stretch justify-center">
      <div className="flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-amber-300/25 bg-gradient-to-b from-amber-300/10 to-slate-950/50 px-2">
        <span className="text-base font-black text-amber-200/80">
          {symbol}
        </span>

        <span className="mt-1 text-center text-[9px] font-black uppercase tracking-[0.14em] text-amber-200">
          {label}
        </span>

        <span className="mt-1 text-center text-[8px] font-semibold leading-3 text-amber-200/45">
          {description}
        </span>
      </div>
    </div>
  );
}

export default function MatchTimeline({
  rounds,
}: MatchTimelineProps) {
  if (!rounds || rounds.length === 0) {
    return (
      <section className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50">
        <div className="border-b border-white/10 px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
            Round Analysis
          </p>

          <h2 className="mt-1 text-xl font-black text-white">
            Round Timeline
          </h2>
        </div>

        <div className="flex min-h-36 items-center justify-center px-5 py-8 text-center">
          <div>
            <p className="text-sm font-semibold text-slate-300">
              라운드 데이터가 없습니다.
            </p>

            <p className="mt-1 text-xs text-slate-500">
              이 매치에서는 라운드별 결과를 불러오지 못했습니다.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const defenseWins = rounds.filter((round, index) => {
    return (
      getRoundSide(round.winningTeam, index + 1) === "defense"
    );
  }).length;

  const attackWins = rounds.filter((round, index) => {
    return (
      getRoundSide(round.winningTeam, index + 1) === "attack"
    );
  }).length;

  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 shadow-2xl shadow-black/10">
      <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
            Round Analysis
          </p>

          <h2 className="mt-1 text-xl font-black text-white">
            Round Timeline
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            라운드별 승리 진영과 종료 방식을 확인할 수 있습니다.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />

            <span className="text-xs font-semibold text-cyan-100">
              수비
            </span>

            <strong className="text-sm font-black text-white">
              {defenseWins}
            </strong>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-rose-400/20 bg-rose-400/10 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-rose-300" />

            <span className="text-xs font-semibold text-rose-100">
              공격
            </span>

            <strong className="text-sm font-black text-white">
              {attackWins}
            </strong>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-visible">
        <div className="flex min-w-max items-stretch gap-2.5 px-5 py-5">
          {rounds.map((round, index) => {
            const roundNumber = index + 1;
            const fixedTeam = getFixedTeam(round.winningTeam);
            const side = getRoundSide(
              round.winningTeam,
              roundNumber,
            );
            const sideLabel = getSideLabel(side);
            const sideShortLabel = getSideShortLabel(side);
            const endTypeLabel = getEndTypeLabel(round);

            return (
              <Fragment
                key={`${roundNumber}-${round.endType}-${round.winningTeam}`}
              >
                {roundNumber === 13 && (
                  <TimelineDivider
                    label="Halftime"
                    description="진영 교대"
                    symbol="⇄"
                  />
                )}

                {roundNumber === 25 && (
                  <TimelineDivider
                    label="Overtime"
                    description="연장전"
                    symbol="+"
                  />
                )}

                <article
                  className={[
                    "group relative flex min-h-32 w-24 shrink-0 flex-col rounded-2xl border p-2.5",
                    "transition duration-200 ease-out",
                    "hover:-translate-y-1 hover:scale-[1.025]",
                    getSideCardClass(side),
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={[
                        "inline-flex h-6 min-w-7 items-center justify-center rounded-lg border px-1.5",
                        "text-[9px] font-black",
                        getRoundNumberClass(side),
                      ].join(" ")}
                    >
                      R{roundNumber}
                    </span>

                    <span
                      className={[
                        "h-2 w-2 shrink-0 rounded-full",
                        getWinnerDotClass(side),
                      ].join(" ")}
                    />
                  </div>

                  <div className="flex flex-1 items-center justify-center py-2">
                    <RoundEventIcon
                      endType={round.endType}
                      bombPlanted={round.bombPlanted}
                      bombDefused={round.bombDefused}
                      size="md"
                    />
                  </div>

                  <div className="border-t border-white/10 pt-2">
                    <span
                      className={[
                        "flex w-full items-center justify-center rounded-lg border px-2 py-1",
                        "text-[9px] font-black tracking-[0.12em]",
                        getSideBadgeClass(side),
                      ].join(" ")}
                    >
                      {sideShortLabel}
                    </span>
                  </div>

                  <div
                    className={[
                      "pointer-events-none absolute bottom-full left-1/2 z-50 mb-3",
                      "w-56 -translate-x-1/2 rounded-2xl",
                      "border border-white/10 bg-slate-950/95 p-4 shadow-2xl",
                      "opacity-0 translate-y-1 transition duration-150",
                      "group-hover:translate-y-0 group-hover:opacity-100",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3">
                      <RoundEventIcon
                        endType={round.endType}
                        bombPlanted={round.bombPlanted}
                        bombDefused={round.bombDefused}
                        size="md"
                      />

                      <div className="min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                          Round {roundNumber}
                        </p>

                        <p className="mt-1 truncate text-sm font-black text-white">
                          {endTypeLabel}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2.5 border-t border-white/10 pt-3 text-[11px]">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-slate-500">
                          승리 진영
                        </span>

                        <span
                          className={[
                            "rounded-md border px-2 py-1",
                            "text-[9px] font-black",
                            getSideBadgeClass(side),
                          ].join(" ")}
                        >
                          {sideLabel}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <span className="text-slate-500">
                          승리 팀
                        </span>

                        <span className="font-semibold text-slate-200">
                          {getFixedTeamLabel(fixedTeam)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <span className="text-slate-500">
                          스파이크 설치
                        </span>

                        <span
                          className={
                            round.bombPlanted
                              ? "font-black text-amber-300"
                              : "font-semibold text-slate-500"
                          }
                        >
                          {round.bombPlanted ? "Yes" : "No"}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <span className="text-slate-500">
                          스파이크 해제
                        </span>

                        <span
                          className={
                            round.bombDefused
                              ? "font-black text-cyan-300"
                              : "font-semibold text-slate-500"
                          }
                        >
                          {round.bombDefused ? "Yes" : "No"}
                        </span>
                      </div>
                    </div>

                    <div className="absolute left-1/2 top-full h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-white/10 bg-slate-950" />
                  </div>
                </article>
              </Fragment>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 px-5 py-3 text-[11px] text-slate-500">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-300" />
          수비 진영 승리
        </span>

        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-rose-300" />
          공격 진영 승리
        </span>

        <span className="ml-auto hidden text-slate-600 sm:inline">
          카드에 마우스를 올리면 상세 정보를 확인할 수 있습니다.
        </span>
      </div>
    </section>
  );
}