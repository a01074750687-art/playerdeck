import { Mouse } from "lucide-react";

import type { DetailItem } from "./DetailGrid";
import DetailGrid from "./DetailGrid";
import SectionCard from "./SectionCard";

interface PlayerMouseSettingsProps {
  mouseSettings: DetailItem[];
  settingsVerifiedAt: string;
  settingsSourceName: string;
  settingsSourceUrl: unknown;
}

export default function PlayerMouseSettings({
  mouseSettings,
  settingsVerifiedAt,
  settingsSourceName,
  settingsSourceUrl,
}: PlayerMouseSettingsProps) {
  return (
    <SectionCard
      title="마우스 설정"
      description="인게임 조준과 입력 장치 설정입니다."
      icon={<Mouse size={18} />}
      className="lg:col-span-7"
    >
      <DetailGrid items={mouseSettings} />

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
            마지막 확인
          </p>

          <p className="mt-3 font-black text-white">
            {settingsVerifiedAt}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
            출처
          </p>

          {typeof settingsSourceUrl === "string" &&
          settingsSourceUrl.trim() !== "" ? (
            <a
              href={settingsSourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-indigo-300 transition hover:text-indigo-200"
            >
              {settingsSourceName}
            </a>
          ) : (
            <p className="mt-3 font-black text-white">
              {settingsSourceName}
            </p>
          )}
        </div>
      </div>
    </SectionCard>
  );
}