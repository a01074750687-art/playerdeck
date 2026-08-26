import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const francisCareer: ProPlayerCareer = {
  joinedAt: "2024-11",

  previousTeams: [
    {
      teamName: "Our Growth Story",
      leftAt: "2023-09",
    },
    {
      teamName: "Shadow Corporation",
      joinedAt: "2023-09",
      leftAt: "2023-12",
    },
    {
      teamName: "Sin Prisa Gaming",
      joinedAt: "2023-12",
      leftAt: "2024-11",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Ascension Pacific",
      result: "우승",
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

export const francis: ProPlayer = {
  id: "player-francis",
  slug: "francis",

  nickname: "Francis",
  realName: "Kim Mu-bin",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/ns/francis.png",

  team: getRequiredTeam("nongshim-redforce"),

  primaryRole: "Flex",
  roles: createRoles("Flex", [
    "Initiator",
    "Controller",
    "Duelist",
  ]),

  mainAgents: ["Sova", "Omen", "Yoru"],

  career: francisCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.4,
    scopedSensitivity: 0.85,
    adsSensitivity: 0.9,
    edpi: 320,
    pollingRate: 2000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-francis/",
    },
  },

  crosshair: {
    code: null,
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-francis/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "ARTISAN NINJA FX Zero Soft XXL",
    keyboard: "IQUNIX EV63 Ghost in the Shell Edition",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-francis/",
    },
  },

  stats: {
    rating: 1.07,
    acs: 217,
    kd: 1.06,
    kast: 74,
    adr: 142.9,
    hs: 23,
  },

  updatedAt: "2026-08-24",
};