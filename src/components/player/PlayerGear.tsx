import { Gamepad2 } from "lucide-react";

import type { DetailItem } from "./DetailGrid";
import DetailGrid from "./DetailGrid";
import SectionCard from "./SectionCard";

interface PlayerGearProps {
  gear: DetailItem[];
  gearVerifiedAt: string;
  gearSourceName: string;
  gearSourceUrl: unknown;
}

export default function PlayerGear({
  gear,
  gearVerifiedAt,
  gearSourceName,
  gearSourceUrl,
}: PlayerGearProps) {
  return (
    <SectionCard
      title="장비"
      description="선수가 사용하는 주요 게이밍 장비입니다."
      icon={<Gamepad2 size={18} />}
      className="lg:col-span-5"
    >
      <DetailGrid items={gear} />

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
            마지막 확인
          </p>

          <p className="mt-3 font-black text-white">{gearVerifiedAt}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
            출처
          </p>

          {typeof gearSourceUrl === "string" &&
          gearSourceUrl.trim() !== "" ? (
            <a
              href={gearSourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex font-black text-indigo-300 transition hover:text-indigo-200"
            >
              {gearSourceName}
            </a>
          ) : (
            <p className="mt-3 font-black text-white">{gearSourceName}</p>
          )}
        </div>
      </div>
    </SectionCard>
  );
}