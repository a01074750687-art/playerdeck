import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

import PlayerHeader from "../components/valorant/PlayerHeader";
import ProfileSkeleton from "../components/valorant/ProfileSkeleton";
import RecentMatches from "../components/valorant/RecentMatches";
import StatCard from "../components/valorant/StatCard";
import TopAgents from "../components/valorant/TopAgents";
import { isGameMode, type GameMode } from "../constants/valorantModes";
import { getPlayerProfile } from "../services/valorantService";

import type { PlayerData } from "../types/valorant";

export default function PlayerProfile() {
  const { playerName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const decodedPlayerName = decodeURIComponent(playerName ?? "Unknown Player");

  const modeParam = searchParams.get("mode");
  const selectedMode: GameMode = isGameMode(modeParam) ? modeParam : "all";

  const [player, setPlayer] = useState<PlayerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const changeMode = (mode: GameMode) => {
    if (mode === "all") {
      setSearchParams({});
      return;
    }

    setSearchParams({ mode });
  };

  useEffect(() => {
    async function fetchPlayer() {
      try {
        setLoading(true);
        setError("");

        const data = await getPlayerProfile(decodedPlayerName, selectedMode);
        setPlayer(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("알 수 없는 오류가 발생했습니다.");
        }

        setPlayer(null);
      } finally {
        setLoading(false);
      }
    }

    fetchPlayer();
  }, [decodedPlayerName, selectedMode]);

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

        {!loading && error && (
          <div className="mt-8 bg-slate-900 border border-red-500/30 rounded-3xl p-8">
            <p className="text-red-400 font-bold mb-3">ERROR</p>
            <h1 className="text-3xl font-black mb-4">검색 실패</h1>
            <p className="text-slate-400">{error}</p>
          </div>
        )}

        {!loading && player && (
          <>
            <PlayerHeader player={player} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <StatCard title="K/D" value={player.kd} />
              <StatCard title="Win Rate" value={player.winRate} />
              <StatCard title="HS%" value={player.hsRate} />
              <StatCard title="ACS" value={player.acs} />
              <StatCard title="ADR" value={player.adr} />
              <StatCard title="Kills" value={player.kills} />
              <StatCard title="Deaths" value={player.deaths} />
              <StatCard title="Assists" value={player.assists} />
            </div>

            <div className="grid md:grid-cols-[0.9fr_1.4fr] gap-6 mt-6">
              <TopAgents agents={player.topAgents} />

              <RecentMatches
                matches={player.recentMatches}
                selectedMode={selectedMode}
                onChangeMode={changeMode}
              />
            </div>
          </>
        )}
      </section>
    </main>
  );
}