import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Valorant from "./pages/Valorant";
import PlayerProfile from "./pages/PlayerProfile";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/valorant" element={<Valorant />} />
      <Route path="/valorant/player/:playerName" element={<PlayerProfile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}