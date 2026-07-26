import type { ProPlayer } from "../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../common/helpers";

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