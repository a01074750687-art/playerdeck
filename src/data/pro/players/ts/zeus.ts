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
      teamName: "SNAPZ",
      joinedAt: "2024-05",
      leftAt: "2024-05",
    },
    {
      teamName: "Avernus Esports",
      joinedAt: "2024-06",
      leftAt: "2024-08",
    },
    {
      teamName: "Oasis Gaming",
      joinedAt: "2024-10",
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
      title: "Locked N' Loaded Philippines Split 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Predator League Philippines 2026",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Southeast Asia: Stage 3",
      result: "3~4위",
    },
    {
      year: 2026,
      title: "VALORANT Challengers 2026 Southeast Asia: Split 1 - Philippines Qualifier",
      result: "우승",
    },
    {
      year: 2026,
      title: "Esports World Cup 2026: Pacific Qualifier Stage 1",
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
      tag: "ela",

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
      verifiedAt: "2026-08-25",
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
      verifiedAt: "2026-08-25",
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
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-zeus/",
    },
  },

  stats: {
    rating: 1.03,
    acs: 224,
    kd: 1.05,
    kast: 73,
    adr: 145.8,
    hs: 29,
  },

  updatedAt: "2026-08-25",
};