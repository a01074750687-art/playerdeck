import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Globe2,
  Shield,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import ProTeamCard from "../components/valorant/ProTeamCard";
import { proPlayers } from "../data/pro";
import { proTeams } from "../data/proTeams";
import { weeklyPick } from "../data/weeklyPick";
import type {
  ProPlayerRole,
  ProTeam,
} from "../types/proPlayer";

interface GroupedTeam {
  team: ProTeam;
  rosterCount: number;
}

interface RoleTheme {
  label: string;
  className: string;
}

const PACIFIC_TEAM_ORDER = [
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
] as const;

const FEATURED_TEAM_SHORT_NAME = "GEN";

const ROLE_THEME: Record<ProPlayerRole, RoleTheme> = {
  Duelist: {
    label: "Duelist",
    className:
      "border-red-400/20 bg-red-400/10 text-red-200",
  },

  Initiator: {
    label: "Initiator",
    className:
      "border-blue-400/20 bg-blue-400/10 text-blue-200",
  },

  Controller: {
    label: "Controller",
    className:
      "border-violet-400/20 bg-violet-400/10 text-violet-200",
  },

  Sentinel: {
    label: "Sentinel",
    className:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  },

  Flex: {
    label: "Flex",
    className:
      "border-amber-400/20 bg-amber-400/10 text-amber-200",
  },
};

const getTeamOrderIndex = (shortName: string): number => {
  const index = PACIFIC_TEAM_ORDER.findIndex(
    (teamShortName) => teamShortName === shortName,
  );

  return index === -1 ? PACIFIC_TEAM_ORDER.length : index;
};

const createPacificTeams = (): GroupedTeam[] => {
  return proTeams
    .filter((team) => team.region === "Pacific")
    .map((team) => {
      const rosterCount = proPlayers.filter(
        (player) => player.team?.slug === team.slug,
      ).length;

      return {
        team,
        rosterCount,
      };
    })
    .sort((firstTeam, secondTeam) => {
      const firstOrder = getTeamOrderIndex(
        firstTeam.team.shortName,
      );

      const secondOrder = getTeamOrderIndex(
        secondTeam.team.shortName,
      );

      if (firstOrder !== secondOrder) {
        return firstOrder - secondOrder;
      }

      return firstTeam.team.name.localeCompare(
        secondTeam.team.name,
      );
    });
};

const pacificTeams = createPacificTeams();

const totalPlayers = pacificTeams.reduce(
  (total, currentTeam) =>
    total + currentTeam.rosterCount,
  0,
);

const featuredTeam =
  pacificTeams.find(
    ({ team }) =>
      team.shortName === FEATURED_TEAM_SHORT_NAME,
  ) ?? pacificTeams[0];

const PacificTeam = () => {
  const weeklyPlayer = weeklyPick.player;
  const weeklyPlayerTeam = weeklyPlayer.team;
  const weeklyPlayerRole =
    ROLE_THEME[weeklyPlayer.primaryRole];

  const weeklyPlayerImage =
    weeklyPlayer.profileImageUrl ??
    weeklyPlayerTeam?.logoUrl ??
    null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-48 -top-32 h-[30rem] w-[30rem] rounded-full bg-red-600/10 blur-[140px]" />

        <div className="absolute -right-40 top-72 h-[28rem] w-[28rem] rounded-full bg-orange-500/5 blur-[150px]" />

        <div className="absolute -bottom-56 left-1/3 h-[32rem] w-[32rem] rounded-full bg-blue-500/5 blur-[160px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:54px_54px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.6)_72%,rgba(2,6,23,0.95)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        <div className="mb-6 sm:mb-8">
          <Link
            to="/valorant"
            className="inline-flex items-center gap-2 rounded-full border border-transparent px-1 py-1 text-sm font-semibold text-slate-400 transition duration-200 hover:text-white focus-visible:border-white/20 focus-visible:outline-none"
          >
            <ArrowLeft size={17} />

            Valorant으로 돌아가기
          </Link>
        </div>

        <section className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/65 px-5 py-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-[2rem] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-red-500 via-red-600 to-orange-500" />

            <div className="absolute -right-24 -top-40 h-[28rem] w-[28rem] rounded-full bg-red-500/10 blur-[100px]" />

            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.035),transparent_38%)]" />
          </div>

          <div className="relative">
            <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between xl:gap-14">
              <div className="max-w-4xl">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-[11px] font-black tracking-[0.12em] text-red-200 sm:text-xs">
                    <Trophy size={15} />

                    Deck.GG 프로
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-slate-300 sm:text-xs">
                    <Globe2 size={15} />

                    VCT Pacific
                  </span>
                </div>

                <p className="text-xs font-black tracking-[0.18em] text-slate-500 sm:text-sm">
                  프로 데이터베이스
                </p>

                <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">
                  PACIFIC 프로 허브
                </h1>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                  VCT Pacific 프로 팀과 선수 정보를 한
                  곳에서 확인하세요. 참가 팀과 소속
                  로스터를 살펴보고 각 팀의 상세
                  페이지로 이동할 수 있습니다.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#teams"
                    className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm font-black text-white transition duration-200 hover:bg-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                  >
                    팀 둘러보기

                    <ArrowRight size={17} />
                  </a>

                  <Link
                    to="/valorant/pros"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-black text-slate-200 transition duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  >
                    선수 로스터 보기

                    <Users size={17} />
                  </Link>
                </div>
              </div>

              <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 xl:w-auto xl:min-w-[660px]">
                <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Shield size={16} />

                    <p className="text-[10px] font-black tracking-[0.12em]">
                      팀
                    </p>
                  </div>

                  <p className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
                    {pacificTeams.length}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    참가 팀
                  </p>
                </article>

                <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Users size={16} />

                    <p className="text-[10px] font-black tracking-[0.12em]">
                      선수
                    </p>
                  </div>

                  <p className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
                    {totalPlayers}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    등록 선수
                  </p>
                </article>

                <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Globe2 size={16} />

                    <p className="text-[10px] font-black tracking-[0.12em]">
                      리그
                    </p>
                  </div>

                  <p className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
                    VCT
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Pacific
                  </p>
                </article>

                <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-slate-500">
                    <CalendarDays size={16} />

                    <p className="text-[10px] font-black tracking-[0.12em]">
                      시즌
                    </p>
                  </div>

                  <p className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
                    2026
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    현재 시즌
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          id="rosters"
          className="mt-6 grid scroll-mt-24 gap-4 lg:grid-cols-2"
        >
          <a
            href="#teams"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-400/30 hover:bg-red-400/[0.06] sm:p-7"
          >
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 h-52 w-52 rounded-full bg-red-500/10 blur-[80px]"
            />

            <div className="relative flex items-start justify-between gap-6">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-400/20 bg-red-400/10 text-red-200">
                  <Shield size={23} />
                </div>

                <p className="mt-6 text-xs font-black tracking-[0.14em] text-red-300">
                  팀
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-[-0.035em] text-white">
                  Pacific 프로 팀
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                  VCT Pacific에 참가하는 프로 팀과
                  팀별 로스터를 확인하세요.
                </p>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition duration-300 group-hover:border-red-400/30 group-hover:bg-red-400/10 group-hover:text-red-200">
                <ArrowRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-0.5"
                />
              </div>
            </div>
          </a>

          <Link
            to="/valorant/pros"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/[0.05] sm:p-7"
          >
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 h-52 w-52 rounded-full bg-blue-500/10 blur-[80px]"
            />

            <div className="relative flex items-start justify-between gap-6">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-200">
                  <Users size={23} />
                </div>

                <p className="mt-6 text-xs font-black tracking-[0.14em] text-blue-300">
                  선수
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-[-0.035em] text-white">
                  프로 선수 로스터
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                  VCT Pacific 선수 전체 목록에서 팀,
                  역할과 선수 프로필을 확인하세요.
                </p>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-400/10 group-hover:text-blue-200">
                <ArrowRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-0.5"
                />
              </div>
            </div>
          </Link>
        </section>

        <section className="mt-6">
          <div className="group relative overflow-hidden rounded-3xl border border-red-300/15 bg-gradient-to-br from-red-500/[0.1] via-white/[0.035] to-orange-400/[0.06] transition duration-300 hover:-translate-y-1 hover:border-red-300/25 hover:shadow-[0_30px_90px_rgba(239,68,68,0.12)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute -left-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-red-500/10 blur-[90px]" />

              <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-orange-400/10 blur-[120px]" />

              <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.045),transparent_42%)]" />
            </div>

            <div className="relative grid min-h-[270px] lg:grid-cols-[250px_minmax(0,1fr)_auto] lg:items-center">
              <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden border-b border-white/10 bg-slate-950/30 p-8 lg:h-full lg:min-h-[270px] lg:border-b-0 lg:border-r">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.16),transparent_68%)]" />

                {weeklyPlayerImage ? (
                  <img
                    src={weeklyPlayerImage}
                    alt={`${weeklyPlayer.nickname} 프로필`}
                    className={`relative z-10 max-h-[210px] max-w-[210px] object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.45)] transition duration-500 group-hover:scale-[1.04] ${
                      weeklyPlayer.profileImageUrl
                        ? "h-full w-full object-cover object-top"
                        : ""
                    }`}
                  />
                ) : (
                  <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.05] text-4xl font-black text-white">
                    {weeklyPlayer.nickname
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                )}

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-red-300/20 bg-slate-950/65 px-3 py-2 text-[10px] font-black tracking-[0.14em] text-red-200 backdrop-blur-md">
                  <Sparkles size={13} />

                  이번 주 선수
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:px-10 lg:py-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-red-300/20 bg-red-400/10 px-3 py-1.5 text-[10px] font-black tracking-[0.14em] text-red-200">
                    {weeklyPick.label}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1.5 text-[10px] font-black tracking-[0.12em] ${weeklyPlayerRole.className}`}
                  >
                    {weeklyPlayerRole.label}
                  </span>

                  {weeklyPlayerTeam && (
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-black tracking-[0.12em] text-slate-300">
                      {weeklyPlayerTeam.shortName}
                    </span>
                  )}
                </div>

                <p className="mt-5 text-xs font-black tracking-[0.16em] text-slate-500">
                  DECK.GG WEEKLY PICK
                </p>

                <div className="mt-2 flex flex-wrap items-end gap-x-4 gap-y-1">
                  <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                    {weeklyPlayer.nickname}
                  </h2>

                  {weeklyPlayerTeam && (
                    <p className="pb-1 text-sm font-bold text-slate-500">
                      {weeklyPlayerTeam.name}
                    </p>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-black tracking-[-0.025em] text-slate-100 sm:text-xl">
                  {weeklyPick.title}
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                  {weeklyPick.comment}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                  {weeklyPlayer.mainAgents
                    .slice(0, 3)
                    .map((agent) => (
                      <span
                        key={agent}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5"
                      >
                        {agent}
                      </span>
                    ))}

                  <span className="px-1">
                    선정일 {weeklyPick.selectedAt}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-white/10 p-6 sm:flex-row lg:min-w-[220px] lg:flex-col lg:border-l lg:border-t-0 lg:p-8">
                <Link
                  to={`/valorant/pros/${weeklyPlayer.slug}`}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition duration-200 hover:bg-red-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
                >
                  프로필 보기

                  <ArrowUpRight size={17} />
                </Link>

                <Link
                  to="/valorant/pros"
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-black text-slate-200 transition duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  전체 선수 보기

                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {featuredTeam && (
          <section className="mt-6">
            <div className="relative overflow-hidden rounded-3xl border border-amber-300/15 bg-gradient-to-br from-amber-400/[0.08] via-white/[0.035] to-red-500/[0.05] p-6 sm:p-8 lg:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
              >
                <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-amber-400/10 blur-[110px]" />

                <div className="absolute bottom-0 left-1/3 h-40 w-80 bg-gradient-to-t from-red-500/[0.06] to-transparent blur-3xl" />
              </div>

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-2 text-amber-200">
                    <Sparkles size={17} />

                    <p className="text-xs font-black tracking-[0.14em]">
                      추천 팀
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-end gap-x-4 gap-y-2">
                    <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                      {featuredTeam.team.name}
                    </h2>

                    <span className="pb-1 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                      {featuredTeam.team.shortName}
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                    이번 Deck.GG 프로 허브의 추천
                    팀입니다. 팀 상세 페이지에서 현재
                    등록된 선수 로스터와 팀 정보를
                    확인해보세요.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                  <div className="min-w-[180px] rounded-2xl border border-white/10 bg-slate-950/35 px-5 py-4 backdrop-blur-md">
                    <p className="text-[10px] font-black tracking-[0.12em] text-slate-500">
                      등록 로스터
                    </p>

                    <p className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">
                      {featuredTeam.rosterCount}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      등록 선수
                    </p>
                  </div>

                  <a
                    href="#teams"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition duration-200 hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
                  >
                    팀 목록에서 보기

                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        <section
          id="teams"
          className="mt-12 scroll-mt-24 lg:mt-16"
        >
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black tracking-[0.14em] text-red-300">
                공식 팀
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                VCT Pacific
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                팀 카드를 선택하면 해당 팀의 상세 정보와
                등록된 프로 선수 로스터를 확인할 수
                있습니다.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-semibold text-slate-400">
              <Shield size={15} />

              {pacificTeams.length}개 팀 · 선수{" "}
              {totalPlayers}명
            </div>
          </div>

          {pacificTeams.length > 0 ? (
            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
              {pacificTeams.map(
                ({ team, rosterCount }) => (
                  <ProTeamCard
                    key={team.slug}
                    team={team}
                    rosterCount={rosterCount}
                  />
                ),
              )}
            </div>
          ) : (
            <div className="flex min-h-[360px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.025] px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-400">
                <Users size={28} />
              </div>

              <h3 className="mt-5 text-xl font-black text-white">
                등록된 Pacific 팀이 없습니다
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                proTeams 데이터에 Pacific 팀을 추가하면
                이 페이지에 자동으로 표시됩니다.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default PacificTeam;