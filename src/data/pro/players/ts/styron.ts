import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const styronCareer: ProPlayerCareer = {
  joinedAt: "2026-07",

  previousTeams: [
    {
      teamName: "Enigma Gaming",
      leftAt: "2023-07",
    },
    {
      teamName: "LaZe",
      leftAt: "2024-05",
    },
    {
      teamName: "Disguised",
      joinedAt: "2024-05",
      leftAt: "2025-01",
    },
    {
      teamName: "Motiv Esports",
      joinedAt: "2025-04",
      leftAt: "2025-11",
    },
    {
      teamName: "XLB",
      leftAt: "2026-06",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Challengers Malaysia & Singapore Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "Challengers Southeast Asia Stage 3",
      result: "우승",
    },
    {
      year: 2024,
      title: "One Game Showdown",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers Southeast Asia Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers Southeast Asia Stage 3",
      result: "우승",
    },
  ],
};

export const styron: ProPlayer = {
  id: "player-styron",
  slug: "styron",

  nickname: "STYRON",
  realName: "Tidus Goh",

  countryCode: "SG",
  countryName: "Singapore",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("team-secret"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator"),

  mainAgents: ["Sova", "Skye", "Fade"],

  career: styronCareer,

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
    rating: 0.95,
    acs: 183.3,
    kd: 0.95,
    kast: 74.35,
    adr: 122.1,
    hs: null,
  },

  updatedAt: null,
};