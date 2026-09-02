import { useEffect, useState } from "react";
import {
  ArrowRight,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

import type { ProTeam } from "../../types/proPlayer";

interface FeaturedTeamProps {
  team: ProTeam;
  rosterCount: number;
}

const FeaturedTeam = ({
  team,
  rosterCount,
}: FeaturedTeamProps) => {
  const [hasLogoError, setHasLogoError] =
    useState(false);

  const teamLogoUrl =
    team.logoUrl ?? null;

  const primaryColor =
    team.primaryColor ?? "#F59E0B";

  const canShowLogo =
    Boolean(teamLogoUrl) &&
    !hasLogoError;

  useEffect(() => {
    setHasLogoError(false);
  }, [teamLogoUrl]);

  return (
    <section
      aria-labelledby="featured-team-title"
      className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#090b18]/90 sm:rounded-[1.6rem]"
    >
      {/* Accent */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1"
        style={{
          backgroundColor: primaryColor,
        }}
      />

      {/* Watermark */}
      {canShowLogo && (
        <img
          src={teamLogoUrl ?? undefined}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-6 top-1/2 hidden h-[220px] w-[220px] -translate-y-1/2 object-contain opacity-[0.035] grayscale lg:block"
        />
      )}

      <div className="relative flex flex-col gap-5 px-4 py-5 sm:gap-7 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10">
        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-amber-200">
            <Sparkles size={14} />

            <p className="text-[9px] font-black tracking-[0.14em] sm:text-[10px] sm:tracking-[0.16em]">
              추천 팀
            </p>
          </div>

          <div className="mt-4 flex items-center gap-3 sm:mt-5 sm:gap-4">
            {/* Team Logo */}
            {canShowLogo ? (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] p-2 sm:h-14 sm:w-14 sm:rounded-2xl sm:p-2.5">
                <img
                  src={
                    teamLogoUrl ??
                    undefined
                  }
                  alt={`${team.name} 로고`}
                  onError={() =>
                    setHasLogoError(
                      true,
                    )
                  }
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <div className="flex h-12 min-w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] px-2 text-[11px] font-black text-white sm:h-14 sm:min-w-14 sm:rounded-2xl sm:text-xs">
                {team.shortName}
              </div>
            )}

            <div className="min-w-0">
              <div className="flex flex-wrap items-end gap-x-2 gap-y-1 sm:gap-x-3">
                <h2
                  id="featured-team-title"
                  className="truncate text-3xl font-black leading-none tracking-[-0.05em] text-white sm:text-5xl"
                >
                  {team.name}
                </h2>

                <span className="mb-0.5 text-[9px] font-black uppercase tracking-[0.12em] text-slate-500 sm:mb-1 sm:text-[11px] sm:tracking-[0.15em]">
                  {team.shortName}
                </span>
              </div>

              <p className="mt-1 text-[9px] font-bold tracking-[0.1em] text-slate-600 sm:mt-1.5 sm:text-[10px] sm:tracking-[0.12em]">
                VCT {team.region}
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-[12px] font-medium leading-5 text-slate-400 sm:mt-5 sm:text-sm sm:leading-7">
            Deck.GG가 이번 주 추천하는
            VCT Pacific 팀입니다. 현재
            로스터와 팀 정보를
            확인해보세요.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[9px] font-bold text-slate-500 sm:px-3 sm:py-1.5 sm:text-[10px]">
              <Users size={11} />

              등록 선수 {rosterCount}명
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[9px] font-bold text-slate-500 sm:px-3 sm:py-1.5 sm:text-[10px]">
              <Shield size={11} />

              VCT Pacific
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex shrink-0 flex-row gap-2.5 border-t border-white/[0.07] pt-4 sm:gap-3 sm:pt-6 lg:w-[190px] lg:flex-col lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
          <div className="flex-1 rounded-xl border border-white/[0.08] bg-slate-950/35 px-3 py-3 sm:rounded-2xl sm:px-5 sm:py-4">
            <p className="text-[8px] font-black tracking-[0.12em] text-slate-500 sm:text-[9px] sm:tracking-[0.15em]">
              등록 로스터
            </p>

            <p className="mt-1 text-2xl font-black tracking-[-0.04em] text-white sm:mt-2 sm:text-3xl">
              {rosterCount}
            </p>

            <p className="mt-0.5 text-[9px] text-slate-500 sm:text-[10px]">
              등록 선수
            </p>
          </div>

          <a
            href="#teams"
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-white px-3 py-2.5 text-center text-[11px] font-black text-slate-950 transition-colors hover:bg-slate-100 sm:min-h-12 sm:px-5 sm:py-3 sm:text-[12px]"
          >
            <span className="sm:hidden">
              팀 목록
            </span>

            <span className="hidden sm:inline">
              팀 목록에서 보기
            </span>

            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTeam;