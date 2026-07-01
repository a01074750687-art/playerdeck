import { useEffect, useState } from "react";
import { getRankAssetByName } from "../../api/valorantAssetsApi";
import type { ValorantRankAsset } from "../../types/valorantAssets";

type Props = {
  rankName: string;
  size?: "sm" | "lg";
};

const sizeClasses = {
  sm: "w-10 h-10",
  lg: "w-20 h-20",
};

export default function RankIcon({ rankName, size = "lg" }: Props) {
  const [rank, setRank] = useState<ValorantRankAsset | null>(null);

  useEffect(() => {
    let ignore = false;

    async function loadRank() {
      const result = await getRankAssetByName(rankName);

      if (!ignore) {
        setRank(result);
      }
    }

    loadRank();

    return () => {
      ignore = true;
    };
  }, [rankName]);

  if (!rank?.largeIcon) {
    return (
      <div
        className={`${sizeClasses[size]} rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center text-sm text-slate-400 shrink-0`}
      >
        ?
      </div>
    );
  }

  return (
    <img
      src={rank.largeIcon}
      alt={rank.tierName}
      className={`${sizeClasses[size]} object-contain shrink-0 drop-shadow-[0_0_18px_rgba(248,113,113,0.35)]`}
    />
  );
}