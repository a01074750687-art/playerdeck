import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

const udotanCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "Team Nutria",
      leftAt: "2021",
    },
    {
      teamName: "Noble Experience",
      leftAt: "2021",
    },
    {
      teamName: "GoNGo Prince",
      joinedAt: "2022-01",
      leftAt: "2022-04",
    },
    {
      teamName: "TALON",
      joinedAt: "2022-04",
      leftAt: "2022-10",
    },
    {
      teamName: "Gwangju Shadow",
      joinedAt: "2023-03",
      leftAt: "2023-12",
    },
    {
      teamName: "Four Angry Men",
      joinedAt: "2023-10",
      leftAt: "2024-02",
    },
    {
      teamName: "Rare Atom",
      joinedAt: "2024-02",
      leftAt: "2024-09",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "VCT Ascension China",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "3위",
    },
    {
      year: 2026,
      title: "VALORANT Masters London",
      result: "9~10위",
    },
    {
      year: 2026,
      title: "Esports World Cup Pacific Qualifier Stage 2",
      result: "준우승",
    },
  ],
};

const kr1stalCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "BLUE BEES.ESP",
      joinedAt: "2022-02",
      leftAt: "2022-08",
    },
    {
      teamName: "SCARZ",
      joinedAt: "2022-08",
      leftAt: "2023-10",
    },
    {
      teamName: "Night Wings Gaming",
      leftAt: "2023-12",
    },
    {
      teamName: "Xi Lai Gaming",
      joinedAt: "2024-03",
      leftAt: "2024-09",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Challengers Japan Split 2",
      result: "우승",
    },
    {
      year: 2023,
      title: "VCT Ascension Pacific",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT China National Competition Season 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Ascension China",
      result: "우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "3위",
    },
  ],
};

const xavi8kCareer: ProPlayerCareer = {
  joinedAt: "2025-11",

  previousTeams: [
    {
      teamName: "Bren Esports",
      joinedAt: "2021-10",
      leftAt: "2022-08",
    },
    {
      teamName: "Oasis Gaming",
      joinedAt: "2023-01",
      leftAt: "2024-08",
    },
    {
      teamName: "NAOS Esports",
      joinedAt: "2024-10",
      leftAt: "2025-10",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Predator League Philippines 2024",
      result: "우승",
    },
    {
      year: 2023,
      title: "Challengers Philippines Split 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers Southeast Asia Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "5~6위",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "3위",
    },
  ],
};

const autumnCareer: ProPlayerCareer = {
  joinedAt: "2025-11",

  previousTeams: [
    {
      teamName: "ORDER",
      joinedAt: "2020-10",
      leftAt: "2022-09",
    },
    {
      teamName: "Gods Reign",
      leftAt: "2023-09",
    },
    {
      teamName: "FunPlus Phoenix",
      joinedAt: "2023-09",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "Oceania Tour Championship",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT China Kickoff",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VCT China Stage 1",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VCT China Stage 2",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "3위",
    },
  ],
};

const patmenCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "TALON",
      joinedAt: "2022-07",
      leftAt: "2022-09",
    },
    {
      teamName: "Stream Raiders Nacague",
      leftAt: "2023-03",
    },
    {
      teamName: "ZOL Esports",
      joinedAt: "2023-03",
      leftAt: "2024-12",
    },
    {
      teamName: "NAOS Esports",
      joinedAt: "2025-01",
      leftAt: "2025-03",
    },
    {
      teamName: "Paper Rex",
      joinedAt: "2025-03",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Challengers Philippines Split 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 1",
      result: "3위",
    },
    {
      year: 2025,
      title: "VALORANT Masters Toronto",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Champions Paris",
      result: "4위",
    },
  ],
};

const patmenAwards: ProPlayerAward[] = [
  {
    year: 2025,
    title: "VCT Pacific Awards",
    result: "올해의 신인",
  },
  {
    year: 2025,
    title: "VCT Pacific Awards",
    result: "올해의 척후대",
  },
];

export const globalEsportsPlayers: ProPlayer[] = [
  {
    id: "player-udotan",
    slug: "udotan",

    nickname: "UdoTan",
    realName: "Go Kyung-won",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("global-esports"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Neon", "Raze", "Jett"],

    career: udotanCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.101,
      scopedSensitivity: 0.8,
      adsSensitivity: 0.6,
      edpi: 161.6,
      pollingRate: null,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-udotan/",
      },
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: true,
      centerDot: true,

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-udotan/",
      },
    },

    gear: {
      mouse: "Razer Viper V4 Pro Black",
      mousepad: "Pulsar eS Saturn Pro Red",
      keyboard: "Wooting 60HE v2 Silver",
      monitor: null,

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-udotan/",
      },
    },

    stats: {
      rating: 0.92,
      acs: 202.0,
      kd: 0.92,
      kast: 65.8,
      adr: 134.6,
      hs: null,
    },

    updatedAt: "2026-08-09",
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

    primaryRole: "Flex",
    roles: createRoles("Flex", ["Initiator", "Sentinel", "Controller"]),

    mainAgents: ["Sova", "Killjoy", "Fade"],

    career: kr1stalCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.21,
      scopedSensitivity: 1,
      adsSensitivity: 0.9,
      edpi: 336,
      pollingRate: null,
      resolution: null,

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-kr1stal/",
      },
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: true,
      centerDot: true,

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-kr1stal/",
      },
    },

    gear: {
      mouse: "ZOWIE EC2-DW Black",
      mousepad: "ARTISAN NINJA FX Zero Daidai XSoft",
      keyboard: "SteelSeries Apex Pro TKL",
      monitor: null,

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-kr1stal/",
      },
    },

    stats: {
      rating: 1.00,
      acs: 168.3,
      kd: 0.96,
      kast: 68.9,
      adr: 118.6,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-xavi8k",
    slug: "xavi8k",

    nickname: "xavi8k",
    realName: "Xavier Juan",

    countryCode: "PH",
    countryName: "Philippines",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("global-esports"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator", ["Controller", "Sentinel"]),

    mainAgents: ["Omen", "Astra", "Sova"],

    career: xavi8kCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.102,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 163.2,
      pollingRate: null,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-xavi8k/",
      },
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: false,
      centerDot: false,

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-xavi8k/",
      },
    },

    gear: {
      mouse: "Razer Viper V4 Pro White",
      mousepad: "ARTISAN NINJA FX Hien Red",
      keyboard: "Wooting 60HE+",
      monitor: null,

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-xavi8k/",
      },
    },

    stats: {
      rating: 0.93,
      acs: 189.7,
      kd: 0.88,
      kast: 70.1,
      adr: 129.5,
      hs: null,
    },

    updatedAt: "2026-08-09",
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

    primaryRole: "Flex",
    roles: createRoles("Flex", ["Duelist", "Sentinel", "Controller"]),

    mainAgents: ["Phoenix", "Veto", "Yoru"],

    career: autumnCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.113,
      scopedSensitivity: null,
      adsSensitivity: null,
      edpi: 180.8,
      pollingRate: 1000,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/autumn/",
      },
    },

    crosshair: {
      code: "0;s;1;P;c;5;o;1;f;0;0b;0;1b;0;S;c;1;o;1",
      color: "Cyan",
      outlines: true,
      centerDot: false,

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/autumn/",
      },
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2 Black",
      mousepad: "VAXEE PE Tortoiseshell Cats",
      keyboard: "Wooting 60HE+",
      monitor: "ZOWIE XL2566K",

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/autumn/",
      },
    },

    stats: {
      rating: 0.98,
      acs: 198.5,
      kd: 1.04,
      kast: 69.3,
      adr: 130.7,
      hs: null,
    },

    updatedAt: "2026-08-09",
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
    roles: createRoles("Controller", ["Initiator"]),

    mainAgents: ["Omen", "Fade", "Gekko"],

    career: patmenCareer,
    awards: patmenAwards,

    settings: {
      dpi: 1600,
      sensitivity: 0.125,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 200,
      pollingRate: 1000,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/patmen/",
      },
    },

    crosshair: {
      code: "0;s;1;P;h;0;f;0;0l;3;0o;0;0a;1;0f;0;1b;0;S;c;1;s;0.7;o;1",
      color: "White",
      outlines: false,
      centerDot: false,

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/patmen/",
      },
    },

    gear: {
      mouse: "VAXEE XE V2 Black",
      mousepad: "Pulsar eS Saturn Pro Black",
      keyboard: "Wooting 60HE v2 Silver",
      monitor: "ZOWIE XL2566X+",

      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/patmen/",
      },
    },

    stats: {
      rating: 1.00,
      acs: 202.8,
      kd: 1.01,
      kast: 69.1,
      adr: 129.6,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },
];