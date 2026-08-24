import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

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

export const monyet: ProPlayer = {
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

  riotAccounts: [
    {
      name: "monyet",
      tag: "0506",

      verification: {
        verifiedAt: "2026-08-16",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/monyet%230506/overview",
      },
    },
  ],

 
  career: monyetCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.4,
    scopedSensitivity: 1,
    adsSensitivity: null,
    edpi: 320,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-14",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/valorant/players/monyet/",
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
    mouse: "VAXEE NP-01S Pink",
    mousepad: "Pulsar eS Saturn Pro Black",
    keyboard: "Wooting 80HE Frost",
    monitor: "ZOWIE XL2546K",

    verification: {
      verifiedAt: "2026-08-14",
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
};