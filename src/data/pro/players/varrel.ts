import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

const zexyCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "SLT Seongnam",
      joinedAt: "2024-10",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
      result: "3위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Road to Ascension",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
  ],
};

const xunaCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "SLT Seongnam",
      joinedAt: "2024-10",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
      result: "3위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Road to Ascension",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
  ],
};

const oonzmlpCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "SLT Seongnam",
      joinedAt: "2024-10",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
      result: "3위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Road to Ascension",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
  ],
};

const foxy9Career: ProPlayerCareer = {
  joinedAt: "2026-05",

  previousTeams: [
    {
      teamName: "World Game Star",
      joinedAt: "2021-02",
      leftAt: "2021-05",
    },
    {
      teamName: "REIGNITE",
      joinedAt: "2021-11",
      leftAt: "2022-09",
    },
    {
      teamName: "DRX",
      joinedAt: "2022-10",
      leftAt: "2024-10",
    },
    {
      teamName: "Gen.G Esports",
      joinedAt: "2024-10",
      leftAt: "2026-04",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "VCT LOCK//IN São Paulo",
      result: "3~4위",
    },
    {
      year: 2023,
      title: "VCT Pacific League",
      result: "준우승",
    },
    {
      year: 2023,
      title: "VALORANT Champions 2023",
      result: "5~6위",
    },
    {
      year: 2024,
      title: "VCT Pacific Stage 2",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT Champions 2024",
      result: "5~6위",
    },
  ],
};

const c1nderCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "SCARZ",
      joinedAt: "2021-04",
      leftAt: "2022-05",
    },
    {
      teamName: "Good 8 Squad",
      joinedAt: "2022-05",
      leftAt: "2023-03",
    },
    {
      teamName: "REIGNITE",
      joinedAt: "2023-09",
      leftAt: "2024-02",
    },
    {
      teamName: "SLT Seongnam",
      joinedAt: "2024-10",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
      result: "3위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Road to Ascension",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
  ],
};

const klausCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "SLT Seongnam",
      joinedAt: "2024-10",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
      result: "3위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Road to Ascension",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
  ],
};

export const varrelPlayers: ProPlayer[] = [
  {
    id: "player-zexy",
    slug: "zexy",

    nickname: "Zexy",
    realName: "Jang Suk-hyun",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("varrel"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Neon"],

    career: zexyCareer,

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
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.04,
      acs: 200.2,
      kd: 1.04,
      kast: 73,
      adr: 148.4,
      hs: 27,
    },

    updatedAt: null,
  },

  {
    id: "player-xuna",
    slug: "xuna",

    nickname: "XuNa",
    realName: "Kim Tae-geon",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("varrel"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Breach"],

    career: xunaCareer,

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
      rating: 1.07,
      acs: 204.3,
      kd: 1.07,
      kast: 74,
      adr: 151.6,
      hs: 28,
    },

    updatedAt: null,
  },

  {
    id: "player-oonzmlp",
    slug: "oonzmlp",

    nickname: "oonzmlp",
    realName: "Shin Sang-beom",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("varrel"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Yoru"],

    career: oonzmlpCareer,

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
      rating: 1.09,
      acs: 208.4,
      kd: 1.1,
      kast: 75,
      adr: 154.8,
      hs: 29,
    },

    updatedAt: null,
  },

  {
    id: "player-foxy9",
    slug: "foxy9",

    nickname: "Foxy9",
    realName: "Jung Jae-sung",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("varrel"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Duelist"]),

    mainAgents: ["Cypher", "Killjoy", "Jett"],

    career: foxy9Career,

    settings: {
      dpi: 800,
      sensitivity: 0.29,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 231,
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
      rating: 1.12,
      acs: 212.5,
      kd: 1.13,
      kast: 76,
      adr: 126.0,
      hs: 30,
    },

    updatedAt: null,
  },

  {
    id: "player-c1nder",
    slug: "c1nder",

    nickname: "C1ndeR",
    realName: "Ko Jae-hyuk",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("varrel"),

    primaryRole: "Controller",
    roles: createRoles("Controller"),

    mainAgents: ["Omen", "Viper", "Astra"],

    career: c1nderCareer,

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
      rating: 1.15,
      acs: 216.6,
      kd: 1.16,
      kast: 77,
      adr: 129.2,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-klaus",
    slug: "klaus",

    nickname: "Klaus",
    realName: "Kim Min-hyuk",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("varrel"),

    primaryRole: "Controller",
    roles: createRoles("Controller", ["Initiator"]),

    mainAgents: ["Omen", "Viper", "KAY/O"],

    career: klausCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.31,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 248,
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
      rating: 1.17,
      acs: 220.7,
      kd: 1.19,
      kast: 78,
      adr: 132.4,
      hs: 32,
    },

    updatedAt: null,
  },
];