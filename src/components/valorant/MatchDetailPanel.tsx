import AgentIcon from "./AgentIcon";

import type { MatchPlayer, RecentMatch } from "../../types/valorant";

type Props = {
  match: RecentMatch;
};

export default function MatchDetailPanel({ match }: Props) {
  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70">
      <TeamTable
        title="ALLY TEAM"
        players={match.allyTeam}
        score={match.score.ally}
        isWinner={match.result === "Win"}
      />

      <div className="h-px bg-white/10" />

      <TeamTable
        title="ENEMY TEAM"
        players={match.enemyTeam}
        score={match.score.enemy}
        isWinner={match.result === "Lose"}
      />
    </div>
  );
}

type TeamTableProps = {
  title: string;
  players: MatchPlayer[];
  score: number;
  isWinner: boolean;
};

function TeamTable({ title, players, score, isWinner }: TeamTableProps) {
  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h5 className="text-xs font-black tracking-widest text-slate-400">
            {title}
          </h5>

          {isWinner && (
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-black text-emerald-300">
              WINNER
            </span>
          )}
        </div>

        <p className="text-2xl font-black text-white">{score}</p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[560px]">
          <div className="grid grid-cols-[1fr_64px_64px_64px_72px] gap-2 px-3 pb-2 text-center text-[11px] font-bold text-slate-500">
            <p className="text-left">PLAYER</p>
            <p>K</p>
            <p>D</p>
            <p>A</p>
            <p>ACS</p>
          </div>

          <div className="space-y-2">
            {players.map((player, index) => (
              <PlayerRow
                key={`${player.name}-${player.tag}-${index}`}
                player={player}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayerRow({ player }: { player: MatchPlayer }) {
  return (
    <div
      className={
        player.isCurrentPlayer
          ? "grid grid-cols-[1fr_64px_64px_64px_72px] items-center gap-2 rounded-xl border border-red-400/40 bg-red-500/10 px-3 py-2 text-center"
          : "grid grid-cols-[1fr_64px_64px_64px_72px] items-center gap-2 rounded-xl border border-white/5 bg-slate-900/80 px-3 py-2 text-center"
      }
    >
      <div className="flex min-w-0 items-center gap-3 text-left">
        <AgentIcon agentName={player.agent} size="sm" />

        <div className="min-w-0">
          <p className="truncate text-sm font-black text-white">
            {player.name}

            {player.isCurrentPlayer && (
              <span className="ml-2 text-[10px] text-red-300">YOU</span>
            )}
          </p>

          <p className="truncate text-xs text-slate-500">
            #{player.tag} · {player.agent}
          </p>
        </div>
      </div>

      <p className="font-bold text-white">{player.kills}</p>
      <p className="font-bold text-white">{player.deaths}</p>
      <p className="font-bold text-white">{player.assists}</p>
      <p className="font-black text-white">{player.acs}</p>
    </div>
  );
}