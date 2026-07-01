import GameCard from "../components/GameCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <section className="max-w-6xl mx-auto">
        <p className="text-red-400 font-bold mb-3">PLAYERDECK</p>

        <h1 className="text-5xl font-black mb-4">
          Track Your Game Data
        </h1>

        <p className="text-slate-400 text-lg mb-12">
          플레이어 전적, 게임 데이터, 통계를 한눈에 확인하는 게임 데이터 플랫폼입니다.
        </p>

        <h2 className="text-2xl font-bold mb-6">Choose Game</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GameCard
            title="VALORANT"
            description="플레이어 검색, 전적 조회, 에이전트·맵·무기 정보를 확인합니다."
            to="/valorant"
            status="Available"
          />

          <GameCard
            title="League of Legends"
            description="추후 지원 예정입니다."
            to="/"
            status="Coming Soon"
          />
        </div>
      </section>
    </main>
  );
}