import {
  ArrowLeft,
  Globe2,
  Shield,
  Trophy,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import ProTeamCard from "../components/valorant/ProTeamCard";
import { proPlayers } from "../data/proPlayers";
import { proTeams } from "../data/proTeams";
import type { ProTeam } from "../types/proPlayer";

interface GroupedTeam {
  team: ProTeam;
  rosterCount: number;
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

const getTeamOrderIndex = (shortName: string): number => {
  const index = PACIFIC_TEAM_ORDER.findIndex(
    (teamShortName) => teamShortName === shortName,
  );

  return index === -1
    ? PACIFIC_TEAM_ORDER.length
    : index;
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

const PacificTeam = () => {
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

        <section className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/65 px-5 py-7 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-[2rem] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-red-500 via-red-600 to-orange-500" />

            <div className="absolute -right-24 -top-40 h-[28rem] w-[28rem] rounded-full bg-red-500/10 blur-[100px]" />

            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.035),transparent_38%)]" />
          </div>

          <div className="relative">
            <div className="flex flex-col gap-9 xl:flex-row xl:items-end xl:justify-between xl:gap-12">
              <div className="max-w-4xl">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-red-200 sm:text-xs">
                    <Shield size={15} />

                    Valorant Champions Tour
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-300 sm:text-xs">
                    <Globe2 size={15} />

                    Pacific
                  </span>
                </div>

                <p className="text-xs font-black uppercase tracking-[0.28em] text-slate-500 sm:text-sm">
                  2026 VCT Pacific
                </p>

                <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">
                  PACIFIC TEAMS
                </h1>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                  VCT Pacific에 참가하는 팀과 선수
                  로스터를 확인하세요. 팀 카드를 선택하면
                  팀 상세 정보와 소속 선수 목록으로
                  이동합니다.
                </p>
              </div>

              <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 xl:w-auto xl:min-w-[520px]">
                <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Shield size={16} />

                    <p className="text-[10px] font-black uppercase tracking-[0.17em]">
                      Teams
                    </p>
                  </div>

                  <p className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
                    {pacificTeams.length}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Pacific teams
                  </p>
                </article>

                <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Users size={16} />

                    <p className="text-[10px] font-black uppercase tracking-[0.17em]">
                      Players
                    </p>
                  </div>

                  <p className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
                    {totalPlayers}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Registered roster
                  </p>
                </article>

                <article className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-md sm:col-span-1">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Trophy size={16} />

                    <p className="text-[10px] font-black uppercase tracking-[0.17em]">
                      Season
                    </p>
                  </div>

                  <p className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
                    2026
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Current season
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 lg:mt-12">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300">
                Official Teams
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                VCT Pacific
              </h2>
            </div>

            <p className="text-sm font-medium text-slate-500">
              {pacificTeams.length}개 팀 · 선수{" "}
              {totalPlayers}명
            </p>
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
                등록된 퍼시픽 팀이 없습니다
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                proTeams 데이터에 퍼시픽 팀을 추가하면
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