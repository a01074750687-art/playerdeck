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
      joinedAt: "2020-10",
      leftAt: "2021-09",
    },
    {
      teamName: "BOOM Esports",
      joinedAt: "2021-10",
      leftAt: "2022-09",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VCT 2022: Indonesia Stage 1 Challengers",
      result: "우승",
    },
    {
      year: 2022,
      title: "VCT APAC Last Chance Qualifier",
      result: "우승",
    },
    {
      year: 2022,
      title: "VALORANT Champions Istanbul 2022",
      result: "13~16위",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Stage 2",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Toronto 2025",
      result: "7~8위",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Champions 2025",
      result: "9~12위",
    },
    {
      year: 2025,
      title: "Spotlight Series Pacific 2025 x GES Asia",
      result: "우승",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Kickoff",
      result: "4위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Stage 1",
      result: "5~6위",
    },
  ],
};

export const xffero: ProPlayer = {
  id: "player-xffero",
  slug: "xffero",

  nickname: "xffero",
  realName: "David Sean Michael Monangin",

  countryCode: "ID",
  countryName: "Indonesia",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/rrq/xffero.png",

  team: getRequiredTeam("rrq"),

  primaryRole: "Sentinel",
  roles: createRoles("Sentinel", ["Controller"]),

  mainAgents: ["Cypher", "Sage", "Viper"],

  riotAccounts: [
    {
      name: "Tehbotol",
      tag: "bibib",
      puuid: "96150c52-ed20-5e1a-addd-9ef02d46efb1",

      verification: {
        verifiedAt: "2026-08-18",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/Tehbotol%23bibib/overview",
      },
    },
  ],

  career: xfferoCareer,

  settings: {
    dpi: 400,
    sensitivity: 0.6,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 240,
    pollingRate: null,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-xffero/",
    },
  },

  crosshair: {
    code: "0;P;c;0;o;1;d;1;z;2;0b;0;1b;0",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-xffero/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight 2 Magenta",
    mousepad: "ARTISAN NINJA FX Type-99 Matcha",
    keyboard: "Wooting 80HE",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-xffero/",
    },
  },

  stats: {
    rating: 0.99,
    acs: 186,
    kd: 1.01,
    kast: 70,
    adr: 127.1,
    hs: 26,
  },

  updatedAt: "2026-08-25",
};