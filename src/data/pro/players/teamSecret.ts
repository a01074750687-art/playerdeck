import type { ProPlayer } from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

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

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Yoru"],

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
      headset: "HyperX Cloud III",
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
      headset: "Razer BlackShark V2 Pro",
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
      headset: "HyperX Cloud III",
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