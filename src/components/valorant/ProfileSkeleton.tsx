export default function ProfileSkeleton() {
  return (
    <div className="mt-8">
      <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 animate-pulse">
        <div className="h-4 w-32 bg-slate-800 rounded mb-6" />
        <div className="h-12 w-72 bg-slate-800 rounded mb-4" />
        <div className="h-4 w-48 bg-slate-800 rounded" />
      </div>

      <div className="grid md:grid-cols-4 gap-4 mt-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-slate-900 border border-white/10 rounded-3xl p-6 animate-pulse"
          >
            <div className="h-4 w-16 bg-slate-800 rounded mb-4" />
            <div className="h-8 w-20 bg-slate-800 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}