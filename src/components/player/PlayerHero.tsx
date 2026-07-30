import type { ProPlayer, ProTeam } from "../../types/proPlayer";
import { hexToRgba } from "../../utils/playerUtils";
import type { DetailItem } from "./DetailGrid";
import PlayerHeroInfo from "./PlayerHeroInfo";

interface PlayerHeroProps {
  player: ProPlayer;
  team: ProTeam;

  teamLogoUrl: string | null; 
  teamInitials: string;

  primaryColor: string;
  secondaryColor: string;

  heroStats: DetailItem[];
}

export default function PlayerHero({
  player,
  team,
  teamLogoUrl,
  teamInitials,
  primaryColor,
  secondaryColor,
  heroStats,
}: PlayerHeroProps) {
  return (
    <section
      className="relative mt-6 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40"
      style={{
        background: `
          linear-gradient(
            135deg,
            ${hexToRgba(primaryColor, 0.34)} 0%,
            ${hexToRgba(secondaryColor, 0.26)} 42%,
            rgba(7, 11, 20, 0.96) 78%
          )
        `,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.055] to-transparent" />

      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          backgroundColor: hexToRgba(primaryColor, 0.18),
        }}
      />

      {teamLogoUrl ? (
        <img
          src={teamLogoUrl}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 top-1/2 h-[340px] w-[340px] -translate-y-1/2 object-contain opacity-[0.08] grayscale sm:right-4 sm:h-[440px] sm:w-[440px]"
        />
      ) : (
        <div className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none text-[13rem] font-black leading-none text-white/[0.035] sm:text-[20rem]">
          {teamInitials}
        </div>
      )}

      <div className="relative grid gap-10 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-12 lg:py-14">
        <PlayerHeroInfo
          player={player}
          team={team}
          primaryColor={primaryColor}
          heroStats={heroStats}
        />

        <div className="flex items-center justify-center lg:justify-end">
          <div
            className="relative flex aspect-square w-full max-w-[260px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/15 bg-black/25 p-8 shadow-2xl backdrop-blur-xl"
            style={{
              boxShadow: `0 24px 80px ${hexToRgba(
                primaryColor,
                0.18,
              )}`,
            }}
          >
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background: `radial-gradient(
                  circle,
                  ${hexToRgba(primaryColor, 0.24)},
                  transparent 68%
                )`,
              }}
            />

            {teamLogoUrl ? (
              <img
                src={teamLogoUrl}
                alt={`${team.name} 로고`}
                className="relative z-10 h-full w-full object-contain drop-shadow-2xl"
              />
            ) : (
              <span className="relative z-10 text-7xl font-black tracking-[-0.08em] text-white sm:text-8xl">
                {teamInitials}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}