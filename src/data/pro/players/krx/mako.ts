import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const makoCareer: ProPlayerCareer = {
  joinedAt: "2022-01",

  previousTeams: [
    {
      teamName: "TUBEPLE Gaming",
      leftAt: "2021-04",
    },
    {
      teamName: "Vision Strikers",
      joinedAt: "2021-05",
      leftAt: "2022-01",
    },
  ],

  highlights: [
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
      title: "VCT Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2025,
      title: "Champions Paris",
      result: "3위",
    },
  ],
};

const makoAwards: ProPlayerAward[] = [
  {
    year: 2023,
    title: "VCT Pacific Awards",
    result: "올해의 연막",
  },
  {
    year: 2025,
    title: "VCT Pacific Awards",
    result: "올해의 연막",
  },
];

export const mako: ProPlayer = {
  id: "player-mako",
  slug: "mako",

  nickname: "MaKo",
  realName: "Kim Myeong-kwan",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("krx"),

  primaryRole: "Controller",
  roles: createRoles("Controller"),

  mainAgents: ["Omen", "Viper", "Astra"],

  riotAccounts: [
    {
      name: "DRX Mako",
      tag: "V S",
      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "나무위키",
        sourceUrl: 
          "https://namu.moe/w/%EA%B9%80%EB%AA%85%EA%B4%80(%ED%94%84%EB%A1%9C%EA%B2%8C%EC%9D%B4%EB%A8%B8)",
      },
    },
  ],

  career: makoCareer,
  awards: makoAwards,

  settings: {
    dpi: 400,
    sensitivity: 0.48,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 192,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/mako/",
    },
  },

  crosshair: {
    code: "0;P;c;1;o;1;f;0;0l;4;0a;1;0f;0;1b;0",
    color: "Green",
    outlines: true,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/mako/",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro White",
    mousepad: "SteelSeries QcK Heavy",
    keyboard: "Razer BlackWidow V3 Pro",
    monitor: "ZOWIE XL2546",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/mako/",
    },
  },

  stats: {
    rating: 1.19,
    acs: 211.8,
    kd: 1.27,
    kast: 79,
    adr: 137.9,
    hs: 34,
  },

  updatedAt: null,
};