import type { ProPlayer } from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

export const krxPlayers: ProPlayer[] = [
  {
    id: "player-mako",
    slug: "mako",

    nickname: "MaKo",
    realName: "Kim Myeong-kwan",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("krx"),

    primaryRole: "Controller",
    roles: createRoles("Controller"),

    mainAgents: ["Omen", "Viper", "Astra"],

    settings: {
      dpi: 400,
      sensitivity: 0.45,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 180,
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
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.19,
      acs: 211.8,
      kd: 1.27,
      kast: 79,
      adr: 137.9,
      hs: 34,
    },

    updatedAt: null,
  },

  {
    id: "player-beyn",
    slug: "beyn",

    nickname: "BeYN",
    realName: "Kang Ha-bin",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("krx"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator", ["Controller"]),

    mainAgents: ["Sova", "Fade", "Gekko"],

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
      rating: 1.1,
      acs: 202.5,
      kd: 1.08,
      kast: 76,
      adr: 132.1,
      hs: 29,
    },

    updatedAt: null,
  },

  {
    id: "player-yong",
    slug: "yong",

    nickname: "yong",
    realName: "Kim Ho-yong",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("krx"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel"),

    mainAgents: ["Cypher", "Killjoy", "Vyse"],

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
      rating: 1.08,
      acs: 199.4,
      kd: 1.06,
      kast: 75,
      adr: 130.8,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-free1ng",
    slug: "free1ng",

    nickname: "free1ng",
    realName: "No Ha-jun",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("krx"),

    primaryRole: "Flex",
    roles: createRoles("Flex", ["Initiator", "Sentinel"]),

    mainAgents: ["Sova", "Gekko", "Killjoy"],

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
      acs: 207.2,
      kd: 1.09,
      kast: 76,
      adr: 136.1,
      hs: 30,
    },

    updatedAt: null,
  },

  {
    id: "player-hyunmin",
    slug: "hyunmin",

    nickname: "HYUNMIN",
    realName: "Song Hyun-min",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("krx"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Neon"],

    settings: {
      dpi: 800,
      sensitivity: 0.29,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 232,
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
      acs: 239.6,
      kd: 1.2,
      kast: 74,
      adr: 154.2,
      hs: 28,
    },

    updatedAt: null,
  },

  {
    id: "player-flicker",
    slug: "flicker",

    nickname: "Flicker",
    realName: "Kim Tae-hee",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("krx"),

    primaryRole: "Flex",
    roles: createRoles("Flex", ["Initiator", "Sentinel"]),

    mainAgents: ["Breach", "Fade", "Cypher"],

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
      acs: 201.5,
      kd: 1.05,
      kast: 75,
      adr: 131.6,
      hs: 32,
    },

    updatedAt: null,
  },
];