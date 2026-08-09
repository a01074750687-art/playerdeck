import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

const primmieCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "TALON",
      joinedAt: "2024-07",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "VCT Pacific Stage 2",
      result: "4위",
    },
    {
      year: 2024,
      title: "VALORANT Champions 2024",
      result: "13~16위",
    },
    {
      year: 2025,
      title: "VCT Pacific Kickoff",
      result: "4위",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "3위",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "준우승",
    },
  ],
};

const seph1rothCareer: ProPlayerCareer = {
  joinedAt: "2026-04",

  previousTeams: [
    {
      teamName: "CRIT Esports",
      leftAt: "2023-09",
    },
    {
      teamName: "Made in Thailand",
      joinedAt: "2023-09",
      leftAt: "2025-01",
    },
    {
      teamName: "Sharper Esports",
      joinedAt: "2026-01",
      leftAt: "2026-04",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Challengers League 2024 Thailand Split 1",
      result: "준우승",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Thailand Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Southeast Asia Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Southeast Asia Stage 1",
      result: "우승",
    },
    {
      year: 2026,
      title: "Challengers 2026 Southeast Asia Split 1",
      result: "준우승",
    },
  ],
};

const crwsCareer: ProPlayerCareer = {
  joinedAt: "2026-04",

  previousTeams: [
    {
      teamName: "X10 Esports",
      joinedAt: "2020-12",
      leftAt: "2022-01",
    },
    {
      teamName: "XERXIA Esports",
      joinedAt: "2022-01",
      leftAt: "2022-10",
    },
    {
      teamName: "TALON",
      joinedAt: "2022-10",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "VCT Southeast Asia Stage 1 Masters",
      result: "우승",
    },
    {
      year: 2021,
      title: "VCT Southeast Asia Stage 2 Challengers Finals",
      result: "우승",
    },
    {
      year: 2021,
      title: "VALORANT Champions 2021",
      result: "5~8위",
    },
    {
      year: 2022,
      title: "VCT Asia Pacific Stage 2 Challengers",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "준우승",
    },
  ],
};

const killuaCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "FW Esports",
      leftAt: "2022-12",
    },
    {
      teamName: "Made in Thailand",
      joinedAt: "2023-12",
      leftAt: "2025-01",
    },
    {
      teamName: "TALON",
      joinedAt: "2025-02",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VCT Thailand Stage 2 Challengers",
      result: "준우승",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Thailand Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Southeast Asia Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Southeast Asia Stage 1",
      result: "우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "준우승",
    },
  ],
};

const jitboysCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "FW Esports",
      leftAt: "2022-10",
    },
    {
      teamName: "TALON",
      joinedAt: "2022-10",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VCT Thailand Stage 2 Challengers",
      result: "준우승",
    },
    {
      year: 2023,
      title: "VCT LOCK//IN São Paulo",
      result: "5~8위",
    },
    {
      year: 2024,
      title: "VCT Pacific Stage 2",
      result: "4위",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "3위",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "준우승",
    },
  ],
};

export const fullSensePlayers: ProPlayer[] = [
  {
    id: "player-primmie",
    slug: "primmie",

    nickname: "Primmie",
    realName: "Papaphat Sriprapha",

    countryCode: "TH",
    countryName: "Thailand",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("full-sense"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Neon"],

    career: primmieCareer,

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
      acs: 208.4,
      kd: 1.07,
      kast: 74,
      adr: 148.4,
      hs: 29,
    },

    updatedAt: null,
  },

  {
    id: "player-seph1roth",
    slug: "seph1roth",

    nickname: "seph1roth",
    realName: "Chinnakrit Phoojaroen",

    countryCode: "TH",
    countryName: "Thailand",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("full-sense"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel"),

    mainAgents: ["Cypher", "Killjoy", "Vyse"],

    career: seph1rothCareer,

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
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.17,
      acs: 212.5,
      kd: 1.1,
      kast: 75,
      adr: 151.6,
      hs: 30,
    },

    updatedAt: null,
  },

  {
    id: "player-crws",
    slug: "crws",

    nickname: "Crws",
    realName: "Thanamethk Mahatthananuyut",

    countryCode: "TH",
    countryName: "Thailand",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("full-sense"),

    primaryRole: "Controller",
    roles: createRoles("Controller", ["Initiator"]),

    mainAgents: ["Omen", "Viper", "Breach"],

    career: crwsCareer,

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
      rating: 1.2,
      acs: 216.6,
      kd: 1.13,
      kast: 76,
      adr: 154.8,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-killua",
    slug: "killua",

    nickname: "killua",
    realName: "Tanate Teerasawad",

    countryCode: "TH",
    countryName: "Thailand",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("full-sense"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Gekko"],

    career: killuaCareer,

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
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.02,
      acs: 220.7,
      kd: 1.16,
      kast: 77,
      adr: 126.0,
      hs: 32,
    },

    updatedAt: null,
  },

  {
    id: "player-jitboys",
    slug: "jitboys",

    nickname: "JitboyS",
    realName: "Jittana Nokngam",

    countryCode: "TH",
    countryName: "Thailand",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("full-sense"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Yoru"],

    career: jitboysCareer,

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
      rating: 1.04,
      acs: 224.8,
      kd: 1.19,
      kast: 78,
      adr: 129.2,
      hs: 33,
    },

    updatedAt: null,
  },
];