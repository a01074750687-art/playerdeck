import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const xrossCareer: ProPlayerCareer = {
  joinedAt: "2024-02",

  previousTeams: [],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 1",
      result: "3위",
    },
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 2",
      result: "준우승",
    },
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
      result: "우승",
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

export const xross: ProPlayer = {
  id: "player-xross",
  slug: "xross",

  nickname: "Xross",
  realName: "Jeonghwan",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("nongshim-redforce"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist", ["Flex"]),

  mainAgents: ["Phoenix", "Raze", "Fade"],

  career: xrossCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.27,
    scopedSensitivity: 1,
    adsSensitivity: 0.8,
    edpi: 216,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-07-13",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/xross/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;1;d;1;z;1;f;0;0b;0;1b;0;S;c;0;s;1.007;o;1",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-07-13",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/xross/",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro White",
    mousepad: "Artisan Ninja FX Zero XSoft Black",
    keyboard: "Wooting 60HE v2 Silver",
    monitor: "ZOWIE XL2546K",

    verification: {
      verifiedAt: "2026-07-13",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/xross/",
    },
  },

  stats: {
    rating: 1.11,
    acs: 212.9,
    kd: 1.08,
    kast: 76.0,
    adr: 142.1,
    hs: null,
  },

  updatedAt: "2026-08-09",
};