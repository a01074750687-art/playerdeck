import RankIcon from "./RankIcon";
import type { PlayerData } from "../../types/valorant";

type Props = {
  player: PlayerData;
};

export default function PlayerHeader({ player }: Props) {
  return (
    <div className="mt-8 bg-slate-900 border border-white/10 rounded-3xl p-8">
      <p className="text-red-400 font-bold mb-3">PLAYER PROFILE</p>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div>
          <h1 className="text-5xl font-black mb-3">{player.name}</h1>

          <p className="text-slate-400">Level {player.level}</p>

          <p className="text-slate-500 mt-1">Region : {player.region}</p>
        </div>

        <div className="bg-red-500/10 border border-red-500/30 rounded-3xl p-6 min-w-[280px]">
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