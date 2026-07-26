import type { ProPlayer } from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

export const paperRexPlayers: ProPlayer[] = [

  {
    id: "player-something",
    slug: "something",

    nickname: "something",
    realName: "Ilya Petrov",

    countryCode: "RU",
    countryName: "Russia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("paper-rex"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Reyna", "Neon"],

    settings: {
      dpi: 800,
      sensitivity: 0.33,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 264,
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
      rating: 1.25,
      acs: 252.1,
      kd: 1.29,
      kast: 73,
      adr: 162.7,
      hs: 27,
    },

    updatedAt: null,
  },

  {
    id: "player-forsaken",
    slug: "forsaken",

    nickname: "f0rsakeN",
    realName: "Jason Susanto",

    countryCode: "ID",
    countryName: "Indonesia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("paper-rex"),

    primaryRole: "Flex",
    roles: createRoles("Flex", ["Duelist", "Initiator", "Controller", "Sentinel"]),

    mainAgents: ["Yoru", "Breach", "Killjoy"],

    settings: {
      dpi: 800,
      sensitivity: 0.36,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 288,
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
      rating: 1.18,
      acs: 224.6,
      kd: 1.17,
      kast: 76,
      adr: 146.8,
      hs: 33,
    },

    updatedAt: null,
  },

  {
    id: "player-jinggg",
    slug: "jinggg",

    nickname: "Jinggg",
    realName: "Wang Jing Jie",

    countryCode: "SG",
    countryName: "Singapore",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("paper-rex"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist", ["Controller"]),

    mainAgents: ["Raze", "Neon", "Omen"],

    settings: {
      dpi: 1600,
      sensitivity: 0.2,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 320,
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
      rating: 1.22,
      acs: 247.8,
      kd: 1.24,
      kast: 74,
      adr: 159.6,
      hs: 27,
    },

    updatedAt: null,
  },

  {
    id: "player-d4v41",
    slug: "d4v41",

    nickname: "d4v41",
    realName: "Khalish Rusyaidee",

    countryCode: "MY",
    countryName: "Malaysia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("paper-rex"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Initiator"]),

    mainAgents: ["Cypher", "Killjoy", "Sova"],

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
      rating: 1.1,
      acs: 205.9,
      kd: 1.09,
      kast: 76,
      adr: 134.4,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-invy",
    slug: "invy",

    nickname: "invy",
    realName: "Adrian Reyes",

    countryCode: "PH",
    countryName: "Philippines",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("paper-rex"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Gekko"],

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
      rating: 1.13,
      acs: 213.7,
      kd: 1.12,
      kast: 77,
      adr: 139.1,
      hs: 30,
    },

    updatedAt: null,
  },
];