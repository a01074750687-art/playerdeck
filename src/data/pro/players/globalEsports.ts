import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

const udotanCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "Team Nutria",
      leftAt: "2021",
    },
    {
      teamName: "Noble Experience",
      leftAt: "2021",
    },
    {
      teamName: "GoNGo Prince",
      joinedAt: "2022-01",
      leftAt: "2022-04",
    },
    {
      teamName: "TALON",
      joinedAt: "2022-04",
      leftAt: "2022-10",
    },
    {
      teamName: "Gwangju Shadow",
      joinedAt: "2023-03",
      leftAt: "2023-12",
    },
    {
      teamName: "Four Angry Men",
      joinedAt: "2023-10",
      leftAt: "2024-02",
    },
    {
      teamName: "Rare Atom",
      joinedAt: "2024-02",
      leftAt: "2024-09",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "VCT Ascension China",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "3위",
    },
    {
      year: 2026,
      title: "VALORANT Masters London",
      result: "9~10위",
    },
    {
      year: 2026,
      title: "Esports World Cup Pacific Qualifier Stage 2",
      result: "준우승",
    },
  ],
};

const kr1stalCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "BLUE BEES.ESP",
      joinedAt: "2022-02",
      leftAt: "2022-08",
    },
    {
      teamName: "SCARZ",
      joinedAt: "2022-08",
      leftAt: "2023-10",
    },
    {
      teamName: "Night Wings Gaming",
      leftAt: "2023-12",
    },
    {
      teamName: "Xi Lai Gaming",
      joinedAt: "2024-03",
      leftAt: "2024-09",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Challengers Japan Split 2",
      result: "우승",
    },
    {
      year: 2023,
      title: "VCT Ascension Pacific",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT China National Competition Season 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Ascension China",
      result: "우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "3위",
    },
  ],
};

const xavi8kCareer: ProPlayerCareer = {
  joinedAt: "2025-11",

  previousTeams: [
    {
      teamName: "Bren Esports",
      joinedAt: "2021-10",
      leftAt: "2022-08",
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
      title: "Predator League Philippines 2024",
      result: "우승",
    },
    {
      year: 2023,
      title: "Challengers Philippines Split 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers Southeast Asia Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "5~6위",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "3위",
    },
  ],
};

const autumnCareer: ProPlayerCareer = {
  joinedAt: "2025-11",

  previousTeams: [
    {
      teamName: "ORDER",
      joinedAt: "2020-10",
      leftAt: "2022-09",
    },
    {
      teamName: "Gods Reign",
      leftAt: "2023-09",
    },
    {
      teamName: "FunPlus Phoenix",
      joinedAt: "2023-09",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "Oceania Tour Championship",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT China Kickoff",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VCT China Stage 1",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VCT China Stage 2",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "3위",
    },
  ],
};

const patmenCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "TALON",
      joinedAt: "2022-07",
      leftAt: "2022-09",
    },
    {
      teamName: "Stream Raiders Nacague",
      leftAt: "2023-03",
    },
    {
      teamName: "ZOL Esports",
      joinedAt: "2023-03",
      leftAt: "2024-12",
    },
    {
      teamName: "NAOS Esports",
      joinedAt: "2025-01",
      leftAt: "2025-03",
    },
    {
      teamName: "Paper Rex",
      joinedAt: "2025-03",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Challengers Philippines Split 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 1",
      result: "3위",
    },
    {
      year: 2025,
      title: "VALORANT Masters Toronto",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Champions Paris",
      result: "4위",
    },
  ],
};

const patmenAwards: ProPlayerAward[] = [
  {
    year: 2025,
    title: "VCT Pacific Awards",
    result: "올해의 신인",
  },
  {
    year: 2025,
    title: "VCT Pacific Awards",
    result: "올해의 척후대",
  },
];

export const globalEsportsPlayers: ProPlayer[] = [
  {
    id: "player-udotan",
    slug: "udotan",

    nickname: "UdoTan",
    realName: "Go Kyung-Won",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("global-esports"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Neon"],

    career: udotanCareer,

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
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.02,
      acs: 233.0,
      kd: 1.13,
      kast: 76,
      adr: 132.4,
      hs: 35,
    },

    updatedAt: null,
  },

  {
    id: "player-kr1stal",
    slug: "kr1stal",

    nickname: "Kr1stal",
    realName: "Savva Fedorov",

    countryCode: "RU",
    countryName: "Russia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("global-esports"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel"),

    mainAgents: ["Cypher", "Killjoy", "Vyse"],

    career: kr1stalCareer,

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
      outlines: true,
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
      acs: 192.0,
      kd: 1.16,
      kast: 77,
      adr: 135.6,
      hs: 25,
    },

    updatedAt: null,
  },

  {
    id: "player-xavi8k",
    slug: "xavi8k",

    nickname: "Xavi8K",
    realName: "Xavier Juan",

    countryCode: "PH",
    countryName: "Philippines",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("global-esports"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Breach"],

    career: xavi8kCareer,

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
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.07,
      acs: 196.1,
      kd: 1.19,
      kast: 78,
      adr: 138.8,
      hs: 26,
    },

    updatedAt: null,
  },

  {
    id: "player-autumn",
    slug: "autumn",

    nickname: "autumn",
    realName: "Kale Dunne",

    countryCode: "AU",
    countryName: "Australia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("global-esports"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Yoru"],

    career: autumnCareer,

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
      rating: 1.09,
      acs: 200.2,
      kd: 1.01,
      kast: 72,
      adr: 142.0,
      hs: 27,
    },

    updatedAt: null,
  },

  {
    id: "player-patmen",
    slug: "patmen",

    nickname: "PatMen",
    realName: "Patrick Mendoza",

    countryCode: "PH",
    countryName: "Philippines",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("global-esports"),

    primaryRole: "Controller",
    roles: createRoles("Controller"),

    mainAgents: ["Omen", "Viper", "Astra"],

    career: patmenCareer,
    awards: patmenAwards,

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
      rating: 1.12,
      acs: 204.3,
      kd: 1.04,
      kast: 73,
      adr: 145.2,
      hs: 28,
    },

    updatedAt: null,
  },
];