import type { ProPlayer } from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

export const rrqPlayers: ProPlayer[] = [
  {
    id: "player-jemkin",
    slug: "jemkin",

    nickname: "Jemkin",
    realName: "Jemkin",

    countryCode: "RU",
    countryName: "Russia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("rrq"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist", ["Sentinel"]),

    mainAgents: ["Jett", "Raze", "Cypher"],

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
      outlines: true,
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
      acs: 192.0,
      kd: 1.04,
      kast: 73,
      adr: 132.4,
      hs: 25,
    },

    updatedAt: null,
  },

  {
    id: "player-monyet",
    slug: "monyet",

    nickname: "Monyet",
    realName: "Cahya Nugraha",

    countryCode: "ID",
    countryName: "Indonesia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("rrq"),

    primaryRole: "Controller",
    roles: createRoles("Controller", ["Duelist"]),

    mainAgents: ["Omen", "Viper", "Raze"],

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
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.2,
      acs: 196.1,
      kd: 1.07,
      kast: 74,
      adr: 135.6,
      hs: 26,
    },

    updatedAt: null,
  },

  {
    id: "player-crazyguy",
    slug: "crazyguy",

    nickname: "crazyguy",
    realName: "Nguyen Van Manh",

    countryCode: "VN",
    countryName: "Vietnam",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("rrq"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Breach", "Sova", "KAY/O"],

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
      rating: 1.02,
      acs: 200.2,
      kd: 1.1,
      kast: 75,
      adr: 138.8,
      hs: 27,
    },

    updatedAt: null,
  },

  {
    id: "player-kushy",
    slug: "kushy",

    nickname: "Kushy",
    realName: "Kushy",

    countryCode: "ID",
    countryName: "Indonesia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("rrq"),

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
      rating: 1.04,
      acs: 204.3,
      kd: 1.13,
      kast: 76,
      adr: 142.0,
      hs: 28,
    },

    updatedAt: null,
  },

  {
    id: "player-xffero",
    slug: "xffero",

    nickname: "xffero",
    realName: "David Monangin",

    countryCode: "ID",
    countryName: "Indonesia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("rrq"),

    primaryRole: "Controller",
    roles: createRoles("Controller", ["Initiator"]),

    mainAgents: ["Omen", "Viper", "Sova"],

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
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.07,
      acs: 208.4,
      kd: 1.16,
      kast: 77,
      adr: 145.2,
      hs: 29,
    },

    updatedAt: null,
  },

  {
    id: "player-xan",
    slug: "xan",

    nickname: "Xan",
    realName: "Xan Ng",

    countryCode: "MY",
    countryName: "Malaysia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("rrq"),

    primaryRole: "Flex",
    roles: createRoles("Flex", ["Duelist", "Initiator"]),

    mainAgents: ["Yoru", "Gekko", "Breach"],

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
      rating: 1.05,
      acs: 206.0,
      kd: 1.08,
      kast: 75,
      adr: 137.0,
      hs: 28,
    },

    updatedAt: null,
  },
];