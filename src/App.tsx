import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MatchDetailPage from "./pages/MatchDetailPage";
import NotFound from "./pages/NotFound";
import PacificTeam from "./pages/PacificTeam";
import PlayerProfile from "./pages/PlayerProfile";
import ProPlayerDetail from "./pages/ProPlayerDetail";
import ProPlayers from "./pages/ProPlayers";
import ProTeamDetail from "./pages/ProTeamDetail";
import Valorant from "./pages/Valorant";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/valorant"
        element={<Valorant />}
      />

      <Route
        path="/valorant/player/:playerName"
        element={<PlayerProfile />}
      />

      <Route
        path="/valorant/player/:playerName/match/:matchIndex"
        element={<MatchDetailPage />}
      />

      {/* 메인 네비게이션의 프로 메뉴 */}
      <Route
        path="/pro"
        element={<PacificTeam />}
      />

      {/* 기존 Pacific 주소 유지 */}
      <Route
        path="/valorant/pacific"
        element={<PacificTeam />}
      />

      <Route
        path="/valorant/team/:teamSlug"
        element={<ProTeamDetail />}
      />

      <Route
        path="/valorant/pros"
        element={<ProPlayers />}
      />

      <Route
        path="/valorant/pros/:slug"
        element={<ProPlayerDetail />}
      />

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}