import { Copy, Crosshair } from "lucide-react";

import SectionCard from "./SectionCard";

interface PlayerCrosshairProps {
  playerNickname: string;
  crosshairCode: string;
  copied: boolean;
  handleCopyCrosshair: () => void;

  crosshairVerifiedAt: string;
  crosshairSourceName: string;
  crosshairSourceUrl: unknown;

  crosshairColor: string;
  outlines: string;
  centerDot: string;
}

export default function PlayerCrosshair({
  playerNickname,
  crosshairCode,
  copied,
  handleCopyCrosshair,
  crosshairVerifiedAt,
  crosshairSourceName,
  crosshairSourceUrl,
  crosshairColor,
  outlines,
  centerDot,
}: PlayerCrosshairProps) {
  return (
    <SectionCard
      title="Crosshair"
      description="선수가 사용하는 조준선 설정입니다."
      icon={<Crosshair size={21} />}
      className="lg:col-span-7"
    >
      <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-[#050811]">
        <div className="border-b border-white/10 px-4 py-3">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
            조준선 미리보기
          </p>
        </div>

        <div className="flex justify-center p-8">
          <div className="relative flex h-40 w-40 items-center justify-center rounded-xl bg-[#0f172a]">
            <img
              src={`https://api.henrikdev.xyz/valorant/v1/crosshair/generate?id=${encodeURIComponent(
                crosshairCode,
              )}&api_key=${import.meta.env.VITE_HENRIK_API_KEY}`}
              alt={`${playerNickname} 조준선 미리보기`}
              className="h-auto w-auto max-h-48 max-w-48 object-contain"
              onError={(event) => {
                console.error(
                  "Crosshair preview load failed",
                  event.currentTarget.src,
                );
              }}
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#050811]">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
            조준선 코드
          </p>

          <button
            type="button"
            onClick={handleCopyCrosshair}
            disabled={crosshairCode === "-"}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-black text-slate-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Copy size={14} />
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <code className="block min-h-24 break-all px-4 py-5 text-sm leading-7 text-indigo-200">
          {crosshairCode}
        </code>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
            Last Verified
          </p>

          <p className="mt-3 font-black text-white">
            {crosshairVerifiedAt}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
            Source
          </p>

          {typeof crosshairSourceUrl === "string" &&
          crosshairSourceUrl.trim() !== "" ? (
            <a
              href={crosshairSourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex font-black text-indigo-300 transition hover:text-indigo-200"
            >
              {crosshairSourceName}
            </a>
          ) : (
            <p className="mt-3 font-black text-white">
              {crosshairSourceName}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
            색상
          </p>

          <p className="mt-3 font-black text-white">
            {crosshairColor}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
            윤곽선
          </p>

          <p className="mt-3 font-black text-white">{outlines}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
            중앙 점
          </p>

          <p className="mt-3 font-black text-white">{centerDot}</p>
        </div>
      </div>
    </SectionCard>
  );
}