import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const klausCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "T1 Rookies",
      joinedAt: "2024-07",
      leftAt: "2024-10",
    },
    {
      teamName: "SLT Seongnam",
      joinedAt: "2024-10",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
      result: "3위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Road to Ascension",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
    {
      year: 2025,
      title: "SOOP VALORANT League",
      result: "3~4위",
    },
  ],
};

export const klaus: ProPlayer = {
  id: "player-klaus",
  slug: "klaus",

  nickname: "Klaus",
  realName: "Kim Min-hyuk",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/vl/klaus.png",

  team: getRequiredTeam("varrel"),

  primaryRole: "Controller",
  roles: createRoles("Controller", ["Duelist"]),

  mainAgents: ["Omen", "Raze", "Neon"],

  riotAccounts: [
    {
      name: "VARREL Klaus",
      tag: "1337",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "NamuWiki",
        sourceUrl:
          "https://namu.moe/w/%EA%B9%80%EB%AF%BC%ED%98%81(2007)",
      },
    },
  ],

  career: klausCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.2,
    scopedSensitivity: 0.7,
    adsSensitivity: 0.7,
    edpi: 160,
    pollingRate: null,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-klaus/",
    },
  },

  crosshair: {
    code: null,
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-klaus/",
    },
  },

  gear: {
    mouse: "Logitech G PRO X2 SUPERSTRIKE",
    mousepad: "STEADY WINNERS MAGEN",
    keyboard: "Geon Venom 60 HE",
    monitor: null,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-klaus/",
    },
  },

  stats: {
    rating: 1.01,
    acs: 177,
    kd: 1.01,
    kast: 76,
    adr: 111.1,
    hs: 36,
  },

  updatedAt: "2026-08-24",
};