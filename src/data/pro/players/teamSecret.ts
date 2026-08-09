import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

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

const keilysCareer: ProPlayerCareer = {
  joinedAt: "2025-05",

  previousTeams: [
    {
      teamName: "DR Esports",
      leftAt: "2022-01",
    },
    {
      teamName: "Rex Regum Qeon",
      joinedAt: "2022-01",
      leftAt: "2022-10",
    },
    {
      teamName: "Action PH",
      leftAt: "2023-06",
    },
    {
      teamName: "Oasis Gaming",
      joinedAt: "2023-10",
      leftAt: "2024-10",
    },
    {
      teamName: "Global Esports",
      joinedAt: "2024-10",
      leftAt: "2025-05",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VCT Philippines Stage 2 Challengers",
      result: "3위",
    },
    {
      year: 2022,
      title: "Predator League Philippines",
      result: "우승",
    },
    {
      year: 2023,
      title: "Predator League Philippines 2024",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT OFF//SEASON Spotlight Series Pacific",
      result: "준우승",
    },
    {
      year: 2026,
      title: "Esports World Cup Pacific Qualifier Stage 1",
      result: "3위",
    },
  ],
};

const sylvanCareer: ProPlayerCareer = {
  joinedAt: "2025-10",

  previousTeams: [
    {
      teamName: "World Game Star",
      joinedAt: "2021-05",
      leftAt: "2023-03",
    },
    {
      teamName: "Gen.G",
      joinedAt: "2023-03",
      leftAt: "2023-09",
    },
    {
      teamName: "TOP Esports",
      leftAt: "2024-01",
    },
    {
      teamName: "T1",
      joinedAt: "2024-10",
      leftAt: "2025-10",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "VCT Pacific",
      result: "4위",
    },
    {
      year: 2023,
      title: "VCT Pacific Last Chance Qualifier",
      result: "3위",
    },
    {
      year: 2024,
      title: "Red Bull Home Ground #5",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Bangkok",
      result: "우승",
    },
    {
      year: 2026,
      title: "Esports World Cup Pacific Qualifier Stage 1",
      result: "3위",
    },
  ],
};

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

export const teamSecretPlayers: ProPlayer[] = [
  {
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

    mainAgents: ["Jett", "Raze", "Neon"],

    career: zeusCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.23,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 184,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.09,
      acs: 212.5,
      kd: 1.19,
      kast: 78,
      adr: 148.4,
      hs: 30,
    },

    updatedAt: null,
  },

  {
    id: "player-keilys",
    slug: "keilys",

    nickname: "keilyS",
    realName: "Kelly Kent Sedillo",

    countryCode: "PH",
    countryName: "Philippines",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("team-secret"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Skye"],

    career: keilysCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.3,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 240,
      pollingRate: 1000,
      resolution: "1920x1080",

      
    },

    crosshair: {
      code: null,
      color: "Yellow",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.12,
      acs: 216.6,
      kd: 1.01,
      kast: 72,
      adr: 151.6,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-sylvan",
    slug: "sylvan",

    nickname: "Sylvan",
    realName: "Ko Young-sub",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("team-secret"),

    primaryRole: "Controller",
    roles: createRoles("Controller"),

    mainAgents: ["Omen", "Viper", "Astra"],

    career: sylvanCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.25,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 200,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.15,
      acs: 220.7,
      kd: 1.04,
      kast: 73,
      adr: 154.8,
      hs: 32,
    },

    updatedAt: null,
  },

  {
    id: "player-styron",
    slug: "styron",

    nickname: "STYRON",
    realName: "Tidus Goh Zhen Wei",

    countryCode: "SG",
    countryName: "Singapore",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("team-secret"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Breach"],

    career: styronCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.26,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 208,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.17,
      acs: 224.8,
      kd: 1.07,
      kast: 74,
      adr: 126.0,
      hs: 33,
    },

    updatedAt: null,
  },

  {
    id: "player-natz",
    slug: "natz",

    nickname: "natz",
    realName: "Jonathan Adiputra",

    countryCode: "ID",
    countryName: "Indonesia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("team-secret"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Controller"]),

    mainAgents: ["Cypher", "Viper", "Killjoy"],

    career: natzCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.27,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 216,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "Cyan",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.2,
      acs: 228.9,
      kd: 1.1,
      kast: 75,
      adr: 129.2,
      hs: 34,
    },

    updatedAt: null,
  },
];