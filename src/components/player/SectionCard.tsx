import type { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  description?: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function SectionCard({
  title,
  description,
  icon,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <section
      className={`overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 shadow-2xl shadow-black/20 backdrop-blur-xl ${className}`}
    >
      <div className="flex items-start gap-3 border-b border-white/10 px-5 py-5 sm:px-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-indigo-300">
          {icon}
        </div>

        <div>
          <h2 className="text-lg font-black tracking-tight text-white">
            {title}
          </h2>

          {description ? (
            <p className="mt-1 text-sm leading-6 text-slate-400">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      <div className="p-5 sm:p-6">{children}</div>
    </section>
  );
}