import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

const meiyCareer: ProPlayerCareer = {
  joinedAt: "2023-11",

  previousTeams: [
    {
      teamName: "NORTHEPTION",
      joinedAt: "2021-02",
      leftAt: "2021-12",
    },
    {
      teamName: "Crazy Raccoon",
      joinedAt: "2022-01",
      leftAt: "2023-11",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "VCT Japan Stage 3 Challengers Playoffs",
      result: "3위",
    },
    {
      year: 2022,
      title: "VCT Japan Stage 2 Challengers Playoffs",
      result: "3위",
    },
    {
      year: 2023,
      title: "Challengers League Japan Split 1",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT Radiant Asia Invitational",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "7~8위",
    },
  ],
};

const caedyeCareer: ProPlayerCareer = {
  joinedAt: "2026-01",

  previousTeams: [
    {
      teamName: "ZETA DIVISION Academy",
      joinedAt: "2022-08",
      leftAt: "2023-12",
    },
    {
      teamName: "RIDDLE ORDER",
      joinedAt: "2023-12",
      leftAt: "2026-01",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Challengers League Japan Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Ascension Pacific",
      result: "4위",
    },
    {
      year: 2025,
      title: "Challengers Japan Stage 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers Japan Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers League Japan Season Finals",
      result: "우승",
    },
  ],
};

const akameCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "Food Eat",
      leftAt: "2021",
    },
    {
      teamName: "Alpha Six Gaming",
      joinedAt: "2021",
      leftAt: "2021",
    },
    {
      teamName: "K2 esports",
      leftAt: "2022-04",
    },
    {
      teamName: "Jadeite",
      joinedAt: "2022-04",
      leftAt: "2023-09",
    },
    {
      teamName: "REJECT",
      joinedAt: "2023-09",
      leftAt: "2024-09",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Challengers League Japan Split 2",
      result: "준우승",
    },
    {
      year: 2024,
      title: "Challengers League Japan Split 1",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT Radiant Asia Invitational",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Kickoff",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "7~8위",
    },
  ],
};

const sseesCareer: ProPlayerCareer = {
  joinedAt: "2023-11",

  previousTeams: [
    {
      teamName: "DNG White",
      joinedAt: "2021-10",
      leftAt: "2022-10",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "VALORANT Radiant Asia Invitational",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "7~8위",
    },
    {
      year: 2026,
      title: "VCT Pacific Kickoff",
      result: "5위",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "7~8위",
    },
  ],
};

const yatsukaCareer: ProPlayerCareer = {
  joinedAt: "2026-01",

  previousTeams: [
    {
      teamName: "ZETA DIVISION Academy",
      joinedAt: "2022-03",
      leftAt: "2023-12",
    },
    {
      teamName: "RIDDLE ORDER",
      joinedAt: "2023-12",
      leftAt: "2026-01",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Challengers League Japan Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Ascension Pacific",
      result: "4위",
    },
    {
      year: 2025,
      title: "Challengers Japan Stage 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers Japan Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers League Japan Season Finals",
      result: "우승",
    },
  ],
};

export const dfmPlayers: ProPlayer[] = [
  {
    id: "player-meiy",
    slug: "meiy",

    nickname: "Meiy",
    realName: "Ibuki Seki",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("dfm"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Neon"],

    career: meiyCareer,

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
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.07,
      acs: 228.9,
      kd: 1.01,
      kast: 72,
      adr: 132.4,
      hs: 34,
    },

    updatedAt: null,
  },

  {
    id: "player-caedye",
    slug: "caedye",

    nickname: "Caedye",
    realName: "Amon Mateus Okakura",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("dfm"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel"),

    mainAgents: ["Cypher", "Killjoy", "Vyse"],

    career: caedyeCareer,

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
      rating: 1.09,
      acs: 233.0,
      kd: 1.04,
      kast: 73,
      adr: 135.6,
      hs: 35,
    },

    updatedAt: null,
  },

  {
    id: "player-akame",
    slug: "akame",

    nickname: "Akame",
    realName: "Yu Gwang-hui",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("dfm"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Breach"],

    career: akameCareer,

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
      outlines: true,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.12,
      acs: 192.0,
      kd: 1.07,
      kast: 74,
      adr: 138.8,
      hs: 25,
    },

    updatedAt: null,
  },

  {
    id: "player-ssees",
    slug: "ssees",

    nickname: "SSeeS",
    realName: "Tomonori Okimura",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("dfm"),

    primaryRole: "Controller",
    roles: createRoles("Controller"),

    mainAgents: ["Omen", "Viper", "Astra"],

    career: sseesCareer,

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
      rating: 1.15,
      acs: 196.1,
      kd: 1.1,
      kast: 75,
      adr: 142.0,
      hs: 26,
    },

    updatedAt: null,
  },

  {
    id: "player-yatsuka",
    slug: "yatsuka",

    nickname: "yatsuka",
    realName: "Kazuya Ikeda",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("dfm"),

    primaryRole: "Flex",
    roles: createRoles("Flex"),

    mainAgents: ["Gekko", "Omen", "Killjoy"],

    career: yatsukaCareer,

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
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.17,
      acs: 200.2,
      kd: 1.13,
      kast: 76,
      adr: 145.2,
      hs: 27,
    },

    updatedAt: null,
  },
];