import { Shield } from "lucide-react";
import type { ProPlayer, ProTeam } from "../../types/proPlayer";
import { getCountryFlag, hexToRgba } from "../../utils/playerUtils";
import PlayerHeroStats from "./PlayerHeroStats";
import type { DetailItem } from "./DetailGrid";

interface PlayerHeroInfoProps {
  player: ProPlayer;
  team: ProTeam;
  primaryColor: string;
  heroStats: DetailItem[];
}

export default function PlayerHeroInfo({
  player,
  team,
  primaryColor,
  heroStats,
}: PlayerHeroInfoProps) {
  return (
    <div className="flex min-w-0 flex-col justify-center">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-black uppercase tracking-[0.15em]"
          style={{
            borderColor: hexToRgba(primaryColor, 0.45),
            backgroundColor: hexToRgba(primaryColor, 0.14),
            color: "#ffffff",
          }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor: primaryColor,
            }}
          />

          {team.name}
        </span>

        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-emerald-300">
          {player.status}
        </span>

        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-slate-300">
          {player.region}
        </span>
      </div>

      <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-slate-400">
        Professional Valorant Player
      </p>

      <h1 className="mt-3 break-words text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
        {player.nickname}
      </h1>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-300">
        <span>{player.realName}</span>

        <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

        <span className="inline-flex items-center gap-2">
          <span className="text-lg">
            {getCountryFlag(player.countryCode)}
          </span>

          {player.countryName}
        </span>

        <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

        <span className="inline-flex items-center gap-2">
          <Shield size={15} />
          {player.primaryRole}
        </span>
      </div>

      <PlayerHeroStats items={heroStats} />
    </div>
  );
}