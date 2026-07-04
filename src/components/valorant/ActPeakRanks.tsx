import RankIcon from "./RankIcon";

import type { ActPeakRank } from "../../types/valorant";

type Props = {
  actPeakRanks: ActPeakRank[];
};

export default function ActPeakRanks({ actPeakRanks }: Props) {
  return (
    <div className="mt-8">
      <div className="mb-3">
        <p className="text-xs font-black tracking-widest text-red-400 uppercase">
          Act Peak Rank
        </p>

        <p className="mt-1 text-sm text-slate-500">
          최근 Act 기준 최고 티어
        </p>
      </div>

      {actPeakRanks.length > 0 ? (
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
          {actPeakRanks.map((item) => (
            <div
              key={item.actId}
              className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3"
            >
              <p className="text-[11px] font-black tracking-wider text-slate-500">
                {item.actLabel}
              </p>

              <div className="mt-3 flex items-center gap-3">
                <RankIcon rankName={item.rank} size="sm" />

                <p className="min-w-0 truncate text-sm font-black text-white">
                  {item.rank}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4">
          <p className="text-sm font-bold text-slate-500">
            Act 피크 티어 기록이 없습니다.
          </p>
        </div>
      )}
    </div>
  );
}