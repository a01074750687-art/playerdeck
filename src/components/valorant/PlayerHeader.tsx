import { Link } from "react-router-dom";

import ActPeakRanks from "./ActPeakRanks";
import RankIcon from "./RankIcon";

import type { ProPlayer } from "../../types/proPlayer";
import type { PlayerData } from "../../types/valorant";

type Props = {
  player: PlayerData;
  proPlayer?: ProPlayer;
  isRefreshing?: boolean;
  refreshCooldown?: number;
  lastUpdated?: Date | null;
  onRefresh?: () => void;
};

function formatLastUpdated(
  lastUpdated: Date | null | undefined,
) {
  if (!lastUpdated) {
    return "갱신 기록 없음";
  }

  const diffMs =
    Date.now() - lastUpdated.getTime();
  const diffSeconds = Math.floor(
    diffMs / 1000,
  );
  const diffMinutes = Math.floor(
    diffSeconds / 60,
  );
  const diffHours = Math.floor(
    diffMinutes / 60,
  );
  const diffDays = Math.floor(
    diffHours / 24,
  );

  if (diffSeconds < 10) return "방금 전";
  if (diffSeconds < 60)
    return `${diffSeconds}초 전`;
  if (diffMinutes < 60)
    return `${diffMinutes}분 전`;
  if (diffHours < 24)
    return `${diffHours}시간 전`;
  if (diffDays < 7)
    return `${diffDays}일 전`;

  return lastUpdated.toLocaleDateString(
    "ko-KR",
  );
}

export default function PlayerHeader({
  player,
  proPlayer,
  isRefreshing = false,
  refreshCooldown = 0,
  lastUpdated = null,
  onRefresh,
}: Props) {
  const isRefreshDisabled =
    isRefreshing ||
    refreshCooldown > 0 ||
    !onRefresh;

  const playerCardImage =
    player.playerCard?.wideArt ?? null;

  return (
    <section className="relative mt-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070b18] sm:mt-8 sm:rounded-[28px]">
      {playerCardImage && (
        <>
          <img
            src={playerCardImage}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.2]"
          />

          <div className="pointer-events-none absolute inset-0 bg-[#070b18]/80" />
        </>
      )}

      <div className="relative z-10 p-4 sm:p-7 lg:p-8">
        {/* 상단 브랜드 */}
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] pb-4 sm:pb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <h2 className="text-xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                Deck
                <span className="text-red-400">
                  .GG
                </span>
              </h2>

              <span className="inline-flex items-center rounded-full border border-red-400/25 bg-red-400/[0.08] px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.16em] text-red-300 sm:px-2.5 sm:py-1 sm:text-[9px]">
                Valorant
              </span>
            </div>

            <p className="mt-1.5 hidden text-sm font-medium text-slate-500 sm:block">
              Competitive Valorant Stats
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] font-bold text-slate-400 sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            플레이어 프로필
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:mt-7 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8">
          {/* 플레이어 정보 */}
          <div className="min-w-0">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-red-300 sm:text-[10px]">
              Riot ID
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3">
              <h1 className="min-w-0 break-all text-3xl font-black leading-none tracking-[-0.045em] text-white sm:break-words sm:text-5xl lg:text-[56px]">
                {player.name}
              </h1>

              {proPlayer && (
                <Link
                  to={`/valorant/pros/${proPlayer.slug}`}
                  title={`${proPlayer.nickname} 프로 선수 프로필 보기`}
                  aria-label={`${proPlayer.nickname} 프로 선수 프로필 보기`}
                  className="inline-flex shrink-0 items-center rounded-lg border border-amber-300/30 bg-amber-300/10 px-2 py-1 text-[9px] font-black tracking-[0.12em] text-amber-200 transition hover:border-amber-200/50 sm:px-2.5 sm:py-1.5 sm:text-[10px]"
                >
                  PRO
                </Link>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
              <div className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                <span className="text-[9px] font-black text-slate-500">
                  레벨
                </span>

                <span className="text-sm font-black text-slate-200">
                  {player.level}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                <span className="text-[9px] font-black text-slate-500">
                  지역
                </span>

                <span className="text-sm font-black uppercase text-slate-200">
                  {player.region}
                </span>
              </div>
            </div>

            {/* 갱신 */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 sm:mt-5">
              <p className="text-[10px] font-medium text-slate-500">
                최근 갱신 ·{" "}
                {formatLastUpdated(
                  lastUpdated,
                )}
              </p>

              <button
                type="button"
                onClick={onRefresh}
                disabled={isRefreshDisabled}
                className="inline-flex min-w-[120px] items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.035] px-3 py-2 text-xs font-black text-slate-300 transition hover:border-red-400/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:min-w-[132px] sm:px-4 sm:py-2.5"
              >
                <span
                  className={
                    isRefreshing
                      ? "inline-block animate-spin"
                      : "inline-block"
                  }
                >
                  ↻
                </span>

                <span className="ml-2">
                  {isRefreshing
                    ? "갱신 중..."
                    : "전적 갱신"}
                </span>
              </button>
            </div>

            {refreshCooldown > 0 && (
              <p className="mt-2 text-right text-[10px] font-medium text-red-300/70">
                {refreshCooldown}초 후 다시
                갱신할 수 있습니다.
              </p>
            )}

            {/* Act 최고 랭크 */}
            <div className="mt-5 border-t border-white/[0.06] pt-5 sm:mt-8 sm:pt-6">
              <ActPeakRanks
                actPeakRanks={
                  player.actPeakRanks
                }
              />
            </div>
          </div>

          {/* 현재 랭크 */}
          <aside className="rounded-2xl border border-red-400/20 bg-slate-950/65 p-4 sm:rounded-3xl sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-red-300 sm:text-[10px]">
                  Competitive
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-500">
                  현재 경쟁전 랭크
                </p>
              </div>

              <span className="rounded-full border border-red-400/20 bg-red-400/[0.07] px-2 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-red-300 sm:px-2.5 sm:text-[9px]">
                Current
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3 sm:mt-5 sm:gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-black/20 sm:h-[82px] sm:w-[82px]">
                <RankIcon
                  rankName={player.rank}
                  size="lg"
                />
              </div>

              <div className="min-w-0">
                <h2 className="break-words text-xl font-black leading-tight tracking-tight text-white sm:text-3xl">
                  {player.rank}
                </h2>

                <p className="mt-1 text-sm font-black text-red-300 sm:mt-1.5 sm:text-base">
                  {player.rr} RR
                </p>
              </div>
            </div>

            <div className="my-4 h-px bg-white/[0.08] sm:my-5" />

            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-500">
              최고 랭크
            </p>

            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] sm:h-11 sm:w-11">
                <RankIcon
                  rankName={
                    player.peakRank
                  }
                  size="sm"
                />
              </div>

              <div>
                <p className="text-sm font-black text-slate-100">
                  {player.peakRank}
                </p>

                <p className="mt-0.5 text-[10px] font-medium text-slate-500">
                  최고 기록
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}