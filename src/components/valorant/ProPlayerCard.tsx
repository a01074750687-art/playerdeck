import { useState } from "react";
import {
  ArrowUpRight,
  Crosshair,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import type {
  ProPlayer,
  ProPlayerRole,
} from "../../types/proPlayer";

interface ProPlayerCardProps {
  player: ProPlayer;
}

const ROLE_LABELS: Record<ProPlayerRole, string> = {
  Duelist: "DUELIST",
  Initiator: "INITIATOR",
  Controller: "CONTROLLER",
  Sentinel: "SENTINEL",
  Flex: "FLEX",
};

const ROLE_STYLES: Record<ProPlayerRole, string> = {
  Duelist:
    "border-red-400/30 bg-red-400/10 text-red-200",
  Initiator:
    "border-sky-400/30 bg-sky-400/10 text-sky-200",
  Controller:
    "border-violet-400/30 bg-violet-400/10 text-violet-200",
  Sentinel:
    "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  Flex:
    "border-amber-400/30 bg-amber-400/10 text-amber-200",
};

/**
 * 팀별 배경 워터마크 투명도입니다.
 *
 * 로고 모양과 원본 이미지 밝기가 팀마다 다르기 때문에
 * 모든 팀에 같은 투명도를 적용하지 않고 개별 관리합니다.
 */
const WATERMARK_OPACITY: Record<string, string> = {
  T1: "opacity-[0.20]",

  GEN: "opacity-[0.08]",
  KRX: "opacity-[0.08]",
  PRX: "opacity-[0.08]",
  RRQ: "opacity-[0.08]",
  TS: "opacity-[0.08]",
  GE: "opacity-[0.08]",
  FS: "opacity-[0.08]",
  DFM: "opacity-[0.08]",
  ZETA: "opacity-[0.08]",
  NS: "opacity-[0.08]",
  VL: "opacity-[0.08]",
};

/**
 * 팀별 배경 워터마크 이미지 필터입니다.
 *
 * T1 로고는 선 형태의 빨간색 로고라서 grayscale을 적용하면
 * 어두운 배경에서 지나치게 흐려집니다.
 *
 * 따라서 T1만 원본 색상을 유지하면서 밝기와 채도를 보정합니다.
 */
const WATERMARK_FILTER: Record<string, string> = {
  T1: "grayscale-0 brightness-150 saturate-200",

  GEN: "grayscale",
  KRX: "grayscale",
  PRX: "grayscale",
  RRQ: "grayscale",
  TS: "grayscale",
  GE: "grayscale",
  FS: "grayscale",
  DFM: "grayscale",
  ZETA: "grayscale",
  NS: "grayscale",
  VL: "grayscale",
};

const formatStat = (
  value: number,
  maximumFractionDigits = 2,
): string => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits,
  }).format(value);
};

const ProPlayerCard = ({
  player,
}: ProPlayerCardProps) => {
  const [hasTeamLogoError, setHasTeamLogoError] =
    useState(false);

  const team = player.team;

  const teamName = team?.name ?? "Free Agent";
  const teamShortName = team?.shortName ?? "FA";
  const teamLogoUrl = team?.logoUrl ?? null;

  const teamPrimaryColor =
    team?.primaryColor ?? "#64748B";

  const teamSecondaryColor =
    team?.secondaryColor ?? "#0F172A";

  const logoOpacity =
    WATERMARK_OPACITY[teamShortName] ??
    "opacity-[0.06]";

  const logoFilter =
    WATERMARK_FILTER[teamShortName] ??
    "grayscale";

  const canShowTeamLogo =
    Boolean(teamLogoUrl) && !hasTeamLogoError;

  return (
    <Link
      to={`/valorant/pros/${player.slug}`}
      aria-label={`${player.nickname} 선수 상세 페이지로 이동`}
      className="group block h-full"
    >
      <article className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-[0_24px_80px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_28px_100px_rgba(0,0,0,0.45)]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-35 blur-3xl transition-opacity duration-300 group-hover:opacity-50"
          style={{
            background: `linear-gradient(135deg, ${teamPrimaryColor}, ${teamSecondaryColor})`,
          }}
        />

        <div
          className="absolute inset-x-0 top-0 h-1"
          style={{
            background: `linear-gradient(90deg, ${teamPrimaryColor}, ${teamSecondaryColor})`,
          }}
        />

        <div className="relative flex h-full flex-col">
          <div className="relative min-h-[270px] overflow-hidden border-b border-white/10 bg-slate-900">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background: `
                  radial-gradient(
                    circle at 20% 20%,
                    ${teamPrimaryColor}55 0%,
                    transparent 48%
                  ),
                  linear-gradient(
                    145deg,
                    ${teamSecondaryColor} 0%,
                    #020617 72%
                  )
                `,
              }}
            />

            {canShowTeamLogo && (
              <img
                src={teamLogoUrl ?? undefined}
                alt=""
                aria-hidden="true"
                className={`pointer-events-none absolute -right-8 top-10 h-52 w-52 object-contain transition-opacity duration-300 ${logoOpacity} ${logoFilter}`}
              />
            )}

            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_35%,rgba(2,6,23,0.92)_100%)]" />

            <div className="absolute left-5 top-5 z-20 flex items-center gap-2">
              <span className="rounded-full border border-white/10 bg-slate-950/75 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md">
                {player.region}
              </span>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-200 backdrop-blur-md">
                {player.status}
              </span>
            </div>

            <div className="absolute right-5 top-5 z-20">
              <div className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 px-3 text-xs font-black tracking-[0.12em] text-white backdrop-blur-md">
                {teamShortName}
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 top-12 z-10 flex items-end justify-center">
              {player.profileImageUrl ? (
                <img
                  src={player.profileImageUrl}
                  alt={`${player.nickname} 프로필`}
                  loading="lazy"
                  className="h-full w-full object-contain object-bottom transition duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="mb-9 flex h-40 w-40 items-center justify-center transition duration-500 group-hover:scale-105">
                  {canShowTeamLogo ? (
                    <img
                      src={teamLogoUrl ?? undefined}
                      alt={`${teamName} 팀 로고`}
                      loading="lazy"
                      onError={() =>
                        setHasTeamLogoError(true)
                      }
                      className="max-h-32 max-w-32 object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)]"
                    />
                  ) : (
                    <div
                      className="flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-slate-950/45 px-4 text-center text-3xl font-black tracking-[-0.04em] text-white shadow-2xl backdrop-blur-md"
                      style={{
                        boxShadow: `0 20px 50px ${teamPrimaryColor}33`,
                      }}
                    >
                      {teamShortName}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-5">
              <div className="flex items-end justify-between gap-4">
                <div className="min-w-0">
                  <p className="mb-1 truncate text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    {teamName}
                  </p>

                  <h2 className="truncate text-3xl font-black tracking-[-0.04em] text-white">
                    {player.nickname}
                  </h2>

                  <p className="mt-1 truncate text-sm text-slate-400">
                    {player.realName}
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-black tracking-[0.14em] ${
                  ROLE_STYLES[player.primaryRole]
                }`}
              >
                <Shield size={13} />

                {ROLE_LABELS[player.primaryRole]}
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-300">
                <span className="text-base leading-none">
                  {player.countryCode === "KR"
                    ? "🇰🇷"
                    : player.countryCode === "ID"
                      ? "🇮🇩"
                      : player.countryCode === "RU"
                        ? "🇷🇺"
                        : "🌐"}
                </span>

                {player.countryName}
              </span>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center gap-2">
                <Users
                  size={15}
                  className="text-slate-500"
                />

                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
                  Roles
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {player.roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs font-semibold text-slate-300"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center gap-2">
                <Crosshair
                  size={15}
                  className="text-slate-500"
                />

                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
                  Main Agents
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {player.mainAgents.map((agent) => (
                  <span
                    key={agent}
                    className="rounded-lg border border-white/10 bg-slate-900/80 px-2.5 py-1.5 text-xs font-semibold text-slate-200"
                  >
                    {agent}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500">
                  Rating
                </p>

                <p className="mt-1 text-lg font-black text-white">
                  {formatStat(player.stats.rating)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500">
                  ACS
                </p>

                <p className="mt-1 text-lg font-black text-white">
                  {formatStat(player.stats.acs, 1)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500">
                  K/D
                </p>

                <p className="mt-1 text-lg font-black text-white">
                  {formatStat(player.stats.kd)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500">
                  HS%
                </p>

                <p className="mt-1 text-lg font-black text-white">
                  {formatStat(player.stats.hs, 1)}%
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Target size={14} />

                <span>
                  eDPI{" "}
                  <strong className="font-bold text-slate-300">
                    {formatStat(
                      player.settings.edpi,
                      1,
                    )}
                  </strong>
                </span>
              </div>

              <span className="text-xs font-bold text-slate-400 transition-colors duration-300 group-hover:text-white">
                View Profile
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProPlayerCard;