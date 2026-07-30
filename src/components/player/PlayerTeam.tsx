import { BadgeCheck, Globe2 } from "lucide-react";

import type { ProTeam } from "../../types/proPlayer";
import { hexToRgba } from "../../utils/playerUtils";
import SectionCard from "./SectionCard";

interface PlayerTeamProps {
  team: ProTeam;
  teamLogoUrl: string | null;
  teamInitials: string;
  primaryColor: string;
  secondaryColor: string;
}

export default function PlayerTeam({
  team,
  teamLogoUrl,
  teamInitials,
  primaryColor,
  secondaryColor,
}: PlayerTeamProps) {
  return (
    <SectionCard
      title="Team"
      description="현재 소속 팀 정보입니다."
      icon={<Globe2 size={21} />}
      className="lg:col-span-12"
    >
      <div
        className="relative overflow-hidden rounded-3xl border border-white/10 p-5 sm:p-6"
        style={{
          background: `linear-gradient(
            125deg,
            ${hexToRgba(primaryColor, 0.17)},
            ${hexToRgba(secondaryColor, 0.12)},
            rgba(255, 255, 255, 0.025)
          )`,
        }}
      >
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-black/20 p-4">
            {teamLogoUrl ? (
              <img
                src={teamLogoUrl}
                alt={`${team.name} 로고`}
                className="h-full w-full object-contain"
              />
            ) : (
              <span className="text-2xl font-black">
                {teamInitials}
              </span>
            )}
          </div>

          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              Current organization
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
              {team.name}
            </h2>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300">
                {team.shortName}
              </span>

              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300">
                {team.region}
              </span>
            </div>
          </div>

          <div className="sm:ml-auto">
            <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-black text-slate-300">
              <BadgeCheck size={17} />
              Team page 준비 중
            </span>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}