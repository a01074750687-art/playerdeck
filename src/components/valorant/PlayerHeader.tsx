import ActPeakRanks from "./ActPeakRanks";
import RankIcon from "./RankIcon";

import type { PlayerData } from "../../types/valorant";

type Props = {
  player: PlayerData;
  isRefreshing?: boolean;
  refreshCooldown?: number;
  lastUpdated?: Date | null;
  onRefresh?: () => void;
};

function formatLastUpdated(lastUpdated: Date | null | undefined) {
  if (!lastUpdated) {
    return "갱신 기록 없음";
  }

  const diffMs = Date.now() - lastUpdated.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSeconds < 10) {
    return "방금 전";
  }

  if (diffSeconds < 60) {
    return `${diffSeconds}초 전`;
  }

  if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  }

  if (diffHours < 24) {
    return `${diffHours}시간 전`;
  }

  if (diffDays < 7) {
    return `${diffDays}일 전`;
  }

  return lastUpdated.toLocaleDateString("ko-KR");
}

export default function PlayerHeader({
  player,
  isRefreshing = false,
  refreshCooldown = 0,
  lastUpdated = null,
  onRefresh,
}: Props) {
  const isRefreshDisabled = isRefreshing || refreshCooldown > 0 || !onRefresh;
  const playerCardImage = player.playerCard?.wideArt ?? null;

  return (
    <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-5 sm:p-6 lg:p-8">
      {playerCardImage && (
        <>
          <img
            src={playerCardImage}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 sm:opacity-50"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/50 to-slate-900/10" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/40" />
        </>
      )}

      <div className="relative z-10">
        <p className="mb-3 text-sm font-bold text-red-400 sm:text-base">
          PLAYER PROFILE
        </p>

        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-8">
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
              <div className="min-w-0">
                <h1 className="mb-3 break-words text-4xl font-black leading-tight sm:text-5xl">
                  {player.name}
                </h1>

                <p className="text-slate-400">Level {player.level}</p>

                <p className="mt-1 text-slate-500">
                  Region : {player.region}
                </p>
              </div>

              <div className="shrink-0 xl:pr-4 xl:pt-1">
                <p className="mb-2 text-xs text-slate-500 xl:text-right">
                  최근 갱신 · {formatLastUpdated(lastUpdated)}
                </p>

                <button
                  type="button"
                  onClick={onRefresh}
                  disabled={isRefreshDisabled}
                  className="w-full min-w-[150px] rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-2.5 text-sm font-black text-red-300 transition hover:border-red-400/60 hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-50 xl:w-auto"
                >
                  {isRefreshing ? "↻ 갱신 중..." : "↻ 전적 갱신"}
                </button>

                {refreshCooldown > 0 && (
                  <p className="mt-2 text-xs text-red-400/70 xl:text-right">
                    30초 후에 다시 시도하세요.
                  </p>
                )}
              </div>
            </div>

            <ActPeakRanks actPeakRanks={player.actPeakRanks} />
          </div>

          <div className="h-fit w-full rounded-3xl border border-red-500/30 bg-red-500/10 p-5 backdrop-blur-sm sm:p-6 lg:w-auto lg:min-w-[280px]">
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <RankIcon rankName={player.rank} size="lg" />

              <div className="min-w-0">
                <p className="mb-1 text-sm text-red-300">Current Rank</p>

                <h2 className="break-words text-2xl font-black leading-tight sm:text-3xl">
                  {player.rank}
                </h2>

                <p className="mt-2 text-red-300">RR : {player.rr}</p>
              </div>
            </div>

            <div className="mt-5 h-px bg-white/10" />

            <div className="mt-4">
              <p className="mb-2 text-sm text-slate-400">Peak Rank</p>

              <div className="flex items-center gap-3">
                <RankIcon rankName={player.peakRank} size="sm" />

                <p className="font-semibold text-slate-100">
                  {player.peakRank}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}