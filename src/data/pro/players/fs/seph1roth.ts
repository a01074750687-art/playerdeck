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
      leftAt: "2023-09",
    },
    {
      teamName: "Made in Thailand",
      joinedAt: "2023-09",
      leftAt: "2025-01",
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

  profileImageUrl: null,
  team: getRequiredTeam("full-sense"),

  primaryRole: "Flex",
  roles: createRoles("Flex", ["Controller", "Sentinel"]),
  mainAgents: ["Cypher", "Killjoy"],

  career: seph1rothCareer,

  settings: {
    dpi: null,
    sensitivity: null,
    scopedSensitivity: null,
    adsSensitivity: null,
    edpi: null,
    pollingRate: null,
    resolution: null,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "공개 정보 없음",
      sourceUrl: "",
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
    keyboard: null,
    monitor: null,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "공개 정보 없음",
      sourceUrl: "",
    },
  },

  stats: {
    rating: 0.76,
    acs: 140.9,
    kd: 0.72,
    kast: 64.8,
    adr: 96.7,
    hs: null,
  },

  updatedAt: "2026-08-09",
};