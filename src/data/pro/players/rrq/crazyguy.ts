import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

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

export const crazyguy: ProPlayer = {
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

  mainAgents: ["Fade", "Sova", "KAY/O"],

  riotAccounts: [
    {
      name: "crazyguy",
      tag: "nunca",

      verification: {
        verifiedAt: "2026-08-18",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/crazyguy%23nunca/overview",
      },
    },
  ],

  career: crazyguyCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.13,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 208,
    pollingRate: 1000,
    resolution: "1280x960",

    verification: {
       verifiedAt: "2026-08-14",
       sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/valorant/players/crazyguy/",
    },
  },

  crosshair: {
    code: "0;P;h;0;0l;4;0v;4;0g;1;0o;0;0a;1;0f;0;1b;0",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-14",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/crazyguy/",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro Green",
    mousepad: "Pulsar eS Saturn Pro Black",
    keyboard: "Wooting 60HE v2 Silver",
    monitor: "ZOWIE XL2566X+",

    verification: {
       verifiedAt: "2026-08-14",
       sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/crazyguy/",
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
};