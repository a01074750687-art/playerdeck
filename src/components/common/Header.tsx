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

function GameLogo({
  src,
  alt,
  isActive,
}: GameLogoProps) {
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

function ProMenuIcon({
  isActive,
}: {
  isActive: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={[
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors",
        isActive
          ? "border-red-400/40 bg-red-500/10 text-red-300"
          : "border-white/10 bg-white/[0.04] text-zinc-500 group-hover:border-white/20 group-hover:text-zinc-300",
      ].join(" ")}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-3.5 w-3.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 5H6.5A2.5 2.5 0 0 0 4 7.5V8a4 4 0 0 0 4 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <path
          d="M16 5h1.5A2.5 2.5 0 0 1 20 7.5V8a4 4 0 0 1-4 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <path
          d="M8 4h8v4a4 4 0 0 1-8 0V4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        <path
          d="M12 12v4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <path
          d="M9 20h6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <path
          d="M10 16h4v4h-4v-4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </span>
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

  const isProActive =
    location.pathname === "/pro" ||
    location.pathname.startsWith("/pro/");

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
          aria-label="메인 메뉴"
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
                  aria-current={
                    isActive ? "page" : undefined
                  }
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

            <div
              aria-hidden="true"
              className="my-auto mx-1 h-6 w-px shrink-0 bg-white/10 sm:mx-2"
            />

            <Link
              to="/pro"
              aria-current={
                isProActive ? "page" : undefined
              }
              className={[
                "group relative flex h-16 items-center gap-2.5 px-3 transition-colors sm:px-4",
                isProActive
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-200",
              ].join(" ")}
            >
              <ProMenuIcon isActive={isProActive} />

              <span className="text-xs font-bold tracking-wide sm:hidden">
                프로
              </span>

              <span className="hidden whitespace-nowrap text-sm font-semibold sm:inline">
                프로 선수
              </span>

              <span
                aria-hidden="true"
                className={[
                  "absolute inset-x-3 bottom-0 h-0.5 rounded-full transition-all duration-200 sm:inset-x-4",
                  isProActive
                    ? "scale-x-100 bg-red-500 opacity-100"
                    : "scale-x-0 bg-transparent opacity-0",
                ].join(" ")}
              />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}