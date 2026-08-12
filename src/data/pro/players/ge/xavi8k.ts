import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const xavi8kCareer: ProPlayerCareer = {
  joinedAt: "2025-11",

  previousTeams: [
    {
      teamName: "Bren Esports",
      joinedAt: "2021-10",
      leftAt: "2022-08",
    },
    {
      teamName: "Oasis Gaming",
      joinedAt: "2023-01",
      leftAt: "2024-08",
    },
    {
      teamName: "NAOS Esports",
      joinedAt: "2024-10",
      leftAt: "2025-10",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Predator League Philippines 2024",
      result: "우승",
    },
    {
      year: 2023,
      title: "Challengers Philippines Split 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers Southeast Asia Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "5~6위",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "3위",
    },
  ],
};

export const xavi8k: ProPlayer = {
  id: "player-xavi8k",
  slug: "xavi8k",

  nickname: "xavi8k",
  realName: "Xavier Juan",

  countryCode: "PH",
  countryName: "Philippines",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("global-esports"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator", ["Controller", "Sentinel"]),

  mainAgents: ["Omen", "Astra", "Sova"],

  career: xavi8kCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.102,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 163.2,
    pollingRate: null,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-xavi8k/",
    },
  },

  crosshair: {
    code: null,
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-xavi8k/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "ARTISAN NINJA FX Hien Red",
    keyboard: "Wooting 60HE+",
    monitor: null,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-xavi8k/",
    },
  },

  stats: {
    rating: 0.93,
    acs: 189.7,
    kd: 0.88,
    kast: 70.1,
    adr: 129.5,
    hs: null,
  },

  updatedAt: "2026-08-09",
};