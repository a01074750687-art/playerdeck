import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const xavi8kCareer: ProPlayerCareer = {
  joinedAt: "2025-11",

  previousTeams: [
    {
      teamName: "SunSparks",
      joinedAt: "2021-04",
      leftAt: "2021-09",
    },
    {
      teamName: "Bren Esports",
      joinedAt: "2021-10",
      leftAt: "2022-09",
    },
    {
      teamName: "Oasis Gaming",
      joinedAt: "2023-01",
      leftAt: "2024-08",
    },
    {
      teamName: "NAOS Esports",
      joinedAt: "2024-10",
      leftAt: "2025-10",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "VALORANT Challengers 2023 Philippines: Split 1",
      result: "준우승",
    },
    {
      year: 2023,
      title: "VALORANT Challengers 2023 Philippines: Split 2",
      result: "준우승",
    },
    {
      year: 2023,
      title: "Predator League Philippines 2024",
      result: "우승",
    },
    {
      year: 2024,
      title: "VALORANT Challengers 2024 Philippines: Split 2",
      result: "3위",
    },
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Southeast Asia: Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Southeast Asia: Stage 3",
      result: "3위",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific 2025",
      result: "5~6위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Stage 1",
      result: "3위",
    },
    {
      year: 2026,
      title: "Esports World Cup 2026: Pacific Qualifier",
      result: "본선 진출",
    },
    {
      year: 2026,
      title: "VALORANT Masters London 2026",
      result: "9~10위",
    },
  ],
};

export const xavi8k: ProPlayer = {
  id: "player-xavi8k",
  slug: "xavi8k",

  nickname: "xavi8k",
  realName: "Xavier Juan",

  countryCode: "PH",
  countryName: "Philippines",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/ge/xavi8k.png",

  team: getRequiredTeam("global-esports"),

  primaryRole: "Controller",
  roles: createRoles("Controller", ["Initiator", "Sentinel"]),

  mainAgents: ["Omen", "Astra", "Sova", "Cypher"],

  riotAccounts: [
    {
      name: "GE xavi8k",
      tag: "xoxo",
      puuid: "932f3388-add1-5fd3-91af-2cb239d57154",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/GE%20xavi8k%23xoxo/overview",
      },
    },
  ],

  career: xavi8kCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.102,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 163.2,
    pollingRate: null,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-xavi8k/",
    },
  },

  crosshair: {
    code: "0;P;c;0;h;0;d;0;f;0;0b;1;0a;1;0l;4;0t;2;0o;0;0m;0;0f;0;1b;0",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-xavi8k/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "ARTISAN NINJA FX Hien Wine Red",
    keyboard: "Wooting 60HE+",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-xavi8k/",
    },
  },

  stats: {
    rating: 1.12,
    acs: 210,
    kd: 1.09,
    kast: 76,
    adr: 143.2,
    hs: 22,
  },

  updatedAt: "2026-08-25",
};