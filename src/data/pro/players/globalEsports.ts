import type { ProPlayer } from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

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
      headset: "Logitech G Pro X 2",
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
      headset: "Razer BlackShark V2 Pro",
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