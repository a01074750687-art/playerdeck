import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../common/helpers";

const t3xtureCareer: ProPlayerCareer = {
  joinedAt: "2023-09",

  previousTeams: [
    {
      teamName: "DWG KIA",
      joinedAt: "2021-01",
      leftAt: "2022-10",
    },
    {
      teamName: "Global Esports",
      joinedAt: "2022-10",
      leftAt: "2023-09",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "VCT 2024: Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2024,
      title: "VALORANT Masters Madrid 2024",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT Masters Shanghai 2024",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "Esports World Cup 2025",
      result: "3위",
    },
  ],
};

const t3xtureAwards: ProPlayerAward[] = [
  {
    year: 2024,
    title: "VCT 2024: Pacific Stage 2",
    result: "올해의 타격대",
  },
];

const karonCareer: ProPlayerCareer = {
  joinedAt: "2023-11",

  previousTeams: [],

  highlights: [
    {
      year: 2024,
      title: "VCT 2024: Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2024,
      title: "VALORANT Masters Madrid 2024",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT Masters Shanghai 2024",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "Esports World Cup 2025",
      result: "3위",
    },
  ],
};

const karonAwards: ProPlayerAward[] = [
  {
    year: 2024,
    title: "VCT 2024: Pacific Kickoff",
    result: "MVP",
  },
  {
    year: 2024,
    title: "VCT 2024: Pacific Stage 2",
    result: "올해의 연막",
  },
];

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

const raxcalCareer: ProPlayerCareer = {
  joinedAt: "2026-07",

  previousTeams: [
    {
      teamName: "FN Pocheon",
      joinedAt: "2025-01",
      leftAt: "2025-06",
    },
    {
      teamName: "ONSIDE GAMING",
      joinedAt: "2025-06",
      leftAt: "2025-09",
    },
    {
      teamName: "Gen.G Global Academy",
      joinedAt: "2026-02",
      leftAt: "2026-07",
    },
  ],

  highlights: [
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Korea: Road to Ascension",
      result: "3위",
    },
    {
      year: 2026,
      title: "VALORANT Challengers 2026 Korea: Split 1",
      result: "준우승",
    },
  ],
};

const efinaCareer: ProPlayerCareer = {
  joinedAt: "2026-07",

  previousTeams: [
    {
      teamName: "TNL Esports",
      joinedAt: "2020-11",
      leftAt: "2021-02",
    },
    {
      teamName: "F4Q",
      joinedAt: "2021-02",
      leftAt: "2021-10",
    },
    {
      teamName: "Team IAM",
      joinedAt: "2024",
      leftAt: "2025-01",
    },
    {
      teamName: "T1 Academy",
      joinedAt: "2025-05",
      leftAt: "2025-11",
    },
    {
      teamName: "X-CAST",
      joinedAt: "2026",
      leftAt: "2026-07",
    },
  ],

  highlights: [
    {
      year: 2020,
      title: "First Strike: Korea",
      result: "준우승",
    },
    {
      year: 2021,
      title: "VCT 2021: Korea Stage 3 Challengers Playoffs",
      result: "준우승",
    },
    {
      year: 2021,
      title: "VALORANT Masters Berlin 2021",
      result: "9~12위",
    },
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Korea: Stage 2",
      result: "3위",
    },
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Korea: Stage 3",
      result: "우승",
    },
  ],
};

export const genGPlayers: ProPlayer[] = [
  {
    id: "player-texture",
    slug: "texture",

    nickname: "t3xture",
    realName: "Kim Na-ra",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("gen-g"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Neon"],

    career: t3xtureCareer,
    awards: t3xtureAwards,

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
      color: "White",
      outlines: true,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "Razer BlackShark V2 Pro",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.28,
      acs: 259.4,
      kd: 1.31,
      kast: 74,
      adr: 165.8,
      hs: 28,
    },

    updatedAt: null,
  },

  {
    id: "player-karon",
    slug: "karon",

    nickname: "Karon",
    realName: "Kim Won-tae",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("gen-g"),

    primaryRole: "Controller",
    roles: createRoles("Controller"),

    mainAgents: ["Omen", "Viper", "Astra"],

    career: karonCareer,
    awards: karonAwards,

    settings: {
      dpi: 800,
      sensitivity: 0.28,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 224,
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
      headset: "HyperX Cloud III",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.16,
      acs: 205.7,
      kd: 1.18,
      kast: 78,
      adr: 132.6,
      hs: 32,
    },

    updatedAt: null,
  },

  {
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

    mainAgents: ["Sova", "Fade", "Gekko"],

    career: ashCareer,
    awards: ashAwards,

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
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ZOWIE XL2566K",
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
  },

  {
    id: "player-raxcal",
    slug: "raxcal",

    nickname: "RaxcaL",
    realName: "Kim Min-seok",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("gen-g"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Controller"]),

    mainAgents: ["Cypher", "Killjoy", "Omen"],

    career: raxcalCareer,

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
      color: "White",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "Razer BlackShark V2 Pro",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.18,
      acs: 235.4,
      kd: 1.2,
      kast: 74,
      adr: 151.8,
      hs: 27,
    },

    updatedAt: null,
  },

  {
    id: "player-efina",
    slug: "efina",

    nickname: "Efina",
    realName: "Kim Nak-yeon",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("gen-g"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator", ["Sentinel"]),

    mainAgents: ["Sova", "Fade", "Cypher"],

    career: efinaCareer,

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
      color: "Cyan",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.07,
      acs: 193.8,
      kd: 1.04,
      kast: 75,
      adr: 127.5,
      hs: 31,
    },

    updatedAt: null,
  },
];