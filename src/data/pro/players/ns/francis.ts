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
      teamName: "Gwangju Shadow",
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

  profileImageUrl: null,

  team: getRequiredTeam("nongshim-redforce"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator", ["Flex"]),

  mainAgents: ["Sova", "Fade", "Skye"],

  career: francisCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.27,
    scopedSensitivity: 0.85,
    adsSensitivity: 0.9,
    edpi: 216,
    pollingRate: 2000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-05",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/francis/",
    },
  },

  crosshair: {
    code: "0;P;c;1;o;1;d;1;0b;0;1b;0",
    color: "Green",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-05",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/francis/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "Artisan Ninja FX Zero Soft Black",
    keyboard: "IQUNIX EV63 HE",
    monitor: "ZOWIE XL2546K",

    verification: {
      verifiedAt: "2026-08-05",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/francis/",
    },
  },

  stats: {
    rating: 1.02,
    acs: 188.8,
    kd: 0.99,
    kast: 72.6,
    adr: 129.3,
    hs: null,
  },

  updatedAt: "2026-08-09",
};