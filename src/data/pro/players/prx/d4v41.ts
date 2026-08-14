import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

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

export const d4v41: ProPlayer = {
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

  mainAgents: ["Killjoy", "Vyse", "Chamber"],

  riotAccounts: [
    {
      name: "PRX d4v41",
      tag: "556",
      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "OP.GG",
        sourceUrl:
          "https://op.gg/ko/valorant/profile/PRX%20d4v41-556",
      },
    },
  ],

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
};