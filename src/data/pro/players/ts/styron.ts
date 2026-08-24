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

  primaryRole: "Sentinel",
  roles: createRoles("Sentinel"),

  mainAgents: ["Cypher", "Killjoy", "Fade"],

  riotAccounts: [
    {
      name: "BLG STYRON",
      tag: "bibi",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/BLG%20STYRON%23bibi/overview?utm_source=chatgpt.com",
      },
    },
  ],

  career: styronCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.3,
    scopedSensitivity: 1,
    adsSensitivity: null,
    edpi: 240,
    pollingRate: 1000,
    resolution: null,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "note.com",
      sourceUrl: "https://note.com/gaminglog/n/n4e04e83ff42c",
    },
  },

  crosshair: {
    code: "0;P;h;0;0t;1;0l;2;0o;2;0a;1;0f;0;1b;0",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "note.com",
      sourceUrl: "https://note.com/gaminglog/n/n4e04e83ff42c",
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