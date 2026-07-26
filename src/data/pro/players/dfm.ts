import type { ProPlayer } from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

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
      headset: "Razer BlackShark V2 Pro",
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
      headset: "Logitech G Pro X 2",
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