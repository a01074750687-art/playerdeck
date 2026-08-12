import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const caedyeCareer: ProPlayerCareer = {
  joinedAt: "2026-01",
  previousTeams: [
    { teamName: "ZETA DIVISION Academy", joinedAt: "2022-08", leftAt: "2023-12" },
    { teamName: "RIDDLE ORDER", joinedAt: "2023-12", leftAt: "2026-01" },
  ],
  highlights: [
    { year: 2024, title: "Challengers League Japan Split 2", result: "우승" },
    { year: 2024, title: "VCT Ascension Pacific", result: "4위" },
    { year: 2025, title: "Challengers Japan Stage 1", result: "우승" },
    { year: 2025, title: "Challengers Japan Stage 2", result: "우승" },
    { year: 2025, title: "Challengers League Japan Season Finals", result: "우승" },
  ],
};

export const caedye: ProPlayer = {
  id: "player-caedye",
  slug: "caedye",
  nickname: "Caedye",
  realName: "Amon Mateus Okakura",
  countryCode: "JP",
  countryName: "Japan",
  region: "Pacific",
  status: "Active",
  profileImageUrl: null,
  team: getRequiredTeam("dfm"),
  primaryRole: "Sentinel",
  roles: createRoles("Sentinel", ["Controller"]),
  mainAgents: ["Cypher", "Viper", "Vyse"],
  career: caedyeCareer,

  settings: {
    dpi: 400,
    sensitivity: 0.35,
    scopedSensitivity: 0.84,
    adsSensitivity: 0.5,
    edpi: 140,
    pollingRate: 4000,
    resolution: "1920x1080",
    verification: {
      verifiedAt: "2026-08-03",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-caedye/",
    },
  },

  crosshair: {
    code: null,
    color: "White",
    outlines: true,
    centerDot: true,
    verification: {
      verifiedAt: "2026-08-03",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-caedye/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight 2 Black",
    mousepad: "ARTISAN NINJA FX Hayate Otsu Soft Red",
    keyboard: null,
    monitor: "ZOWIE XL2566K",
    verification: {
      verifiedAt: "2026-08-03",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-caedye/",
    },
  },

  stats: {
    rating: 0.90,
    acs: 189.7,
    kd: 0.97,
    kast: 72.5,
    adr: 119.8,
    hs: null,
  },

  updatedAt: "2026-08-09",
};