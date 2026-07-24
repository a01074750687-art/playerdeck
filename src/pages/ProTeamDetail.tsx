import {
  ArrowLeft,
  ArrowUpRight,
  Globe2,
  Shield,
  Target,
  UserRound,
  Users,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { proPlayers } from "../data/proPlayers";
import { proTeams } from "../data/proTeams";
import type {
  ProPlayer,
  ProPlayerRole,
  ProTeam,
} from "../types/proPlayer";

interface RoleTheme {
  label: string;
  className: string;
}

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

const getTeamBySlug = (
  teamSlug: string | undefined,
): ProTeam | null => {
  if (!teamSlug) {
    return null;
  }

  return (
    proTeams.find((team) => team.slug === teamSlug) ??
    null
  );
};

const getTeamRoster = (
  teamSlug: string | undefined,
): ProPlayer[] => {
  if (!teamSlug) {
    return [];
  }

  return proPlayers
    .filter(
      (player) => player.team?.slug === teamSlug,
    )
    .sort((firstPlayer, secondPlayer) => {
      if (
        firstPlayer.status === "Active" &&
        secondPlayer.status !== "Active"
      ) {
        return -1;
      }

      if (
        firstPlayer.status !== "Active" &&
        secondPlayer.status === "Active"
      ) {
        return 1;
      }

      return firstPlayer.nickname.localeCompare(
        secondPlayer.nickname,
      );
    });
};

const getStatusLabel = (
  status: ProPlayer["status"],
): string => {
  switch (status) {
    case "Active":
      return "Active";

    case "Substitute":
      return "Substitute";

    case "Inactive":
      return "Inactive";

    case "Retired":
      return "Retired";

    default:
      return status;
  }
};

const getStatusClassName = (
  status: ProPlayer["status"],
): string => {
  switch (status) {
    case "Active":
      return "border-emerald-400/20 bg-emerald-400/10 text-emerald-200";

    case "Substitute":
      return "border-amber-400/20 bg-amber-400/10 text-amber-200";

    case "Inactive":
      return "border-slate-400/20 bg-slate-400/10 text-slate-300";

    case "Retired":
      return "border-red-400/20 bg-red-400/10 text-red-200";

    default:
      return "border-white/10 bg-white/[0.05] text-slate-300";
  }
};

const ProTeamDetail = () => {
  const { teamSlug } = useParams<{
    teamSlug: string;
  }>();

  const team = getTeamBySlug(teamSlug);
  const roster = getTeamRoster(teamSlug);

  if (!team) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -left-40 -top-32 h-[28rem] w-[28rem] rounded-full bg-red-500/10 blur-[140px]" />

          <div className="absolute -bottom-48 right-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/5 blur-[160px]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:54px_54px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-4 py-10 sm:px-6">
          <section className="w-full rounded-[2rem] border border-white/10 bg-slate-950/70 px-6 py-14 text-center shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:px-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] text-slate-400">
              <Shield size={34} />
            </div>

            <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-red-300">
              Team Not Found
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
              팀 정보를 찾을 수 없습니다
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              요청한 팀이 존재하지 않거나 현재 등록된 팀
              데이터에 정보가 없습니다.
            </p>

            <Link
              to="/valorant/pacific"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-bold text-white transition duration-200 hover:border-white/20 hover:bg-white/10"
            >
              <ArrowLeft size={17} />

              Pacific 팀 목록으로 돌아가기
            </Link>
          </section>
        </div>
      </main>
    );
  }

  const activeRosterCount = roster.filter(
    (player) => player.status === "Active",
  ).length;

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute -left-48 -top-40 h-[32rem] w-[32rem] rounded-full blur-[150px]"
          style={{
            backgroundColor: `${team.primaryColor}20`,
          }}
        />

        <div
          className="absolute -right-48 top-60 h-[30rem] w-[30rem] rounded-full blur-[160px]"
          style={{
            backgroundColor: `${team.secondaryColor}18`,
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:54px_54px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.65)_72%,rgba(2,6,23,0.96)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        <div className="mb-6 sm:mb-8">
          <Link
            to="/valorant/pacific"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors duration-200 hover:text-white"
          >
            <ArrowLeft size={17} />

            Pacific 팀 목록으로 돌아가기
          </Link>
        </div>

        <section className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:rounded-[2rem]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div
              className="absolute inset-x-0 top-0 h-1.5"
              style={{
                background: `linear-gradient(
                  90deg,
                  ${team.primaryColor},
                  ${team.secondaryColor}
                )`,
              }}
            />

            <div
              className="absolute -right-24 -top-32 h-[28rem] w-[28rem] rounded-full opacity-20 blur-[100px]"
              style={{
                backgroundColor: team.primaryColor,
              }}
            />

            <div
              className="absolute -left-24 bottom-[-14rem] h-[28rem] w-[28rem] rounded-full opacity-10 blur-[120px]"
              style={{
                backgroundColor: team.secondaryColor,
              }}
            />

            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.035),transparent_40%)]" />
          </div>

          <div className="relative grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center lg:px-12 lg:py-12">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.17em] text-red-200 sm:text-xs">
                  <Shield size={15} />

                  VCT Pacific
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-300 sm:text-xs">
                  <Globe2 size={15} />

                  {team.region}
                </span>
              </div>

              <p className="mt-7 text-xs font-black uppercase tracking-[0.24em] text-slate-500">
                Official Team
              </p>

              <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">
                {team.name}
              </h1>

              <p className="mt-3 text-lg font-bold tracking-[0.14em] text-slate-400">
                {team.shortName}
              </p>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                {team.name}의 현재 등록 로스터입니다.
                선수 카드를 선택하면 감도, 장비, 요원과
                세부 경기 지표를 확인할 수 있습니다.
              </p>

              <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Users size={16} />

                    <span className="text-[10px] font-black uppercase tracking-[0.16em]">
                      Roster
                    </span>
                  </div>

                  <p className="mt-3 text-3xl font-black text-white">
                    {roster.length}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Registered players
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-center gap-2 text-slate-500">
                    <UserRound size={16} />

                    <span className="text-[10px] font-black uppercase tracking-[0.16em]">
                      Active
                    </span>
                  </div>

                  <p className="mt-3 text-3xl font-black text-white">
                    {activeRosterCount}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Active players
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:col-span-1">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Globe2 size={16} />

                    <span className="text-[10px] font-black uppercase tracking-[0.16em]">
                      Region
                    </span>
                  </div>

                  <p className="mt-3 text-xl font-black text-white">
                    {team.region}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Competition region
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div
                className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/45 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.45)] backdrop-blur-md sm:h-72 sm:w-72"
                style={{
                  boxShadow: `0 28px 80px ${team.primaryColor}18`,
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `radial-gradient(
                      circle at center,
                      ${team.primaryColor}55 0%,
                      transparent 68%
                    )`,
                  }}
                />

                {team.logoUrl ? (
                  <img
                    src={team.logoUrl}
                    alt={`${team.name} 팀 로고`}
                    className="relative z-10 max-h-full max-w-full object-contain drop-shadow-[0_24px_36px_rgba(0,0,0,0.6)]"
                  />
                ) : (
                  <span
                    className="relative z-10 text-center text-5xl font-black tracking-[-0.06em] text-white"
                    style={{
                      textShadow: `0 18px 42px ${team.primaryColor}88`,
                    }}
                  >
                    {team.shortName}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 lg:mt-12">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300">
                Team Roster
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                등록 선수
              </h2>
            </div>

            <p className="text-sm font-medium text-slate-500">
              총 {roster.length}명 · Active{" "}
              {activeRosterCount}명
            </p>
          </div>

          {roster.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {roster.map((player) => {
                const roleTheme =
                  ROLE_THEME[player.primaryRole];

                return (
                  <Link
                    key={player.id}
                    to={`/valorant/pros/${player.slug}`}
                    aria-label={`${player.nickname} 선수 상세 페이지로 이동`}
                    className="group block h-full"
                  >
                    <article className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/85 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-6">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-40"
                        style={{
                          background: `radial-gradient(
                            circle at 85% 10%,
                            ${team.primaryColor}44 0%,
                            transparent 38%
                          )`,
                        }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                            {player.profileImageUrl ? (
                              <img
                                src={player.profileImageUrl}
                                alt={`${player.nickname} 선수`}
                                loading="lazy"
                                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <UserRound
                                size={30}
                                className="text-slate-500"
                              />
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <h3 className="truncate text-2xl font-black tracking-[-0.04em] text-white">
                                  {player.nickname}
                                </h3>

                                <p className="mt-1 truncate text-sm text-slate-500">
                                  {player.realName}
                                </p>
                              </div>

                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
                                <ArrowUpRight size={18} />
                              </div>
                            </div>

                            <div className="mt-3 flex flex-wrap gap-2">
                              <span
                                className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.13em] ${roleTheme.className}`}
                              >
                                {roleTheme.label}
                              </span>

                              <span
                                className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.13em] ${getStatusClassName(
                                  player.status,
                                )}`}
                              >
                                {getStatusLabel(
                                  player.status,
                                )}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-600">
                              Country
                            </p>

                            <p className="mt-1 text-sm font-bold text-slate-300">
                              {player.countryName}
                            </p>
                          </div>

                          <div className="text-right">
                            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-600">
                              Main Agents
                            </p>

                            <p className="mt-1 max-w-[180px] truncate text-sm font-bold text-slate-300">
                              {player.mainAgents.length > 0
                                ? player.mainAgents.join(", ")
                                : "미등록"}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 grid grid-cols-3 gap-2">
                          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3">
                            <p className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-600">
                              Rating
                            </p>

                            <p className="mt-1 text-lg font-black text-white">
                              {player.stats.rating.toFixed(2)}
                            </p>
                          </div>

                          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3">
                            <p className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-600">
                              ACS
                            </p>

                            <p className="mt-1 text-lg font-black text-white">
                              {player.stats.acs}
                            </p>
                          </div>

                          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3">
                            <p className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-600">
                              K/D
                            </p>

                            <p className="mt-1 text-lg font-black text-white">
                              {player.stats.kd.toFixed(2)}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                            <Target size={14} />

                            HS {player.stats.hs}%
                          </div>

                          <span className="text-xs font-black uppercase tracking-[0.12em] text-slate-500 transition-colors duration-300 group-hover:text-slate-200">
                            View Player
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="flex min-h-[340px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.025] px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-400">
                <Users size={28} />
              </div>

              <h3 className="mt-5 text-xl font-black text-white">
                등록된 선수가 없습니다
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                proPlayers 데이터에 이 팀의 선수를
                추가하면 로스터가 자동으로 표시됩니다.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ProTeamDetail;