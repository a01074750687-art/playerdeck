import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const kr1stalCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "BLUE BEES.ESP",
      joinedAt: "2022-02",
      leftAt: "2022-08",
    },
    {
      teamName: "SCARZ",
      joinedAt: "2022-08",
      leftAt: "2023-10",
    },
    {
      teamName: "Night Wings Gaming",
      leftAt: "2023-12",
    },
    {
      teamName: "Xi Lai Gaming",
      joinedAt: "2024-03",
      leftAt: "2024-09",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Challengers Japan Split 2",
      result: "우승",
    },
    {
      year: 2023,
      title: "VCT Ascension Pacific",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT China National Competition Season 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Ascension China",
      result: "우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "3위",
    },
  ],
};

export const kr1stal: ProPlayer = {
  id: "player-kr1stal",
  slug: "kr1stal",

  nickname: "Kr1stal",
  realName: "Savva Fedorov",

  countryCode: "RU",
  countryName: "Russia",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("global-esports"),

  primaryRole: "Flex",
  roles: createRoles("Flex", ["Initiator", "Sentinel", "Controller"]),

  mainAgents: ["Sova", "Killjoy", "Fade"],

  career: kr1stalCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.21,
    scopedSensitivity: 1,
    adsSensitivity: 0.9,
    edpi: 336,
    pollingRate: null,
    resolution: null,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-kr1stal/",
    },
  },

  crosshair: {
    code: null,
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-kr1stal/",
    },
  },

  gear: {
    mouse: "ZOWIE EC2-DW Black",
    mousepad: "ARTISAN NINJA FX Zero Daidai XSoft",
    keyboard: "SteelSeries Apex Pro TKL",
    monitor: null,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-kr1stal/",
    },
  },

  stats: {
    rating: 1.00,
    acs: 168.3,
    kd: 0.96,
    kast: 68.9,
    adr: 118.6,
    hs: null,
  },

  updatedAt: "2026-08-09",
};