import type { PlayerData } from "../../types/valorant";

type Props = {
  player: PlayerData;
};

export default function PlayerHeader({ player }: Props) {
  return (
    <div className="mt-8 bg-slate-900 border border-white/10 rounded-3xl p-8">

      <p className="text-red-400 font-bold mb-3">
        PLAYER PROFILE
      </p>

      <div className="flex flex-col lg:flex-row justify-between gap-8">

        <div>

          <h1 className="text-5xl font-black mb-3">
            {player.name}
          </h1>

          <p className="text-slate-400">
            Level {player.level}
          </p>

          <p className="text-slate-500 mt-1">
            Region : {player.region}
          </p>

        </div>

        <div className="bg-red-500/10 border border-red-500/30 rounded-3xl p-6 min-w-[220px]">

          <p className="text-red-300 text-sm mb-2">
            Current Rank
          </p>

          <h2 className="text-3xl font-black">
            {player.rank}
          </h2>

          <p className="mt-2 text-red-300">
            RR : {player.rr}
          </p>

          <p className="text-slate-400 mt-4">
            Peak Rank
          </p>

          <p className="font-semibold">
            {player.peakRank}
          </p>

        </div>

      </div>

    </div>
  );
}