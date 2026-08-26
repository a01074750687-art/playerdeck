import { useState } from "react";
import {
  ArrowUpRight,
  Crosshair,
  Shield,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

import useFavorites, {
  type FavoriteProPlayer,
} from "../../hooks/useFavorites";
import type {
  ProPlayer,
  ProPlayerRole,
} from "../../types/proPlayer";

import { getAgentLabel } from "../../utils/agentLabels";

interface ProPlayerCardProps {
  player: ProPlayer;
}

interface WatermarkTheme {
  opacity: string;
  size: string;
  position: string;
  filter: string;
}

const STATUS_LABELS: Record<string, string> = {
  Active: "현역",
  Retired: "은퇴",
};

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
    "border-red-400/25 bg-red-400/[0.09] text-red-200",
  Initiator:
    "border-sky-400/25 bg-sky-400/[0.09] text-sky-200",
  Controller:
    "border-violet-400/25 bg-violet-400/[0.09] text-violet-200",
  Sentinel:
    "border-emerald-400/25 bg-emerald-400/[0.09] text-emerald-200",
  Flex:
    "border-amber-400/25 bg-amber-400/[0.09] text-amber-200",
};

const DEFAULT_WATERMARK_THEME: WatermarkTheme = {
  opacity: "opacity-[0.06]",
  size: "h-56 w-56",
  position: "-right-10 top-14",
  filter: "grayscale",
};

const TEAM_WATERMARK_THEME: Record<
  string,
  Partial<WatermarkTheme>
> = {
  T1: {
    opacity: "opacity-[0.16]",
    position: "-right-7 top-12",
    filter:
      "grayscale-0 brightness-150 saturate-200",
  },

  GEN: {
    opacity: "opacity-[0.08]",
  },

  KRX: {
    opacity: "opacity-[0.08]",
  },

  PRX: {
    opacity: "opacity-[0.08]",
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

const formatStat = (
  value: number | null,
  maximumFractionDigits = 2,
): string => {
  if (value === null) {
    return "-";
  }

  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits,
  }).format(value);
};

const getCountryFlag = (
  countryCode: string,
): string => {
  switch (countryCode) {
    case "KR":
      return "🇰🇷";

    case "JP":
      return "🇯🇵";

    case "ID":
      return "🇮🇩";

    case "SG":
      return "🇸🇬";

    case "PH":
      return "🇵🇭";

    case "TH":
      return "🇹🇭";

    case "MY":
      return "🇲🇾";

    case "CN":
      return "🇨🇳";

    case "AU":
      return "🇦🇺";

    case "RU":
      return "🇷🇺";

    default:
      return "🌐";
  }
};

const ProPlayerCard = ({
  player,
}: ProPlayerCardProps) => {
  const [hasTeamLogoError, setHasTeamLogoError] =
    useState(false);

  const { isFavorite, toggleFavorite } =
    useFavorites();

  const team = player.team;

  const teamName =
    team?.name ?? "Free Agent";

  const teamShortName =
    team?.shortName ?? "FA";

  const teamLogoUrl =
    team?.logoUrl ?? null;

  const primaryColor =
    team?.primaryColor ?? "#64748B";

  const secondaryColor =
    team?.secondaryColor ?? "#0F172A";

  const watermarkTheme: WatermarkTheme = {
    ...DEFAULT_WATERMARK_THEME,
    ...TEAM_WATERMARK_THEME[teamShortName],
  };

  const canShowTeamLogo =
    Boolean(teamLogoUrl) &&
    !hasTeamLogoError;

  const favoritePlayer: FavoriteProPlayer = {
    type: "pro-player",
    id: player.id,
    nickname: player.nickname,
    slug: player.slug,
    teamShortName,
  };

  const playerIsFavorite =
    isFavorite(favoritePlayer);

  const mainAgents =
    player.mainAgents.slice(0, 3);

  return (
    <article
      className="
        group relative h-full
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
      {/* Full Card Link */}
      <Link
        to={`/valorant/pros/${player.slug}`}
        aria-label={`${player.nickname} 선수 상세 페이지로 이동`}
        className="
          absolute inset-0 z-20
          rounded-[1.5rem]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-white/50
          focus-visible:ring-inset
        "
      />

      {/* Top Color Line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px"
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

      {/* Visual */}
      <div
        className="
          relative min-h-[285px]
          overflow-hidden
          border-b border-white/[0.07]
          bg-slate-950
        "
      >
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
                  circle at 15% 15%,
                  ${primaryColor}44 0%,
                  transparent 42%
                ),
                linear-gradient(
                  145deg,
                  ${secondaryColor}33 0%,
                  #020617 70%
                )
              `,
            }}
          />

          <div
            className="
              absolute -left-20 -top-20
              h-52 w-52
              rounded-full
              opacity-[0.12]
              blur-[80px]
            "
            style={{
              backgroundColor: primaryColor,
            }}
          />

          {canShowTeamLogo && (
            <img
              src={teamLogoUrl ?? undefined}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className={`
                absolute object-contain
                transition-transform duration-500
                group-hover:scale-[1.035]
                ${watermarkTheme.opacity}
                ${watermarkTheme.size}
                ${watermarkTheme.position}
                ${watermarkTheme.filter}
              `}
            />
          )}

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_32%,rgba(2,6,23,0.18)_52%,rgba(2,6,23,0.96)_100%)]" />
        </div>

        {/* Top Badges */}
        <div
          className="
            absolute left-5 right-5 top-5
            z-10 flex
            items-start justify-between
            gap-3
          "
        >
          <div className="flex flex-wrap gap-1.5">
            <span
              className="
                inline-flex items-center
                rounded-full
                border border-white/[0.08]
                bg-slate-950/55
                px-2.5 py-1.5
                text-[9px] font-black
                uppercase tracking-[0.14em]
                text-slate-300
                backdrop-blur-md
              "
            >
              {player.region}
            </span>

            <span
              className="
                inline-flex items-center
                rounded-full
                border border-emerald-400/20
                bg-emerald-400/[0.08]
                px-2.5 py-1.5
                text-[9px] font-black
                text-emerald-200
                backdrop-blur-md
              "
            >
              {STATUS_LABELS[player.status] ?? player.status}
            </span>
          </div>

          {/* Favorite */}
          <button
            type="button"
            aria-label={
              playerIsFavorite
                ? `${player.nickname} 즐겨찾기 해제`
                : `${player.nickname} 즐겨찾기 추가`
            }
            aria-pressed={playerIsFavorite}
            title={
              playerIsFavorite
                ? "즐겨찾기 해제"
                : "즐겨찾기 추가"
            }
            onClick={() =>
              toggleFavorite(favoritePlayer)
            }
            className={`
              relative z-30
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-xl border
              backdrop-blur-md
              transition-all duration-200
              ${
                playerIsFavorite
                  ? "border-amber-300/35 bg-amber-300/15 text-amber-200"
                  : "border-white/[0.08] bg-slate-950/55 text-slate-500 hover:border-amber-300/25 hover:bg-amber-300/10 hover:text-amber-200"
              }
            `}
          >
            <Star
              size={16}
              strokeWidth={2}
              fill={
                playerIsFavorite
                  ? "currentColor"
                  : "none"
              }
            />
          </button>
        </div>

        {/* Player / Team Visual */}
        <div
          className="
            absolute inset-x-0
            bottom-0 top-12
            z-[1]
            flex items-end
            justify-center
          "
        >
          {player.profileImageUrl ? (
            <img
              src={player.profileImageUrl}
              alt={`${player.nickname} 프로필`}
              loading="lazy"
              className="
                h-full w-full
                object-contain object-bottom
                transition-transform duration-500
                group-hover:scale-[1.025]
              "
            />
          ) : (
            <div
              className="
                mb-16
                flex h-36 w-36
                items-center justify-center
                rounded-[1.75rem]
                border border-white/[0.075]
                bg-slate-950/30
                p-4
                shadow-[0_20px_55px_rgba(0,0,0,0.32)]
                backdrop-blur-sm
                transition-transform duration-500
                group-hover:scale-[1.035]
              "
            >
              {canShowTeamLogo ? (
                <img
                  src={teamLogoUrl ?? undefined}
                  alt={`${teamName} 팀 로고`}
                  loading="lazy"
                  onError={() =>
                    setHasTeamLogoError(true)
                  }
                  className="
                    max-h-full max-w-full
                    object-contain
                    drop-shadow-[0_16px_28px_rgba(0,0,0,0.5)]
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
                  {teamShortName}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Player Identity */}
        <div
          className="
            absolute inset-x-0 bottom-0
            z-10
            px-5 pb-5
          "
        >
          <div className="flex items-end justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p
                  className="
                    truncate
                    text-[10px] font-black
                    uppercase tracking-[0.16em]
                    text-slate-400
                  "
                >
                  {teamName}
                </p>

                <span className="text-[9px] font-black text-slate-600">
                  {teamShortName}
                </span>
              </div>

              <h2
                className="
                  mt-1 truncate
                  text-[1.85rem] font-black
                  leading-tight
                  tracking-[-0.045em]
                  text-white
                "
              >
                {player.nickname}
              </h2>

              <p
                className="
                  mt-1 truncate
                  text-xs font-medium
                  text-slate-500
                "
              >
                {player.realName}
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
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Player Info */}
      <div className="relative z-10 p-5">
        {/* Role / Country */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`
              inline-flex items-center gap-1.5
              rounded-full border
              px-3 py-1.5
              text-[10px] font-black
              ${ROLE_STYLES[player.primaryRole]}
            `}
          >
            <Shield size={11} />

            {ROLE_LABELS[player.primaryRole]}
          </span>

          <span
            className="
              inline-flex items-center gap-1.5
              rounded-full
              border border-white/[0.08]
              bg-white/[0.025]
              px-3 py-1.5
              text-[10px] font-bold
              text-slate-400
            "
          >
            <span className="text-sm leading-none">
              {getCountryFlag(
                player.countryCode,
              )}
            </span>

            {player.countryName}
          </span>
        </div>

        {/* Main Agents */}
        <div className="mt-5">
          <div className="mb-2.5 flex items-center gap-2">
            <Crosshair
              size={13}
              className="text-slate-600"
            />

            <p
              className="
                text-[9px] font-black
                uppercase tracking-[0.17em]
                text-slate-600
              "
            >
              대표 요원
            </p>
          </div>

          <div className="flex min-h-7 flex-wrap gap-1.5">
            {mainAgents.length > 0 ? (
              mainAgents.map((agent) => (
                <span
                  key={agent}
                  className="
                    rounded-lg
                    border border-white/[0.075]
                    bg-white/[0.025]
                    px-2.5 py-1.5
                    text-[10px] font-semibold
                    text-slate-400
                  "
                >
                  {getAgentLabel(agent)}
                </span>
              ))
            ) : (
              <span className="text-[10px] text-slate-600">
                등록된 대표 요원이 없습니다
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-4 gap-2">
          <div
            className="
              rounded-xl
              border border-white/[0.07]
              bg-white/[0.025]
              px-3 py-3
            "
          >
            <p className="text-[8px] font-black uppercase tracking-[0.13em] text-slate-600">
              Rating
            </p>

            <p className="mt-1.5 text-base font-black text-white">
              {formatStat(
                player.stats.rating,
              )}
            </p>
          </div>

          <div
            className="
              rounded-xl
              border border-white/[0.07]
              bg-white/[0.025]
              px-3 py-3
            "
          >
            <p className="text-[8px] font-black uppercase tracking-[0.13em] text-slate-600">
              ACS
            </p>

            <p className="mt-1.5 text-base font-black text-white">
              {formatStat(
                player.stats.acs,
                1,
              )}
            </p>
          </div>

          <div
            className="
              rounded-xl
              border border-white/[0.07]
              bg-white/[0.025]
              px-3 py-3
            "
          >
            <p className="text-[8px] font-black uppercase tracking-[0.13em] text-slate-600">
              K/D
            </p>

            <p className="mt-1.5 text-base font-black text-white">
              {formatStat(
                player.stats.kd,
              )}
            </p>
          </div>

          <div
            className="
              rounded-xl
              border border-white/[0.07]
              bg-white/[0.025]
              px-3 py-3
            "
          >
            <p className="text-[8px] font-black uppercase tracking-[0.13em] text-slate-600">
              HS%
            </p>

            <p className="mt-1.5 text-base font-black text-white">
              {player.stats.hs === null
                ? "-"
                : `${formatStat(
                    player.stats.hs,
                    1,
                  )}%`}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            mt-5 flex
            items-center justify-between
            border-t border-white/[0.07]
            pt-4
          "
        >
          <span
            className="
              text-[10px] font-medium
              text-slate-600
            "
          >
            선수 상세 정보
          </span>

          <span
            className="
              inline-flex items-center gap-1.5
              text-[10px] font-bold
              text-slate-500
              transition-colors duration-300
              group-hover:text-slate-200
            "
          >
            프로필 보기

            <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProPlayerCard;