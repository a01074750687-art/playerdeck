import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const seph1rothCareer: ProPlayerCareer = {
  joinedAt: "2026-04",

  previousTeams: [
    {
      teamName: "CRIT Esports",
      joinedAt: "2023-08",
      leftAt: "2023-09",
    },
    {
      teamName: "Made in Thailand",
      joinedAt: "2023-09",
      leftAt: "2025-01",
    },
    {
      teamName: "FULL SENSE",
      joinedAt: "2025-01",
      leftAt: "2025-12",
    },
    {
      teamName: "Sharper Esports",
      joinedAt: "2026-01",
      leftAt: "2026-04",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Challengers League 2024 Thailand Split 1",
      result: "준우승",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Thailand Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Southeast Asia Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Southeast Asia Stage 1",
      result: "우승",
    },
    {
      year: 2026,
      title: "Challengers 2026 Southeast Asia Split 1",
      result: "준우승",
    },
  ],
};

export const seph1roth: ProPlayer = {
  id: "player-seph1roth",
  slug: "seph1roth",

  nickname: "seph1roth",
  realName: "Chinnakrit Phoojaroen",

  countryCode: "TH",
  countryName: "Thailand",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/fs/seph1roth.png",

  team: getRequiredTeam("full-sense"),

  primaryRole: "Sentinel",
  roles: createRoles("Sentinel", ["Controller"]),
  mainAgents: ["Cypher", "Killjoy"],

  riotAccounts: [
    {
      name: "Anakin Skywalker",
      tag: "Mkfer",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/Anakin%20Skywalker%23Mkfer/overview",
      },
    },
  ],

  career: seph1rothCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.314,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 251.2,
    pollingRate: 1000,
    resolution: "1440x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "Johotaxi",
      sourceUrl:
        "https://johotaxi.com/valorant-seph1roth-device/",
    },
  },

  crosshair: {
    code: "0;P;h;0;0l;2;0o;1;0a;1;0f;0;1b;0",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "Johotaxi",
      sourceUrl:
        "https://johotaxi.com/valorant-seph1roth-device/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight 2 White",
    mousepad: "Artisan Ninja FX Zero Soft XL",
    keyboard: "Wooting 60HE+",
    monitor: "ZOWIE XL2546K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "Johotaxi",
      sourceUrl:
        "https://johotaxi.com/valorant-seph1roth-device/",
    },
  },

  stats: {
    rating: 0.85,
    acs: 172,
    kd: 0.88,
    kast: 69,
    adr: 110.8,
    hs: 37,
  },

  updatedAt: "2026-08-24",
};