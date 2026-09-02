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
      teamName: "Gaimin Gladiators",
      joinedAt: "2022-06",
      leftAt: "2022-07",
    },
    {
      teamName: "LaZe",
      joinedAt: "2022-07",
      leftAt: "2022-09",
    },
    {
      teamName: "Enigma Gaming",
      joinedAt: "2023-02",
      leftAt: "2023-07",
    },
    {
      teamName: "Disguised",
      joinedAt: "2024-05",
      leftAt: "2025-01",
    },
    {
      teamName: "KIMMY KITTENS",
      joinedAt: "2025-01",
      leftAt: "2025-04",
    },
    {
      teamName: "Motiv Esports",
      joinedAt: "2025-04",
      leftAt: "2025-11",
    },
    {
      teamName: "XLB",
      joinedAt: "2026-01",
      leftAt: "2026-06",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "VALORANT Challengers 2024 Malaysia & Singapore: Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VALORANT Challengers 2024 Southeast Asia: Split 3",
      result: "우승",
    },
    {
      year: 2024,
      title: "OneGame Showdown 2024",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Southeast Asia: Split 1",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Southeast Asia: Split 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Southeast Asia: Split 3",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific 2025",
      result: "4위",
    },
    {
      year: 2025,
      title: "Predator League Singapore 2026",
      result: "우승",
    },
  ],
};

export const styron: ProPlayer = {
  id: "player-styron",
  slug: "styron",

  nickname: "STYRON",
  realName: "Tidus Goh Zhen Wei",

  countryCode: "SG",
  countryName: "Singapore",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/ts/styron.png",

  team: getRequiredTeam("team-secret"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator"),

  mainAgents: ["Sova", "Fade", "Skye"],

  riotAccounts: [
    {
      name: "Secret STYRON",
      tag: "bibi",
      puuid: "d94dbb76-9480-5eba-8b1f-88ab2e99e439",

      verification: {
        verifiedAt: "2026-08-25",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/Secret%20STYRON%23bibi/overview",
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
      verifiedAt: "2026-08-25",
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
      verifiedAt: "2026-08-25",
      sourceName: "note.com",
      sourceUrl: "https://note.com/gaminglog/n/n4e04e83ff42c",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight",
    mousepad: "ARTISAN NINJA FX Zero Soft",
    keyboard: "Wooting 60HE",
    monitor: "ZOWIE XL2546K",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "note.com",
      sourceUrl: "https://note.com/gaminglog/n/n4e04e83ff42c",
    },
  },

  stats: {
    rating: 0.93,
    acs: 185,
    kd: 0.86,
    kast: 72,
    adr: 123.0,
    hs: 23,
  },

  updatedAt: "2026-08-25",
};