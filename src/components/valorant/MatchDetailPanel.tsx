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

function TeamTable({
  title,
  players,
  score,
  isWinner,
}: TeamTableProps) {
  const sortedPlayers = [...players].sort((a, b) => {
    return b.acs - a.acs;
  });

  return (
    <div className="p-3 sm:p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <h5 className="truncate text-xs font-black tracking-widest text-slate-400">
            {title}
          </h5>

          {isWinner && (
            <span className="shrink-0 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-black text-emerald-300">
              WINNER
            </span>
          )}
        </div>

        <p className="shrink-0 text-2xl font-black text-white">
          {score}
        </p>
      </div>

      <div className="space-y-2">
        <div className="grid grid-cols-[1fr_96px_52px] gap-2 px-2 pb-1 text-[10px] font-black tracking-wider text-slate-500 sm:grid-cols-[1fr_64px_64px_64px_72px] sm:px-3 sm:text-center sm:text-[11px]">
          <p className="text-left">PLAYER</p>

          <p className="text-right sm:text-center">
            KDA
          </p>

          <p className="text-right sm:hidden">
            ACS
          </p>

          <p className="hidden sm:block">
            K
          </p>

          <p className="hidden sm:block">
            D
          </p>

          <p className="hidden sm:block">
            A
          </p>

          <p className="hidden sm:block">
            ACS
          </p>
        </div>

        {sortedPlayers.map((player, index) => (
          <PlayerRow
            key={`${player.name}-${player.tag}-${index}`}
            player={player}
          />
        ))}
      </div>
    </div>
  );
}

function PlayerRow({
  player,
}: {
  player: MatchPlayer;
}) {
  return (
    <div
      className={
        player.isCurrentPlayer
          ? "grid grid-cols-[1fr_96px_52px] items-center gap-2 rounded-xl border border-red-400/40 bg-red-500/10 px-2 py-2 text-right sm:grid-cols-[1fr_64px_64px_64px_72px] sm:px-3 sm:text-center"
          : "grid grid-cols-[1fr_96px_52px] items-center gap-2 rounded-xl border border-white/5 bg-slate-900/80 px-2 py-2 text-right sm:grid-cols-[1fr_64px_64px_64px_72px] sm:px-3 sm:text-center"
      }
    >
      <div className="flex min-w-0 items-center gap-2 text-left sm:gap-3">
        <AgentIcon
          agentName={player.agent}
          size="sm"
        />

        <div className="min-w-0">
          <p className="truncate text-sm font-black text-white">
            {player.name}

            {player.isCurrentPlayer && (
              <span className="ml-2 text-[10px] text-red-300">
                YOU
              </span>
            )}
          </p>

          <p className="truncate text-xs text-slate-500">
            #{player.tag} · {player.agent}
          </p>
        </div>
      </div>

      <p className="whitespace-nowrap text-sm font-black text-white sm:hidden">
        {player.kills} / {player.deaths} / {player.assists}
      </p>

      <p className="text-sm font-black text-white sm:hidden">
        {player.acs}
      </p>

      <p className="hidden font-bold text-white sm:block">
        {player.kills}
      </p>

      <p className="hidden font-bold text-white sm:block">
        {player.deaths}
      </p>

      <p className="hidden font-bold text-white sm:block">
        {player.assists}
      </p>

      <p className="hidden font-black text-white sm:block">
        {player.acs}
      </p>
    </div>
  );
}