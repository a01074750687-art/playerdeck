import ActPeakRanks from "./ActPeakRanks";
import RankIcon from "./RankIcon";

import type { PlayerData } from "../../types/valorant";

type Props = {
  player: PlayerData;
  isRefreshing?: boolean;
  lastUpdated?: Date | null;
  onRefresh?: () => void;
};

function formatLastUpdated(lastUpdated: Date | null | undefined) {
  if (!lastUpdated) {
    return "Not updated yet";
  }

  const diffMs = Date.now() - lastUpdated.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);

  if (diffSeconds < 10) {
    return "just now";
  }

  if (diffSeconds < 60) {
    return `${diffSeconds}s ago`;
  }

  if (diffMinutes < 60) {
    return `${diffMinutes}m ago`;
  }

  if (diffHours < 24) {
    return `${diffHours}h ago`;
  }

  return lastUpdated.toLocaleDateString();
}

export default function PlayerHeader({
  player,
  isRefreshing = false,
  lastUpdated = null,
  onRefresh,
}: Props) {
  return (
    <div className="mt-8 bg-slate-900 border border-white/10 rounded-3xl p-8">
      <p className="text-red-400 font-bold mb-3">PLAYER PROFILE</p>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex-1 min-w-0">
          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-5">
            <div className="min-w-0">
              <h1 className="text-5xl font-black mb-3 break-words">
                {player.name}
              </h1>

              <p className="text-slate-400">Level {player.level}</p>

              <p className="text-slate-500 mt-1">
                Region : {player.region}
              </p>
            </div>

            <div className="xl:pt-1 xl:pr-4 shrink-0">
              <p className="text-xs text-slate-500 mb-2 xl:text-right">
                Last Updated · {formatLastUpdated(lastUpdated)}
              </p>

              <button
                type="button"
                onClick={onRefresh}
                disabled={isRefreshing || !onRefresh}
                className="w-full xl:w-auto min-w-[150px] rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-2.5 text-sm font-black text-red-300 transition hover:bg-red-500/20 hover:border-red-400/60 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isRefreshing ? "↻ 갱신 중..." : "↻ 전적 갱신"}
              </button>
            </div>
          </div>

          <ActPeakRanks actPeakRanks={player.actPeakRanks} />
        </div>

        <div className="bg-red-500/10 border border-red-500/30 rounded-3xl p-6 min-w-[280px] h-fit">
          <div className="flex items-center gap-5">
            <RankIcon rankName={player.rank} size="lg" />

            <div>
              <p className="text-red-300 text-sm mb-1">Current Rank</p>

              <h2 className="text-3xl font-black leading-tight">
                {player.rank}
              </h2>

              <p className="mt-2 text-red-300">RR : {player.rr}</p>
            </div>
          </div>

          <div className="mt-5 h-px bg-white/10" />

          <div className="mt-4">
            <p className="text-slate-400 text-sm mb-2">Peak Rank</p>

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
  );
}