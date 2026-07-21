import { useEffect, useMemo, useState } from "react";
import {
  Link,
  createSearchParams,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { getValorantActs } from "../api/valorantAssetsApi";
import Header from "../components/common/Header";
import AgentIcon from "../components/valorant/AgentIcon";
import AgentRoleBadge from "../components/valorant/AgentRoleBadge";
import MapThumbnail from "../components/valorant/MapThumbnail";
import MatchDetailPanel from "../components/valorant/MatchDetailPanel";
import ProfileSkeleton from "../components/valorant/ProfileSkeleton";

import {
  isGameMode,
  type GameMode,
} from "../constants/valorantModes";
import { getPlayerProfile } from "../services/valorantService";

import type {
  PlayerData,
  RecentMatch,
} from "../types/valorant";
import type { ValorantActAsset } from "../types/valorantAssets";
import { formatTimeAgo } from "../utils/formatTimeAgo";

type DetailStatCardProps = {
  label: string;
  value: string | number;
  description: string;
};

function DetailStatCard({
  label,
  value,
  description,
}: DetailStatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4">
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-black tracking-tight text-white">
        {value}
      </p>

      <p className="mt-1 text-xs font-medium text-slate-500">
        {description}
      </p>
    </div>
  );
}

function getKdRatio(match: RecentMatch) {
  if (match.deaths === 0) {
    return match.kills.toFixed(2);
  }

  return (match.kills / match.deaths).toFixed(2);
}

function getSelectedActLabel(
  acts: ValorantActAsset[],
  selectedAct: string
) {
  if (selectedAct === "current") {
    const activeAct = acts.find((act) => act.isActive);

    return activeAct?.shortLabel ?? "Current Act";
  }

  const selectedActAsset = acts.find(
    (act) => act.uuid === selectedAct
  );

  return selectedActAsset?.shortLabel ?? "Selected Act";
}

export default function MatchDetailPage() {
  const { playerName, matchIndex } = useParams();
  const [searchParams] = useSearchParams();

  const decodedPlayerName = decodeURIComponent(
    playerName ?? "Unknown Player"
  );

  const parsedMatchIndex = Number(matchIndex);

  const modeParam = searchParams.get("mode");

  const selectedMode: GameMode = isGameMode(modeParam)
    ? modeParam
    : "all";

  const selectedAct = searchParams.get("act") ?? "current";

  const [player, setPlayer] =
    useState<PlayerData | null>(null);

  const [acts, setActs] = useState<
    ValorantActAsset[]
  >([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const profileSearch = useMemo(() => {
    const params = new URLSearchParams();

    if (selectedMode !== "all") {
      params.set("mode", selectedMode);
    }

    if (selectedAct !== "current") {
      params.set("act", selectedAct);
    }

    const queryString = params.toString();

    return queryString ? `?${queryString}` : "";
  }, [selectedMode, selectedAct]);

  const profilePath = `/valorant/player/${encodeURIComponent(
    decodedPlayerName
  )}${profileSearch}`;

  const selectedMatch =
    Number.isInteger(parsedMatchIndex) &&
    parsedMatchIndex >= 0
      ? player?.recentMatches[parsedMatchIndex] ?? null
      : null;

  const selectedActLabel = getSelectedActLabel(
    acts,
    selectedAct
  );

  useEffect(() => {
    let cancelled = false;

    async function fetchMatchDetail() {
      try {
        setLoading(true);
        setError("");

        const actData = await getValorantActs();

        if (cancelled) {
          return;
        }

        setActs(actData);

        const playerData = await getPlayerProfile(
          decodedPlayerName,
          selectedMode,
          selectedAct,
          actData
        );

        if (cancelled) {
          return;
        }

        setPlayer(playerData);
      } catch (error) {
        if (cancelled) {
          return;
        }

        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(
            "경기 상세 정보를 불러오지 못했습니다."
          );
        }

        setPlayer(null);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchMatchDetail();

    return () => {
      cancelled = true;
    };
  }, [
    decodedPlayerName,
    selectedMode,
    selectedAct,
  ]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main className="w-full px-3 py-8 sm:px-6 sm:py-10">
        <section className="mx-auto w-full max-w-6xl">
          <Link
            to={profilePath}
            className="inline-flex items-center rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm font-bold text-slate-400 transition-all duration-200 hover:border-red-400/40 hover:text-red-300"
          >
            ← 플레이어 프로필로
          </Link>

          {loading && (
            <div className="mt-6">
              <ProfileSkeleton />
            </div>
          )}

          {!loading && error && (
            <div className="mt-6 rounded-3xl border border-red-500/30 bg-slate-900 p-7 sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-400">
                Match Detail Error
              </p>

              <h1 className="mt-3 text-3xl font-black">
                경기 정보를 불러오지 못했습니다
              </h1>

              <p className="mt-4 leading-7 text-slate-400">
                {error}
              </p>

              <Link
                to={profilePath}
                className="mt-6 inline-flex rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-2.5 text-sm font-black text-red-300 transition hover:border-red-400/60 hover:bg-red-500/20 hover:text-white"
              >
                프로필로 돌아가기
              </Link>
            </div>
          )}

          {!loading &&
            !error &&
            player &&
            !selectedMatch && (
              <div className="mt-6 rounded-3xl border border-amber-400/25 bg-slate-900 p-7 sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-300">
                  Match Not Found
                </p>

                <h1 className="mt-3 text-3xl font-black">
                  해당 경기를 찾을 수 없습니다
                </h1>

                <p className="mt-4 leading-7 text-slate-400">
                  선택한 모드 또는 Act의 최근 전적 범위에서
                  경기 번호를 찾지 못했습니다.
                </p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm text-slate-400">
                  <p>
                    플레이어:{" "}
                    <span className="font-bold text-white">
                      {decodedPlayerName}
                    </span>
                  </p>

                  <p className="mt-2">
                    조회 조건:{" "}
                    <span className="font-bold text-white">
                      {selectedActLabel} / {selectedMode}
                    </span>
                  </p>
                </div>

                <Link
                  to={profilePath}
                  className="mt-6 inline-flex rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-2.5 text-sm font-black text-red-300 transition hover:border-red-400/60 hover:bg-red-500/20 hover:text-white"
                >
                  최근 경기 목록으로
                </Link>
              </div>
            )}

          {!loading &&
            !error &&
            player &&
            selectedMatch && (
              <div className="mt-6 space-y-6">
                <section
                  className={
                    selectedMatch.result === "Win"
                      ? "overflow-hidden rounded-3xl border border-emerald-400/25 bg-slate-900 shadow-2xl shadow-emerald-950/20"
                      : "overflow-hidden rounded-3xl border border-red-400/20 bg-slate-900 shadow-2xl shadow-red-950/20"
                  }
                >
                  <div className="relative h-64 overflow-hidden sm:h-80">
                    <div className="h-full w-full">
                      <MapThumbnail
                        mapName={selectedMatch.map}
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/15" />

                    <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2 sm:left-6 sm:top-6">
                      <span className="rounded-full border border-white/10 bg-slate-950/75 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-slate-300 backdrop-blur">
                        {selectedMatch.mode}
                      </span>

                      <span className="rounded-full border border-white/10 bg-slate-950/75 px-3 py-1.5 text-xs font-bold text-slate-400 backdrop-blur">
                        {formatTimeAgo(
                          selectedMatch.playedAt
                        )}
                      </span>

                      <span className="rounded-full border border-white/10 bg-slate-950/75 px-3 py-1.5 text-xs font-bold text-slate-400 backdrop-blur">
                        {selectedActLabel}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-4 right-4 flex flex-col gap-4 sm:bottom-7 sm:left-6 sm:right-6 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                          Match Detail
                        </p>

                        <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
                          {selectedMatch.map}
                        </h1>

                        <p className="mt-2 text-sm font-bold text-slate-400">
                          {player.name}
                        </p>
                      </div>

                      <div
                        className={
                          selectedMatch.result === "Win"
                            ? "min-w-[170px] rounded-2xl border border-emerald-400/40 bg-emerald-500/20 px-5 py-4 text-right backdrop-blur"
                            : "min-w-[170px] rounded-2xl border border-red-400/40 bg-red-500/20 px-5 py-4 text-right backdrop-blur"
                        }
                      >
                        <p
                          className={
                            selectedMatch.result === "Win"
                              ? "text-xs font-black uppercase tracking-[0.2em] text-emerald-300"
                              : "text-xs font-black uppercase tracking-[0.2em] text-red-300"
                          }
                        >
                          {selectedMatch.result === "Win"
                            ? "Victory"
                            : "Defeat"}
                        </p>

                        <p className="mt-2 text-3xl font-black text-white">
                          {selectedMatch.score.ally}
                          <span className="mx-2 text-slate-500">
                            :
                          </span>
                          {selectedMatch.score.enemy}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
                      <div className="rounded-3xl border border-white/10 bg-slate-950/45 p-5">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 rounded-2xl border border-white/10 bg-slate-950 p-2">
                            <AgentIcon
                              agentName={
                                selectedMatch.agent
                              }
                              size="lg"
                            />
                          </div>

                          <div className="min-w-0">
                            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                              Played Agent
                            </p>

                            <h2 className="mt-1 truncate text-2xl font-black text-white">
                              {selectedMatch.agent}
                            </h2>

                            <div className="mt-2">
                              <AgentRoleBadge
                                agentName={
                                  selectedMatch.agent
                                }
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 border-t border-white/10 pt-5">
                          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                            K / D / A
                          </p>

                          <p className="mt-2 text-3xl font-black tracking-tight text-white">
                            {selectedMatch.kills}
                            <span className="mx-2 text-slate-600">
                              /
                            </span>
                            {selectedMatch.deaths}
                            <span className="mx-2 text-slate-600">
                              /
                            </span>
                            {selectedMatch.assists}
                          </p>
                        </div>

                        {(selectedMatch.isMatchMvp ||
                          selectedMatch.isTeamMvp) && (
                          <div className="mt-5">
                            <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1.5 text-xs font-black text-amber-300">
                              {selectedMatch.isMatchMvp
                                ? "MATCH MVP"
                                : "TEAM MVP"}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
                        <DetailStatCard
                          label="K/D"
                          value={getKdRatio(
                            selectedMatch
                          )}
                          description="킬 대비 데스 비율"
                        />

                        <DetailStatCard
                          label="ACS"
                          value={selectedMatch.acs}
                          description="평균 전투 점수"
                        />

                        <DetailStatCard
                          label="HS%"
                          value={`${selectedMatch.hsRate}%`}
                          description="헤드샷 비율"
                        />

                        <DetailStatCard
                          label="Kills"
                          value={selectedMatch.kills}
                          description="처치 수"
                        />

                        <DetailStatCard
                          label="Deaths"
                          value={selectedMatch.deaths}
                          description="사망 수"
                        />

                        <DetailStatCard
                          label="Assists"
                          value={selectedMatch.assists}
                          description="도움 수"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <section className="rounded-3xl border border-white/10 bg-slate-900 p-4 sm:p-6">
                  <div className="mb-5">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300">
                      Scoreboard
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-white">
                      양 팀 상세 기록
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      요원별 K/D/A와 ACS를 비교할 수 있습니다.
                    </p>
                  </div>

                  <MatchDetailPanel
                    match={selectedMatch}
                  />
                </section>
              </div>
            )}
        </section>
      </main>
    </div>
  );
}