import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const sylvanCareer: ProPlayerCareer = {
  joinedAt: "2025-10",

  previousTeams: [
    {
      teamName: "World Game Star",
      joinedAt: "2021-05",
      leftAt: "2023-03",
    },
    {
      teamName: "Gen.G",
      joinedAt: "2023-03",
      leftAt: "2023-09",
    },
    {
      teamName: "TOP Esports",
      leftAt: "2024-01",
    },
    {
      teamName: "T1",
      joinedAt: "2024-10",
      leftAt: "2025-10",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "VCT Pacific",
      result: "4위",
    },
    {
      year: 2023,
      title: "VCT Pacific Last Chance Qualifier",
      result: "3위",
    },
    {
      year: 2024,
      title: "Red Bull Home Ground #5",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Bangkok",
      result: "우승",
    },
    {
      year: 2026,
      title: "Esports World Cup Pacific Qualifier Stage 1",
      result: "3위",
    },
  ],
};

export const sylvan: ProPlayer = {
  id: "player-sylvan",
  slug: "sylvan",

  nickname: "Sylvan",
  realName: "Ko Young-sub",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("team-secret"),

  primaryRole: "Controller",
  roles: createRoles("Controller", ["Flex"]),

  mainAgents: ["Omen", "Astra", "Viper"],

  career: sylvanCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.27,
    scopedSensitivity: 1,
    adsSensitivity: null,
    edpi: 216,
    pollingRate: 1000,
    resolution: null,

    verification: {
      verifiedAt: "2026-08-03",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/sylvan/",
    },
  },

  crosshair: {
    code: null,
    color: null,
    outlines: null,
    centerDot: null,

    verification: {
      verifiedAt: "2026-08-03",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/sylvan/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight White",
    mousepad: "SteelSeries QcK Heavy",
    keyboard: "Logitech G Pro X Keyboard",
    monitor: null,

    verification: {
      verifiedAt: "2026-08-03",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/sylvan/",
    },
  },

  stats: {
    rating: 0.96,
    acs: 182.8,
    kd: 0.91,
    kast: 74.42,
    adr: 124.4,
    hs: null,
  },

  updatedAt: null,
};