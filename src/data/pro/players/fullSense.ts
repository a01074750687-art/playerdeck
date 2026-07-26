import type { ProPlayer } from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

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