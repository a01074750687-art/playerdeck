import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

const zeusCareer: ProPlayerCareer = {
  joinedAt: "2026-03",

  previousTeams: [
    {
      teamName: "Avernus Esports",
      leftAt: "2024-08",
    },
    {
      teamName: "Oasis Gaming",
      leftAt: "2026-03",
    },
  ],

  highlights: [
    {
      year: 2025,
      title: "Locked N' Loaded Philippines Split 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "Predator League Philippines 2026",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers Southeast Asia Stage 3",
      result: "3~4위",
    },
    {
      year: 2026,
      title: "Challengers SEA Split 1 Philippines Qualifier",
      result: "우승",
    },
    {
      year: 2026,
      title: "Esports World Cup Pacific Qualifier Stage 1",
      result: "3위",
    },
  ],
};

const keilysCareer: ProPlayerCareer = {
  joinedAt: "2025-05",

  previousTeams: [
    {
      teamName: "DR Esports",
      leftAt: "2022-01",
    },
    {
      teamName: "Rex Regum Qeon",
      joinedAt: "2022-01",
      leftAt: "2022-10",
    },
    {
      teamName: "Action PH",
      leftAt: "2023-06",
    },
    {
      teamName: "Oasis Gaming",
      joinedAt: "2023-10",
      leftAt: "2024-10",
    },
    {
      teamName: "Global Esports",
      joinedAt: "2024-10",
      leftAt: "2025-05",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VCT Philippines Stage 2 Challengers",
      result: "3위",
    },
    {
      year: 2022,
      title: "Predator League Philippines",
      result: "우승",
    },
    {
      year: 2023,
      title: "Predator League Philippines 2024",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT OFF//SEASON Spotlight Series Pacific",
      result: "준우승",
    },
    {
      year: 2026,
      title: "Esports World Cup Pacific Qualifier Stage 1",
      result: "3위",
    },
  ],
};

const sylvanCareer: ProPlayerCareer = {
  joinedAt: "2025-10",

  previousTeams: [
    {
      teamName: "World Game Star",
      joinedAt: "2021-05",
      leftAt: "2023-03",
    },
    {
      teamName: "Gen.G",
      joinedAt: "2023-03",
      leftAt: "2023-09",
    },
    {
      teamName: "TOP Esports",
      leftAt: "2024-01",
    },
    {
      teamName: "T1",
      joinedAt: "2024-10",
      leftAt: "2025-10",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "VCT Pacific",
      result: "4위",
    },
    {
      year: 2023,
      title: "VCT Pacific Last Chance Qualifier",
      result: "3위",
    },
    {
      year: 2024,
      title: "Red Bull Home Ground #5",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Bangkok",
      result: "우승",
    },
    {
      year: 2026,
      title: "Esports World Cup Pacific Qualifier Stage 1",
      result: "3위",
    },
  ],
};

const styronCareer: ProPlayerCareer = {
  joinedAt: "2026-07",

  previousTeams: [
    {
      teamName: "Enigma Gaming",
      leftAt: "2023-07",
    },
    {
      teamName: "LaZe",
      leftAt: "2024-05",
    },
    {
      teamName: "Disguised",
      joinedAt: "2024-05",
      leftAt: "2025-01",
    },
    {
      teamName: "Motiv Esports",
      joinedAt: "2025-04",
      leftAt: "2025-11",
    },
    {
      teamName: "XLB",
      leftAt: "2026-06",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Challengers Malaysia & Singapore Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "Challengers Southeast Asia Stage 3",
      result: "우승",
    },
    {
      year: 2024,
      title: "One Game Showdown",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers Southeast Asia Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers Southeast Asia Stage 3",
      result: "우승",
    },
  ],
};

const natzCareer: ProPlayerCareer = {
  joinedAt: "2026-07",

  previousTeams: [
    {
      teamName: "NXL LIGAGAME",
      joinedAt: "2020-11",
      leftAt: "2021-07",
    },
    {
      teamName: "Alter Ego",
      leftAt: "2023-06",
    },
    {
      teamName: "THE HERO DETA",
      joinedAt: "2024-05",
      leftAt: "2024-08",
    },
    {
      teamName: "RRQ Academy",
      joinedAt: "2024-12",
      leftAt: "2025-09",
    },
    {
      teamName: "BOOM Esports",
      joinedAt: "2025-09",
      leftAt: "2026-07",
    },
  ],

  highlights: [
    {
      year: 2020,
      title: "First Strike Indonesia",
      result: "우승",
    },
    {
      year: 2021,
      title: "VCT Indonesia Stage 3 Challengers 2",
      result: "우승",
    },
    {
      year: 2022,
      title: "VCT APAC Stage 2 Challengers",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "VCT Pacific Ascension",
      result: "3위",
    },
    {
      year: 2026,
      title: "Predator League Asia-Pacific",
      result: "준우승",
    },
  ],
};

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

    mainAgents: ["Neon", "Raze", "Jett"],

    career: zeusCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.175,
      scopedSensitivity: 1,
      adsSensitivity: 0.9,
      edpi: 280,
      pollingRate: 2000,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-07-17",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-zeus/",
      },
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: true,
      centerDot: true,

      verification: {
        verifiedAt: "2026-07-17",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-zeus/",
      },
    },

    gear: {
      mouse: "Razer Viper V4 Pro White",
      mousepad: "ARTISAN NINJA FX Zero TenZ",
      keyboard: "Wooting 60HE v2 Silver",
      monitor: "ZOWIE XL2586X+",

      verification: {
        verifiedAt: "2026-07-17",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-zeus/",
      },
    },

    stats: {
      rating: 1.07,
      acs: 230.0,
      kd: 1.11,
      kast: 76.23,
      adr: 150.5,
      hs: null,
    },

    updatedAt: null,
  },

  {
    id: "player-kellys",
    slug: "kellys",

    nickname: "kellyS",
    realName: "Kelly Kent Sedillo",

    countryCode: "PH",
    countryName: "Philippines",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("team-secret"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator", ["Flex", "Controller"]),

    mainAgents: ["Phoenix", "KAY/O", "Viper"],

    career: keilysCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.3,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 240,
      pollingRate: 1000,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-08-03",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/kellys/",
      },
    },

    crosshair: {
      code: "0;s;1;P;c;5;h;0;f;0;0l;2;0o;1;0a;1;0f;0;1b;0;S;c;5;s;1.2;o;1",
      color: "Cyan",
      outlines: false,
      centerDot: false,

      verification: {
        verifiedAt: "2026-08-03",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/kellys/",
      },
    },

    gear: {
      mouse: "Razer Viper V4 Pro White",
      mousepad: "Razer Gigantus V2 Pro Balance",
      keyboard: "Wooting 80HE Black",
      monitor: "ZOWIE XL2566K",

      verification: {
        verifiedAt: "2026-08-03",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/kellys/",
      },
    },

    stats: {
      rating: 1.07,
      acs: 213.2,
      kd: 1.0,
      kast: 75.97,
      adr: 148.1,
      hs: null,
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
    roles: createRoles("Controller", ["Flex"]),

    mainAgents: ["Omen", "Astra", "Viper"],

    career: sylvanCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.27,
      scopedSensitivity: 1,
      adsSensitivity: null,
      edpi: 216,
      pollingRate: 1000,
      resolution: null,

      verification: {
        verifiedAt: "2026-08-03",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/sylvan/",
      },
    },

    crosshair: {
      code: null,
      color: null,
      outlines: null,
      centerDot: null,

      verification: {
        verifiedAt: "2026-08-03",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/sylvan/",
      },
    },

    gear: {
      mouse: "Logitech G Pro X Superlight White",
      mousepad: "SteelSeries QcK Heavy",
      keyboard: "Logitech G Pro X Keyboard",
      monitor: null,

      verification: {
        verifiedAt: "2026-08-03",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/sylvan/",
      },
    },

    stats: {
      rating: 0.96,
      acs: 182.8,
      kd: 0.91,
      kast: 74.42,
      adr: 124.4,
      hs: null,
    },

    updatedAt: null,
  },

  {
    id: "player-styron",
    slug: "styron",

    nickname: "STYRON",
    realName: "Tidus Goh",

    countryCode: "SG",
    countryName: "Singapore",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("team-secret"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Skye", "Fade"],

    career: styronCareer,

    settings: {
      dpi: null,
      sensitivity: null,
      scopedSensitivity: null,
      adsSensitivity: null,
      edpi: null,
      pollingRate: null,
      resolution: null,

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "공개 정보 없음",
        sourceUrl: "",
      },
    },

    crosshair: {
      code: null,
      color: null,
      outlines: null,
      centerDot: null,

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "공개 정보 없음",
        sourceUrl: "",
      },
    },

    gear: {
      mouse: null,
      mousepad: null,
      keyboard: null,
      monitor: null,

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "공개 정보 없음",
        sourceUrl: "",
      },
    },

    stats: {
      rating: 0.95,
      acs: 183.3,
      kd: 0.95,
      kast: 74.35,
      adr: 122.1,
      hs: null,
    },

    updatedAt: null,
  },

  {
    id: "player-natz",
    slug: "natz",

    nickname: "naTz",
    realName: "Jonathan Adiputra",

    countryCode: "ID",
    countryName: "Indonesia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("team-secret"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Controller"]),

    mainAgents: ["Cypher", "Omen", "Waylay"],

    career: natzCareer,

    settings: {
      dpi: null,
      sensitivity: null,
      scopedSensitivity: null,
      adsSensitivity: null,
      edpi: null,
      pollingRate: null,
      resolution: null,

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "공개 정보 없음",
        sourceUrl: "",
      },
    },

    crosshair: {
      code: null,
      color: null,
      outlines: null,
      centerDot: null,

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "공개 정보 없음",
        sourceUrl: "",
      },
    },

    gear: {
      mouse: null,
      mousepad: null,
      keyboard: null,
      monitor: null,

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "공개 정보 없음",
        sourceUrl: "",
      },
    },

    stats: {
      rating: 0.96,
      acs: 192.2,
      kd: 0.95,
      kast: 68.95,
      adr: 128.0,
      hs: null,
    },

    updatedAt: null,
  },
];