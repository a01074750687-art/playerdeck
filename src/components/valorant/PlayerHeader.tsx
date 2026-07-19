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

  if (diffSeconds < 10) return "방금 전";
  if (diffSeconds < 60) return `${diffSeconds}초 전`;
  if (diffMinutes < 60) return `${diffMinutes}분 전`;
  if (diffHours < 24) return `${diffHours}시간 전`;
  if (diffDays < 7) return `${diffDays}일 전`;

  return lastUpdated.toLocaleDateString("ko-KR");
}

export default function PlayerHeader({
  player,
  isRefreshing = false,
  refreshCooldown = 0,
  lastUpdated = null,
  onRefresh,
}: Props) {
  const isRefreshDisabled =
    isRefreshing || refreshCooldown > 0 || !onRefresh;

  const playerCardImage = player.playerCard?.wideArt ?? null;

  return (
    <section className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/20">
      {playerCardImage && (
        <>
          <img
            src={playerCardImage}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35 sm:opacity-45"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20" />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/45" />
        </>
      )}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/80 to-transparent" />

      <div className="relative z-10 p-5 sm:p-6 lg:p-8">
        <div className="mb-7 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Deck
                <span className="text-red-400">.GG</span>
              </h2>

              <span className="rounded-full border border-red-400/30 bg-red-400/10 px-2.5 py-1 text-[10px] font-black tracking-[0.18em] text-red-300">
                VALORANT
              </span>
            </div>

            <p className="mt-1.5 text-sm font-medium text-slate-400">
              Competitive Valorant Stats
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span>Player Profile</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-8">
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
              <div className="min-w-0">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-red-300">
                  Riot ID
                </p>

                <h1 className="break-words text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {player.name}
                </h1>

                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="min-w-[112px] rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-sm">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                      Level
                    </p>

                    <p className="mt-1 text-lg font-black text-slate-100">
                      {player.level}
                    </p>
                  </div>

                  <div className="min-w-[112px] rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-sm">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                      Region
                    </p>

                    <p className="mt-1 text-lg font-black uppercase text-slate-100">
                      {player.region}
                    </p>
                  </div>
                </div>
              </div>

              <div className="shrink-0 xl:pr-4 xl:pt-1">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3 backdrop-blur-sm">
                  <p className="mb-2 text-xs font-medium text-slate-500 xl:text-right">
                    최근 갱신 · {formatLastUpdated(lastUpdated)}
                  </p>

                  <button
                    type="button"
                    onClick={onRefresh}
                    disabled={isRefreshDisabled}
                    className="group w-full min-w-[160px] rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm font-black text-red-200 shadow-lg shadow-red-950/10 transition duration-200 hover:-translate-y-0.5 hover:border-red-300/70 hover:bg-red-500/20 hover:text-white disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-50 xl:w-auto"
                  >
                    <span
                      className={
                        isRefreshing
                          ? "inline-block animate-spin"
                          : "inline-block transition-transform duration-300 group-hover:rotate-180"
                      }
                    >
                      ↻
                    </span>

                    <span className="ml-2">
                      {isRefreshing ? "갱신 중..." : "전적 갱신"}
                    </span>
                  </button>

                  {refreshCooldown > 0 && (
                    <p className="mt-2 text-xs font-medium text-red-300/70 xl:text-right">
                      {refreshCooldown}초 후에 다시 시도하세요.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-7">
              <ActPeakRanks actPeakRanks={player.actPeakRanks} />
            </div>

            {/* 모바일 Current Rank */}
            <div className="mt-6 rounded-3xl border border-red-400/25 bg-gradient-to-br from-red-500/15 to-slate-950/70 p-5 shadow-xl shadow-red-950/10 backdrop-blur-md lg:hidden">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-2">
                  <RankIcon rankName={player.rank} size="lg" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs font-black uppercase tracking-[0.16em] text-red-300">
                    Current Rank
                  </p>

                  <h2 className="break-words text-2xl font-black leading-tight text-white">
                    {player.rank}
                  </h2>

                  <p className="mt-1 text-sm font-black text-red-300">
                    {player.rr} RR
                  </p>
                </div>
              </div>

              <div className="my-5 h-px bg-white/10" />

              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                  Peak Rank
                </p>

                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-1.5">
                    <RankIcon rankName={player.peakRank} size="sm" />
                  </div>

                  <p className="text-sm font-black text-slate-100">
                    {player.peakRank}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 데스크톱 Current Rank */}
          <aside className="group hidden h-fit min-w-[290px] rounded-3xl border border-red-400/25 bg-gradient-to-br from-red-500/15 to-slate-950/75 p-6 shadow-2xl shadow-red-950/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-red-300/40 lg:block">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-red-300">
              Competitive Rank
            </p>

            <div className="flex items-center gap-5">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-2 transition duration-300 group-hover:scale-105">
                <RankIcon rankName={player.rank} size="lg" />
              </div>

              <div className="min-w-0">
                <p className="mb-1 text-sm font-semibold text-red-300">
                  Current Rank
                </p>

                <h2 className="break-words text-3xl font-black leading-tight text-white">
                  {player.rank}
                </h2>

                <p className="mt-2 text-base font-black text-red-300">
                  {player.rr} RR
                </p>
              </div>
            </div>

            <div className="my-5 h-px bg-white/10" />

            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                Peak Rank
              </p>

              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-white/10 bg-black/20 p-1.5">
                  <RankIcon rankName={player.peakRank} size="sm" />
                </div>

                <p className="font-black text-slate-100">
                  {player.peakRank}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}