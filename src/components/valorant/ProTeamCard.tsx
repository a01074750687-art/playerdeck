import { useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import useFavorites, {
  type FavoriteProTeam,
} from "../../hooks/useFavorites";
import type { ProPlayer } from "../../types/proPlayer";

type ProTeam = NonNullable<ProPlayer["team"]>;

interface ProTeamCardProps {
  team: ProTeam;
  rosterCount: number;
}

interface WatermarkTheme {
  opacity: string;
  size: string;
  position: string;
  filter: string;
}

const DEFAULT_WATERMARK_THEME: WatermarkTheme = {
  opacity: "opacity-[0.055]",
  size: "h-56 w-56",
  position: "-right-10 top-16",
  filter: "grayscale",
};

const TEAM_WATERMARK_THEME: Record<
  string,
  Partial<WatermarkTheme>
> = {
  T1: {
    opacity: "opacity-[0.13]",
    position: "-right-8 top-14",
    filter:
      "grayscale-0 brightness-150 saturate-200",
  },

  GEN: {
    opacity: "opacity-[0.07]",
  },

  KRX: {
    opacity: "opacity-[0.07]",
  },

  PRX: {
    opacity: "opacity-[0.07]",
  },

  RRQ: {
    size: "h-52 w-52",
  },

  TS: {
    size: "h-52 w-52",
  },

  GE: {
    size: "h-52 w-52",
  },

  DFM: {
    size: "h-52 w-52",
  },

  NS: {
    size: "h-52 w-52",
  },
};

const ProTeamCard = ({
  team,
  rosterCount,
}: ProTeamCardProps) => {
  const [hasMainLogoError, setHasMainLogoError] =
    useState(false);

  const [
    hasWatermarkLogoError,
    setHasWatermarkLogoError,
  ] = useState(false);

  const { isFavorite, toggleFavorite } =
    useFavorites();

  const primaryColor =
    team.primaryColor ?? "#EF4444";

  const secondaryColor =
    team.secondaryColor ?? "#0F172A";

  const teamTheme: WatermarkTheme = {
    ...DEFAULT_WATERMARK_THEME,
    ...TEAM_WATERMARK_THEME[team.shortName],
  };

  const canShowMainLogo =
    Boolean(team.logoUrl) && !hasMainLogoError;

  const canShowWatermarkLogo =
    Boolean(team.logoUrl) &&
    !hasWatermarkLogoError;

  const favoriteTeam: FavoriteProTeam = {
    type: "pro-team",
    id: team.id,
    name: team.name,
    slug: team.slug,
    shortName: team.shortName,
  };

  const teamIsFavorite =
    isFavorite(favoriteTeam);

  return (
    <article
      className="
        group relative h-full min-h-[370px]
        overflow-hidden
        rounded-[1.5rem]
        border border-white/[0.085]
        bg-[#080b18]/90
        shadow-[0_20px_65px_rgba(0,0,0,0.28)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-white/[0.15]
        hover:shadow-[0_28px_85px_rgba(0,0,0,0.38)]
      "
    >
      {/* Card Link */}
      <Link
        to={`/valorant/team/${team.slug}`}
        aria-label={`${team.name} 팀 상세 페이지로 이동`}
        className="
          absolute inset-0 z-20
          rounded-[1.5rem]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-white/60
          focus-visible:ring-inset
        "
      />

      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-45"
          style={{
            background: `
              radial-gradient(
                circle at 12% 8%,
                ${primaryColor}44 0%,
                transparent 36%
              ),
              radial-gradient(
                circle at 92% 28%,
                ${secondaryColor}38 0%,
                transparent 42%
              ),
              linear-gradient(
                145deg,
                ${secondaryColor}22 0%,
                transparent 48%,
                #020617 100%
              )
            `,
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.018),transparent_42%,rgba(255,255,255,0.006))]" />

        <div
          className="
            absolute -left-24 -top-28
            h-60 w-60 rounded-full
            opacity-[0.12] blur-[85px]
          "
          style={{
            backgroundColor: primaryColor,
          }}
        />

        <div
          className="
            absolute inset-x-0 top-0
            h-px
          "
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

        {canShowWatermarkLogo && (
          <img
            src={team.logoUrl ?? undefined}
            alt=""
            aria-hidden="true"
            loading="lazy"
            onError={() =>
              setHasWatermarkLogoError(true)
            }
            className={`
              absolute object-contain
              transition-transform
              duration-500
              group-hover:scale-[1.04]
              ${teamTheme.opacity}
              ${teamTheme.size}
              ${teamTheme.position}
              ${teamTheme.filter}
            `}
          />
        )}

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_30%,rgba(2,6,23,0.2)_55%,rgba(2,6,23,0.88)_100%)]" />
      </div>

      <div
        className="
          relative z-10
          flex h-full min-h-[370px]
          flex-col p-5
          sm:p-6
        "
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 flex-wrap items-center gap-1.5">
            <span
              className="
                inline-flex items-center gap-1.5
                rounded-full
                border border-red-400/20
                bg-red-400/[0.07]
                px-2.5 py-1.5
                text-[9px] font-black
                uppercase tracking-[0.14em]
                text-red-200
                backdrop-blur-md
              "
            >
              <Shield size={11} />

              VCT Pacific
            </span>

            <span
              className="
                inline-flex items-center gap-1.5
                rounded-full
                border border-white/[0.08]
                bg-slate-950/40
                px-2.5 py-1.5
                text-[9px] font-bold
                text-slate-400
                backdrop-blur-md
              "
            >
              <MapPin size={11} />

              {team.countryName}
            </span>
          </div>

          {/* Favorite */}
          <button
            type="button"
            aria-label={
              teamIsFavorite
                ? `${team.name} 즐겨찾기 해제`
                : `${team.name} 즐겨찾기 추가`
            }
            aria-pressed={teamIsFavorite}
            title={
              teamIsFavorite
                ? "즐겨찾기 해제"
                : "즐겨찾기 추가"
            }
            onClick={() =>
              toggleFavorite(favoriteTeam)
            }
            className={`
              relative z-30
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-xl border
              backdrop-blur-md
              transition-all duration-200
              ${
                teamIsFavorite
                  ? "border-amber-300/35 bg-amber-300/15 text-amber-200"
                  : "border-white/[0.08] bg-slate-950/45 text-slate-500 hover:border-amber-300/25 hover:bg-amber-300/10 hover:text-amber-200"
              }
            `}
          >
            <Star
              size={16}
              strokeWidth={2}
              fill={
                teamIsFavorite
                  ? "currentColor"
                  : "none"
              }
            />
          </button>
        </div>

        {/* Logo */}
        <div
          className="
            flex flex-1
            items-center justify-center
            py-7
          "
        >
          <div
            className="
              relative flex
              h-40 w-40
              items-center justify-center
              rounded-[1.75rem]
              border border-white/[0.075]
              bg-slate-950/25
              p-4
              shadow-[0_20px_55px_rgba(0,0,0,0.28)]
              backdrop-blur-sm
              transition-all duration-500
              group-hover:-translate-y-0.5
              group-hover:border-white/[0.12]
              group-hover:bg-slate-950/35
              group-hover:shadow-[0_26px_65px_rgba(0,0,0,0.38)]
            "
            style={{
              boxShadow: `
                0 20px 55px rgba(0,0,0,0.28),
                0 0 40px ${primaryColor}0D
              `,
            }}
          >
            {canShowMainLogo ? (
              <img
                src={team.logoUrl ?? undefined}
                alt={`${team.name} 팀 로고`}
                loading="lazy"
                onError={() =>
                  setHasMainLogoError(true)
                }
                className="
                  max-h-full max-w-full
                  object-contain
                  drop-shadow-[0_16px_26px_rgba(0,0,0,0.48)]
                  transition-transform
                  duration-500
                  group-hover:scale-[1.04]
                "
              />
            ) : (
              <span
                className="
                  text-center text-3xl
                  font-black
                  tracking-[-0.05em]
                  text-white
                "
                style={{
                  textShadow: `0 12px 30px ${primaryColor}66`,
                }}
              >
                {team.shortName}
              </span>
            )}
          </div>
        </div>

        {/* Team Info */}
        <div className="mt-auto">
          <p
            className="
              text-[9px] font-black
              uppercase tracking-[0.19em]
              text-slate-600
            "
          >
            VCT PACIFIC TEAM
          </p>

          <div
            className="
              mt-2 flex
              items-end justify-between
              gap-4
            "
          >
            <div className="min-w-0">
              <h2
                className="
                  truncate
                  text-[1.7rem] font-black
                  leading-tight
                  tracking-[-0.045em]
                  text-white
                  sm:text-[1.85rem]
                "
              >
                {team.name}
              </h2>

              <p
                className="
                  mt-1 text-[10px]
                  font-black
                  uppercase
                  tracking-[0.16em]
                  text-slate-500
                "
              >
                {team.shortName}
              </p>
            </div>

            <div
              className="
                flex h-9 w-9 shrink-0
                items-center justify-center
                rounded-full
                border border-white/[0.08]
                bg-white/[0.035]
                text-slate-500
                transition-all duration-300
                group-hover:border-white/[0.15]
                group-hover:bg-white/[0.07]
                group-hover:text-white
              "
            >
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </div>
          </div>

          {/* Footer */}
          <div
            className="
              mt-4 flex
              items-center justify-between
              border-t border-white/[0.07]
              pt-3.5
            "
          >
            <div
              className="
                flex items-center gap-2
                text-[11px]
                text-slate-500
              "
            >
              <Users size={13} />

              <span>등록 선수</span>

              <strong
                className="
                  font-black text-slate-200
                "
              >
                {rosterCount}명
              </strong>
            </div>

            <span
              className="
                flex items-center gap-1.5
                text-[10px] font-bold
                text-slate-500
                transition-colors
                duration-300
                group-hover:text-slate-200
              "
            >
              팀 상세 보기

              <ArrowUpRight size={12} />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProTeamCard;