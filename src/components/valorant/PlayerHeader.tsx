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

function formatLastUpdated(
  lastUpdated: Date | null | undefined
) {
  if (!lastUpdated) {
    return "갱신 기록 없음";
  }

  const diffMs =
    Date.now() - lastUpdated.getTime();

  const diffSeconds = Math.floor(
    diffMs / 1000
  );

  const diffMinutes = Math.floor(
    diffSeconds / 60
  );

  const diffHours = Math.floor(
    diffMinutes / 60
  );

  const diffDays = Math.floor(
    diffHours / 24
  );

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

  return lastUpdated.toLocaleDateString(
    "ko-KR"
  );
}

export default function PlayerHeader({
  player,
  isRefreshing = false,
  refreshCooldown = 0,
  lastUpdated = null,
  onRefresh,
}: Props) {
  const isRefreshDisabled =
    isRefreshing ||
    refreshCooldown > 0 ||
    !onRefresh;

  return (
    <div className="mt-8 bg-slate-900 border border-white/10 rounded-3xl p-8">
      <p className="text-red-400 font-bold mb-3">
        PLAYER PROFILE
      </p>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex-1 min-w-0">
          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-5">
            <div className="min-w-0">
              <h1 className="text-5xl font-black mb-3 break-words">
                {player.name}
              </h1>

              <p className="text-slate-400">
                Level {player.level}
              </p>

              <p className="text-slate-500 mt-1">
                Region : {player.region}
              </p>
            </div>

            <div className="xl:pt-1 xl:pr-4 shrink-0">
              <p className="text-xs text-slate-500 mb-2 xl:text-right">
                최근 갱신 ·{" "}
                {formatLastUpdated(
                  lastUpdated
                )}
              </p>

              <button
                type="button"
                onClick={onRefresh}
                disabled={isRefreshDisabled}
                className="w-full xl:w-auto min-w-[150px] rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-2.5 text-sm font-black text-red-300 transition hover:bg-red-500/20 hover:border-red-400/60 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isRefreshing
                  ? "↻ 갱신 중..."
                  : "↻ 전적 갱신"}
              </button>

              {refreshCooldown > 0 && (
                <p className="mt-2 text-xs text-red-400/70 xl:text-right">
                  30초 후에 다시
                  시도하세요.
                </p>
              )}
            </div>
          </div>

          <ActPeakRanks
            actPeakRanks={
              player.actPeakRanks
            }
          />
        </div>

        <div className="bg-red-500/10 border border-red-500/30 rounded-3xl p-6 min-w-[280px] h-fit">
          <div className="flex items-center gap-5">
            <RankIcon
              rankName={player.rank}
              size="lg"
            />

            <div>
              <p className="text-red-300 text-sm mb-1">
                Current Rank
              </p>

              <h2 className="text-3xl font-black leading-tight">
                {player.rank}
              </h2>

              <p className="mt-2 text-red-300">
                RR : {player.rr}
              </p>
            </div>
          </div>

          <div className="mt-5 h-px bg-white/10" />

          <div className="mt-4">
            <p className="text-slate-400 text-sm mb-2">
              Peak Rank
            </p>

            <div className="flex items-center gap-3">
              <RankIcon
                rankName={
                  player.peakRank
                }
                size="sm"
              />

              <p className="font-semibold text-slate-100">
                {player.peakRank}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}