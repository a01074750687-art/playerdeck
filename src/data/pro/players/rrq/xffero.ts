import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const xfferoCareer: ProPlayerCareer = {
  joinedAt: "2022-10",

  previousTeams: [
    {
      teamName: "Alter Ego",
      joinedAt: "2020-07",
      leftAt: "2021-12",
    },
    {
      teamName: "BOOM Esports",
      joinedAt: "2022-01",
      leftAt: "2022-10",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VCT APAC Last Chance Qualifier",
      result: "우승",
    },
    {
      year: 2022,
      title: "VALORANT Champions Istanbul",
      result: "9~12위",
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

export const xffero: ProPlayer = {
  id: "player-xffero",
  slug: "xffero",

  nickname: "xffero",
  realName: "David Monangin",

  countryCode: "ID",
  countryName: "Indonesia",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("rrq"),

  primaryRole: "Sentinel",
  roles: createRoles("Sentinel", ["Controller"]),

  mainAgents: ["Cypher", "Viper", "Killjoy"],

  career: xfferoCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.125,
    scopedSensitivity: null,
    adsSensitivity: null,
    edpi: 200,
    pollingRate: null,
    resolution: "1280x960",

    verification: {
      verifiedAt: "2026-08-05",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/valorant/players/xffero",
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
    mouse: "Logitech G Pro X Superlight 2 White",
    mousepad: "Artisan Type-99 Matcha",
    keyboard: "Wooting 80HE",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-14",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-xffero/",
    },
  },

  stats: {
    rating: 1.07,
    acs: 208.4,
    kd: 1.16,
    kast: 77,
    adr: 145.2,
    hs: 29,
  },

  updatedAt: null,
};