import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

const jemkinCareer: ProPlayerCareer = {
  joinedAt: "2023-10",

  previousTeams: [
    {
      teamName: "CREST GAMING Zst",
      joinedAt: "2022-02",
      leftAt: "2022-04",
    },
    {
      teamName: "BLUE BEES.ESP",
      joinedAt: "2022-05",
      leftAt: "2022-08",
    },
    {
      teamName: "SCARZ",
      joinedAt: "2022-08",
      leftAt: "2023-10",
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
      year: 2025,
      title: "VCT Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Champions Paris",
      result: "9~12위",
    },
  ],
};

const monyetCareer: ProPlayerCareer = {
  joinedAt: "2024-05",

  previousTeams: [
    {
      teamName: "ONIC Esports",
      joinedAt: "2021-07",
      leftAt: "2022-09",
    },
    {
      teamName: "Global Esports",
      joinedAt: "2022-10",
      leftAt: "2023-09",
    },
    {
      teamName: "Paper Rex",
      joinedAt: "2023-09",
      leftAt: "2024-05",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VCT APAC Last Chance Qualifier",
      result: "3위",
    },
    {
      year: 2024,
      title: "VALORANT Masters Madrid",
      result: "3위",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Champions Paris",
      result: "9~12위",
    },
  ],
};

const crazyguyCareer: ProPlayerCareer = {
  joinedAt: "2025-03",

  previousTeams: [
    {
      teamName: "CERBERUS Esports",
      joinedAt: "2020-07",
      leftAt: "2021-02",
    },
    {
      teamName: "Big BAAM",
      joinedAt: "2021-03",
      leftAt: "2022-01",
    },
    {
      teamName: "Fancy United Esports",
      joinedAt: "2022-01",
      leftAt: "2022-10",
    },
    {
      teamName: "BLEED Esports",
      joinedAt: "2022-10",
      leftAt: "2024-08",
    },
    {
      teamName: "Disguised",
      joinedAt: "2024-08",
      leftAt: "2025-01",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Challengers Malaysia & Singapore Split 2",
      result: "우승",
    },
    {
      year: 2023,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
    {
      year: 2024,
      title: "Challengers Southeast Asia Stage 3",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "준우승",
    },
  ],
};

const kushyCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "Alter Ego",
      joinedAt: "2021-10",
      leftAt: "2024-10",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Challengers Indonesia Split 1",
      result: "준우승",
    },
    {
      year: 2024,
      title: "Challengers Indonesia Split 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Champions Paris",
      result: "9~12위",
    },
  ],
};

const xfferoCareer: ProPlayerCareer = {
  joinedAt: "2022-10",

  previousTeams: [
    {
      teamName: "Alter Ego",
      joinedAt: "2020-07",
      leftAt: "2021-12",
    },
    {
      teamName: "BOOM Esports",
      joinedAt: "2022-01",
      leftAt: "2022-10",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VCT APAC Last Chance Qualifier",
      result: "우승",
    },
    {
      year: 2022,
      title: "VALORANT Champions Istanbul",
      result: "9~12위",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Champions Paris",
      result: "9~12위",
    },
  ],
};

const xanCareer: ProPlayerCareer = {
  joinedAt: "2026-07",

  previousTeams: [
    {
      teamName: "Team SMG",
      leftAt: "2026-07",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Predator League Malaysia",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers Malaysia & Singapore Split 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers Malaysia & Singapore Split 2",
      result: "준우승",
    },
  ],
};

export const rrqPlayers: ProPlayer[] = [
  {
    id: "player-jemkin",
    slug: "jemkin",

    nickname: "Jemkin",
    realName: "Maksim Batorov",

    countryCode: "RU",
    countryName: "Russia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("rrq"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist", ["Sentinel"]),

    mainAgents: ["Jett", "Raze", "Cypher"],

    career: jemkinCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.125,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 200,
      pollingRate: 1000,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/valorant/players/jemkin/",
      },
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V4 Pro Black",
      mousepad: "Artisan Hayate Otsu Soft",
      keyboard: "Wooting 80HE",
      monitor: null,

      verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/valorant/players/jemkin/",
      },
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
    realName: "I Made Adhi Cahya Nugraha",

    countryCode: "ID",
    countryName: "Indonesia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("rrq"),

    primaryRole: "Controller",
    roles: createRoles("Controller", ["Duelist"]),

    mainAgents: ["Omen", "Viper", "Raze"],

    career: monyetCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.125,
      scopedSensitivity: 1,
      adsSensitivity: null,
      edpi: 200,
      pollingRate: 1000,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/valorant/players/monyet/",
      },
    },

    crosshair: {
      code: null,
      color: null,
      outlines: null,
      centerDot: null,
    },

    gear: {
      mouse: "VAXEE NP-01S Pink",
      mousepad: null,
      keyboard: "Wooting 80HE Frost",
      monitor: "ZOWIE XL2546K",

      verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/valorant/players/monyet/",
      },
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
    realName: "Ngô Công Anh",

    countryCode: "VN",
    countryName: "Vietnam",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("rrq"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Breach", "Sova", "KAY/O"],

    career: crazyguyCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.235,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 188,
      pollingRate: 1000,
      resolution: "1920x1080",

      verification: {
         verifiedAt: "2026-08-05",
         sourceName: "ProSettings.net",
          sourceUrl: "https://prosettings.net/valorant/players/crazyguy/",
      },
    },

    crosshair: {
      code: null,
      color: null,
      outlines: null,
      centerDot: null,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "Artisan Hayate Otsu XSoft",
      keyboard: "Wooting 60HE+",
      monitor: "ZOWIE XL2566K",

       verification: {
         verifiedAt: "2026-08-05",
         sourceName: "ProSettings.net",
          sourceUrl: "https://prosettings.net/valorant/players/crazyguy/",
      },
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
    realName: "Bryan Carlos Setiawan",

    countryCode: "ID",
    countryName: "Indonesia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("rrq"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade"],

    career: kushyCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.14,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 224,
      pollingRate: 2000,
      resolution: "1680x1050",

      verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/valorant/players/kushy",
      },
    },

    crosshair: {
      code: null,
      color: null,
      outlines: null,
      centerDot: null,
    },

    gear: {
      mouse: "Logitech G Pro X2 SUPERSTRIKE",
      mousepad: "Pulsar eS Saturn Pro Black",
      keyboard: "Wooting 60HE v2 Silver",
      monitor: null,

       verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/valorant/players/kushy",
      },
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

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Controller"]),

    mainAgents: ["Cypher", "Viper", "Killjoy"],

    career: xfferoCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.125,
      scopedSensitivity: null,
      adsSensitivity: null,
      edpi: 200,
      pollingRate: null,
      resolution: "1280x960",

       verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/valorant/players/xffero",
      },
    },

    crosshair: {
      code: null,
      color: null,
      outlines: null,
      centerDot: null,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2 White",
      mousepad: "Artisan Type-99 Matcha",
      keyboard: "Wooting 80HE Black",
      monitor: null,

      verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/valorant/players/xffero",
      },
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

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Neon"],

    career: xanCareer,

    settings: {
      dpi: 1280,
      sensitivity: 0.18,
      scopedSensitivity: null,
      adsSensitivity: null,
      edpi: 230.4,
      pollingRate: null,
      resolution: "1280x960",

       verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/valorant/players/xan",
      },
    },

    crosshair: {
      code: null,
      color: null,
      outlines: null,
      centerDot: null,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad:  "X-Raypad Aqua Control 2 Medium",
      keyboard: "Wooting 60HE",
      monitor: "Acer Nitro XV271",

       verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/valorant/players/xan",
      },
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