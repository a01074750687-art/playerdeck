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

function MenuIcon({
  open,
}: {
  open: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
    >
      {open ? (
        <>
          <path
            d="M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <path
            d="M5 7H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M5 17H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

export default function Header() {
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const isGameActive = (game: GameItem) => {
    if (!game.available) {
      return false;
    }

    return location.pathname.startsWith(game.path);
  };

  const isProActive =
    location.pathname === "/pro" ||
    location.pathname.startsWith("/pro/");

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#090a0f]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center px-4 sm:px-6 lg:px-8">
        <Link
          to="/valorant"
          aria-label="Deck.GG 홈으로 이동"
          onClick={closeMobileMenu}
          className="group flex shrink-0 items-center"
        >
          <span className="text-xl font-black tracking-[-0.05em] text-white transition-opacity group-hover:opacity-80 sm:text-2xl">
            Deck
            <span className="text-red-500">
              .GG
            </span>
          </span>
        </Link>

        <div className="ml-4 hidden h-6 w-px shrink-0 bg-white/10 sm:block" />

        {/* 데스크톱 메뉴 */}
        <nav
          aria-label="메인 메뉴"
          className="ml-4 hidden min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:block"
        >
          <div className="flex min-w-max items-stretch gap-1">
            {games.map((game) => {
              const isActive =
                isGameActive(game);

              if (!game.available) {
                return (
                  <button
                    key={game.id}
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="group relative flex h-16 cursor-not-allowed items-center gap-2.5 px-4 text-left opacity-60"
                  >
                    <GameLogo
                      src={game.logoSrc}
                      alt=""
                      isActive={false}
                    />

                    <span className="flex items-center gap-2">
                      <span className="whitespace-nowrap text-sm font-semibold text-zinc-500">
                        {game.name}
                      </span>

                      <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[10px] font-bold tracking-tight text-zinc-600">
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
                    isActive
                      ? "page"
                      : undefined
                  }
                  className={[
                    "group relative flex h-16 items-center gap-2.5 px-4 transition-colors",
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

                  <span className="whitespace-nowrap text-sm font-semibold">
                    {game.name}
                  </span>

                  <span
                    aria-hidden="true"
                    className={[
                      "absolute inset-x-4 bottom-0 h-0.5 rounded-full transition-all duration-200",
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
              className="my-auto mx-2 h-6 w-px shrink-0 bg-white/10"
            />

            <Link
              to="/pro"
              aria-current={
                isProActive
                  ? "page"
                  : undefined
              }
              className={[
                "group relative flex h-16 items-center gap-2.5 px-4 transition-colors",
                isProActive
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-200",
              ].join(" ")}
            >
              <ProMenuIcon
                isActive={isProActive}
              />

              <span className="whitespace-nowrap text-sm font-semibold">
                프로 선수
              </span>

              <span
                aria-hidden="true"
                className={[
                  "absolute inset-x-4 bottom-0 h-0.5 rounded-full transition-all duration-200",
                  isProActive
                    ? "scale-x-100 bg-red-500 opacity-100"
                    : "scale-x-0 bg-transparent opacity-0",
                ].join(" ")}
              />
            </Link>
          </div>
        </nav>

        {/* 모바일 햄버거 */}
        <button
          type="button"
          aria-label={
            mobileMenuOpen
              ? "메뉴 닫기"
              : "메뉴 열기"
          }
          aria-expanded={mobileMenuOpen}
          onClick={() =>
            setMobileMenuOpen(
              (current) => !current,
            )
          }
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition-colors hover:border-white/20 hover:text-white sm:hidden"
        >
          <MenuIcon
            open={mobileMenuOpen}
          />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {mobileMenuOpen && (
        <nav
          aria-label="모바일 메인 메뉴"
          className="border-t border-white/[0.08] bg-[#090a0f] px-4 pb-4 pt-2 sm:hidden"
        >
          <div className="mx-auto max-w-md space-y-1">
            {games.map((game) => {
              const isActive =
                isGameActive(game);

              if (!game.available) {
                return (
                  <div
                    key={game.id}
                    className="flex h-14 items-center gap-3 rounded-xl px-3 opacity-50"
                  >
                    <GameLogo
                      src={game.logoSrc}
                      alt=""
                      isActive={false}
                    />

                    <span className="text-sm font-bold text-zinc-500">
                      {game.name}
                    </span>

                    <span className="ml-auto rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-1 text-[10px] font-bold text-zinc-600">
                      준비 중
                    </span>
                  </div>
                );
              }

              return (
                <Link
                  key={game.id}
                  to={game.path}
                  onClick={closeMobileMenu}
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                  className={[
                    "flex h-14 items-center gap-3 rounded-xl border px-3 transition-colors",
                    isActive
                      ? "border-red-400/20 bg-red-500/10 text-white"
                      : "border-transparent text-zinc-400 hover:bg-white/[0.04] hover:text-white",
                  ].join(" ")}
                >
                  <GameLogo
                    src={game.logoSrc}
                    alt=""
                    isActive={isActive}
                  />

                  <span className="text-sm font-bold">
                    {game.name}
                  </span>

                  {isActive && (
                    <span className="ml-auto text-xs font-bold text-red-400">
                      현재
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="my-2 h-px bg-white/[0.08]" />

            <Link
              to="/pro"
              onClick={closeMobileMenu}
              aria-current={
                isProActive
                  ? "page"
                  : undefined
              }
              className={[
                "flex h-14 items-center gap-3 rounded-xl border px-3 transition-colors",
                isProActive
                  ? "border-red-400/20 bg-red-500/10 text-white"
                  : "border-transparent text-zinc-400 hover:bg-white/[0.04] hover:text-white",
              ].join(" ")}
            >
              <ProMenuIcon
                isActive={isProActive}
              />

              <span className="text-sm font-bold">
                프로 선수
              </span>

              {isProActive && (
                <span className="ml-auto text-xs font-bold text-red-400">
                  현재
                </span>
              )}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}