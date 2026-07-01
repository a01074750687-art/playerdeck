type StatCardProps = {
  title: string;
  value: string | number;
};

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="bg-slate-900 border border-white/10 rounded-3xl p-6">
      <p className="text-slate-400 text-sm mb-2">{title}</p>
      <p className="text-3xl font-black">{value}</p>
    </div>
  );
}