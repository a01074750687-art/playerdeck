import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const yatsukaCareer: ProPlayerCareer = {
  joinedAt: "2026-01",
  previousTeams: [
    { teamName: "ZETA DIVISION Academy", joinedAt: "2022-03", leftAt: "2023-12" },
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

export const yatsuka: ProPlayer = {
  id: "player-yatsuka",
  slug: "yatsuka",
  nickname: "yatsuka",
  realName: "Kazuya Ikeda",
  countryCode: "JP",
  countryName: "Japan",
  region: "Pacific",
  status: "Active",
  profileImageUrl: null,
  team: getRequiredTeam("dfm"),
  primaryRole: "Flex",
  roles: createRoles("Flex", ["Duelist", "Initiator", "Sentinel"]),
  mainAgents: ["Sage", "Neon", "Raze"],
  career: yatsukaCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.08,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 128,
    pollingRate: 4000,
    resolution: "1920x1080",
    verification: {
      verifiedAt: "2026-08-01",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-yatsuka/",
    },
  },

  crosshair: {
    code: null,
    color: "Green",
    outlines: true,
    centerDot: true,
    verification: {
      verifiedAt: "2026-08-01",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-yatsuka/",
    },
  },

  gear: {
    mouse: "Finalmouse UltralightX Prophecy Scream",
    mousepad: "WALLHACK SP-004 Hatsune Miku",
    keyboard: "HYPESHOP Keyboard",
    monitor: "ZOWIE XL2566X+",
    verification: {
      verifiedAt: "2026-08-01",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-yatsuka/",
    },
  },

  stats: {
    rating: 1.00,
    acs: 198.0,
    kd: 0.89,
    kast: 66.1,
    adr: 132.8,
    hs: null,
  },

  updatedAt: "2026-08-09",
};