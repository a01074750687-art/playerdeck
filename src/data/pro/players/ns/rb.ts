import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const rbCareer: ProPlayerCareer = {
  joinedAt: "2025-06",

  previousTeams: [
    {
      teamName: "Vision Strikers",
      joinedAt: "2020-06",
      leftAt: "2022-01",
    },
    {
      teamName: "DRX",
      joinedAt: "2022-01",
      leftAt: "2024-01",
    },
    {
      teamName: "Titan Esports Club",
      joinedAt: "2024-01",
      leftAt: "2025-06",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "VALORANT Masters Berlin 2021",
      result: "5~8위",
    },
    {
      year: 2022,
      title: "VALORANT Champions 2022",
      result: "3위",
    },
    {
      year: 2023,
      title: "VCT Pacific League",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "우승",
    },
    {
      year: 2026,
      title: "Esports World Cup 2026",
      result: "3위",
    },
  ],
};

export const rb: ProPlayer = {
  id: "player-rb",
  slug: "rb",

  nickname: "Rb",
  realName: "Goo Sang-min",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("nongshim-redforce"),

  primaryRole: "Controller",
  roles: createRoles("Controller", ["Duelist"]),

  mainAgents: ["Omen", "Harbor", "Yoru"],

  career: rbCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.175,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 280,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-rb/",
    },
  },

  crosshair: {
    code: null,
    color: "Cyan",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-rb/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "ARTISAN NINJA FX Zero Soft Black",
    keyboard: "Wooting 80HE White",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-rb/",
    },
  },

  stats: {
    rating: 0.98,
    acs: 192,
    kd: 1.00,
    kast: 74,
    adr: 117.8,
    hs: 26,
  },

  updatedAt: "2026-08-24",
};