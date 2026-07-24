import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Globe2,
  Medal,
  Shield,
  Target,
  Trophy,
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
  ProTeamAchievement,
} from "../types/proPlayer";

interface RoleTheme {
  label: string;
  className: string;
}

interface AchievementTheme {
  icon: string;
  className: string;
}

const ROLE_THEME: Record<ProPlayerRole, RoleTheme> = {
  Duelist: {
    label: "타격대",
    className:
      "border-red-400/20 bg-red-400/10 text-red-200",
  },

  Initiator: {
    label: "척후대",
    className:
      "border-blue-400/20 bg-blue-400/10 text-blue-200",
  },

  Controller: {
    label: "전략가",
    className:
      "border-violet-400/20 bg-violet-400/10 text-violet-200",
  },

  Sentinel: {
    label: "감시자",
    className:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  },

  Flex: {
    label: "유동 역할",
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
      return "활동";

    case "Substitute":
      return "후보";

    case "Inactive":
      return "비활동";

    case "Retired":
      return "은퇴";

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

const getAchievementTheme = (
  achievement: ProTeamAchievement,
): AchievementTheme => {
  const normalizedResult =
    achievement.result.toLowerCase();

  if (
    normalizedResult.includes("champion") ||
    normalizedResult.includes("winner") ||
    normalizedResult.includes("1st") ||
    normalizedResult.includes("우승")
  ) {
    return {
      icon: "🏆",
      className:
        "border-amber-400/20 bg-amber-400/10 text-amber-200",
    };
  }

  if (
    normalizedResult.includes("runner-up") ||
    normalizedResult.includes("runner up") ||
    normalizedResult.includes("2nd") ||
    normalizedResult.includes("준우승")
  ) {
    return {
      icon: "🥈",
      className:
        "border-slate-300/20 bg-slate-300/10 text-slate-200",
    };
  }

  if (
    normalizedResult.includes("3rd") ||
    normalizedResult.includes("third") ||
    normalizedResult.includes("3위")
  ) {
    return {
      icon: "🥉",
      className:
        "border-orange-400/20 bg-orange-400/10 text-orange-200",
    };
  }

  if (
    normalizedResult.includes("top 4") ||
    normalizedResult.includes("top4") ||
    normalizedResult.includes("semifinal") ||
    normalizedResult.includes("4강")
  ) {
    return {
      icon: "⭐",
      className:
        "border-blue-400/20 bg-blue-400/10 text-blue-200",
    };
  }

  return {
    icon: "◆",
    className:
      "border-violet-400/20 bg-violet-400/10 text-violet-200",
  };
};

const getAchievementResultLabel = (
  result: string,
): string => {
  const normalizedResult = result.toLowerCase();

  if (
    normalizedResult.includes("champion") ||
    normalizedResult.includes("winner") ||
    normalizedResult.includes("1st") ||
    normalizedResult.includes("우승")
  ) {
    return "우승";
  }

  if (
    normalizedResult.includes("runner-up") ||
    normalizedResult.includes("runner up") ||
    normalizedResult.includes("2nd") ||
    normalizedResult.includes("준우승")
  ) {
    return "준우승";
  }

  if (
    normalizedResult.includes("3rd place") ||
    normalizedResult.includes("3rd") ||
    normalizedResult.includes("third") ||
    normalizedResult.includes("3위")
  ) {
    return "3위";
  }

  if (
    normalizedResult.includes("top 4") ||
    normalizedResult.includes("top4") ||
    normalizedResult.includes("semifinal") ||
    normalizedResult.includes("4강")
  ) {
    return "4강";
  }

  if (
    normalizedResult.includes("playoff") ||
    normalizedResult.includes("플레이오프")
  ) {
    return "플레이오프 진출";
  }

  return result;
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
              팀 정보 없음
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

  const assistantCoaches =
    team.assistantCoaches ?? [];

  const achievements = [
    ...(team.achievements ?? []),
  ].sort(
    (firstAchievement, secondAchievement) =>
      secondAchievement.year -
      firstAchievement.year,
  );

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

              <p className="mt-7 text-xs font-black tracking-[0.16em] text-slate-500">
                프로 팀
              </p>

              <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">
                {team.name}
              </h1>

              <p className="mt-3 text-lg font-bold tracking-[0.14em] text-slate-400">
                {team.shortName}
              </p>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                {team.name}의 현재 등록 로스터입니다.
                선수 카드를 선택하면 감도, 장비, 주 요원과
                세부 경기 지표를 확인할 수 있습니다.
              </p>

              <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Users size={16} />

                    <span className="text-[10px] font-black tracking-[0.12em]">
                      등록 선수
                    </span>
                  </div>

                  <p className="mt-3 text-3xl font-black text-white">
                    {roster.length}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    전체 등록 선수
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-center gap-2 text-slate-500">
                    <UserRound size={16} />

                    <span className="text-[10px] font-black tracking-[0.12em]">
                      활동 선수
                    </span>
                  </div>

                  <p className="mt-3 text-3xl font-black text-white">
                    {activeRosterCount}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    현재 활동 중
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:col-span-1">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Globe2 size={16} />

                    <span className="text-[10px] font-black tracking-[0.12em]">
                      참가 지역
                    </span>
                  </div>

                  <p className="mt-3 text-xl font-black text-white">
                    {team.region}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    대회 참가 지역
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

        <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-stretch">
          <article className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div
                className="absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-10 blur-[90px]"
                style={{
                  backgroundColor: team.primaryColor,
                }}
              />

              <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.025),transparent_45%)]" />
            </div>

            <div className="relative">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]"
                  style={{
                    color: team.primaryColor,
                  }}
                >
                  <Shield size={21} />
                </div>

                <div>
                  <p className="text-[10px] font-black tracking-[0.18em] text-slate-500">
                    팀 정보
                  </p>

                  <h2 className="mt-1 text-2xl font-black tracking-[-0.035em] text-white">
                    팀 기본 정보
                  </h2>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
                <div className="flex items-center justify-between gap-5 border-b border-white/10 px-4 py-5 sm:px-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400">
                      <CalendarDays size={18} />
                    </div>

                    <div>
                      <p className="text-sm font-black text-slate-300">
                        창단 연도
                      </p>

                      <p className="mt-1 text-xs font-medium text-slate-500">
                        구단이 창단된 연도
                      </p>
                    </div>
                  </div>

                  <p className="text-right text-base font-black text-white sm:text-lg">
                    {team.foundedYear
                      ? `${team.foundedYear}년`
                      : "미등록"}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-5 border-b border-white/10 px-4 py-5 sm:px-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400">
                      <UserRound size={18} />
                    </div>

                    <div>
                      <p className="text-sm font-black text-slate-300">
                        감독
                      </p>

                      <p className="mt-1 text-xs font-medium text-slate-500">
                        현재 헤드 코치
                      </p>
                    </div>
                  </div>

                  <div className="min-w-0 text-right">
                    <p className="truncate text-base font-black text-white sm:text-lg">
                      {team.headCoach?.nickname ??
                        "미등록"}
                    </p>

                    {team.headCoach?.realName ? (
                      <p className="mt-1 truncate text-xs text-slate-500">
                        {team.headCoach.realName}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-5 px-4 py-5 sm:px-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400">
                      <Users size={18} />
                    </div>

                    <div>
                      <p className="text-sm font-black text-slate-300">
                        코치
                      </p>

                      <p className="mt-1 text-xs font-medium text-slate-500">
                        어시스턴트 코치
                      </p>
                    </div>
                  </div>

                  <div className="min-w-0 text-right">
                    {assistantCoaches.length > 0 ? (
                      <div className="flex flex-col items-end gap-2">
                        {assistantCoaches.map(
                          (coach) => (
                            <div
                              key={`${coach.nickname}-${coach.realName ?? "unknown"}`}
                            >
                              <p className="text-base font-black text-white sm:text-lg">
                                {coach.nickname}
                              </p>

                              {coach.realName ? (
                                <p className="mt-1 text-xs text-slate-500">
                                  {coach.realName}
                                </p>
                              ) : null}
                            </div>
                          ),
                        )}
                      </div>
                    ) : (
                      <p className="text-base font-black text-white sm:text-lg">
                        미등록
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute -right-20 -top-24 h-60 w-60 rounded-full bg-amber-400/5 blur-[100px]" />

              <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.025),transparent_45%)]" />
            </div>

            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-200">
                    <Trophy size={21} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black tracking-[0.18em] text-slate-500">
                      팀 기록
                    </p>

                    <h2 className="mt-1 text-2xl font-black tracking-[-0.035em] text-white">
                      주요 성적
                    </h2>
                  </div>
                </div>

                {achievements.length > 0 ? (
                  <span className="inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-black tracking-[0.12em] text-slate-400">
                    총 {achievements.length}개
                  </span>
                ) : null}
              </div>

              {achievements.length > 0 ? (
                <div className="mt-6 space-y-3">
                  {achievements.map(
                    (achievement, index) => {
                      const achievementTheme =
                        getAchievementTheme(
                          achievement,
                        );

                      return (
                        <div
                          key={`${achievement.year}-${achievement.title}-${index}`}
                          className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition duration-200 hover:border-white/20 hover:bg-white/[0.04] sm:flex-row sm:items-center sm:justify-between sm:p-5"
                        >
                          <div className="flex min-w-0 items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl">
                              {achievementTheme.icon}
                            </div>

                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-[0.14em] text-slate-500">
                                  <CalendarDays
                                    size={12}
                                  />

                                  {achievement.year}년
                                </span>

                                <span className="h-1 w-1 rounded-full bg-slate-700" />

                                <span className="text-[10px] font-black tracking-[0.14em] text-slate-600">
                                  공식 대회 성적
                                </span>
                              </div>

                              <h3 className="mt-2 text-base font-black leading-6 text-white sm:text-lg">
                                {achievement.title}
                              </h3>
                            </div>
                          </div>

                          <span
                            className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-[10px] font-black tracking-[0.12em] ${achievementTheme.className}`}
                          >
                            <Medal size={14} />

                            {getAchievementResultLabel(
                              achievement.result,
                            )}
                          </span>
                        </div>
                      );
                    },
                  )}
                </div>
              ) : (
                <div className="mt-6 flex min-h-[248px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-500">
                    <Trophy size={24} />
                  </div>

                  <h3 className="mt-4 text-base font-black text-white">
                    등록된 주요 성적이 없습니다
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    팀 데이터에 주요 대회 성적을 추가하면
                    이 영역에 자동으로 표시됩니다.
                  </p>
                </div>
              )}
            </div>
          </article>
        </section>

        <section className="mt-10 lg:mt-12">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black tracking-[0.18em] text-red-300">
                선수 명단
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                등록 선수
              </h2>
            </div>

            <p className="text-sm font-medium text-slate-500">
              총 {roster.length}명 · 활동{" "}
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
                                src={
                                  player.profileImageUrl
                                }
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
                                <ArrowUpRight
                                  size={18}
                                />
                              </div>
                            </div>

                            <div className="mt-3 flex flex-wrap gap-2">
                              <span
                                className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-black tracking-[0.11em] ${roleTheme.className}`}
                              >
                                {roleTheme.label}
                              </span>

                              <span
                                className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-black tracking-[0.11em] ${getStatusClassName(
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
                            <p className="text-[10px] font-black tracking-[0.13em] text-slate-600">
                              국가
                            </p>

                            <p className="mt-1 text-sm font-bold text-slate-300">
                              {player.countryName}
                            </p>
                          </div>

                          <div className="text-right">
                            <p className="text-[10px] font-black tracking-[0.13em] text-slate-600">
                              주 요원
                            </p>

                            <p className="mt-1 max-w-[180px] truncate text-sm font-bold text-slate-300">
                              {player.mainAgents.length >
                              0
                                ? player.mainAgents.join(
                                    ", ",
                                  )
                                : "미등록"}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 grid grid-cols-3 gap-2">
                          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3">
                            <p className="text-[9px] font-black tracking-[0.12em] text-slate-600">
                              평점
                            </p>

                            <p className="mt-1 text-lg font-black text-white">
                              {player.stats.rating.toFixed(
                                2,
                              )}
                            </p>
                          </div>

                          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3">
                            <p className="text-[9px] font-black tracking-[0.12em] text-slate-600">
                              평균 전투 점수
                            </p>

                            <p className="mt-1 text-lg font-black text-white">
                              {player.stats.acs}
                            </p>
                          </div>

                          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3">
                            <p className="text-[9px] font-black tracking-[0.12em] text-slate-600">
                              킬/데스
                            </p>

                            <p className="mt-1 text-lg font-black text-white">
                              {player.stats.kd.toFixed(
                                2,
                              )}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                            <Target size={14} />

                            헤드샷 {player.stats.hs}%
                          </div>

                          <span className="text-xs font-black tracking-[0.1em] text-slate-500 transition-colors duration-300 group-hover:text-slate-200">
                            선수 정보 보기
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
                선수 데이터에 이 팀의 선수를 추가하면
                로스터가 자동으로 표시됩니다.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ProTeamDetail;