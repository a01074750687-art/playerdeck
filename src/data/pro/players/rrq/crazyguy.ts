import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const crazyguyCareer: ProPlayerCareer = {
  joinedAt: "2025-03",

  previousTeams: [
    {
      teamName: "CERBERUS Esports",
      joinedAt: "2020-07",
      leftAt: "2021-02",
    },
    {
      teamName: "Big BAAM",
      joinedAt: "2021-03",
      leftAt: "2022-01",
    },
    {
      teamName: "Fancy United Esports",
      joinedAt: "2022-01",
      leftAt: "2022-10",
    },
    {
      teamName: "BLEED Esports",
      joinedAt: "2022-10",
      leftAt: "2024-08",
    },
    {
      teamName: "Disguised",
      joinedAt: "2024-08",
      leftAt: "2025-01",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Challengers Malaysia & Singapore Split 2",
      result: "우승",
    },
    {
      year: 2023,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
    {
      year: 2024,
      title: "Challengers Southeast Asia Stage 3",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "준우승",
    },
  ],
};

export const crazyguy: ProPlayer = {
  id: "player-crazyguy",
  slug: "crazyguy",

  nickname: "crazyguy",
  realName: "Ngô Công Anh",

  countryCode: "VN",
  countryName: "Vietnam",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("rrq"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator"),

  mainAgents: ["Breach", "Sova", "KAY/O"],

  career: crazyguyCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.235,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 188,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
       verifiedAt: "2026-08-05",
       sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/valorant/players/crazyguy/",
    },
  },

  crosshair: {
    code: null,
    color: null,
    outlines: null,
    centerDot: null,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "공개 정보 없음",
      sourceUrl: "",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight 2",
    mousepad: "Artisan Hayate Otsu XSoft",
    keyboard: "Wooting 60HE+",
    monitor: "ZOWIE XL2566K",

    verification: {
       verifiedAt: "2026-08-05",
       sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/valorant/players/crazyguy/",
    },
  },

  stats: {
    rating: 1.02,
    acs: 200.2,
    kd: 1.1,
    kast: 75,
    adr: 138.8,
    hs: 27,
  },

  updatedAt: null,
};