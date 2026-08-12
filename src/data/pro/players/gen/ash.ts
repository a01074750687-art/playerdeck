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
  roles: createRoles("Duelist", ["Initiator"]),

  mainAgents: ["Neon", "Omen", "Sova"],

  career: ashCareer,
  awards: ashAwards,

  settings: {
    dpi: 800,
    sensitivity: 0.35,
    scopedSensitivity: null,
    adsSensitivity: null,
    edpi: 280,
    pollingRate: null,
    resolution: "1680x1050",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/lists/valorant/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;1;d;1;f;0;0b;0;1b;0;S;s;0.85;o;1",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/lists/valorant/",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro White",
    mousepad: "VAXEE PA Winter23 Daydream",
    keyboard: "SteelSeries Apex Pro Mini",
    monitor: "ZOWIE XL2546K",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/lists/valorant/",
    },
  },

  stats: {
    rating: 1.14,
    acs: 210.6,
    kd: 1.12,
    kast: 76,
    adr: 138.7,
    hs: 30,
  },

  updatedAt: null,
};