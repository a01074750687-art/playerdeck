import { Shield } from "lucide-react";

import SectionCard from "./SectionCard";

interface PlayerRolesProps {
  primaryRole: string;
}

export default function PlayerRoles({
  primaryRole,
}: PlayerRolesProps) {
  return (
    <SectionCard
      title="Roles"
      description="선수가 주로 담당하는 인게임 역할입니다."
      icon={<Shield size={21} />}
      className="lg:col-span-5"
    >
      <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
          Primary role
        </p>

        <p className="mt-3 text-3xl font-black tracking-tight text-white">
          {primaryRole}
        </p>
      </div>
    </SectionCard>
  );
}