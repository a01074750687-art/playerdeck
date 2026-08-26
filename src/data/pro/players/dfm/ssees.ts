import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const sseesCareer: ProPlayerCareer = {
  joinedAt: "2023-11",

  previousTeams: [
    {
      teamName: "DNG White",
      joinedAt: "2021-10",
      leftAt: "2022-10",
    },
    {
      teamName: "VARREL",
      joinedAt: "2022-12",
      leftAt: "2023-06",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "VALORANT Radiant Asia Invitational",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "7~8위",
    },
    {
      year: 2026,
      title: "VCT Pacific Kickoff",
      result: "5위",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "7~8위",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 2",
      result: "7~8위",
    },
  ],
};

export const ssees: ProPlayer = {
  id: "player-ssees",
  slug: "ssees",

  nickname: "SSeeS",
  realName: "Tomonori Okimura",

  countryCode: "JP",
  countryName: "Japan",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/dfm/ssees.png",
    
  team: getRequiredTeam("dfm"),

  primaryRole: "Controller",
  roles: createRoles("Controller", ["Sentinel"]),
  mainAgents: ["Omen", "Viper", "Vyse"],

  riotAccounts: [
    {
      name: "DFM SSeeS",
      tag: "0215",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "OP.GG",
        sourceUrl:
          "https://op.gg/valorant/profile/DFM%20SSeeS-0215",
      },
    },
    {
      name: "DFM SSeeS",
      tag: "0215",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/DFM%20SSeeS%230215"
      },
    },
  ],

  career: sseesCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.211,
    scopedSensitivity: 0.95,
    adsSensitivity: 1,
    edpi: 168.8,
    pollingRate: null,
    resolution: "1280x960",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-ssees/",
    },
  },

  crosshair: {
    code: "0;P;o;1;0t;1;0l;2;0o;2;0a;1;0f;0;1t;0;1l;0;1o;0;1a;0",
    color: "White",
    outlines: true,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "Better Buy",
      sourceUrl: "https://better-buy.jp/valorant-crosshair-code/",
    },
  },

  gear: {
    mouse: "WLMOUSE Beast X Max White",
    mousepad: "ARTISAN NINJA FX Hayate Otsu V2 Red",
    keyboard: "HYPESHOP Keyboard",
    monitor: null,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-ssees/",
    },
  },

  stats: {
    rating: 0.94,
    acs: 165,
    kd: 0.88,
    kast: 73,
    adr: 106.6,
    hs: 25,
  },

  updatedAt: "2026-08-24",
};