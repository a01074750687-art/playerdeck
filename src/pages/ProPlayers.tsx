import {
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
  Trophy,
  Users,
  X,
} from "lucide-react";
import {
  useMemo,
  useState,
} from "react";

import { Link } from "react-router-dom";

import ProPlayerCard from "../components/valorant/ProPlayerCard";
import WeeklyPick from "../components/valorant/WeeklyPick";
import {
  proPlayers,
  searchProPlayers,
} from "../data/pro";
import { weeklyPick } from "../data/weeklyPick";
import type {
  ProPlayerRole,
} from "../types/proPlayer";

type TeamFilter =
  | "All"
  | "GEN"
  | "T1"
  | "KRX"
  | "PRX"
  | "RRQ"
  | "TS"
  | "GE"
  | "FS"
  | "DFM"
  | "ZETA"
  | "NS"
  | "VL";

type RoleFilter = "All" | ProPlayerRole;

const TEAM_FILTERS: TeamFilter[] = [
  "All",
  "GEN",
  "T1",
  "KRX",
  "PRX",
  "RRQ",
  "TS",
  "GE",
  "FS",
  "DFM",
  "ZETA",
  "NS",
  "VL",
];

const ROLE_FILTERS: RoleFilter[] = [
  "All",
  "Duelist",
  "Initiator",
  "Controller",
  "Sentinel",
  "Flex",
];

const TEAM_LABELS: Record<TeamFilter, string> = {
  All: "전체 팀",
  GEN: "GEN",
  T1: "T1",
  KRX: "KRX",
  PRX: "PRX",
  RRQ: "RRQ",
  TS: "TS",
  GE: "GE",
  FS: "FS",
  DFM: "DFM",
  ZETA: "ZETA",
  NS: "NS",
  VL: "VL",
};

const ROLE_LABELS: Record<RoleFilter, string> = {
  All: "전체 역할",
  Duelist: "타격대",
  Initiator: "척후대",
  Controller: "전략가",
  Sentinel: "감시자",
  Flex: "플렉스",
};

type SortOption = "default" | "name" | "rating" | "acs";

const SORT_LABELS: Record<SortOption, string> = {
  default: "기본순",
  name: "이름순",
  rating: "레이팅 높은 순",
  acs: "ACS 높은 순",
};

const ProPlayers = () => {
  const [searchKeyword, setSearchKeyword] =
    useState("");

  const [selectedTeam, setSelectedTeam] =
    useState<TeamFilter>("All");

  const [selectedRole, setSelectedRole] =
    useState<RoleFilter>("All");

  const [sortOption, setSortOption] =
    useState<SortOption>("default");

  const filteredPlayers = useMemo(() => {
    const searchedPlayers = searchProPlayers(
      searchKeyword,
    );

    return searchedPlayers.filter((player) => {
      const matchesTeam =
        selectedTeam === "All" ||
        player.team?.shortName === selectedTeam;

      const matchesRole =
        selectedRole === "All" ||
        player.primaryRole === selectedRole ||
        player.roles.includes(selectedRole);

      return matchesTeam && matchesRole;
    });
  }, [
    searchKeyword,
    selectedTeam,
    selectedRole,
  ]);

  const sortedPlayers = useMemo(() => {
    const players = [...filteredPlayers];

    switch (sortOption) {
      case "name":
        return players.sort((a, b) =>
          a.nickname.localeCompare(b.nickname),
        );

      case "rating":
        return players.sort((a, b) => {
          const aRating = a.stats?.rating;
          const bRating = b.stats?.rating;

          if (aRating == null && bRating == null) return 0;
          if (aRating == null) return 1;
          if (bRating == null) return -1;

          return bRating - aRating;
        });

      case "acs":
        return players.sort((a, b) => {
          const aAcs = a.stats?.acs;
          const bAcs = b.stats?.acs;

          if (aAcs == null && bAcs == null) return 0;
          if (aAcs == null) return 1;
          if (bAcs == null) return -1;

          return bAcs - aAcs;
        });

      default:
        return players;
    }
  }, [filteredPlayers, sortOption]);

  const hasActiveFilters =
    searchKeyword.trim().length > 0 ||
    selectedTeam !== "All" ||
    selectedRole !== "All";

  const clearFilters = () => {
    setSearchKeyword("");
    setSelectedTeam("All");
    setSelectedRole("All");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
        <Link
        to="/valorant"
        className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-base font-semibold text-slate-300 transition hover:text-white"
        >
          <ChevronLeft size={20} />
          Valorant
        </Link>

        <Link
        to="/valorant/pacific"
        className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-base font-semibold text-slate-300 transition hover:text-white"
         >
          Pacific Teams
          <ChevronRight size={20} />
         </Link>
      </div>
    </div>
  
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-120px] top-[-180px] h-[420px] w-[420px] rounded-full bg-red-500/10 blur-[130px]" />

          <div className="absolute right-[-100px] top-[-160px] h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-[140px]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.2),rgba(2,6,23,0.95))]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-red-200">
                <Trophy size={14} />

                VALORANT Esports
              </div>

              <h1 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                프로 선수
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                프로 선수의 역할, 대표 요원, 감도와
                핵심 경기 통계를 확인해보세요.
              </p>
            </div>

            <div className="grid w-full grid-cols-2 gap-3 sm:w-auto">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md">
                <div className="flex items-center gap-2 text-slate-500">
                  <Users size={15} />

                  <p className="text-[11px] font-black tracking-[0.16em]">
                    등록 선수
                  </p>
                </div>

                <p className="mt-2 text-2xl font-black text-white">
                  {proPlayers.length}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md">
                <div className="flex items-center gap-2 text-slate-500">
                  <SlidersHorizontal size={15} />

                  <p className="text-[11px] font-black tracking-[0.16em]">
                    검색 결과
                  </p>
                </div>

                <p className="mt-2 text-2xl font-black text-white">
                  {filteredPlayers.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <WeeklyPick pick={weeklyPick} />
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-5">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Search
                size={19}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="search"
                value={searchKeyword}
                onChange={(event) =>
                  setSearchKeyword(
                    event.target.value,
                  )
                }
                placeholder="선수, 본명, 팀, 역할 또는 요원 검색"
                className="h-13 w-full rounded-2xl border border-white/10 bg-slate-950/80 py-3 pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-white/20 focus:bg-slate-950"
              />

              {searchKeyword && (
                <button
                  type="button"
                  onClick={() =>
                    setSearchKeyword("")
                  }
                  aria-label="검색어 지우기"
                  className="absolute right-4 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 transition hover:bg-white/10 hover:text-white"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div>
                <p className="mb-2 text-[11px] font-black tracking-[0.18em] text-slate-500">
                  팀
                </p>

                <div className="flex flex-wrap gap-2">
                  {TEAM_FILTERS.map((team) => {
                    const isSelected =
                      selectedTeam === team;

                    return (
                      <button
                        key={team}
                        type="button"
                        onClick={() =>
                          setSelectedTeam(team)
                        }
                        className={`rounded-xl border px-3 py-2 text-xs font-bold transition ${
                          isSelected
                            ? "border-white/20 bg-white text-slate-950"
                            : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                        }`}
                      >
                        {TEAM_LABELS[team]}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="mb-2 text-[11px] font-black tracking-[0.18em] text-slate-500">
                  역할
                </p>

                <div className="flex flex-wrap gap-2">
                  {ROLE_FILTERS.map((role) => {
                    const isSelected =
                      selectedRole === role;

                    return (
                      <button
                        key={role}
                        type="button"
                        onClick={() =>
                          setSelectedRole(role)
                        }
                        className={`rounded-xl border px-3 py-2 text-xs font-bold transition ${
                          isSelected
                            ? "border-red-400/30 bg-red-400/15 text-red-100"
                            : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                        }`}
                      >
                        {ROLE_LABELS[role]}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {hasActiveFilters && (
              <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                <p className="text-xs text-slate-500">
                  현재 조건에 맞는 선수{" "}
                  <strong className="font-black text-slate-200">
                    {filteredPlayers.length}명
                  </strong>
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-bold text-slate-400 transition hover:bg-white/5 hover:text-white"
                >
                  <X size={14} />

                  필터 초기화
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8">
          {filteredPlayers.length > 0 ? (
            <>
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-black tracking-[0.18em] text-slate-500">
                    프로 선수
                  </p>

                  <h2 className="mt-1 text-2xl font-black tracking-[-0.03em] text-white">
                    선수 목록
                  </h2>
                </div>

                <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center">
                  <p className="text-sm text-slate-500">
                    총 {filteredPlayers.length}명
                  </p>

                  <select
                    value={sortOption}
                    onChange={(event) =>
                      setSortOption(
                        event.target.value as SortOption,
                      )
                    }
                    aria-label="선수 정렬"
                    className="rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm font-bold text-slate-300 outline-none transition hover:border-white/20 focus:border-white/30"
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
                        {SORT_LABELS[option]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {sortedPlayers.map((player) => (
                  <ProPlayerCard
                    key={player.id}
                    player={player}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="flex min-h-[380px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-500">
                <Search size={26} />
              </div>

              <h2 className="mt-5 text-xl font-black text-white">
                검색 결과가 없습니다
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                검색어나 필터 조건을 변경한 뒤
                다시 확인해 주세요.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-xl border border-white/10 bg-white px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-slate-200"
              >
                전체 선수 보기
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProPlayers;