import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Sparkles,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { WeeklyPick as WeeklyPickData } from "../../data/weeklyPick";
import type { ProPlayerRole } from "../../types/proPlayer";
import { getAgentLabel } from "../../utils/agentLabels";

interface WeeklyPickProps {
  pick: WeeklyPickData;
}

const ROLE_LABELS: Record<
  ProPlayerRole,
  string
> = {
  Duelist: "타격대",
  Initiator: "척후대",
  Controller: "전략가",
  Sentinel: "감시자",
  Flex: "플렉스",
};

const ROLE_STYLES: Record<
  ProPlayerRole,
  string
> = {
  Duelist:
    "border-red-400/25 bg-red-400/10 text-red-100",
  Initiator:
    "border-sky-400/25 bg-sky-400/10 text-sky-100",
  Controller:
    "border-violet-400/25 bg-violet-400/10 text-violet-100",
  Sentinel:
    "border-emerald-400/25 bg-emerald-400/10 text-emerald-100",
  Flex:
    "border-amber-400/25 bg-amber-400/10 text-amber-100",
};

const formatSelectedDate = (
  selectedAt: string,
): string => {
  const [year, month, day] =
    selectedAt.split("-").map(Number);

  if (!year || !month || !day) {
    return selectedAt;
  }

  return `${year}-${String(
    month,
  ).padStart(2, "0")}-${String(
    day,
  ).padStart(2, "0")}`;
};

const WeeklyPick = ({
  pick,
}: WeeklyPickProps) => {
  const [
    hasTeamLogoError,
    setHasTeamLogoError,
  ] = useState(false);

  const { player } = pick;
  const team = player.team;

  const teamName =
    team?.name ?? "무소속";

  const teamShortName =
    team?.shortName ?? "FA";

  const teamLogoUrl =
    team?.logoUrl ?? null;

  const teamPrimaryColor =
    team?.primaryColor ?? "#EF4444";

  const teamSecondaryColor =
    team?.secondaryColor ?? "#0F172A";

  const canShowTeamLogo =
    Boolean(teamLogoUrl) &&
    !hasTeamLogoError;

  useEffect(() => {
    setHasTeamLogoError(false);
  }, [teamLogoUrl]);

  return (
    <section
      aria-labelledby="weekly-pick-title"
      className="group relative overflow-hidden rounded-[1.6rem] border border-white/[0.09] bg-[#090b18]/90"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute -left-40 -top-44 h-[420px] w-[420px] rounded-full opacity-[0.16] blur-[130px]"
          style={{
            backgroundColor:
              teamPrimaryColor,
          }}
        />

        <div
          className="absolute -bottom-52 right-[-80px] h-[440px] w-[440px] rounded-full opacity-[0.1] blur-[140px]"
          style={{
            backgroundColor:
              teamSecondaryColor,
          }}
        />
      </div>

      <div className="relative grid lg:grid-cols-[250px_minmax(0,1fr)_225px]">
        {/* Team Visual */}
        <div className="relative flex min-h-[145px] items-center justify-center overflow-hidden border-b border-white/[0.07] px-4 py-5 sm:min-h-[190px] sm:px-7 sm:py-8 lg:min-h-[310px] lg:border-b-0 lg:border-r">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[60px]"
            style={{
              backgroundColor:
                teamPrimaryColor,
            }}
          />

          {/* Weekly Pick Badge */}
          <div className="absolute left-4 top-4 z-20 sm:left-5 sm:top-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-slate-950/60 px-2.5 py-1 text-[9px] font-black tracking-[0.06em] text-slate-200 backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-[10px]">
              <Sparkles
                size={12}
                className="text-rose-200"
              />

              {pick.title}
            </span>
          </div>

          {canShowTeamLogo ? (
            <img
              src={
                teamLogoUrl ?? undefined
              }
              alt={`${teamName} 로고`}
              onError={() =>
                setHasTeamLogoError(
                  true,
                )
              }
              className="relative z-10 h-[82px] w-[140px] object-contain transition-transform duration-500 group-hover:scale-[1.035] sm:h-[112px] sm:w-[175px] lg:h-[135px]"
            />
          ) : (
            <div className="relative z-10 flex h-20 min-w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-2xl font-black text-white sm:h-28 sm:min-w-28 sm:rounded-[1.75rem] sm:px-5 sm:text-3xl">
              {teamShortName}
            </div>
          )}
        </div>

        {/* Player Info */}
        <div className="flex min-w-0 flex-col justify-center px-4 py-5 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
          {/* Role / Team Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/20 bg-rose-400/[0.08] px-2.5 py-1 text-[9px] font-black text-rose-100 sm:px-3 sm:py-1.5 sm:text-[10px]">
              <Star
                size={11}
                fill="currentColor"
              />

              {pick.label}
            </span>

            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[9px] font-black sm:px-3 sm:py-1.5 sm:text-[10px] ${
                ROLE_STYLES[
                  player.primaryRole
                ]
              }`}
            >
              {
                ROLE_LABELS[
                  player.primaryRole
                ]
              }
            </span>

            <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[9px] font-black text-slate-400 sm:px-3 sm:py-1.5 sm:text-[10px]">
              {teamShortName}
            </span>
          </div>

          <p className="mt-4 text-[9px] font-black tracking-[0.18em] text-slate-500 sm:mt-5 sm:text-[10px] sm:tracking-[0.2em]">
            DECK.GG WEEKLY PICK
          </p>

          <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1">
            <h2
              id="weekly-pick-title"
              className="text-[2.2rem] font-black leading-none tracking-[-0.055em] text-white sm:text-[3.15rem]"
            >
              {player.nickname}
            </h2>

            <span className="mb-1 text-[11px] font-black tracking-[0.06em] text-slate-500">
              {teamShortName}
            </span>
          </div>

          <p className="mt-3 max-w-[760px] text-[12px] font-medium leading-5 text-slate-400 sm:mt-5 sm:text-sm sm:leading-7">
            {pick.comment}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mt-5 sm:gap-y-3">
            <div className="flex flex-wrap gap-1.5">
              {player.mainAgents.length >
              0 ? (
                player.mainAgents
                  .slice(0, 3)
                  .map((agent) => (
                    <span
                      key={agent}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[9px] font-bold text-slate-400 transition-colors hover:border-white/[0.13] hover:bg-white/[0.055] hover:text-slate-300 sm:px-3 sm:py-1.5 sm:text-[10px]"
                    >
                      {getAgentLabel(
                        agent,
                      )}
                    </span>
                  ))
              ) : (
                <span className="text-[10px] text-slate-600">
                  등록된 대표 요원이
                  없습니다
                </span>
              )}
            </div>

            <div className="hidden h-3 w-px bg-white/[0.08] sm:block" />

            <span className="inline-flex items-center gap-1.5 text-[9px] font-medium text-slate-500 sm:text-[10px]">
              <CalendarDays size={11} />

              선정일{" "}
              {formatSelectedDate(
                pick.selectedAt,
              )}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center border-t border-white/[0.07] px-4 py-4 sm:px-6 sm:py-6 lg:border-l lg:border-t-0 lg:px-7">
          <div className="w-full">
            <Link
              to={`/valorant/pros/${player.slug}`}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 text-[12px] font-black text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 sm:h-12"
            >
              프로필 보기

              <ArrowRight size={15} />
            </Link>

            <Link
              to="/valorant/pros"
              className="mt-2 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.025] px-4 text-[12px] font-bold text-slate-300 transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.055] hover:text-white sm:mt-3 sm:h-11"
            >
              전체 선수 보기

              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyPick;