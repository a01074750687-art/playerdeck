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

    mainAgents: ["Jett", "Raze", "Killjoy"],

    career: buzzCareer,

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

    career: meteorCareer,
    awards: meteorAwards,

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

    career: dhCareer,

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

    career: izuCareer,

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

    career: munchkinCareer,
    awards: munchkinAwards,

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

    career: staxCareer,
    awards: staxAwards,

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