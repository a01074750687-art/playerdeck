import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

type GameItem = {
  id: string;
  name: string;
  shortName: string;
  path: string;
  logoSrc: string;
  available: boolean;
};

const games: GameItem[] = [
  {
    id: "valorant",
    name: "VALORANT",
    shortName: "VALORANT",
    path: "/valorant",
    logoSrc: "/games/valorant.svg",
    available: true,
  },
  {
    id: "lol",
    name: "League of Legends",
    shortName: "LOL",
    path: "/lol",
    logoSrc: "/games/lol.svg",
    available: false,
  },
  {
    id: "tft",
    name: "Teamfight Tactics",
    shortName: "TFT",
    path: "/tft",
    logoSrc: "/games/tft.svg",
    available: false,
  },
];

type GameLogoProps = {
  src: string;
  alt: string;
  isActive: boolean;
};

function GameLogo({ src, alt, isActive }: GameLogoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span
        aria-hidden="true"
        className={[
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[10px] font-black",
          isActive
            ? "border-red-400/40 bg-red-500/10 text-red-300"
            : "border-white/10 bg-white/[0.04] text-zinc-500",
        ].join(" ")}
      >
        G
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={[
        "h-5 w-5 shrink-0 object-contain transition duration-200",
        isActive
          ? "opacity-100"
          : "opacity-45 grayscale group-hover:opacity-70",
      ].join(" ")}
      onError={() => setHasError(true)}
    />
  );
}

export default function Header() {
  const location = useLocation();

  const isGameActive = (game: GameItem) => {
    if (!game.available) {
      return false;
    }

    return location.pathname.startsWith(game.path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#090a0f]/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-full max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/valorant"
          aria-label="Deck.GG 홈으로 이동"
          className="group flex shrink-0 items-center"
        >
          <span className="text-xl font-black tracking-[-0.05em] text-white transition-opacity group-hover:opacity-80 sm:text-2xl">
            Deck
            <span className="text-red-500">.GG</span>
          </span>
        </Link>

        <div className="hidden h-6 w-px shrink-0 bg-white/10 sm:block" />

        <nav
          aria-label="게임 선택"
          className="min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex min-w-max items-stretch gap-1">
            {games.map((game) => {
              const isActive = isGameActive(game);

              if (!game.available) {
                return (
                  <button
                    key={game.id}
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="group relative flex h-16 cursor-not-allowed items-center gap-2.5 px-3 text-left opacity-60 sm:px-4"
                  >
                    <GameLogo
                      src={game.logoSrc}
                      alt=""
                      isActive={false}
                    />

                    <span className="flex items-center gap-2">
                      <span className="text-xs font-bold tracking-wide text-zinc-500 sm:hidden">
                        {game.shortName}
                      </span>

                      <span className="hidden whitespace-nowrap text-sm font-semibold text-zinc-500 sm:inline">
                        {game.name}
                      </span>

                      <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-1.5 py-0.5 text-[9px] font-bold tracking-tight text-zinc-600 sm:px-2 sm:text-[10px]">
                        준비 중
                      </span>
                    </span>
                  </button>
                );
              }

              return (
                <Link
                  key={game.id}
                  to={game.path}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "group relative flex h-16 items-center gap-2.5 px-3 transition-colors sm:px-4",
                    isActive
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-200",
                  ].join(" ")}
                >
                  <GameLogo
                    src={game.logoSrc}
                    alt=""
                    isActive={isActive}
                  />

                  <span className="text-xs font-bold tracking-wide sm:hidden">
                    {game.shortName}
                  </span>

                  <span className="hidden whitespace-nowrap text-sm font-semibold sm:inline">
                    {game.name}
                  </span>

                  <span
                    aria-hidden="true"
                    className={[
                      "absolute inset-x-3 bottom-0 h-0.5 rounded-full transition-all duration-200 sm:inset-x-4",
                      isActive
                        ? "scale-x-100 bg-red-500 opacity-100"
                        : "scale-x-0 bg-transparent opacity-0",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}