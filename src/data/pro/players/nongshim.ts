import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

const dambiCareer: ProPlayerCareer = {
  joinedAt: "2024-11",

  previousTeams: [
    {
      teamName: "Gwangju Shadow",
      joinedAt: "2023-09",
      leftAt: "2023-12",
    },
    {
      teamName: "Sin Prisa Gaming",
      joinedAt: "2023-12",
      leftAt: "2024-11",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "우승",
    },
  ],
};

const dambiAwards: ProPlayerAward[] = [
  {
    year: 2026,
    title: "VALORANT Masters Santiago 2026",
    result: "MVP",
  },
];

const xrossCareer: ProPlayerCareer = {
  joinedAt: "2024-02",

  previousTeams: [],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 1",
      result: "3위",
    },
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 2",
      result: "준우승",
    },
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "우승",
    },
  ],
};

const francisCareer: ProPlayerCareer = {
  joinedAt: "2024-11",

  previousTeams: [
    {
      teamName: "Gwangju Shadow",
      joinedAt: "2023-09",
      leftAt: "2023-12",
    },
    {
      teamName: "Sin Prisa Gaming",
      joinedAt: "2023-12",
      leftAt: "2024-11",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "우승",
    },
  ],
};

const rbCareer: ProPlayerCareer = {
  joinedAt: "2025-06",

  previousTeams: [
    {
      teamName: "Vision Strikers",
      joinedAt: "2020-06",
      leftAt: "2022-01",
    },
    {
      teamName: "DRX",
      joinedAt: "2022-01",
      leftAt: "2024-01",
    },
    {
      teamName: "Titan Esports Club",
      joinedAt: "2024-01",
      leftAt: "2025-06",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "VALORANT Masters Berlin 2021",
      result: "5~8위",
    },
    {
      year: 2022,
      title: "VALORANT Champions 2022",
      result: "3위",
    },
    {
      year: 2023,
      title: "VCT Pacific League",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "우승",
    },
  ],
};

const ivyCareer: ProPlayerCareer = {
  joinedAt: "2024-11",

  previousTeams: [
    {
      teamName: "Gwangju Shadow",
      joinedAt: "2023-09",
      leftAt: "2023-12",
    },
    {
      teamName: "Sin Prisa Gaming",
      joinedAt: "2023-12",
      leftAt: "2024-11",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "우승",
    },
  ],
};

export const nongshimRedForcePlayers: ProPlayer[] = [
  {
    id: "player-dambi",
    slug: "dambi",

    nickname: "Dambi",
    realName: "Lee Hyuk-kyu",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("nongshim-redforce"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Neon"],

    career: dambiCareer,
    awards: dambiAwards,

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
      headset: "HyperX Cloud III",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.12,
      acs: 224.8,
      kd: 1.1,
      kast: 75,
      adr: 132.4,
      hs: 33,
    },

    updatedAt: null,
  },

  {
    id: "player-xross",
    slug: "xross",

    nickname: "Xross",
    realName: "Jeong Hwan",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("nongshim-redforce"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Yoru"],

    career: xrossCareer,

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
      headset: "Logitech G Pro X 2",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.15,
      acs: 228.9,
      kd: 1.13,
      kast: 76,
      adr: 135.6,
      hs: 34,
    },

    updatedAt: null,
  },

  {
    id: "player-francis",
    slug: "francis",

    nickname: "Francis",
    realName: "Kim Mu-Been",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("nongshim-redforce"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Breach"],

    career: francisCareer,

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
      headset: "Razer BlackShark V2 Pro",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.17,
      acs: 233.0,
      kd: 1.16,
      kast: 77,
      adr: 138.8,
      hs: 35,
    },

    updatedAt: null,
  },

  {
    id: "player-rb",
    slug: "rb",

    nickname: "Rb",
    realName: "Goo Sang-min",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("nongshim-redforce"),

    primaryRole: "Controller",
    roles: createRoles("Controller", ["Flex"]),

    mainAgents: ["Omen", "Viper", "Gekko"],

    career: rbCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.24,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 192,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "Cyan",
      outlines: true,
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
      rating: 1.2,
      acs: 192.0,
      kd: 1.19,
      kast: 78,
      adr: 142.0,
      hs: 25,
    },

    updatedAt: null,
  },

  {
    id: "player-ivy",
    slug: "ivy",

    nickname: "Ivy",
    realName: "Park Sung-hyeon",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("nongshim-redforce"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel"),

    mainAgents: ["Cypher", "Killjoy", "Vyse"],

    career: ivyCareer,

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
      headset: "Logitech G Pro X 2",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.02,
      acs: 196.1,
      kd: 1.01,
      kast: 72,
      adr: 145.2,
      hs: 26,
    },

    updatedAt: null,
  },
];