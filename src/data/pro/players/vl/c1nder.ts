import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const c1nderCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "SCARZ",
      joinedAt: "2021-04",
      leftAt: "2022-05",
    },
    {
      teamName: "Good 8 Squad",
      joinedAt: "2022-05",
      leftAt: "2023-03",
    },
    {
      teamName: "REIGNITE",
      joinedAt: "2023-09",
      leftAt: "2024-02",
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
  ],
};

export const c1nder: ProPlayer = {
  id: "player-c1nder",
  slug: "c1nder",
  nickname: "C1ndeR",
  realName: "Ko Jae-hyuk",
  countryCode: "KR",
  countryName: "South Korea",
  region: "Pacific",
  status: "Active",
  profileImageUrl: null,
  team: getRequiredTeam("varrel"),
  primaryRole: "Controller",
  roles: createRoles("Controller"),
  mainAgents: ["Omen"],
  career: c1nderCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.25,
    scopedSensitivity: 1.05,
    adsSensitivity: 1,
    edpi: 200,
    pollingRate: 1000,
    resolution: null,
    verification: {
      verifiedAt: "2026-04-01",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-c1nder/",
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
    keyboard: "Custom Keyboard",
    monitor: null,
    verification: {
      verifiedAt: "2026-04-01",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-c1nder/",
    },
  },

  stats: {
    rating: 0.76,
    acs: 133.0,
    kd: 0.69,
    kast: 66,
    adr: 89.4,
    hs: null,
  },

  updatedAt: "2026-08-09",
};