import { useEffect, useRef, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

import { getValorantActs } from "../api/valorantAssetsApi";
import Header from "../components/common/Header";
import PlayerHeader from "../components/valorant/PlayerHeader";
import ProfileSkeleton from "../components/valorant/ProfileSkeleton";
import RecentMatches from "../components/valorant/RecentMatches";
import StatCard from "../components/valorant/StatCard";
import TopAgents from "../components/valorant/TopAgents";
import WeaponStats from "../components/valorant/WeaponStats";
import { isGameMode, type GameMode } from "../constants/valorantModes";
import { getPlayerProfile } from "../services/valorantService";

import type { PlayerData } from "../types/valorant";
import type { ValorantActAsset } from "../types/valorantAssets";

const REFRESH_COOLDOWN_SECONDS = 30;

export default function PlayerProfile() {
  const { playerName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const decodedPlayerName = decodeURIComponent(
    playerName ?? "Unknown Player"
  );

  const modeParam = searchParams.get("mode");

  const selectedMode: GameMode = isGameMode(modeParam)
    ? modeParam
    : "all";

  const selectedAct = searchParams.get("act") ?? "current";

  const [player, setPlayer] = useState<PlayerData | null>(null);
  const [acts, setActs] = useState<ValorantActAsset[]>([]);

  const [loading, setLoading] = useState(true);
  const [actLoading, setActLoading] = useState(true);
  const [matchLoading, setMatchLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [refreshCooldown, setRefreshCooldown] = useState(0);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const [error, setError] = useState("");

  const requestIdRef = useRef(0);

  const updateSearchParams = (
    nextParams: Record<string, string | null>
  ) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(nextParams).forEach(([key, value]) => {
      if (!value || value === "all" || value === "current") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    setSearchParams(params);
  };

  const changeMode = (mode: GameMode) => {
    updateSearchParams({
      mode,
    });
  };

  const changeAct = (actId: string) => {
    updateSearchParams({
      act: actId,
    });
  };

  const fetchPlayerData = async ({
    showPageLoading = false,
    showMatchLoading = false,
    showRefreshLoading = false,
  }: {
    showPageLoading?: boolean;
    showMatchLoading?: boolean;
    showRefreshLoading?: boolean;
  } = {}) => {
    const requestId = ++requestIdRef.current;

    try {
      if (showPageLoading) {
        setLoading(true);
      }

      if (showMatchLoading) {
        setMatchLoading(true);
      }

      if (showRefreshLoading) {
        setRefreshing(true);
      }

      setError("");

      const data = await getPlayerProfile(
        decodedPlayerName,
        selectedMode,
        selectedAct,
        acts
      );

      if (requestId !== requestIdRef.current) {
        return false;
      }

      setPlayer(data);
      setLastUpdated(new Date());

      return true;
    } catch (error) {
      if (requestId !== requestIdRef.current) {
        return false;
      }

      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }

      if (showPageLoading) {
        setPlayer(null);
      }

      return false;
    } finally {
      if (requestId === requestIdRef.current) {
        if (showPageLoading) {
          setLoading(false);
        }

        if (showMatchLoading) {
          setMatchLoading(false);
        }

        if (showRefreshLoading) {
          setRefreshing(false);
        }
      }
    }
  };

  const refreshPlayer = async () => {
    if (refreshing || refreshCooldown > 0) {
      return;
    }

    const success = await fetchPlayerData({
      showRefreshLoading: true,
    });

    if (!success) {
      return;
    }

    setRefreshCooldown(REFRESH_COOLDOWN_SECONDS);
  };

  useEffect(() => {
    async function fetchActs() {
      try {
        setActLoading(true);

        const data = await getValorantActs();

        setActs(data);
      } catch (error) {
        console.log("ACT API ERROR:", error);

        setActs([]);
      } finally {
        setActLoading(false);
      }
    }

    fetchActs();
  }, []);

  useEffect(() => {
    if (actLoading) {
      return;
    }

    const isInitialLoading = player === null;

    fetchPlayerData({
      showPageLoading: isInitialLoading,
      showMatchLoading: !isInitialLoading,
    });
  }, [
    decodedPlayerName,
    selectedMode,
    selectedAct,
    acts,
    actLoading,
  ]);

  useEffect(() => {
    if (refreshCooldown <= 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      setRefreshCooldown((current) => {
        if (current <= 1) {
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [refreshCooldown]);

  const hasMatchData =
    (player?.recentMatches.length ?? 0) > 0;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main className="w-full px-3 py-8 sm:px-6 sm:py-10">
        <section className="mx-auto w-full max-w-6xl">
          <Link
            to="/valorant"
            className="inline-flex items-center rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm font-bold text-slate-400 transition-all duration-200 hover:border-red-400/40 hover:text-red-300"
          >
            ← 발로란트 검색으로
          </Link>

          {loading && (
            <div className="mt-6">
              <ProfileSkeleton />
            </div>
          )}

          {!loading && error && !player && (
            <div className="mt-6 rounded-3xl border border-red-500/30 bg-slate-900 p-8">
              <p className="mb-3 font-bold text-red-400">
                ERROR
              </p>

              <h1 className="mb-4 text-3xl font-black">
                검색 실패
              </h1>

              <p className="text-slate-400">
                {error}
              </p>
            </div>
          )}

          {!loading && player && (
            <div className="mt-6">
              <PlayerHeader
                player={player}
                isRefreshing={refreshing}
                refreshCooldown={refreshCooldown}
                lastUpdated={lastUpdated}
                onRefresh={refreshPlayer}
              />

              <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                <StatCard
                  title="K/D"
                  value={hasMatchData ? player.kd : "-"}
                />

                <StatCard
                  title="Win Rate"
                  value={hasMatchData ? player.winRate : "-"}
                />

                <StatCard
                  title="HS%"
                  value={hasMatchData ? player.hsRate : "-"}
                />

                <StatCard
                  title="ACS"
                  value={hasMatchData ? player.acs : "-"}
                />

                <StatCard
                  title="ADR"
                  value={hasMatchData ? player.adr : "-"}
                />

                <StatCard
                  title="Kills"
                  value={hasMatchData ? player.kills : "-"}
                />

                <StatCard
                  title="Deaths"
                  value={hasMatchData ? player.deaths : "-"}
                />

                <StatCard
                  title="Assists"
                  value={hasMatchData ? player.assists : "-"}
                />
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-[0.9fr_1.4fr]">
                <div className="space-y-6">
                  <TopAgents
                    agents={player.topAgents}
                  />

                  <WeaponStats
                    weaponKills={player.weaponKills}
                  />
                </div>

                <RecentMatches
                  playerName={player.name}
                  matches={player.recentMatches}
                  selectedMode={selectedMode}
                  onChangeMode={changeMode}
                  acts={acts}
                  selectedAct={selectedAct}
                  onChangeAct={changeAct}
                  actLoading={actLoading}
                />
              </div>
            </div>
          )}

          {matchLoading && (
            <div className="fixed bottom-6 left-3 right-3 z-50 rounded-2xl border border-white/10 bg-slate-900/95 px-5 py-3 text-center shadow-2xl backdrop-blur sm:left-auto sm:right-6 sm:text-left">
              <p className="text-sm font-bold text-slate-300">
                전적을 불러오는 중...
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}