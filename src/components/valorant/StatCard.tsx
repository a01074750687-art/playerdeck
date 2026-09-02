type StatCardProps = {
  title: string;
  value: string | number;
};

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-4 sm:rounded-3xl sm:p-6">
      <p className="mb-1.5 text-xs text-slate-400 sm:mb-2 sm:text-sm">
        {title}
      </p>

      <p className="text-2xl font-black sm:text-3xl">
        {value}
      </p>
    </div>
  );
}