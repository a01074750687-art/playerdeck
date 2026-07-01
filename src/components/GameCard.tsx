import { Link } from "react-router-dom";

type GameCardProps = {
  title: string;
  description: string;
  to: string;
  status?: string;
};

export default function GameCard({
  title,
  description,
  to,
  status,
}: GameCardProps) {
  return (
    <Link
      to={to}
      className="block rounded-2xl border border-white/10 bg-slate-900 p-6 hover:border-red-400 transition"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>

        {status && (
          <span className="text-xs bg-red-500/20 text-red-300 px-3 py-1 rounded-full">
            {status}
          </span>
        )}
      </div>

      <p className="text-slate-400">{description}</p>
    </Link>
  );
}