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
      leftAt: "2021-03",
    },
    {
      teamName: "Alter Ego",
      joinedAt: "2021-06",
      leftAt: "2023-06",
    },
    {
      teamName: "Hike Digital Esports",
      joinedAt: "2023-03",
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
      teamName: "Rex Regum Qeon",
      joinedAt: "2025-08",
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
      title: "VCT 2021: Indonesia Stage 3 Challengers 2",
      result: "우승",
    },
    {
      year: 2021,
      title: "VCT 2021: Southeast Asia Stage 3 Challengers Playoffs",
      result: "3위",
    },
    {
      year: 2021,
      title: "The Esports Club Challenger Series 6",
      result: "우승",
    },
    {
      year: 2022,
      title: "VCT 2022: Indonesia Stage 2 Challengers",
      result: "준우승",
    },
    {
      year: 2022,
      title: "VCT 2022: APAC Stage 2 Challengers",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "Global Esports Fight Night: Academy",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific 2025",
      result: "3위",
    },
    {
      year: 2025,
      title: "Predator League Indonesia 2026",
      result: "우승",
    },
    {
      year: 2026,
      title: "APAC Predator League 2026",
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

  profileImageUrl:
    "/images/valorant/players/ts/natz.png",

  team: getRequiredTeam("team-secret"),

  primaryRole: "Sentinel",
  roles: createRoles("Sentinel", ["Controller", "Duelist"]),

  mainAgents: ["Cypher", "Vyse", "Omen"],

  riotAccounts: [
    {
      name: "Secret natz",
      tag: "0108",
      puuid: "3f6614ba-2a74-51ec-bc3d-81927de92472",

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
    dpi: 1600,
    sensitivity: 0.115,
    scopedSensitivity: null,
    adsSensitivity: null,
    edpi: 184,
    pollingRate: null,
    resolution: null,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BOOM Esports",
      sourceUrl:
        "https://boomesports.gg/pro-playbook-inside-the-valorant-setup-of-boom-esports-natz/",
    },
  },

  crosshair: {
    code: "0;P;o;1;d;1;z;1;0b;0;1b;0",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BOOM Esports",
      sourceUrl:
        "https://boomesports.gg/pro-playbook-inside-the-valorant-setup-of-boom-esports-natz/",
    },
  },

  gear: {
    mouse: null,
    mousepad: null,
    keyboard: null,
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BOOM Esports",
      sourceUrl:
        "https://boomesports.gg/pro-playbook-inside-the-valorant-setup-of-boom-esports-natz/",
    },
  },

  stats: {
    rating: 0.82,
    acs: 174,
    kd: 0.81,
    kast: 65,
    adr: 119.8,
    hs: 29,
  },

  updatedAt: "2026-08-25",
};