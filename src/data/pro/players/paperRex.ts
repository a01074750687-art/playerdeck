import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

const somethingCareer: ProPlayerCareer = {
  joinedAt: "2023-03",

  previousTeams: [
    {
      teamName: "Insomnia",
      joinedAt: "2021-03",
      leftAt: "2021-08",
    },
    {
      teamName: "BLUE BEES.ESP",
      joinedAt: "2021-09",
      leftAt: "2022-05",
    },
    {
      teamName: "Sengoku Gaming",
      joinedAt: "2022-05",
      leftAt: "2023-03",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "VCT Pacific",
      result: "우승",
    },
    {
      year: 2023,
      title: "VALORANT Champions Los Angeles",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VCT Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Toronto",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters London",
      result: "준우승",
    },
  ],
};

const forsakenCareer: ProPlayerCareer = {
  joinedAt: "2021-02",

  previousTeams: [],

  highlights: [
    {
      year: 2022,
      title: "VALORANT Masters Copenhagen",
      result: "준우승",
    },
    {
      year: 2023,
      title: "VCT Pacific",
      result: "우승",
    },
    {
      year: 2023,
      title: "VALORANT Champions Los Angeles",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Toronto",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters London",
      result: "준우승",
    },
  ],
};

const forsakenAwards: ProPlayerAward[] = [
  {
    year: 2023,
    title: "VCT Pacific Awards",
    result: "올해의 감시자",
  },
  {
    year: 2025,
    title: "VALORANT Masters Toronto",
    result: "결승 MVP",
  },
];

const jingggCareer: ProPlayerCareer = {
  joinedAt: "2021-09",

  previousTeams: [
    {
      teamName: "Team SMG",
      joinedAt: "2021-06",
      leftAt: "2021-09",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VALORANT Masters Copenhagen",
      result: "준우승",
    },
    {
      year: 2023,
      title: "VCT Pacific",
      result: "우승",
    },
    {
      year: 2023,
      title: "VALORANT Champions Los Angeles",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Toronto",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters London",
      result: "준우승",
    },
  ],
};

const d4v41Career: ProPlayerCareer = {
  joinedAt: "2021-02",

  previousTeams: [],

  highlights: [
    {
      year: 2022,
      title: "VALORANT Masters Copenhagen",
      result: "준우승",
    },
    {
      year: 2023,
      title: "VCT Pacific",
      result: "우승",
    },
    {
      year: 2023,
      title: "VALORANT Champions Los Angeles",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Toronto",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters London",
      result: "준우승",
    },
  ],
};

const d4v41Awards: ProPlayerAward[] = [
  {
    year: 2023,
    title: "VCT Pacific Awards",
    result: "올해의 척후대",
  },
];

const invyCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "Hashira",
    },
    {
      teamName: "SV Empire",
    },
    {
      teamName: "Oasis Gaming",
    },
    {
      teamName: "Team Secret",
      joinedAt: "2022-11",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "VCT Pacific",
      result: "5~6위",
    },
    {
      year: 2023,
      title: "VALORANT Champions Los Angeles",
      result: "9~12위",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters London",
      result: "준우승",
    },
  ],
};

export const paperRexPlayers: ProPlayer[] = [
  {
    id: "player-something",
    slug: "something",

    nickname: "something",
    realName: "Ilya Petrov",

    countryCode: "RU",
    countryName: "Russia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("paper-rex"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Yoru", "Phoenix"],

    career: somethingCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.58,
      scopedSensitivity: 1.115,
      adsSensitivity: 1,
      edpi: 464,
      pollingRate: 4000,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/something/",
      },
    },

    crosshair: {
      code: "0;s;1;P;h;0;0l;2;0o;1;0a;1;0f;0;1b;0;S;c;0;s;0.713;o;1",
      color: "White",
      outlines: false,
      centerDot: false,

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/something/",
      },
    },

    gear: {
      mouse: "Logitech G Pro X2 Superlight",
      mousepad: "Pulsar eS Saturn Pro Red",
      keyboard: "Pulsar PCMK 3",
      monitor: "ZOWIE XL2586K",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/something/",
      },
    },

    stats: {
      rating: 1.25,
      acs: 252.1,
      kd: 1.29,
      kast: 73,
      adr: 162.7,
      hs: 27,
    },

    updatedAt: null,
  },

  {
    id: "player-forsaken",
    slug: "forsaken",

    nickname: "f0rsakeN",
    realName: "Jason Susanto",

    countryCode: "ID",
    countryName: "Indonesia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("paper-rex"),

    primaryRole: "Flex",
    roles: createRoles("Flex", [
      "Duelist",
      "Initiator",
      "Controller",
      "Sentinel",
    ]),

    mainAgents: ["Yoru", "Breach", "Killjoy"],

    career: forsakenCareer,
    awards: forsakenAwards,

    settings: {
      dpi: 800,
      sensitivity: 0.712,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 569.6,
      pollingRate: 4000,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/forsaken/",
      },
    },

    crosshair: {
      code: "0;p;0;c;1;s;1;P;h;0;f;0;s;0;0l;3;0v;3;0g;1;0o;0;0a;1;0f;0;1b;0;A;o;1;d;1;0b;0;1b;0;S;d;0",
      color: "White",
      outlines: false,
      centerDot: false,

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/forsaken/",
      },
    },

    gear: {
      mouse: "Pulsar Susanto-X",
      mousepad: "Pulsar eS Saturn Pro Red",
      keyboard: "Wooting 60HE v2 Silver",
      monitor: "ZOWIE XL2566K+",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/forsaken/",
      },
    },

    stats: {
      rating: 1.18,
      acs: 224.6,
      kd: 1.17,
      kast: 76,
      adr: 146.8,
      hs: 33,
    },

    updatedAt: null,
  },

  {
    id: "player-jinggg",
    slug: "jinggg",

    nickname: "Jinggg",
    realName: "Wang Jing Jie",

    countryCode: "SG",
    countryName: "Singapore",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("paper-rex"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist", ["Controller"]),

    mainAgents: ["Raze", "Neon", "Omen"],

    career: jingggCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.175,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 280,
      pollingRate: 2000,
      resolution: "1280x960",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/jinggg/",
      },
    },

    crosshair: {
      code: "0;s;1;P;c;8;u;FF99FFFF;o;1;b;1;f;0;0l;3;0o;2;0a;1;0f;0;1b;0;S;c;5;o;1",
      color: "Pink",
      outlines: true,
      centerDot: false,

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/jinggg/",
      },
    },

    gear: {
      mouse: "Pulsar Jinggg-X",
      mousepad: "Artisan Hayate Otsu V2 XSoft Black",
      keyboard: "Wooting 60He v2 Silver",
      monitor: "ZOWIE XL2566K",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/jinggg/",
      },
    },

    stats: {
      rating: 1.22,
      acs: 247.8,
      kd: 1.24,
      kast: 74,
      adr: 159.6,
      hs: 27,
    },

    updatedAt: null,
  },

  {
    id: "player-d4v41",
    slug: "d4v41",

    nickname: "d4v41",
    realName: "Khalish Rusyaidee",

    countryCode: "MY",
    countryName: "Malaysia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("paper-rex"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Initiator"]),

    mainAgents: ["Cypher", "Killjoy", "Chamber"],

    career: d4v41Career,
    awards: d4v41Awards,

    settings: {
      dpi: 900,
      sensitivity: 0.23,
      scopedSensitivity: 1.15,
      adsSensitivity: null,
      edpi: 207,
      pollingRate: 2000,
      resolution: "1280x1024",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/d4v41/",
      },
    },

    crosshair: {
      code: "0;P;c;8;o;1;d;1;b;1;z;1;0t;1;0l;1;0o;0;0a;1;0f;0;1b;0",
      color: "White",
      outlines: true,
      centerDot: true,

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/d4v41/",
      },
    },

    gear: {
      mouse: "VAXEE ZYGEN NP-01S V2 Wireless Fluorescent Green",
      mousepad: "Pulsar d4v41 Mousepad",
      keyboard: "Arbiter Studio Polar 65",
      monitor: "ZOWIE XL2566K+",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/d4v41/",
      },
    },

    stats: {
      rating: 1.1,
      acs: 205.9,
      kd: 1.09,
      kast: 76,
      adr: 134.4,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-invy",
    slug: "invy",

    nickname: "invy",
    realName: "Adrian Jiggs Aisa Reyes",

    countryCode: "PH",
    countryName: "Philippines",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("paper-rex"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Skye"],

    career: invyCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.175,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 280,
      pollingRate: 4000,
      resolution: "1280x960",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/invy/",
      },
    },

    crosshair: {
      code: "0;P;c;5;h;0;0l;3;0o;2;0a;1;0f;0;1b;0",
      color: "Cyan",
      outlines: false,
      centerDot: false,

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/invy/",
      },
    },

    gear: {
      mouse: "Logitech G Pro X2 Superlight",
      mousepad: "Pulsar eS Saturn Pro",
      keyboard: "Pulsar PCMK 2 HE TKL",
      monitor: "ZOWIE XL2566K+",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/invy/",
      },
    },

    stats: {
      rating: 1.13,
      acs: 213.7,
      kd: 1.12,
      kast: 77,
      adr: 139.1,
      hs: 30,
    },

    updatedAt: null,
  },
];