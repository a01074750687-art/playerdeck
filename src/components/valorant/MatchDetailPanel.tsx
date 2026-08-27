import AgentIcon from "./AgentIcon";

import type {
  MatchPlayer,
  RecentMatch,
  RoundResult,
} from "../../types/valorant";

type Props = {
  match: RecentMatch;
};

type RoundOutcome =
  | "elimination"
  | "defuse"
  | "detonation"
  | "time"
  | "other";

export default function MatchDetailPanel({
  match,
}: Props) {
  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70">
      {/* 라운드 진행 */}
      <RoundTimeline match={match} />

      <div className="h-px bg-white/10" />

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

/* -------------------------------------------------------------------------- */
/* Round Timeline                                                             */
/* -------------------------------------------------------------------------- */

function RoundTimeline({
  match,
}: {
  match: RecentMatch;
}) {
  const allyTeam =
    match.allyTeam.find(
      (player) => player.isCurrentPlayer,
    )?.team ??
    match.allyTeam[0]?.team ??
    "";

  const enemyTeam =
    match.enemyTeam[0]?.team ?? "";

  if (match.rounds.length === 0) {
    return null;
  }

  return (
    <div className="bg-[#080d19]/90 px-3 py-4 sm:px-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
            ROUND HISTORY
          </p>

          <p className="mt-1 text-xs text-slate-600">
            라운드별 승리 방식
          </p>
        </div>

        <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500">
          <RoundLegend
            type="elimination"
            label="전멸"
          />

          <RoundLegend
            type="defuse"
            label="해체"
          />

          <RoundLegend
            type="detonation"
            label="폭발"
          />

          <RoundLegend
            type="time"
            label="시간"
          />
        </div>
      </div>

      <div className="overflow-x-auto pb-1">
        <div className="min-w-max space-y-2">
          <RoundTimelineRow
            label="아군"
            score={match.score.ally}
            team={allyTeam}
            rounds={match.rounds}
            variant="ally"
          />

          <RoundTimelineRow
            label="상대"
            score={match.score.enemy}
            team={enemyTeam}
            rounds={match.rounds}
            variant="enemy"
          />
        </div>
      </div>
    </div>
  );
}

type RoundTimelineRowProps = {
  label: string;
  score: number;
  team: string;
  rounds: RoundResult[];
  variant: "ally" | "enemy";
};

function RoundTimelineRow({
  label,
  score,
  team,
  rounds,
  variant,
}: RoundTimelineRowProps) {
  const isAlly = variant === "ally";

  return (
    <div className="flex h-9 items-center gap-3">
      {/* 팀 이름 */}
      <div
        className={
          isAlly
            ? "w-9 shrink-0 text-xs font-black text-cyan-300"
            : "w-9 shrink-0 text-xs font-black text-rose-300"
        }
      >
        {label}
      </div>

      {/* 스코어 */}
      <div
        className={
          isAlly
            ? "w-6 shrink-0 text-center text-lg font-black text-cyan-300"
            : "w-6 shrink-0 text-center text-lg font-black text-rose-300"
        }
      >
        {score}
      </div>

      <div className="flex items-center">
        {rounds.map((round, index) => {
          const isWinner = isSameTeam(
            round.winningTeam,
            team,
          );

          const outcome =
            getRoundOutcome(round);

          return (
            <div
              key={`${variant}-${index}`}
              className="flex items-center"
            >
              {/* 12라운드 이후 공수 교대 구분 */}
              {index === 12 && (
                <div className="mx-2 h-5 w-px bg-white/15" />
              )}

              <RoundMarker
                roundNumber={index + 1}
                outcome={outcome}
                isWinner={isWinner}
                variant={variant}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

type RoundMarkerProps = {
  roundNumber: number;
  outcome: RoundOutcome;
  isWinner: boolean;
  variant: "ally" | "enemy";
};

function RoundMarker({
  roundNumber,
  outcome,
  isWinner,
  variant,
}: RoundMarkerProps) {
  const title = `${roundNumber}라운드 · ${
    isWinner
      ? getRoundOutcomeLabel(outcome)
      : "패배"
  }`;

  if (!isWinner) {
    return (
      <div
        title={title}
        className="flex h-7 w-7 items-center justify-center"
      >
        <span className="h-1 w-1 rounded-full bg-slate-700/80" />
      </div>
    );
  }

  const markerClassName =
    variant === "ally"
      ? "text-cyan-200"
      : "text-rose-200";

  return (
    <div
      title={title}
      className={`
        flex h-9 w-9
        items-center justify-center
        ${markerClassName}
      `}
    >
      <RoundOutcomeIcon
        type={outcome}
        className="h-[28px] w-[28px]"
      />
    </div>
  );
}

function RoundLegend({
  type,
  label,
}: {
  type: RoundOutcome;
  label: string;
}) {
  return (
    <div className="hidden items-center gap-1.5 sm:flex">
      <span className="flex h-6 w-6 items-center justify-center text-slate-400">
        <RoundOutcomeIcon
          type={type}
          className="h-[24px] w-[24px]"
        />
      </span>

      <span>{label}</span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Round Helpers                                                              */
/* -------------------------------------------------------------------------- */

function getRoundOutcome(
  round: RoundResult,
): RoundOutcome {
  const normalized = round.endType
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/_/g, "")
    .replace(/-/g, "");

  /*
   * Henrik API end_type 값 우선
   * 예:
   * BombDefused
   * BombDetonated
   * Eliminated
   */

  if (
    round.bombDefused ||
    normalized.includes("defus")
  ) {
    return "defuse";
  }

  if (
    normalized.includes("deton") ||
    normalized.includes("explod")
  ) {
    return "detonation";
  }

  if (
    normalized.includes("elimin") ||
    normalized.includes("kill")
  ) {
    return "elimination";
  }

  if (
    normalized.includes("time") ||
    normalized.includes("timer")
  ) {
    return "time";
  }

  /*
   * bombPlanted만으로 폭발이라고 단정하면
   * 설치 후 전멸 라운드도 잘못 분류될 수 있으므로
   * 판별할 수 없는 경우는 other로 남긴다.
   */
  return "other";
}

function getRoundOutcomeLabel(
  type: RoundOutcome,
) {
  switch (type) {
    case "elimination":
      return "전멸";

    case "defuse":
      return "스파이크 해체";

    case "detonation":
      return "스파이크 폭발";

    case "time":
      return "시간 종료";

    default:
      return "라운드 승리";
  }
}

function isSameTeam(
  first: string,
  second: string,
) {
  if (!first || !second) {
    return false;
  }

  return (
    first.toLowerCase() ===
    second.toLowerCase()
  );
}

/* -------------------------------------------------------------------------- */
/* Round Icons                                                                */
/* -------------------------------------------------------------------------- */

const ROUND_OUTCOME_ICON_PATHS: Partial<
  Record<RoundOutcome, string>
> = {
  elimination: "/RoundIcons/elimination.png",
  defuse: "/RoundIcons/defuse.png",
  detonation: "/RoundIcons/detonation.png",
  time: "/RoundIcons/time.png",
};

function RoundOutcomeIcon({
  type,
  className = "h-4 w-4",
}: {
  type: RoundOutcome;
  className?: string;
}) {
  const iconPath = ROUND_OUTCOME_ICON_PATHS[type];

  if (!iconPath) {
    return (
      <span
        aria-hidden="true"
        className="block h-1.5 w-1.5 rounded-full bg-current"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`block shrink-0 bg-current ${className}`}
      style={{
        WebkitMaskImage: `url("${iconPath}")`,
        maskImage: `url("${iconPath}")`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Team Table                                                                 */
/* -------------------------------------------------------------------------- */

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
  const sortedPlayers = [...players].sort(
    (a, b) => {
      return b.acs - a.acs;
    },
  );

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
          <p className="text-left">
            PLAYER
          </p>

          <p className="text-right sm:hidden">
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

        {sortedPlayers.map(
          (player, index) => (
            <PlayerRow
              key={`${player.name}-${player.tag}-${index}`}
              player={player}
            />
          ),
        )}
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
            #{player.tag} ·{" "}
            {player.agent}
          </p>
        </div>
      </div>

      <p className="whitespace-nowrap text-sm font-black text-white sm:hidden">
        {player.kills} /{" "}
        {player.deaths} /{" "}
        {player.assists}
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