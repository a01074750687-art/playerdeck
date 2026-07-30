import { UserRound } from "lucide-react";

import SectionCard from "./SectionCard";

interface PlayerAgentsProps {
  mainAgents: string[];
}

export default function PlayerAgents({
  mainAgents,
}: PlayerAgentsProps) {
  return (
    <SectionCard
      title="Main Agents"
      description="선수가 자주 활용하는 대표 요원 목록입니다."
      icon={<UserRound size={21} />}
      className="lg:col-span-5"
    >
      {mainAgents.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {mainAgents.map((agent, index) => (
            <div
              key={agent}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-5 transition"
            >
              <span className="absolute right-3 top-2 text-4xl font-black text-white/[0.035]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="relative text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                Agent
              </p>

              <p className="relative mt-2 text-lg font-black text-white">
                {agent}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-400">
          등록된 대표 요원이 없습니다.
        </p>
      )}
    </SectionCard>
  );
}