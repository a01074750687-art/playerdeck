import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

const dambiCareer: ProPlayerCareer = {
  joinedAt: "2024-11",

  previousTeams: [
    {
      teamName: "Gwangju Shadow",
      joinedAt: "2023-09",
      leftAt: "2023-12",
    },
    {
      teamName: "Sin Prisa Gaming",
      joinedAt: "2023-12",
      leftAt: "2024-11",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "우승",
    },
  ],
};

const dambiAwards: ProPlayerAward[] = [
  {
    year: 2026,
    title: "VALORANT Masters Santiago 2026",
    result: "MVP",
  },
];

const xrossCareer: ProPlayerCareer = {
  joinedAt: "2024-02",

  previousTeams: [],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 1",
      result: "3위",
    },
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 2",
      result: "준우승",
    },
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "우승",
    },
  ],
};

const francisCareer: ProPlayerCareer = {
  joinedAt: "2024-11",

  previousTeams: [
    {
      teamName: "Gwangju Shadow",
      joinedAt: "2023-09",
      leftAt: "2023-12",
    },
    {
      teamName: "Sin Prisa Gaming",
      joinedAt: "2023-12",
      leftAt: "2024-11",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "우승",
    },
  ],
};

const rbCareer: ProPlayerCareer = {
  joinedAt: "2025-06",

  previousTeams: [
    {
      teamName: "Vision Strikers",
      joinedAt: "2020-06",
      leftAt: "2022-01",
    },
    {
      teamName: "DRX",
      joinedAt: "2022-01",
      leftAt: "2024-01",
    },
    {
      teamName: "Titan Esports Club",
      joinedAt: "2024-01",
      leftAt: "2025-06",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "VALORANT Masters Berlin 2021",
      result: "5~8위",
    },
    {
      year: 2022,
      title: "VALORANT Champions 2022",
      result: "3위",
    },
    {
      year: 2023,
      title: "VCT Pacific League",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "우승",
    },
  ],
};

const ivyCareer: ProPlayerCareer = {
  joinedAt: "2024-11",

  previousTeams: [
    {
      teamName: "Gwangju Shadow",
      joinedAt: "2023-09",
      leftAt: "2023-12",
    },
    {
      teamName: "Sin Prisa Gaming",
      joinedAt: "2023-12",
      leftAt: "2024-11",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "우승",
    },
  ],
};

export const nongshimRedForcePlayers: ProPlayer[] = [
  {
    id: "player-dambi",
    slug: "dambi",

    nickname: "Dambi",
    realName: "Lee Hyuk-kyu",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("nongshim-redforce"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Neon", "Jett", "Waylay"],

    career: dambiCareer,
    awards: dambiAwards,

    settings: {
      dpi: 1600,
      sensitivity: 0.175,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 280,
      pollingRate: 4000,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/dambi/",
      },
    },

    crosshair: {
      code: "0;p;0;s;1;P;h;0;f;0;0l;3;0o;2;0a;1;0f;0;1b;0;A;o;1;d;1;0b;0;1b;0;S;c;0;s;0.933;o;1",
      color: "White",
      outlines: false,
      centerDot: false,

      verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/dambi/",
      },
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2 Cyan",
      mousepad: "Artisan Ninja FX Zero Soft Orange",
      keyboard: "Custom Keyboard",
      monitor: null,

      verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/dambi/",
      },
    },

    stats: {
      rating: 1.03,
      acs: 225.8,
      kd: 1.06,
      kast: 70.4,
      adr: 148.2,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-xross",
    slug: "xross",

    nickname: "Xross",
    realName: "Jeonghwan",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("nongshim-redforce"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist", ["Flex"]),

    mainAgents: ["Phoenix", "Raze", "Fade"],

    career: xrossCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.27,
      scopedSensitivity: 1,
      adsSensitivity: 0.8,
      edpi: 216,
      pollingRate: 4000,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-07-13",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/xross/",
      },
    },

    crosshair: {
      code: "0;s;1;P;o;1;d;1;z;1;f;0;0b;0;1b;0;S;c;0;s;1.007;o;1",
      color: "White",
      outlines: true,
      centerDot: true,

      verification: {
        verifiedAt: "2026-07-13",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/xross/",
      },
    },

    gear: {
      mouse: "Razer Viper V3 Pro White",
      mousepad: "Artisan Ninja FX Zero XSoft Black",
      keyboard: "Wooting 60HE v2 Silver",
      monitor: "ZOWIE XL2546K",

      verification: {
        verifiedAt: "2026-07-13",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/xross/",
      },
    },

    stats: {
      rating: 1.11,
      acs: 212.9,
      kd: 1.08,
      kast: 76.0,
      adr: 142.1,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-francis",
    slug: "francis",

    nickname: "Francis",
    realName: "Kim Mu-bin",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("nongshim-redforce"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator", ["Flex"]),

    mainAgents: ["Sova", "Fade", "Skye"],

    career: francisCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.27,
      scopedSensitivity: 0.85,
      adsSensitivity: 0.9,
      edpi: 216,
      pollingRate: 2000,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/francis/",
      },
    },

    crosshair: {
      code: "0;P;c;1;o;1;d;1;0b;0;1b;0",
      color: "Green",
      outlines: true,
      centerDot: true,

      verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/francis/",
      },
    },

    gear: {
      mouse: "Razer Viper V4 Pro White",
      mousepad: "Artisan Ninja FX Zero Soft Black",
      keyboard: "IQUNIX EV63 HE",
      monitor: "ZOWIE XL2546K",

      verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/francis/",
      },
    },

    stats: {
      rating: 1.02,
      acs: 188.8,
      kd: 0.99,
      kast: 72.6,
      adr: 129.3,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-rb",
    slug: "rb",

    nickname: "Rb",
    realName: "Goo Sang-min",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("nongshim-redforce"),

    primaryRole: "Controller",
    roles: createRoles("Controller", ["Flex"]),

    mainAgents: ["Omen", "Harbor", "Astra"],

    career: rbCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.175,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 280,
      pollingRate: 1000,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-07-13",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/rb/",
      },
    },

    crosshair: {
      code: "0;s;1;P;d;1;0b;0;1b;0;S;o;1",
      color: "White",
      outlines: true,
      centerDot: true,

      verification: {
        verifiedAt: "2026-07-13",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/rb/",
      },
    },

    gear: {
      mouse: "Razer Viper V4 Pro White",
      mousepad: "Artisan Ninja FX Zero Soft Black",
      keyboard: "Custom Keyboard",
      monitor: "ZOWIE XL2566K",

      verification: {
        verifiedAt: "2026-07-13",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/rb/",
      },
    },

    stats: {
      rating: 0.97,
      acs: 177.1,
      kd: 0.94,
      kast: 73.8,
      adr: 115.2,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-ivy",
    slug: "ivy",

    nickname: "Ivy",
    realName: "Park Sung-hyeon",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("nongshim-redforce"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Controller"]),

    mainAgents: ["Cypher", "Viper", "Vyse"],

    career: ivyCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.1,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 160,
      pollingRate: 4000,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-07-22",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/ivy/",
      },
    },

    crosshair: {
      code: "0;c;1;s;1;P;c;1;o;1;d;1;f;0;0b;0;1b;0;S;c;1;s;0.619;o;1",
      color: "Green",
      outlines: true,
      centerDot: true,

      verification: {
        verifiedAt: "2026-07-22",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/ivy/",
      },
    },

    gear: {
      mouse: "Razer Viper V4 Pro White",
      mousepad: "Artisan FX Hien XSoft Wine Red",
      keyboard: "Wooting 60HE v2 Black",
      monitor: "ZOWIE XL2546K",

      verification: {
        verifiedAt: "2026-07-22",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/ivy/",
      },
    },

    stats: {
      rating: 1.03,
      acs: 196.6,
      kd: 1.07,
      kast: 70.1,
      adr: 129.1,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },
];