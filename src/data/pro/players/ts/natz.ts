import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const natzCareer: ProPlayerCareer = {
  joinedAt: "2026-07",

  previousTeams: [
    {
      teamName: "NXL LIGAGAME",
      joinedAt: "2020-11",
      leftAt: "2021-07",
    },
    {
      teamName: "Alter Ego",
      leftAt: "2023-06",
    },
    {
      teamName: "THE HERO DETA",
      joinedAt: "2024-05",
      leftAt: "2024-08",
    },
    {
      teamName: "RRQ Academy",
      joinedAt: "2024-12",
      leftAt: "2025-09",
    },
    {
      teamName: "BOOM Esports",
      joinedAt: "2025-09",
      leftAt: "2026-07",
    },
  ],

  highlights: [
    {
      year: 2020,
      title: "First Strike Indonesia",
      result: "우승",
    },
    {
      year: 2021,
      title: "VCT Indonesia Stage 3 Challengers 2",
      result: "우승",
    },
    {
      year: 2022,
      title: "VCT APAC Stage 2 Challengers",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "VCT Pacific Ascension",
      result: "3위",
    },
    {
      year: 2026,
      title: "Predator League Asia-Pacific",
      result: "준우승",
    },
  ],
};

export const natz: ProPlayer = {
  id: "player-natz",
  slug: "natz",

  nickname: "naTz",
  realName: "Jonathan Adiputra",

  countryCode: "ID",
  countryName: "Indonesia",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("team-secret"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator", ["Controller"]),

  mainAgents: ["Sova", "Omen", "Waylay"],

  riotAccounts: [
    {
      name: "Secret natz",
      tag: "0108",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/Secret%20natz%230108/overview",
      },
    },
  ],

  career: natzCareer,

  settings: {
    dpi: 1600 ,
    sensitivity: 0.115,
    scopedSensitivity: null,
    adsSensitivity: null,
    edpi: 184,
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
    rating: 0.96,
    acs: 192.2,
    kd: 0.95,
    kast: 68.95,
    adr: 128.0,
    hs: null,
  },

  updatedAt: null,
};