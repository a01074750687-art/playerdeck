import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const zeusCareer: ProPlayerCareer = {
  joinedAt: "2026-03",

  previousTeams: [
    {
      teamName: "Avernus Esports",
      leftAt: "2024-08",
    },
    {
      teamName: "Oasis Gaming",
      leftAt: "2026-03",
    },
  ],

  highlights: [
    {
      year: 2025,
      title: "Locked N' Loaded Philippines Split 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "Predator League Philippines 2026",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers Southeast Asia Stage 3",
      result: "3~4위",
    },
    {
      year: 2026,
      title: "Challengers SEA Split 1 Philippines Qualifier",
      result: "우승",
    },
    {
      year: 2026,
      title: "Esports World Cup Pacific Qualifier Stage 1",
      result: "3위",
    },
  ],
};

export const zeus: ProPlayer = {
  id: "player-zeus",
  slug: "zeus",

  nickname: "Zeus",
  realName: "Jhian Zeus Dela Vega",

  countryCode: "PH",
  countryName: "Philippines",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("team-secret"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),

  mainAgents: ["Neon", "Raze", "Jett"],

  riotAccounts: [
    {
      name: "Secret Zeus",
      tag:  "ela",

      verification: {
        verifiedAt: "2026-08-21",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/Secret%20Zeus%23ela/overview",
      },
    },
  ],

  career: zeusCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.175,
    scopedSensitivity: 1,
    adsSensitivity: 0.9,
    edpi: 280,
    pollingRate: 2000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-07-17",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-zeus/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;1;d;1;0b;0;1b;0;S;d;0",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-07-17",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-zeus/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "ARTISAN NINJA FX Zero TenZ",
    keyboard: "Wooting 60HE v2 Silver",
    monitor: "ZOWIE XL2586X+",

    verification: {
      verifiedAt: "2026-07-17",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-zeus/",
    },
  },

  stats: {
    rating: 1.07,
    acs: 230.0,
    kd: 1.11,
    kast: 76.23,
    adr: 150.5,
    hs: null,
  },

  updatedAt: null,
};