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

interface WeeklyPickProps {
  pick: WeeklyPickData;
}

const ROLE_LABELS: Record<ProPlayerRole, string> = {
  Duelist: "타격대",
  Initiator: "척후대",
  Controller: "전략가",
  Sentinel: "감시자",
  Flex: "플렉스",
};

const ROLE_STYLES: Record<ProPlayerRole, string> = {
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
  const [year, month, day] = selectedAt
    .split("-")
    .map(Number);

  if (!year || !month || !day) {
    return selectedAt;
  }

  return `${year}-${String(month).padStart(
    2,
    "0",
  )}-${String(day).padStart(2, "0")}`;
};

const WeeklyPick = ({ pick }: WeeklyPickProps) => {
  const [hasTeamLogoError, setHasTeamLogoError] =
    useState(false);

  const { player } = pick;
  const team = player.team;

  const teamName = team?.name ?? "무소속";
  const teamShortName = team?.shortName ?? "FA";
  const teamLogoUrl = team?.logoUrl ?? null;

  const teamPrimaryColor =
    team?.primaryColor ?? "#EF4444";

  const teamSecondaryColor =
    team?.secondaryColor ?? "#0F172A";

  const canShowTeamLogo =
    Boolean(teamLogoUrl) && !hasTeamLogoError;

  useEffect(() => {
    setHasTeamLogoError(false);
  }, [teamLogoUrl]);

  return (
    <section
      aria-labelledby="weekly-pick-title"
      className="group relative overflow-hidden rounded-[1.6rem] border border-white/[0.09] bg-[#090b18]/90 shadow-[0_24px_80px_rgba(0,0,0,0.3)]"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute -left-40 -top-44 h-[420px] w-[420px] rounded-full opacity-[0.16] blur-[130px]"
          style={{
            backgroundColor: teamPrimaryColor,
          }}
        />

        <div
          className="absolute -bottom-52 right-[-80px] h-[440px] w-[440px] rounded-full opacity-[0.1] blur-[140px]"
          style={{
            backgroundColor: teamSecondaryColor,
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),transparent_40%,rgba(255,255,255,0.008))]" />

        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: `linear-gradient(
              90deg,
              transparent,
              ${teamPrimaryColor},
              ${teamSecondaryColor},
              transparent
            )`,
          }}
        />
      </div>

      <div className="relative grid lg:grid-cols-[250px_minmax(0,1fr)_225px]">
        {/* Team Visual */}
        <div className="relative flex min-h-[190px] items-center justify-center overflow-hidden border-b border-white/[0.07] px-7 py-8 lg:min-h-[310px] lg:border-b-0 lg:border-r">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[60px]"
            style={{
              backgroundColor: teamPrimaryColor,
            }}
          />

          <div className="absolute left-5 top-5 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-slate-950/60 px-3 py-1.5 text-[10px] font-black tracking-[0.06em] text-slate-200 backdrop-blur-md">
              <Sparkles
                size={12}
                className="text-rose-200"
              />

              {pick.title}
            </span>
          </div>

          {canShowTeamLogo ? (
            <img
              src={teamLogoUrl ?? undefined}
              alt={`${teamName} 로고`}
              onError={() =>
                setHasTeamLogoError(true)
              }
              className="relative z-10 h-[112px] w-[175px] object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-[1.035] lg:h-[135px]"
            />
          ) : (
            <div className="relative z-10 flex h-28 min-w-28 items-center justify-center rounded-[1.75rem] border border-white/10 bg-white/[0.04] px-5 text-3xl font-black text-white backdrop-blur-md">
              {teamShortName}
            </div>
          )}
        </div>

        {/* Player Info */}
        <div className="flex min-w-0 flex-col justify-center px-6 py-7 sm:px-8 lg:px-10 lg:py-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/20 bg-rose-400/[0.08] px-3 py-1.5 text-[10px] font-black text-rose-100">
              <Star
                size={11}
                fill="currentColor"
              />

              {pick.label}
            </span>

            <span
              className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[10px] font-black ${
                ROLE_STYLES[player.primaryRole]
              }`}
            >
              {ROLE_LABELS[player.primaryRole]}
            </span>

            <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[10px] font-black text-slate-400">
              {teamShortName}
            </span>
          </div>

          <p className="mt-5 text-[10px] font-black tracking-[0.2em] text-slate-500">
            DECK.GG WEEKLY PICK
          </p>

          <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1">
            <h2
              id="weekly-pick-title"
              className="text-[2.8rem] font-black leading-none tracking-[-0.055em] text-white sm:text-[3.15rem]"
            >
              {player.nickname}
            </h2>

            <span className="mb-1 text-[11px] font-black tracking-[0.06em] text-slate-500">
              {teamShortName}
            </span>
          </div>

          {/* 기존 pick.title 제목 제거 */}
          <p className="mt-5 max-w-[760px] text-[13px] font-medium leading-6 text-slate-400 sm:text-sm sm:leading-7">
            {pick.comment}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3">
            <div className="flex flex-wrap gap-1.5">
              {player.mainAgents.length > 0 ? (
                player.mainAgents
                  .slice(0, 3)
                  .map((agent) => (
                    <span
                      key={agent}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[10px] font-bold text-slate-400 transition-colors hover:border-white/[0.13] hover:bg-white/[0.055] hover:text-slate-300"
                    >
                      {agent}
                    </span>
                  ))
              ) : (
                <span className="text-[10px] text-slate-600">
                  등록된 대표 요원이 없습니다
                </span>
              )}
            </div>

            <div className="hidden h-3 w-px bg-white/[0.08] sm:block" />

            <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-slate-500">
              <CalendarDays size={11} />

              선정일 {formatSelectedDate(pick.selectedAt)}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center border-t border-white/[0.07] px-6 py-6 lg:border-l lg:border-t-0 lg:px-7">
          <div className="w-full">
            <Link
              to={`/valorant/pros/${player.slug}`}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 text-[12px] font-black text-slate-950 shadow-[0_10px_30px_rgba(255,255,255,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
            >
              프로필 보기

              <ArrowRight size={15} />
            </Link>

            <Link
              to="/valorant/pros"
              className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.025] px-4 text-[12px] font-bold text-slate-300 transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.055] hover:text-white"
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