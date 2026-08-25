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

  const teamLogoUrl = team.logoUrl ?? null;

  const primaryColor =
    team.primaryColor ?? "#F59E0B";

  const secondaryColor =
    team.secondaryColor ?? "#EF4444";

  const canShowLogo =
    Boolean(teamLogoUrl) && !hasLogoError;

  useEffect(() => {
    setHasLogoError(false);
  }, [teamLogoUrl]);

  return (
    <section
      aria-labelledby="featured-team-title"
      className="group relative overflow-hidden rounded-[1.6rem] border border-white/[0.09] bg-[#090b18]/90 shadow-[0_24px_80px_rgba(0,0,0,0.26)]"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute -left-28 -top-36 h-[360px] w-[360px] rounded-full opacity-[0.12] blur-[125px]"
          style={{
            backgroundColor: primaryColor,
          }}
        />

        <div
          className="absolute -bottom-44 right-[-60px] h-[380px] w-[380px] rounded-full opacity-[0.09] blur-[135px]"
          style={{
            backgroundColor: secondaryColor,
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.018),transparent_42%,rgba(255,255,255,0.008))]" />

        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: `linear-gradient(
              90deg,
              transparent,
              ${primaryColor},
              ${secondaryColor},
              transparent
            )`,
          }}
        />

        {/* Large watermark */}
        {canShowLogo && (
          <img
            src={teamLogoUrl ?? undefined}
            alt=""
            aria-hidden="true"
            className="absolute -left-8 top-1/2 h-[250px] w-[250px] -translate-y-1/2 object-contain opacity-[0.035] grayscale"
          />
        )}
      </div>

      <div className="relative flex flex-col gap-7 px-6 py-7 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10">
        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-amber-200">
            <Sparkles size={15} />

            <p className="text-[10px] font-black tracking-[0.16em]">
              추천 팀
            </p>
          </div>

          <div className="mt-5 flex items-center gap-4">
            {/* Visible team logo */}
            {canShowLogo ? (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.035] p-2.5 backdrop-blur-sm">
                <img
                  src={teamLogoUrl ?? undefined}
                  alt={`${team.name} 로고`}
                  onError={() =>
                    setHasLogoError(true)
                  }
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <div className="flex h-14 min-w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.035] px-2 text-xs font-black text-white">
                {team.shortName}
              </div>
            )}

            <div className="min-w-0">
              <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
                <h2
                  id="featured-team-title"
                  className="text-4xl font-black leading-none tracking-[-0.05em] text-white sm:text-5xl"
                >
                  {team.name}
                </h2>

                <span className="mb-1 text-[11px] font-black uppercase tracking-[0.15em] text-slate-500">
                  {team.shortName}
                </span>
              </div>

              <p className="mt-1.5 text-[10px] font-bold tracking-[0.12em] text-slate-600">
                VCT {team.region}
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-2xl text-[13px] font-medium leading-6 text-slate-400 sm:text-sm sm:leading-7">
            Deck.GG가 이번 주 추천하는 VCT Pacific
            팀입니다. 현재 로스터와 팀 정보를
            확인해보세요.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] font-bold text-slate-500">
              <Users size={11} />

              등록 선수 {rosterCount}명
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] font-bold text-slate-500">
              <Shield size={11} />

              VCT Pacific
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex shrink-0 flex-col gap-3 border-t border-white/[0.07] pt-6 sm:flex-row lg:w-[190px] lg:flex-col lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
          <div className="flex-1 rounded-2xl border border-white/[0.08] bg-slate-950/35 px-5 py-4 backdrop-blur-md">
            <p className="text-[9px] font-black tracking-[0.15em] text-slate-500">
              등록 로스터
            </p>

            <p className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">
              {rosterCount}
            </p>

            <p className="mt-0.5 text-[10px] text-slate-500">
              등록 선수
            </p>
          </div>

          <a
            href="#teams"
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-[12px] font-black text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-50"
          >
            팀 목록에서 보기

            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTeam;