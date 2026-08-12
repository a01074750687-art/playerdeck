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
  profileImageUrl: null,
  team: getRequiredTeam("varrel"),
  primaryRole: "Duelist",
  roles: createRoles("Duelist"),
  mainAgents: ["Raze", "Waylay", "Neon", "Jett"],
  career: zexyCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.09,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 144,
    pollingRate: 1000,
    resolution: null,
    verification: {
      verifiedAt: "2026-07-16",
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
      verifiedAt: "2026-08-09",
      sourceName: "공개 정보 없음",
      sourceUrl: "",
    },
  },

  gear: {
    mouse: null,
    mousepad: null,
    keyboard: "Geon Venom 60 HE",
    monitor: null,
    verification: {
      verifiedAt: "2026-07-16",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-zexy/",
    },
  },

  stats: {
    rating: 0.92,
    acs: 210.33,
    kd: 0.95,
    kast: 65.94,
    adr: 130.21,
    hs: null,
  },

  updatedAt: "2026-08-09",
};