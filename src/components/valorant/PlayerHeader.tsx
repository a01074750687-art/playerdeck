import { Link } from "react-router-dom";

import ActPeakRanks from "./ActPeakRanks";
import RankIcon from "./RankIcon";

import type { ProPlayer } from "../../types/proPlayer";
import type { PlayerData } from "../../types/valorant";

type Props = {
  player: PlayerData;
  proPlayer?: ProPlayer;
  isRefreshing?: boolean;
  refreshCooldown?: number;
  lastUpdated?: Date | null;
  onRefresh?: () => void;
};

function formatLastUpdated(
  lastUpdated: Date | null | undefined,
) {
  if (!lastUpdated) {
    return "갱신 기록 없음";
  }

  const diffMs = Date.now() - lastUpdated.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSeconds < 10) return "방금 전";
  if (diffSeconds < 60) return `${diffSeconds}초 전`;
  if (diffMinutes < 60) return `${diffMinutes}분 전`;
  if (diffHours < 24) return `${diffHours}시간 전`;
  if (diffDays < 7) return `${diffDays}일 전`;

  return lastUpdated.toLocaleDateString("ko-KR");
}

export default function PlayerHeader({
  player,
  proPlayer,
  isRefreshing = false,
  refreshCooldown = 0,
  lastUpdated = null,
  onRefresh,
}: Props) {
  const isRefreshDisabled =
    isRefreshing || refreshCooldown > 0 || !onRefresh;

  const playerCardImage =
    player.playerCard?.wideArt ?? null;

  return (
    <section
      className="
        relative
        mt-8
        overflow-hidden
        rounded-[28px]
        border border-white/[0.08]
        bg-[#070b18]
        shadow-2xl shadow-black/20
      "
    >
      {/* Background */}
      {playerCardImage && (
        <>
          <img
            src={playerCardImage}
            alt=""
            className="
              pointer-events-none
              absolute inset-0
              h-full w-full
              object-cover
              object-center
              opacity-[0.36]
            "
          />

          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-r
              from-[#070b18]
              via-[#070b18]/85
              to-[#070b18]/45
            "
          />

          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-t
              from-[#070b18]
              via-[#070b18]/10
              to-[#070b18]/45
            "
          />
        </>
      )}

      {/* subtle accent */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-red-400/80
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute -right-32 -top-32
          h-80 w-80
          rounded-full
          bg-red-500/[0.05]
          blur-3xl
        "
      />

      <div className="relative z-10 p-5 sm:p-7 lg:p-8">
        {/* Top */}
        <div
          className="
            flex flex-col gap-4
            border-b border-white/[0.07]
            pb-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2
                className="
                  text-2xl
                  font-black
                  tracking-[-0.04em]
                  text-white
                  sm:text-3xl
                "
              >
                Deck
                <span className="text-red-400">.GG</span>
              </h2>

              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border border-red-400/25
                  bg-red-400/[0.08]
                  px-2.5 py-1
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-red-300
                "
              >
                Valorant
              </span>
            </div>

            <p
              className="
                mt-1.5
                text-xs
                font-medium
                text-slate-500
                sm:text-sm
              "
            >
              Competitive Valorant Stats
            </p>
          </div>

          <div
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border border-white/[0.07]
              bg-white/[0.025]
              px-3 py-2
              text-[10px]
              font-bold
              text-slate-400
            "
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full w-full
                  animate-ping
                  rounded-full
                  bg-emerald-400
                  opacity-40
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-1.5 w-1.5
                  rounded-full
                  bg-emerald-400
                "
              />
            </span>

            플레이어 프로필
          </div>
        </div>

        {/* Main */}
        <div
          className="
            mt-7
            grid
            gap-6
            lg:grid-cols-[minmax(0,1fr)_320px]
            lg:gap-8
          "
        >
          {/* Player */}
          <div className="min-w-0">
            <div
              className="
                flex
                flex-col
                gap-6
                xl:flex-row
                xl:items-start
                xl:justify-between
              "
            >
              <div className="min-w-0">
                <p
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.22em]
                    text-red-300
                  "
                >
                  Riot ID
                </p>

                <div
                  className="
                    mt-2
                    flex
                    flex-wrap
                    items-center
                    gap-3
                  "
                >
                  <h1
                    className="
                      break-words
                      text-4xl
                      font-black
                      leading-none
                      tracking-[-0.045em]
                      text-white
                      sm:text-5xl
                      lg:text-[56px]
                    "
                  >
                    {player.name}
                  </h1>

                  {proPlayer && (
                    <Link
                      to={`/valorant/pros/${proPlayer.slug}`}
                      title={`${proPlayer.nickname} 프로 선수 프로필 보기`}
                      aria-label={`${proPlayer.nickname} 프로 선수 프로필 보기`}
                      className="
                        inline-flex
                        shrink-0
                        items-center
                        rounded-lg
                        border border-amber-300/30
                        bg-amber-300/10
                        px-2.5 py-1.5
                        text-[10px]
                        font-black
                        tracking-[0.14em]
                        text-amber-200
                        transition
                        hover:border-amber-200/50
                        hover:bg-amber-300/15
                      "
                    >
                      PRO
                    </Link>
                  )}
                </div>

                {/* Basic info */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border border-white/[0.08]
                      bg-white/[0.03]
                      px-3 py-2
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[0.14em]
                        text-slate-500
                      "
                    >
                      레벨
                    </span>

                    <span
                      className="
                        text-sm
                        font-black
                        text-slate-200
                      "
                    >
                      {player.level}
                    </span>
                  </div>

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border border-white/[0.08]
                      bg-white/[0.03]
                      px-3 py-2
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[0.14em]
                        text-slate-500
                      "
                    >
                      지역
                    </span>

                    <span
                      className="
                        text-sm
                        font-black
                        uppercase
                        text-slate-200
                      "
                    >
                      {player.region}
                    </span>
                  </div>
                </div>
              </div>

              {/* Refresh */}
              <div className="shrink-0">
                <div
                  className="
                    flex
                    flex-col
                    gap-2
                    xl:items-end
                  "
                >
                  <p
                    className="
                      text-[10px]
                      font-medium
                      text-slate-500
                    "
                  >
                    최근 갱신 ·{" "}
                    {formatLastUpdated(lastUpdated)}
                  </p>

                  <button
                    type="button"
                    onClick={onRefresh}
                    disabled={isRefreshDisabled}
                    className="
                      group
                      inline-flex
                      min-w-[132px]
                      items-center
                      justify-center
                      rounded-xl
                      border border-white/[0.09]
                      bg-white/[0.035]
                      px-4 py-2.5
                      text-xs
                      font-black
                      text-slate-300
                      transition
                      hover:border-red-400/30
                      hover:bg-red-400/[0.07]
                      hover:text-white
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    "
                  >
                    <span
                      className={
                        isRefreshing
                          ? "inline-block animate-spin"
                          : "inline-block transition-transform duration-300 group-hover:rotate-180"
                      }
                    >
                      ↻
                    </span>

                    <span className="ml-2">
                      {isRefreshing
                        ? "갱신 중..."
                        : "전적 갱신"}
                    </span>
                  </button>

                  {refreshCooldown > 0 && (
                    <p
                      className="
                        text-[10px]
                        font-medium
                        text-red-300/70
                      "
                    >
                      {refreshCooldown}초 후 다시 갱신할 수
                      있습니다.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Act Peak */}
            <div
              className="
                mt-8
                border-t border-white/[0.06]
                pt-6
              "
            >
              <ActPeakRanks
                actPeakRanks={player.actPeakRanks}
              />
            </div>
          </div>

          {/* Current Rank */}
          <aside
            className="
              relative
              overflow-hidden
              rounded-3xl
              border border-red-400/20
              bg-gradient-to-br
              from-red-500/[0.10]
              via-white/[0.035]
              to-white/[0.02]
              p-5
              sm:p-6
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-16 -top-16
                h-40 w-40
                rounded-full
                bg-red-400/[0.08]
                blur-3xl
              "
            />

            <div className="relative">
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                "
              >
                <div>
                  <p
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-red-300
                    "
                  >
                    Competitive
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      font-semibold
                      text-slate-500
                    "
                  >
                    현재 경쟁전 랭크
                  </p>
                </div>

                <span
                  className="
                    rounded-full
                    border border-red-400/20
                    bg-red-400/[0.07]
                    px-2.5 py-1
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.14em]
                    text-red-300
                  "
                >
                  Current
                </span>
              </div>

              <div className="mt-5 flex items-center gap-4">
                <div
                  className="
                    flex
                    h-[82px] w-[82px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border border-white/[0.08]
                    bg-black/20
                  "
                >
                  <RankIcon
                    rankName={player.rank}
                    size="lg"
                  />
                </div>

                <div className="min-w-0">
                  <h2
                    className="
                      break-words
                      text-2xl
                      font-black
                      leading-tight
                      tracking-tight
                      text-white
                      sm:text-3xl
                    "
                  >
                    {player.rank}
                  </h2>

                  <p
                    className="
                      mt-1.5
                      text-base
                      font-black
                      text-red-300
                    "
                  >
                    {player.rr} RR
                  </p>
                </div>
              </div>

              <div
                className="
                  my-5
                  h-px
                  bg-white/[0.08]
                "
              />

              <div>
                <p
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-slate-500
                  "
                >
                  최고 랭크
                </p>

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-11 w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border border-white/[0.08]
                      bg-white/[0.025]
                    "
                  >
                    <RankIcon
                      rankName={player.peakRank}
                      size="sm"
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-sm
                        font-black
                        text-slate-100
                      "
                    >
                      {player.peakRank}
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[10px]
                        font-medium
                        text-slate-500
                      "
                    >
                      최고 기록
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}