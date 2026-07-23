import { useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  Shield,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { ProPlayer } from "../../types/proPlayer";

type ProTeam = NonNullable<ProPlayer["team"]>;

interface ProTeamCardProps {
  team: ProTeam;
  rosterCount: number;
}

const TEAM_WATERMARK_THEME: Record<
  string,
  {
    opacity: string;
    size: string;
    position: string;
    filter: string;
  }
> = {
  GEN: {
    opacity: "opacity-[0.10]",
    size: "h-64 w-64",
    position: "-right-12 top-14",
    filter: "grayscale",
  },

  T1: {
    opacity: "opacity-[0.20]",
    size: "h-64 w-64",
    position: "-right-8 top-12",
    filter: "grayscale-0 brightness-150 saturate-200",
  },

  KRX: {
    opacity: "opacity-[0.10]",
    size: "h-64 w-64",
    position: "-right-12 top-14",
    filter: "grayscale",
  },

  PRX: {
    opacity: "opacity-[0.10]",
    size: "h-64 w-64",
    position: "-right-10 top-12",
    filter: "grayscale",
  },

  RRQ: {
    opacity: "opacity-[0.10]",
    size: "h-60 w-60",
    position: "-right-8 top-16",
    filter: "grayscale",
  },

  TS: {
    opacity: "opacity-[0.10]",
    size: "h-60 w-60",
    position: "-right-8 top-16",
    filter: "grayscale",
  },

  GE: {
    opacity: "opacity-[0.10]",
    size: "h-60 w-60",
    position: "-right-8 top-16",
    filter: "grayscale",
  },

  FS: {
    opacity: "opacity-[0.10]",
    size: "h-64 w-64",
    position: "-right-10 top-12",
    filter: "grayscale",
  },

  DFM: {
    opacity: "opacity-[0.10]",
    size: "h-60 w-60",
    position: "-right-8 top-16",
    filter: "grayscale",
  },

  ZETA: {
    opacity: "opacity-[0.10]",
    size: "h-64 w-64",
    position: "-right-10 top-12",
    filter: "grayscale",
  },

  NS: {
    opacity: "opacity-[0.10]",
    size: "h-60 w-60",
    position: "-right-8 top-16",
    filter: "grayscale",
  },

  VL: {
    opacity: "opacity-[0.10]",
    size: "h-64 w-64",
    position: "-right-10 top-12",
    filter: "grayscale",
  },
};

const DEFAULT_WATERMARK_THEME = {
  opacity: "opacity-[0.08]",
  size: "h-60 w-60",
  position: "-right-8 top-16",
  filter: "grayscale",
};

const ProTeamCard = ({
  team,
  rosterCount,
}: ProTeamCardProps) => {
  const [hasMainLogoError, setHasMainLogoError] =
    useState(false);

  const [hasWatermarkLogoError, setHasWatermarkLogoError] =
    useState(false);

  const teamTheme =
    TEAM_WATERMARK_THEME[team.shortName] ??
    DEFAULT_WATERMARK_THEME;

  const canShowMainLogo =
    Boolean(team.logoUrl) && !hasMainLogoError;

  const canShowWatermarkLogo =
    Boolean(team.logoUrl) && !hasWatermarkLogoError;

  return (
    <Link
      to={`/valorant/team/${team.slug}`}
      aria-label={`${team.name} 팀 상세 페이지로 이동`}
      className="group block h-full"
    >
      <article className="relative h-full min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 shadow-[0_24px_80px_rgba(0,0,0,0.30)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-55"
          style={{
            background: `
              radial-gradient(
                circle at 18% 12%,
                ${team.primaryColor}55 0%,
                transparent 38%
              ),
              radial-gradient(
                circle at 92% 25%,
                ${team.secondaryColor}44 0%,
                transparent 42%
              ),
              linear-gradient(
                145deg,
                ${team.secondaryColor} 0%,
                #020617 68%
              )
            `,
          }}
        />

        <div
          className="absolute inset-x-0 top-0 h-1.5"
          style={{
            background: `linear-gradient(
              90deg,
              ${team.primaryColor},
              ${team.secondaryColor}
            )`,
          }}
        />

        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-44 opacity-30 blur-3xl transition-opacity duration-300 group-hover:opacity-45"
          style={{
            background: `linear-gradient(
              135deg,
              ${team.primaryColor},
              ${team.secondaryColor}
            )`,
          }}
        />

        {canShowWatermarkLogo && (
          <img
            src={team.logoUrl ?? undefined}
            alt=""
            aria-hidden="true"
            loading="lazy"
            onError={() =>
              setHasWatermarkLogoError(true)
            }
            className={`pointer-events-none absolute object-contain transition duration-500 group-hover:scale-105 ${teamTheme.opacity} ${teamTheme.size} ${teamTheme.position} ${teamTheme.filter}`}
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_25%,rgba(2,6,23,0.28)_55%,rgba(2,6,23,0.95)_100%)]" />

        <div className="relative z-10 flex h-full min-h-[420px] flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-red-200 backdrop-blur-md">
                <Shield size={13} />

                VCT Pacific
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/55 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-300 backdrop-blur-md">
                <MapPin size={13} />

                {team.countryName}
              </span>
            </div>

            <div className="flex h-11 min-w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-950/65 px-3 text-xs font-black tracking-[0.12em] text-white backdrop-blur-md">
              {team.shortName}
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center py-10">
            <div className="flex h-44 w-44 items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/30 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-500 group-hover:scale-[1.04] group-hover:border-white/15">
              {canShowMainLogo ? (
                <img
                  src={team.logoUrl ?? undefined}
                  alt={`${team.name} 팀 로고`}
                  loading="lazy"
                  onError={() => setHasMainLogoError(true)}
                  className="max-h-full max-w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)]"
                />
              ) : (
                <span
                  className="text-center text-4xl font-black tracking-[-0.05em] text-white"
                  style={{
                    textShadow: `0 14px 34px ${team.primaryColor}88`,
                  }}
                >
                  {team.shortName}
                </span>
              )}
            </div>
          </div>

          <div className="mt-auto">
            <p className="text-[11px] font-black uppercase tracking-[0.20em] text-slate-500">
              Pacific Team
            </p>

            <div className="mt-2 flex items-end justify-between gap-4">
              <div className="min-w-0">
                <h2 className="truncate text-3xl font-black tracking-[-0.04em] text-white">
                  {team.name}
                </h2>

                <p className="mt-1 text-sm font-semibold text-slate-400">
                  {team.shortName}
                </p>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
                <ArrowUpRight
                  size={19}
                  strokeWidth={2}
                />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Users
                  size={16}
                  className="text-slate-500"
                />

                <span>Roster</span>

                <strong className="font-black text-white">
                  {rosterCount}
                </strong>
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500 transition-colors duration-300 group-hover:text-slate-200">
                View Team
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProTeamCard;