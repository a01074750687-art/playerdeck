import type { ProPlayer } from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

export const zetaPlayers: ProPlayer[] = [
  {
    id: "player-absol",
    slug: "absol",

    nickname: "Absol",
    realName: "Kazuki Fujinoki",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("zeta"),

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
      acs: 204.3,
      kd: 1.16,
      kast: 77,
      adr: 148.4,
      hs: 28,
    },

    updatedAt: null,
  },

  {
    id: "player-sugarz3ro",
    slug: "sugarz3ro",

    nickname: "SugarZ3ro",
    realName: "Shota Watanabe",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("zeta"),

    primaryRole: "Controller",
    roles: createRoles("Controller"),

    mainAgents: ["Omen", "Viper", "Astra"],

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
      rating: 1.02,
      acs: 208.4,
      kd: 1.19,
      kast: 78,
      adr: 151.6,
      hs: 29,
    },

    updatedAt: null,
  },

  {
    id: "player-xdll",
    slug: "xdll",

    nickname: "Xdll",
    realName: "Yuto Mizomori",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("zeta"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Breach"],

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
      rating: 1.04,
      acs: 212.5,
      kd: 1.01,
      kast: 72,
      adr: 154.8,
      hs: 30,
    },

    updatedAt: null,
  },

  {
    id: "player-eko",
    slug: "eko",

    nickname: "eko",
    realName: "Yeom Wang-ryong",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("zeta"),

    primaryRole: "Flex",
    roles: createRoles("Flex"),

    mainAgents: ["Gekko", "Omen", "Killjoy"],

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
      rating: 1.07,
      acs: 216.6,
      kd: 1.04,
      kast: 73,
      adr: 126.0,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-syouta",
    slug: "syouta",

    nickname: "SyouTa",
    realName: "Shota Aoki",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("zeta"),

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
      acs: 220.7,
      kd: 1.07,
      kast: 74,
      adr: 129.2,
      hs: 32,
    },

    updatedAt: null,
  },
];