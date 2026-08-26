import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const zexyCareer: ProPlayerCareer = {
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
      title: "VALORANT Amateur Champions 2024",
      result: "우승",
    },
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

export const zexy: ProPlayer = {
  id: "player-zexy",
  slug: "zexy",

  nickname: "Zexy",
  realName: "Jang Suk-hyun",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/vl/zexy.png",

  team: getRequiredTeam("varrel"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),

  mainAgents: ["Neon", "Raze", "Waylay", "Jett"],

  career: zexyCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.35,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 280,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-zexy/",
    },
  },

  crosshair: {
    code: null,
    color: null,
    outlines: null,
    centerDot: null,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "공개 정보 없음",
      sourceUrl: "",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight 2 Cyan",
    mousepad: "ARTISAN NINJA FX Zero Daidai",
    keyboard: "Wooting 80HE",
    monitor: null,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-zexy/",
    },
  },

  stats: {
    rating: 0.83,
    acs: 188,
    kd: 0.87,
    kast: 67,
    adr: 118.0,
    hs: 24,
  },

  updatedAt: "2026-08-24",
};