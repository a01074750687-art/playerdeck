import { useCallback, useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

import { getValorantActs } from "../api/valorantAssetsApi";
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
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const [error, setError] = useState("");

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

  const fetchPlayerProfile = useCallback(
    async (showLoading: boolean) => {
      try {
        if (showLoading) {
          setLoading(true);
        }

        setError("");

        const data = await getPlayerProfile(
          decodedPlayerName,
          selectedMode,
          selectedAct,
          acts
        );

        setPlayer(data);
        setLastUpdated(new Date());
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("알 수 없는 오류가 발생했습니다.");
        }

        if (showLoading) {
          setPlayer(null);
        }
      } finally {
        if (showLoading) {
          setLoading(false);
        }
      }
    },
    [decodedPlayerName, selectedMode, selectedAct, acts]
  );

  const refreshPlayer = async () => {
    if (isRefreshing) {
      return;
    }

    try {
      setIsRefreshing(true);

      await fetchPlayerProfile(false);
    } finally {
      setIsRefreshing(false);
    }
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

    fetchPlayerProfile(true);
  }, [actLoading, fetchPlayerProfile]);

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <section className="max-w-6xl mx-auto">
        <Link
          to="/valorant"
          className="text-red-400 hover:text-red-300 text-sm"
        >
          ← Back to Valorant
        </Link>

        {loading && <ProfileSkeleton />}

        {!loading && error && !player && (
          <div className="mt-8 bg-slate-900 border border-red-500/30 rounded-3xl p-8">
            <p className="text-red-400 font-bold mb-3">ERROR</p>

            <h1 className="text-3xl font-black mb-4">
              검색 실패
            </h1>

            <p className="text-slate-400">{error}</p>
          </div>
        )}

        {!loading && player && (
          <>
            <PlayerHeader
              player={player}
              isRefreshing={isRefreshing}
              lastUpdated={lastUpdated}
              onRefresh={refreshPlayer}
            />

            {error && (
              <div className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4">
                <p className="text-sm font-bold text-red-300">
                  전적 갱신 중 오류가 발생했습니다.
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {error}
                </p>
              </div>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <StatCard title="K/D" value={player.kd} />

              <StatCard
                title="Win Rate"
                value={player.winRate}
              />

              <StatCard title="HS%" value={player.hsRate} />

              <StatCard title="ACS" value={player.acs} />

              <StatCard title="ADR" value={player.adr} />

              <StatCard title="Kills" value={player.kills} />

              <StatCard
                title="Deaths"
                value={player.deaths}
              />

              <StatCard
                title="Assists"
                value={player.assists}
              />
            </div>

            <div className="grid md:grid-cols-[0.9fr_1.4fr] gap-6 mt-6">
              <div className="space-y-6">
                <TopAgents agents={player.topAgents} />

                <WeaponStats
                  weaponKills={player.weaponKills}
                />
              </div>

              <RecentMatches
                matches={player.recentMatches}
                selectedMode={selectedMode}
                onChangeMode={changeMode}
                acts={acts}
                selectedAct={selectedAct}
                onChangeAct={changeAct}
                actLoading={actLoading}
              />
            </div>
          </>
        )}
      </section>
    </main>
  );
}