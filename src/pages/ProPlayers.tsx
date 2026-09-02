import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
  Trophy,
  Users,
} from "lucide-react";
import {
  useMemo,
  useState,
} from "react";
import { Link } from "react-router-dom";

import ProPlayerCard from "../components/valorant/ProPlayerCard";
import ProPlayerFilters, {
  type RoleFilter,
  type TeamFilter,
} from "../components/valorant/ProPlayerFilters";
import WeeklyPick from "../components/valorant/WeeklyPick";
import {
  proPlayers,
  searchProPlayers,
} from "../data/pro";
import { weeklyPick } from "../data/weeklyPick";
import useFavorites from "../hooks/useFavorites";

type SortOption =
  | "default"
  | "favorite"
  | "name"
  | "rating"
  | "acs";

const SORT_LABELS: Record<
  SortOption,
  string
> = {
  default: "기본순",
  favorite: "즐겨찾기 우선",
  name: "이름순",
  rating: "레이팅 높은 순",
  acs: "ACS 높은 순",
};

const ProPlayers = () => {
  const { proPlayerFavorites } =
    useFavorites();

  const [searchKeyword, setSearchKeyword] =
    useState("");

  const [selectedTeam, setSelectedTeam] =
    useState<TeamFilter>("All");

  const [selectedRole, setSelectedRole] =
    useState<RoleFilter>("All");

  const [sortOption, setSortOption] =
    useState<SortOption>("default");

  const [
    mobilePlayersOpen,
    setMobilePlayersOpen,
  ] = useState(false);

  const filteredPlayers = useMemo(() => {
    const searchedPlayers = searchProPlayers(
      searchKeyword,
    );

    return searchedPlayers.filter(
      (player) => {
        const matchesTeam =
          selectedTeam === "All" ||
          player.team?.shortName ===
            selectedTeam;

        const matchesRole =
          selectedRole === "All" ||
          player.primaryRole ===
            selectedRole ||
          player.roles.includes(
            selectedRole,
          );

        return (
          matchesTeam && matchesRole
        );
      },
    );
  }, [
    searchKeyword,
    selectedTeam,
    selectedRole,
  ]);

  const favoritePlayerIds = useMemo(
    () =>
      new Set(
        proPlayerFavorites.map(
          (favorite) => favorite.id,
        ),
      ),
    [proPlayerFavorites],
  );

  const sortedPlayers = useMemo(() => {
    const players = [...filteredPlayers];

    switch (sortOption) {
      case "favorite":
        return players.sort((a, b) => {
          const aIsFavorite =
            favoritePlayerIds.has(a.id);

          const bIsFavorite =
            favoritePlayerIds.has(b.id);

          if (
            aIsFavorite === bIsFavorite
          ) {
            return 0;
          }

          return aIsFavorite ? -1 : 1;
        });

      case "name":
        return players.sort((a, b) =>
          a.nickname.localeCompare(
            b.nickname,
          ),
        );

      case "rating":
        return players.sort((a, b) => {
          const aRating =
            a.stats?.rating;

          const bRating =
            b.stats?.rating;

          if (
            aRating == null &&
            bRating == null
          ) {
            return 0;
          }

          if (aRating == null) {
            return 1;
          }

          if (bRating == null) {
            return -1;
          }

          return bRating - aRating;
        });

      case "acs":
        return players.sort((a, b) => {
          const aAcs = a.stats?.acs;
          const bAcs = b.stats?.acs;

          if (
            aAcs == null &&
            bAcs == null
          ) {
            return 0;
          }

          if (aAcs == null) {
            return 1;
          }

          if (bAcs == null) {
            return -1;
          }

          return bAcs - aAcs;
        });

      default:
        return players;
    }
  }, [
    filteredPlayers,
    sortOption,
    favoritePlayerIds,
  ]);

  const clearFilters = () => {
    setSearchKeyword("");
    setSelectedTeam("All");
    setSelectedRole("All");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Page Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-48 -top-40 h-[30rem] w-[30rem] rounded-full bg-red-600/[0.07] blur-[145px]" />

        <div className="absolute -right-48 top-52 h-[28rem] w-[28rem] rounded-full bg-blue-500/[0.05] blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:54px_54px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.5)_72%,rgba(2,6,23,0.95)_100%)]" />
      </div>

      <div className="relative z-10">
        {/* Top Navigation */}
        <div className="mx-auto w-full max-w-[1600px] px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-12">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/valorant"
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-transparent
                px-1 py-1
                text-sm font-semibold
                text-slate-400
                transition duration-200
                hover:text-white
                focus-visible:border-white/20
                focus-visible:outline-none
              "
            >
              <ChevronLeft size={18} />

              Valorant으로 돌아가기
            </Link>

            <Link
              to="/valorant/pacific"
              className="
                inline-flex items-center gap-1.5
                rounded-full
                border border-white/[0.08]
                bg-white/[0.025]
                px-3 py-2
                text-xs font-bold
                text-slate-500
                transition duration-200
                hover:border-white/[0.14]
                hover:bg-white/[0.05]
                hover:text-slate-200
              "
            >
              Pacific 프로 허브

              <ChevronRight size={15} />
            </Link>
          </div>
        </div>

        {/* Hero */}
        <div className="mx-auto mt-8 w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <section
            className="
              relative overflow-hidden
              rounded-[1.75rem]
              border border-white/[0.09]
              bg-[#080b18]/85
              px-6 py-9
              shadow-[0_28px_90px_rgba(0,0,0,0.32)]
              backdrop-blur-xl
              sm:px-8 sm:py-10
              lg:px-12 lg:py-12
            "
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-red-500 via-red-600 to-orange-500" />

              <div className="absolute -left-28 -top-36 h-[340px] w-[340px] rounded-full bg-red-500/[0.08] blur-[110px]" />

              <div className="absolute -right-24 -top-40 h-[360px] w-[360px] rounded-full bg-indigo-500/[0.07] blur-[120px]" />

              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.025),transparent_42%)]" />
            </div>

            <div className="relative flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
              {/* Hero Copy */}
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="
                      inline-flex items-center gap-2
                      rounded-full
                      border border-red-400/20
                      bg-red-400/[0.08]
                      px-3.5 py-2
                      text-[10px] font-black
                      tracking-[0.12em]
                      text-red-200
                    "
                  >
                    <Trophy size={14} />

                    DECK.GG 프로
                  </span>

                  <span
                    className="
                      inline-flex items-center
                      rounded-full
                      border border-white/[0.08]
                      bg-white/[0.03]
                      px-3.5 py-2
                      text-[10px] font-black
                      tracking-[0.12em]
                      text-slate-400
                    "
                  >
                    VCT PACIFIC
                  </span>
                </div>

                <p className="mt-6 text-[11px] font-black tracking-[0.18em] text-slate-500">
                  프로 선수 데이터베이스
                </p>

                <h1
                  className="
                    mt-3
                    text-4xl font-black
                    tracking-[-0.055em]
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  프로 선수 로스터
                </h1>

                <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-slate-400 sm:text-base">
                  VCT Pacific 프로 선수의
                  소속 팀, 역할, 대표 요원과
                  핵심 경기 통계를 확인하세요.
                </p>
              </div>

              {/* Hero Stats */}
              <div className="grid w-full grid-cols-2 gap-3 sm:w-auto sm:min-w-[360px]">
                <article className="rounded-2xl border border-white/[0.09] bg-white/[0.03] px-5 py-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Users size={15} />

                    <p className="text-[10px] font-black tracking-[0.14em]">
                      등록 선수
                    </p>
                  </div>

                  <p className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
                    {proPlayers.length}
                  </p>

                  <p className="mt-1 text-[10px] text-slate-600">
                    VCT Pacific
                  </p>
                </article>

                <article className="rounded-2xl border border-white/[0.09] bg-white/[0.03] px-5 py-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-slate-500">
                    <SlidersHorizontal
                      size={15}
                    />

                    <p className="text-[10px] font-black tracking-[0.14em]">
                      검색 결과
                    </p>
                  </div>

                  <p className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
                    {filteredPlayers.length}
                  </p>

                  <p className="mt-1 text-[10px] text-slate-600">
                    현재 조건
                  </p>
                </article>
              </div>
            </div>
          </section>
        </div>

        {/* Main Content */}
        <section className="mx-auto w-full max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
          {/* Weekly Pick */}
          <div className="mb-6">
            <WeeklyPick pick={weeklyPick} />
          </div>

          {/* Player Filters */}
          <ProPlayerFilters
            searchKeyword={searchKeyword}
            selectedTeam={selectedTeam}
            selectedRole={selectedRole}
            resultCount={
              filteredPlayers.length
            }
            onSearchKeywordChange={
              setSearchKeyword
            }
            onTeamChange={setSelectedTeam}
            onRoleChange={
              setSelectedRole
            }
            onClear={clearFilters}
          />

          {/* Players */}
          <div className="mt-10">
            {filteredPlayers.length >
            0 ? (
              <>
                {/* List Header */}
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400" />

                      <p className="text-[10px] font-black tracking-[0.18em] text-red-300">
                        프로 선수
                      </p>
                    </div>

                    <h2 className="mt-2 text-3xl font-black tracking-[-0.045em] text-white">
                      선수 목록
                    </h2>

                    <p className="mt-2 text-xs font-medium text-slate-500">
                      총{" "}
                      {
                        filteredPlayers.length
                      }
                      명의 선수를 확인할 수
                      있습니다.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className="
                        hidden rounded-full
                        border border-white/[0.08]
                        bg-white/[0.025]
                        px-3 py-2
                        text-[10px] font-bold
                        text-slate-500
                        sm:inline-flex
                      "
                    >
                      {
                        filteredPlayers.length
                      }
                      명
                    </span>

                    <select
                      value={sortOption}
                      onChange={(event) =>
                        setSortOption(
                          event.target
                            .value as SortOption,
                        )
                      }
                      aria-label="선수 정렬"
                      className="
                        h-10
                        rounded-xl
                        border border-white/[0.09]
                        bg-[#0b1020]
                        px-3
                        text-xs font-bold
                        text-slate-300
                        outline-none
                        transition
                        hover:border-white/[0.16]
                        focus:border-red-400/30
                      "
                    >
                      {(
                        Object.keys(
                          SORT_LABELS,
                        ) as SortOption[]
                      ).map((option) => (
                        <option
                          key={option}
                          value={option}
                        >
                          {
                            SORT_LABELS[
                              option
                            ]
                          }
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mobile Player Toggle */}
                <button
                  type="button"
                  onClick={() =>
                    setMobilePlayersOpen(
                      (current) =>
                        !current,
                    )
                  }
                  aria-expanded={
                    mobilePlayersOpen
                  }
                  aria-controls="pro-player-list"
                  className="mb-4 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#090b18] px-4 py-4 text-left transition-colors hover:border-white/20 md:hidden"
                >
                  <div>
                    <p className="text-sm font-black text-white">
                      {mobilePlayersOpen
                        ? "선수 목록 접기"
                        : "선수 목록 펼쳐보기"}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      현재 조건{" "}
                      {
                        filteredPlayers.length
                      }
                      명
                    </p>
                  </div>

                  <span
                    className={[
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-slate-400 transition-transform duration-200",
                      mobilePlayersOpen
                        ? "rotate-180"
                        : "",
                    ].join(" ")}
                  >
                    <ChevronDown
                      size={18}
                    />
                  </span>
                </button>

                {/* Player Grid */}
                <div
                  id="pro-player-list"
                  className={[
                    "grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3",
                    mobilePlayersOpen
                      ? "grid"
                      : "hidden md:grid",
                  ].join(" ")}
                >
                  {sortedPlayers.map(
                    (player) => (
                      <ProPlayerCard
                        key={player.id}
                        player={player}
                      />
                    ),
                  )}
                </div>

                {/* Mobile Collapse Button */}
                {mobilePlayersOpen && (
                  <button
                    type="button"
                    onClick={() =>
                      setMobilePlayersOpen(
                        false,
                      )
                    }
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-bold text-slate-400 transition-colors hover:border-white/20 hover:text-white md:hidden"
                  >
                    선수 목록 접기

                    <ChevronDown
                      size={16}
                      className="rotate-180"
                    />
                  </button>
                )}
              </>
            ) : (
              <div
                className="
                  flex min-h-[380px]
                  flex-col items-center
                  justify-center
                  rounded-[1.6rem]
                  border border-dashed
                  border-white/[0.09]
                  bg-white/[0.02]
                  px-6 text-center
                "
              >
                <div
                  className="
                    flex h-16 w-16
                    items-center justify-center
                    rounded-2xl
                    border border-white/[0.09]
                    bg-white/[0.035]
                    text-slate-500
                  "
                >
                  <Search size={26} />
                </div>

                <h2 className="mt-5 text-xl font-black text-white">
                  검색 결과가 없습니다
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                  검색어나 팀, 역할 필터를
                  변경한 뒤 다시 확인해 주세요.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                    mt-6
                    rounded-xl
                    bg-white
                    px-5 py-2.5
                    text-sm font-black
                    text-slate-950
                    transition
                    hover:bg-slate-200
                  "
                >
                  전체 선수 보기
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProPlayers;