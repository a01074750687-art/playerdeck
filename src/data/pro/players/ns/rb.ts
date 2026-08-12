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
      title: "VALORANT Masters Santiago 2026",
      result: "우승",
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
  roles: createRoles("Controller", ["Flex"]),

  mainAgents: ["Omen", "Harbor", "Astra"],

  career: rbCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.175,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 280,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-07-13",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/rb/",
    },
  },

  crosshair: {
    code: "0;s;1;P;d;1;0b;0;1b;0;S;o;1",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-07-13",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/rb/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "Artisan Ninja FX Zero Soft Black",
    keyboard: "Custom Keyboard",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-07-13",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/rb/",
    },
  },

  stats: {
    rating: 0.97,
    acs: 177.1,
    kd: 0.94,
    kast: 73.8,
    adr: 115.2,
    hs: null,
  },

  updatedAt: "2026-08-09",
};