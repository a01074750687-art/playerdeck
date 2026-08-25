import {
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import type { ProPlayerRole } from "../../types/proPlayer";

export type TeamFilter =
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

export type RoleFilter =
  | "All"
  | ProPlayerRole;

interface ProPlayerFiltersProps {
  searchKeyword: string;
  selectedTeam: TeamFilter;
  selectedRole: RoleFilter;
  resultCount: number;

  onSearchKeywordChange: (
    value: string,
  ) => void;

  onTeamChange: (
    team: TeamFilter,
  ) => void;

  onRoleChange: (
    role: RoleFilter,
  ) => void;

  onClear: () => void;
}

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

const TEAM_LABELS: Record<
  TeamFilter,
  string
> = {
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

const ROLE_LABELS: Record<
  RoleFilter,
  string
> = {
  All: "전체 역할",
  Duelist: "타격대",
  Initiator: "척후대",
  Controller: "전략가",
  Sentinel: "감시자",
  Flex: "플렉스",
};

const ProPlayerFilters = ({
  searchKeyword,
  selectedTeam,
  selectedRole,
  resultCount,
  onSearchKeywordChange,
  onTeamChange,
  onRoleChange,
  onClear,
}: ProPlayerFiltersProps) => {
  const hasActiveFilters =
    searchKeyword.trim().length > 0 ||
    selectedTeam !== "All" ||
    selectedRole !== "All";

  const activeFilterCount =
    Number(
      searchKeyword.trim().length > 0,
    ) +
    Number(selectedTeam !== "All") +
    Number(selectedRole !== "All");

  return (
    <section
      aria-labelledby="player-search-title"
      className="
        relative overflow-hidden
        rounded-[1.6rem]
        border border-white/[0.09]
        bg-[#080b18]/85
        p-5
        shadow-[0_20px_65px_rgba(0,0,0,0.22)]
        backdrop-blur-md
        sm:p-6
      "
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-28 -top-28 h-64 w-64 rounded-full bg-red-500/[0.055] blur-[100px]" />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.012),transparent_45%)]" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-red-300">
              <SlidersHorizontal size={15} />

              <p className="text-[10px] font-black tracking-[0.16em]">
                선수 검색
              </p>
            </div>

            <h2
              id="player-search-title"
              className="
                mt-2
                text-xl font-black
                tracking-[-0.035em]
                text-white
              "
            >
              원하는 선수를 찾아보세요
            </h2>
          </div>

          {hasActiveFilters && (
            <span
              className="
                inline-flex w-fit
                items-center
                rounded-full
                border border-red-400/15
                bg-red-400/[0.06]
                px-3 py-1.5
                text-[10px] font-bold
                text-red-200
              "
            >
              필터 {activeFilterCount}개 적용
            </span>
          )}
        </div>

        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="
              pointer-events-none
              absolute left-4 top-1/2
              -translate-y-1/2
              text-slate-500
            "
          />

          <input
            type="search"
            value={searchKeyword}
            onChange={(event) =>
              onSearchKeywordChange(
                event.target.value,
              )
            }
            placeholder="선수, 본명, 팀, 역할 또는 요원 검색"
            className="
              h-12 w-full
              rounded-2xl
              border border-white/[0.09]
              bg-slate-950/65
              py-3 pl-11 pr-12
              text-sm text-white
              outline-none
              transition-all duration-200
              placeholder:text-slate-600
              hover:border-white/[0.13]
              focus:border-red-400/30
              focus:bg-slate-950/85
              focus:ring-2
              focus:ring-red-400/[0.06]
            "
          />

          {searchKeyword && (
            <button
              type="button"
              onClick={() =>
                onSearchKeywordChange("")
              }
              aria-label="검색어 지우기"
              className="
                absolute right-3 top-1/2
                flex h-8 w-8
                -translate-y-1/2
                items-center justify-center
                rounded-lg
                text-slate-500
                transition
                hover:bg-white/[0.06]
                hover:text-white
              "
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Filters */}
        <div
          className="
            mt-5 grid gap-5
            border-t border-white/[0.07]
            pt-5
            lg:grid-cols-[1.3fr_1fr]
          "
        >
          {/* Team */}
          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-[10px] font-black tracking-[0.16em] text-slate-500">
                팀
              </p>

              {selectedTeam !== "All" && (
                <span className="text-[10px] font-bold text-slate-600">
                  {TEAM_LABELS[selectedTeam]}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {TEAM_FILTERS.map((team) => {
                const isSelected =
                  selectedTeam === team;

                return (
                  <button
                    key={team}
                    type="button"
                    onClick={() =>
                      onTeamChange(team)
                    }
                    className={`
                      rounded-xl border
                      px-3 py-2
                      text-[11px] font-bold
                      transition-all duration-200
                      ${
                        isSelected
                          ? team === "All"
                            ? "border-white/20 bg-white text-slate-950 shadow-[0_6px_20px_rgba(255,255,255,0.06)]"
                            : "border-red-400/25 bg-red-400/[0.1] text-red-100"
                          : "border-white/[0.08] bg-white/[0.025] text-slate-500 hover:border-white/[0.14] hover:bg-white/[0.05] hover:text-slate-200"
                      }
                    `}
                  >
                    {TEAM_LABELS[team]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Role */}
          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-[10px] font-black tracking-[0.16em] text-slate-500">
                역할
              </p>

              {selectedRole !== "All" && (
                <span className="text-[10px] font-bold text-slate-600">
                  {ROLE_LABELS[selectedRole]}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {ROLE_FILTERS.map((role) => {
                const isSelected =
                  selectedRole === role;

                return (
                  <button
                    key={role}
                    type="button"
                    onClick={() =>
                      onRoleChange(role)
                    }
                    className={`
                      rounded-xl border
                      px-3 py-2
                      text-[11px] font-bold
                      transition-all duration-200
                      ${
                        isSelected
                          ? role === "All"
                            ? "border-white/20 bg-white text-slate-950 shadow-[0_6px_20px_rgba(255,255,255,0.06)]"
                            : "border-red-400/25 bg-red-400/[0.1] text-red-100"
                          : "border-white/[0.08] bg-white/[0.025] text-slate-500 hover:border-white/[0.14] hover:bg-white/[0.05] hover:text-slate-200"
                      }
                    `}
                  >
                    {ROLE_LABELS[role]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Filter Footer */}
        {hasActiveFilters && (
          <div
            className="
              mt-5 flex flex-col gap-3
              border-t border-white/[0.07]
              pt-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p className="text-xs text-slate-500">
              현재 조건에 맞는 선수{" "}
              <strong className="font-black text-slate-200">
                {resultCount}명
              </strong>
            </p>

            <button
              type="button"
              onClick={onClear}
              className="
                inline-flex w-fit
                items-center gap-1.5
                rounded-lg
                px-2.5 py-2
                text-xs font-bold
                text-slate-500
                transition
                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              <X size={14} />

              필터 초기화
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProPlayerFilters;