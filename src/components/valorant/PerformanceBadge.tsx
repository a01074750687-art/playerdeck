import type { RecentMatch } from "../../types/valorant";

type Props = {
  match: RecentMatch;
};

export default function PerformanceBadge({ match }: Props) {
  const badge = getBadge(match);

  if (!badge) return null;

  return (
    <span className={badge.className}>
      {badge.label}
    </span>
  );
}

function getBadge(match: RecentMatch) {
  if (match.isMatchMvp) {
    return {
      label: "🏅 MATCH MVP",
      className:
        "inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-500/15 px-3 py-1 text-xs font-black text-yellow-300",
    };
  }

  if (match.isTeamMvp) {
    return {
      label: "🔥 TEAM MVP",
      className:
        "inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/15 px-3 py-1 text-xs font-black text-orange-300",
    };
  }

  if (match.kills >= 25) {
    return {
      label: "⭐ ACE",
      className:
        "inline-flex items-center rounded-full border border-red-400/30 bg-red-500/15 px-3 py-1 text-xs font-black text-red-300",
    };
  }

  if (match.kills >= 20) {
    return {
      label: "⚡ CARRY",
      className:
        "inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/15 px-3 py-1 text-xs font-black text-sky-300",
    };
  }

  return null;
}