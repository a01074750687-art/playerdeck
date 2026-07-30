import type { ReactNode } from "react";

export interface DetailItem {
  label: string;
  value: string;
  icon?: ReactNode;
}

interface DetailGridProps {
  items: DetailItem[];
}

export default function DetailGrid({
  items,
}: DetailGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-white/20 hover:bg-white/[0.055]"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            {item.icon ? (
              <span className="text-slate-400">
                {item.icon}
              </span>
            ) : null}

            {item.label}
          </div>

          <p className="mt-3 break-words text-base font-black text-white">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}