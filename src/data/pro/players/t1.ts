import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

const buzzCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "Cloud9 Korea",
      joinedAt: "2020-10",
      leftAt: "2020-12",
    },
    {
      teamName: "Rio Company",
      joinedAt: "2021-03",
      leftAt: "2021-05",
    },
    {
      teamName: "Vision Strikers",
      joinedAt: "2021-05",
      leftAt: "2022-01",
    },
    {
      teamName: "DRX",
      joinedAt: "2022-01",
      leftAt: "2024-10",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "VCT Korea Stage 3 Challengers",
      result: "우승",
    },
    {
      year: 2022,
      title: "Masters Reykjavík",
      result: "5~6위",
    },
    {
      year: 2022,
      title: "Champions Istanbul",
      result: "3위",
    },
    {
      year: 2023,
      title: "VCT Pacific",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Masters Bangkok",
      result: "우승",
    },
  ],
};

const meteorCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "TNL Esports",
      joinedAt: "2021-05",
      leftAt: "2022-01",
    },
    {
      teamName: "NORTHEPTION",
      joinedAt: "2022-02",
      leftAt: "2022-10",
    },
    {
      teamName: "Gen.G Esports",
      joinedAt: "2022-10",
      leftAt: "2024-10",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VCT Japan Stage 2 Challengers",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2024,
      title: "Masters Madrid",
      result: "준우승",
    },
    {
      year: 2024,
      title: "Masters Shanghai",
      result: "우승",
    },
    {
      year: 2025,
      title: "Masters Bangkok",
      result: "우승",
    },
  ],
};

const meteorAwards: ProPlayerAward[] = [
  {
    year: 2025,
    title: "Masters Bangkok",
    result: "결승 MVP",
  },
];

const dhCareer: ProPlayerCareer = {
  joinedAt: "2026-07",

  previousTeams: [
    {
      teamName: "REIGNITE",
      joinedAt: "2024",
      leftAt: "2024-04",
    },
    {
      teamName: "CREST GAMING Zst",
      joinedAt: "2024-04",
      leftAt: "2024-09",
    },
    {
      teamName: "T1 Academy",
      joinedAt: "2024-09",
      leftAt: "2025-05",
    },
    {
      teamName: "T1",
      joinedAt: "2025-05",
      leftAt: "2025-11",
    },
    {
      teamName: "T1 Academy",
      joinedAt: "2025-11",
      leftAt: "2026-07",
    },
  ],

  highlights: [
    {
      year: 2025,
      title: "Challengers Korea Stage 1",
      result: "3위",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "4위",
    },
    {
      year: 2025,
      title: "Champions Paris",
      result: "9~12위",
    },
  ],
};

const izuCareer: ProPlayerCareer = {
  joinedAt: "2023-09",

  previousTeams: [
    {
      teamName: "Jadeite",
      joinedAt: "2022-09",
      leftAt: "2023-06",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Challengers Japan Split 1",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Kickoff",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Masters Bangkok",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "4위",
    },
    {
      year: 2025,
      title: "Champions Paris",
      result: "9~12위",
    },
  ],
};

const munchkinCareer: ProPlayerCareer = {
  joinedAt: "2025-11",

  previousTeams: [
    {
      teamName: "Cloud9 Korea",
      joinedAt: "2020-08",
      leftAt: "2020-12",
    },
    {
      teamName: "Crazy Raccoon",
      joinedAt: "2021-01",
      leftAt: "2022-04",
    },
    {
      teamName: "T1",
      joinedAt: "2022-05",
      leftAt: "2023-09",
    },
    {
      teamName: "Gen.G Esports",
      joinedAt: "2023-11",
      leftAt: "2025-10",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "VCT Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2024,
      title: "Masters Madrid",
      result: "준우승",
    },
    {
      year: 2024,
      title: "Masters Shanghai",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Pacific Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "Esports World Cup",
      result: "3위",
    },
  ],
};

const munchkinAwards: ProPlayerAward[] = [
  {
    year: 2024,
    title: "VCT Pacific Stage 2",
    result: "결승 MVP",
  },
  {
    year: 2024,
    title: "VCT Pacific Awards",
    result: "올해의 인게임 리더",
  },
];

const staxCareer: ProPlayerCareer = {
  joinedAt: "2024-06",

  previousTeams: [
    {
      teamName: "Vision Strikers",
      joinedAt: "2020-06",
      leftAt: "2022-01",
    },
    {
      teamName: "DRX",
      joinedAt: "2022-01",
      leftAt: "2024-06",
    },
  ],

  highlights: [
    {
      year: 2020,
      title: "First Strike Korea",
      result: "우승",
    },
    {
      year: 2021,
      title: "VCT Korea Stage 1 Masters",
      result: "우승",
    },
    {
      year: 2022,
      title: "Champions Istanbul",
      result: "3위",
    },
    {
      year: 2023,
      title: "VCT Pacific",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Masters Bangkok",
      result: "우승",
    },
  ],
};

const staxAwards: ProPlayerAward[] = [
  {
    year: 2023,
    title: "VCT 2023 End of Season Awards",
    result: "올해의 MVP",
  },
];

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

    mainAgents: ["Jett", "Neon", "Killjoy"],

    career: buzzCareer,

    settings: {
      dpi: 400,
      sensitivity: 0.57,
      scopedSensitivity: 1,
      adsSensitivity: 0.8,
      edpi: 220,
      pollingRate: 1000,
      resolution: "1280x960",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/buzz/",
      },
    },

    crosshair: {
      code: "0;p;0;s;1;P;h;0;f;0;0l;2;0o;2;0a;1;0f;0;1b;0;A;o;1;d;1;0b;0;1b;0",
      color: "White",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Pulsar BUZZ-X",
      mousepad: "X-raypad Aqua Control+ Wave Black",
      keyboard: "Custom Keyboard",
      headset: "SONY INZONE H9 II",
      earphones: "null",
      monitor: "ZOWIE XL2546K",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/buzz/",
      },
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

    mainAgents: ["Killjoy", "Chamber", "Jett"],

    career: meteorCareer,
    awards: meteorAwards,

    settings: {
      dpi: 800,
      sensitivity: 0.3,
      scopedSensitivity: 1.25,
      adsSensitivity: 1,
      edpi: 240,
      pollingRate: 4000,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/meteor/",
      },
    },

    crosshair: {
      code: "0;s;1;P;o;1;d;1;f;0;0t;4;0l;1;0o;0;0a;1;0f;0;1b;0;S;c;0;o;1",
      color: "White",
      outlines: true,
      centerDot: true,

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/meteor/",
      },
    },

    gear: {
      mouse: "Logitech G Pro X2 Superlight ",
      mousepad: "Artisan Hayate Otsu V2 Soft Whine Red",
      keyboard: "Wooting 60HE v2 Silver",
      headset: "Razer BlackShark V2 Pro White",
      earphones: "null",
      monitor: "ZOWIE XL2566K",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/meteor/",
      },
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

    career: dhCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.1,
      scopedSensitivity: 1,
      adsSensitivity: null,
      edpi: 160,
      pollingRate: 1000,
      resolution: null,

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/dh/",
      },
    },

    crosshair: {
      code: "0;s;1;P;o;1;d;1;f;0;0t;4;0l;1;0o;0;0a;1;0f;0;1b;0;S;c;0;o;1",
      color: "White",
      outlines: true,
      centerDot: true,

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/dh/",
      },
    },

    gear: {
      mouse: "Pulsar X2 V3 Mini T1 Edition",
      mousepad: null,
      keyboard: null,
      headset: null,
      earphones: null,
      monitor: null,

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/dh/",
      },
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

    mainAgents: ["Sova", "Chamber", "Yoru"],

    career: izuCareer,

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
      code: "0;s;1;P;u;000000FF;o;1;s;0;0t;3;0l;1;0v;0;0g;1;0o;0;0a;1;0f;0;1t;1;1l;4;1g;1;1o;0;1a;1;1m;0;1f;0",
      color: "Black",
      outlines: true,
      centerDot: false,

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/izu/",
      },
    },

    gear: {
      mouse: "Razer Viper V3 Pro Black",
      mousepad: "SteelSeries QcK Heavy",
      keyboard: "Wooting 60HE",
      headset: "HyperX Cloud III",
      earphones: null,
      monitor: "ZOWIE XL2566K",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/izu/",
      },
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

    career: munchkinCareer,
    awards: munchkinAwards,

    settings: {
      dpi: 800,
      sensitivity: 0.35,
      scopedSensitivity: 1,
      adsSensitivity: null,
      edpi: 200,
      pollingRate: 1000,
      resolution: "1440x1080",
    },

    crosshair: {
      code: "0;P;c;5;h;0;0l;4;0o;2;0a;1;0f;0;1b;0",
      color: "Cyan",
      outlines: false,
      centerDot: false,

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/munchkin/",
      },
    },

    gear: {
      mouse: "Razer Viper V4 Pro White",
      mousepad: "X-raypad Aqua Control+ Wave Black",
      keyboard: "Wooting 60HE Ghost",
      headset: "Senheiser GAME ONE",
      earphones: null,
      monitor: "ZOWIE XL2546K",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/munchkin/",
      },
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

    career: staxCareer,
    awards: staxAwards,

    settings: {
      dpi: 400,
      sensitivity: 0.6,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 240,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: "0;P;c;5;h;0;0l;4;0o;2;0a;1;0f;0;1b;0",
      color: "Cyan",
      outlines: false,
      centerDot: false,

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/stax/",
      },
    },

    gear: {
      mouse: "Razer Viper V3 Pro Black",
      mousepad: "SteelSeries QcK Heavy",
      keyboard: "Wooting 60HE",
      headset: null,
      earphones: null,
      monitor: "ZOWIE XL2566K",

      verification: {
        verifiedAt: "2026-08-02",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/stax/",
      },
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