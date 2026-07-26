import type { ProPlayer } from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

export const t1Players: ProPlayer[] = [
  {
    id: "player-buzz",
    slug: "buzz",

    nickname: "BuZz",
    realName: "Yu Byeong-cheol",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("t1"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist", ["Sentinel"]),

    mainAgents: ["Jett", "Raze", "Killjoy"],

    settings: {
      dpi: 400,
      sensitivity: 0.57,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 228,
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
      rating: 1.17,
      acs: 238.4,
      kd: 1.19,
      kast: 74,
      adr: 153.6,
      hs: 29,
    },

    updatedAt: null,
  },

  {
    id: "player-meteor",
    slug: "meteor",

    nickname: "Meteor",
    realName: "Kim Tae-o",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("t1"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Duelist"]),

    mainAgents: ["Killjoy", "Cypher", "Jett"],

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
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.2,
      acs: 222.8,
      kd: 1.24,
      kast: 76,
      adr: 145.2,
      hs: 30,
    },

    updatedAt: null,
  },

  {
    id: "player-dh",
    slug: "dh",

    nickname: "DH",
    realName: "Kang Dong-ho",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("t1"),

    primaryRole: "Controller",
    roles: createRoles("Controller", ["Initiator"]),

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
      rating: 1.11,
      acs: 223.6,
      kd: 1.1,
      kast: 73,
      adr: 146.7,
      hs: 34,
    },

    updatedAt: null,
  },

  {
    id: "player-izu",
    slug: "izu",

    nickname: "iZu",
    realName: "Ham Woo-joo",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("t1"),

    primaryRole: "Flex",
    roles: createRoles("Flex", ["Duelist"]),

    mainAgents: ["Gekko", "Omen", "Breach"],

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
      rating: 1.12,
      acs: 211.3,
      kd: 1.11,
      kast: 75,
      adr: 138.4,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-munchkin",
    slug: "munchkin",

    nickname: "Munchkin",
    realName: "Byeon Sang-beom",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("t1"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator", ["Sentinel"]),

    mainAgents: ["KAY/O", "Skye", "Viper"],

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
      acs: 202.4,
      kd: 1.08,
      kast: 76,
      adr: 132.8,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-stax",
    slug: "stax",

    nickname: "stax",
    realName: "Kim Gu-taek",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("t1"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Breach", "KAY/O", "Skye"],

    settings: {
      dpi: 400,
      sensitivity: 0.44,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 176,
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
      rating: 1.06,
      acs: 194.7,
      kd: 1.03,
      kast: 75,
      adr: 126.9,
      hs: 32,
    },

    updatedAt: null,
  },
];