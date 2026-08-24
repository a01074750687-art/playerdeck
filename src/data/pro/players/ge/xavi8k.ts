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

  riotAccounts: [
    {
      name: "GE xavi8k",
      tag: "xoxo",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/GE%20xavi8k%23xoxo/overview",
      },
    },
  ],

  career: xavi8kCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.101,
    scopedSensitivity: 0.9,
    adsSensitivity: 1,
    edpi: 161.6,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "ProSettings",
      sourceUrl: "https://prosettings.net/players/xavi8k/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;1;d;1;z;1;0t;1;0l;1;0o;0;0a;1;0f;0;1b;0;S;c;5;s;1.3;o;1",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "ProSettings",
      sourceUrl: "https://prosettings.net/players/xavi8k/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro Black",
    mousepad: "Artisan FX Hien Soft Black",
    keyboard: "Wooting 60HE v2 Black",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "ProSettings",
      sourceUrl: "https://prosettings.net/players/xavi8k/",
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