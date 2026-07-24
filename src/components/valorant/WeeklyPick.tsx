import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Crosshair,
  Quote,
  Sparkles,
  Star,
  Target,
  Trophy,
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
  Duelist: "border-red-400/25 bg-red-400/10 text-red-100",
  Initiator:
    "border-sky-400/25 bg-sky-400/10 text-sky-100",
  Controller:
    "border-violet-400/25 bg-violet-400/10 text-violet-100",
  Sentinel:
    "border-emerald-400/25 bg-emerald-400/10 text-emerald-100",
  Flex: "border-amber-400/25 bg-amber-400/10 text-amber-100",
};

const formatStat = (
  value: number,
  maximumFractionDigits = 2,
): string => {
  if (!Number.isFinite(value)) {
    return "-";
  }

  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits,
  }).format(value);
};

const formatSelectedDate = (selectedAt: string): string => {
  const date = new Date(selectedAt);

  if (Number.isNaN(date.getTime())) {
    return selectedAt;
  }

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
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

  const nicknameInitial =
    player.nickname.trim().charAt(0).toUpperCase() || "?";

  return (
    <section
      aria-labelledby="weekly-pick-title"
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-[0_32px_110px_rgba(0,0,0,0.38)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute -left-24 -top-32 h-[420px] w-[420px] rounded-full opacity-25 blur-[130px]"
          style={{
            backgroundColor: teamPrimaryColor,
          }}
        />

        <div
          className="absolute -bottom-40 right-0 h-[460px] w-[460px] rounded-full opacity-20 blur-[140px]"
          style={{
            backgroundColor: teamSecondaryColor,
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.025),transparent_45%,rgba(255,255,255,0.015))]" />

        <div
          className="absolute inset-x-0 top-0 h-1"
          style={{
            background: `linear-gradient(90deg, ${teamPrimaryColor}, ${teamSecondaryColor})`,
          }}
        />
      </div>

      {canShowTeamLogo && (
        <img
          src={teamLogoUrl ?? undefined}
          alt=""
          aria-hidden="true"
          onError={() => setHasTeamLogoError(true)}
          className="pointer-events-none absolute -right-16 top-10 h-72 w-72 object-contain opacity-[0.045] grayscale"
        />
      )}

      <div className="relative grid min-h-[520px] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="flex flex-col justify-center px-6 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-14">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3.5 py-2 text-[11px] font-black tracking-[0.14em] text-amber-100">
              <Star
                size={14}
                fill="currentColor"
              />

              {pick.title}
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[11px] font-bold text-slate-300">
              <CalendarDays size={13} />

              {formatSelectedDate(pick.selectedAt)}
            </span>
          </div>

          <div className="mt-8">
            <p className="flex items-center gap-2 text-xs font-black tracking-[0.16em] text-slate-500">
              <Sparkles size={15} />

              {pick.label}
            </p>

            <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
              <h2
                id="weekly-pick-title"
                className="text-5xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl"
              >
                {player.nickname}
              </h2>

              <span
                className={`mb-1 inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-black ${
                  ROLE_STYLES[player.primaryRole]
                }`}
              >
                {ROLE_LABELS[player.primaryRole]}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                {canShowTeamLogo ? (
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white p-2">
                    <img
                      src={teamLogoUrl ?? undefined}
                      alt={`${teamName} 로고`}
                      onError={() =>
                        setHasTeamLogoError(true)
                      }
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className="flex h-10 min-w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] px-2 text-xs font-black text-white"
                    style={{
                      boxShadow: `0 12px 30px ${teamPrimaryColor}22`,
                    }}
                  >
                    {teamShortName}
                  </div>
                )}

                <div>
                  <p className="text-sm font-black text-white">
                    {teamName}
                  </p>

                  <p className="text-xs text-slate-500">
                    {player.region} · {player.countryName}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-2xl rounded-2xl border border-white/10 bg-slate-950/45 p-5 backdrop-blur-md sm:p-6">
            <div className="flex items-center gap-2 text-slate-500">
              <Quote size={16} />

              <p className="text-[11px] font-black tracking-[0.16em]">
                DECK.GG COMMENT
              </p>
            </div>

            <p className="mt-3 text-sm font-medium leading-7 text-slate-300 sm:text-base">
              {pick.comment}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Crosshair
                  size={15}
                  className="text-slate-500"
                />

                <p className="text-[11px] font-black tracking-[0.16em] text-slate-500">
                  대표 요원
                </p>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {player.mainAgents.length > 0 ? (
                  player.mainAgents
                    .slice(0, 4)
                    .map((agent) => (
                      <span
                        key={agent}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-slate-300"
                      >
                        {agent}
                      </span>
                    ))
                ) : (
                  <span className="text-xs text-slate-600">
                    등록된 대표 요원이 없습니다
                  </span>
                )}
              </div>
            </div>

            <Link
              to={`/valorant/pros/${player.slug}`}
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-black text-slate-950 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              프로필 보기

              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden border-t border-white/10 lg:min-h-0 lg:border-l lg:border-t-0">
          <div
            className="absolute inset-0 opacity-75"
            style={{
              background: `
                radial-gradient(
                  circle at 50% 35%,
                  ${teamPrimaryColor}55 0%,
                  transparent 48%
                ),
                linear-gradient(
                  150deg,
                  ${teamSecondaryColor} 0%,
                  #020617 76%
                )
              `,
            }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.98)_0%,transparent_48%)]" />

          {canShowTeamLogo && (
            <img
              src={teamLogoUrl ?? undefined}
              alt=""
              aria-hidden="true"
              onError={() =>
                setHasTeamLogoError(true)
              }
              className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.08] grayscale"
            />
          )}

          <div className="absolute inset-x-0 bottom-0 top-6 z-10 flex items-end justify-center">
            {player.profileImageUrl ? (
              <img
                src={player.profileImageUrl}
                alt={`${player.nickname} 선수`}
                className="h-full w-full object-contain object-bottom drop-shadow-[0_30px_55px_rgba(0,0,0,0.6)]"
              />
            ) : (
              <div className="mb-28 flex h-40 w-40 items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/55 text-7xl font-black text-white shadow-2xl backdrop-blur-md">
                {nicknameInitial}
              </div>
            )}
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-7">
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/65 p-3.5 backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Trophy size={13} />

                  <p className="text-[9px] font-black tracking-[0.1em]">
                    RATING
                  </p>
                </div>

                <p className="mt-2 text-xl font-black text-white">
                  {formatStat(player.stats.rating)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/65 p-3.5 backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Crosshair size={13} />

                  <p className="text-[9px] font-black tracking-[0.1em]">
                    ACS
                  </p>
                </div>

                <p className="mt-2 text-xl font-black text-white">
                  {formatStat(player.stats.acs, 1)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/65 p-3.5 backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Target size={13} />

                  <p className="text-[9px] font-black tracking-[0.1em]">
                    K/D
                  </p>
                </div>

                <p className="mt-2 text-xl font-black text-white">
                  {formatStat(player.stats.kd)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyPick;