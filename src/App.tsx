import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MatchDetailPage from "./pages/MatchDetailPage";
import NotFound from "./pages/NotFound";
import PlayerProfile from "./pages/PlayerProfile";
import Valorant from "./pages/Valorant";
import ProPlayers from "./pages/ProPlayers";
import ProPlayerDetail from "./pages/ProPlayerDetail";
import PacificTeams from "./pages/PacificTeams";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

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

      <Route
        path="/valorant/pacific"
        element={<PacificTeams />}
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