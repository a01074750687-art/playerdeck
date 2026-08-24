import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const ashCareer: ProPlayerCareer = {
  joinedAt: "2025-03",

  previousTeams: [
    {
      teamName: "All Ways Incheon",
      joinedAt: "2022-05",
      leftAt: "2023-01",
    },
    {
      teamName: "OP.GG SPORTS",
      joinedAt: "2023-01",
      leftAt: "2023-03",
    },
    {
      teamName: "Incheon On Sla2ers",
      joinedAt: "2023-03",
      leftAt: "2023-05",
    },
    {
      teamName: "LFG Portal",
      joinedAt: "2024-01",
      leftAt: "2024-05",
    },
    {
      teamName: "FEARX",
      joinedAt: "2024-05",
      leftAt: "2024-12",
    },
    {
      teamName: "Gen.G Global Academy",
      joinedAt: "2025-01",
      leftAt: "2025-03",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea: Split 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 1",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Toronto 2025",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "Esports World Cup 2025",
      result: "3위",
    },
    {
      year: 2025,
      title: "VALORANT Radiant International Invitational",
      result: "준우승",
    },
  ],
};

const ashAwards: ProPlayerAward[] = [
  {
    year: 2024,
    title: "WDG Challengers League 2024 Korea: Split 1",
    result: "결승 MVP",
  },
];

export const ash: ProPlayer = {
  id: "player-ash",
  slug: "ash",

  nickname: "Ash",
  realName: "Ha Hyun-cheol",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("gen-g"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),

  mainAgents: ["Neon"],

  riotAccounts: [
    {
      name: "GEN Ash",
      tag: "7777",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/GEN%20Ash%237777/overview",
      },
    },
  ],

  career: ashCareer,
  awards: ashAwards,

  settings: {
    dpi: 800,
    sensitivity: 0.35,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 280,
    pollingRate: 1000,
    resolution: "1680x1050",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-ash/",
    },
  },

  crosshair: {
    code: "0;P;h;0;0l;3;0o;0;0a;1;0f;0;1b;0",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-ash/",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro White",
    mousepad: "VAXEE PA Winter25 Angel",
    keyboard: "SteelSeries Apex Pro Mini",
    monitor: "ZOWIE XL2540",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-ash/",
    },
  },

  stats: {
    rating: 0.97,
    acs: 230,
    kd: 1.03,
    kast: 70,
    adr: 144.9,
    hs: 27,
  },

  updatedAt: "2026-08-24",
};