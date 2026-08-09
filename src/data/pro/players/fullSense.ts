import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

const primmieCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "TALON",
      joinedAt: "2024-07",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "VCT Pacific Stage 2",
      result: "4위",
    },
    {
      year: 2024,
      title: "VALORANT Champions 2024",
      result: "13~16위",
    },
    {
      year: 2025,
      title: "VCT Pacific Kickoff",
      result: "4위",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "3위",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "준우승",
    },
  ],
};

const seph1rothCareer: ProPlayerCareer = {
  joinedAt: "2026-04",

  previousTeams: [
    {
      teamName: "CRIT Esports",
      leftAt: "2023-09",
    },
    {
      teamName: "Made in Thailand",
      joinedAt: "2023-09",
      leftAt: "2025-01",
    },
    {
      teamName: "Sharper Esports",
      joinedAt: "2026-01",
      leftAt: "2026-04",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Challengers League 2024 Thailand Split 1",
      result: "준우승",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Thailand Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Southeast Asia Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Southeast Asia Stage 1",
      result: "우승",
    },
    {
      year: 2026,
      title: "Challengers 2026 Southeast Asia Split 1",
      result: "준우승",
    },
  ],
};

const crwsCareer: ProPlayerCareer = {
  joinedAt: "2026-04",

  previousTeams: [
    {
      teamName: "X10 Esports",
      joinedAt: "2020-12",
      leftAt: "2022-01",
    },
    {
      teamName: "XERXIA Esports",
      joinedAt: "2022-01",
      leftAt: "2022-10",
    },
    {
      teamName: "TALON",
      joinedAt: "2022-10",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "VCT Southeast Asia Stage 1 Masters",
      result: "우승",
    },
    {
      year: 2021,
      title: "VCT Southeast Asia Stage 2 Challengers Finals",
      result: "우승",
    },
    {
      year: 2021,
      title: "VALORANT Champions 2021",
      result: "5~8위",
    },
    {
      year: 2022,
      title: "VCT Asia Pacific Stage 2 Challengers",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "준우승",
    },
  ],
};

const killuaCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "FW Esports",
      leftAt: "2022-12",
    },
    {
      teamName: "Made in Thailand",
      joinedAt: "2023-12",
      leftAt: "2025-01",
    },
    {
      teamName: "TALON",
      joinedAt: "2025-02",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VCT Thailand Stage 2 Challengers",
      result: "준우승",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Thailand Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Southeast Asia Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Southeast Asia Stage 1",
      result: "우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "준우승",
    },
  ],
};

const jitboysCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "FW Esports",
      leftAt: "2022-10",
    },
    {
      teamName: "TALON",
      joinedAt: "2022-10",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VCT Thailand Stage 2 Challengers",
      result: "준우승",
    },
    {
      year: 2023,
      title: "VCT LOCK//IN São Paulo",
      result: "5~8위",
    },
    {
      year: 2024,
      title: "VCT Pacific Stage 2",
      result: "4위",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "3위",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "준우승",
    },
  ],
};

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

    career: primmieCareer,

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
        sourceUrl: "https://prosettings.net/players/primmie/",
      },
    },

    crosshair: {
      code: "0;s;1;P;o;1;d;1;f;0;0b;0;1b;0;S;o;1",
      color: "White",
      outlines: true,
      centerDot: true,

      verification: {
        verifiedAt: "2026-08-03",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/primmie/",
      },
    },

    gear: {
      mouse: "Razer Viper V3 Pro Faker Edition",
      mousepad: null,
      keyboard: "Wooting 60HE v2 Black",
      monitor: null,

      verification: {
        verifiedAt: "2026-08-03",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/primmie/",
      },
    },

    stats: {
      rating: null,
      acs: null,
      kd: null,
      kast: null,
      adr: null,
      hs: null,
    },

    updatedAt: "2026-08-09",
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

    primaryRole: "Flex",
    roles: createRoles("Flex", ["Controller", "Sentinel"]),
    mainAgents: ["Cypher", "Killjoy"],

    career: seph1rothCareer,

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
      rating: 0.76,
      acs: 140.9,
      kd: 0.72,
      kast: 64.8,
      adr: 96.7,
      hs: null,
    },

    updatedAt: "2026-08-09",
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

    primaryRole: "Flex",
    roles: createRoles("Flex", ["Controller", "Sentinel", "Initiator"]),
    mainAgents: ["Omen", "Viper", "Breach"],

    career: crwsCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.1,
      scopedSensitivity: 1,
      adsSensitivity: null,
      edpi: 160,
      pollingRate: 1000,
      resolution: "1280x960",

      verification: {
        verifiedAt: "2026-07-13",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/crws/",
      },
    },

    crosshair: {
      code: "0;P;c;5;h;0;0l;3;0o;1;0a;1;0f;0;1b;0",
      color: "Cyan",
      outlines: false,
      centerDot: false,

      verification: {
        verifiedAt: "2026-07-13",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/crws/",
      },
    },

    gear: {
      mouse: "Razer DeathAdder V3 HyperSpeed",
      mousepad: "Artisan Type-99 Matcha",
      keyboard: "Wooting 80HE TenZ Edition",
      monitor: "ZOWIE XL2566K",

      verification: {
        verifiedAt: "2026-07-13",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/crws/",
      },
    },

    stats: {
      rating: null,
      acs: null,
      kd: null,
      kast: null,
      adr: null,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-killua",
    slug: "killua",

    nickname: "Killua",
    realName: "Tanate Teerasawad",

    countryCode: "TH",
    countryName: "Thailand",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,
    team: getRequiredTeam("full-sense"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),
    mainAgents: ["Fade", "Sova", "Skye"],

    career: killuaCareer,

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
      rating: 0.78,
      acs: 147.0,
      kd: 0.69,
      kast: 64.5,
      adr: 101.7,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-jitboys",
    slug: "jitboys",

    nickname: "JitBoyS",
    realName: "Jittana Nokngam",

    countryCode: "TH",
    countryName: "Thailand",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,
    team: getRequiredTeam("full-sense"),

    primaryRole: "Flex",
    roles: createRoles("Flex", ["Sentinel", "Duelist"]),
    mainAgents: ["Cypher", "Neon", "Yoru"],

    career: jitboysCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.5,
      scopedSensitivity: 1,
      adsSensitivity: null,
      edpi: 400,
      pollingRate: 1000,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-07-13",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/jitboys/",
      },
    },

    crosshair: {
      code: "0;P;h;0;0l;4;0o;0;0a;1;0f;0;1b;0",
      color: "White",
      outlines: false,
      centerDot: false,

      verification: {
        verifiedAt: "2026-07-13",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/jitboys/",
      },
    },

    gear: {
      mouse: "Logitech G Pro X2 SUPERSTRIKE",
      mousepad: "Artisan Ninja FX Zero Soft Orange",
      keyboard: "Wooting 80HE Frost",
      monitor: "ZOWIE XL2566K",

      verification: {
        verifiedAt: "2026-07-13",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/jitboys/",
      },
    },

    stats: {
      rating: null,
      acs: null,
      kd: null,
      kast: null,
      adr: null,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },
];