import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const dhCareer: ProPlayerCareer = {
  joinedAt: "2026-07",

  previousTeams: [
    {
      teamName: "Nongshim RedForce",
      joinedAt: "2022-12",
      leftAt: "2023-01",
    },
    {
      teamName: "REIGNITE",
      joinedAt: "2023-12",
      leftAt: "2024-02",
    },
    {
      teamName: "CREST GAMING Zst",
      joinedAt: "2024-04",
      leftAt: "2024-08",
    },
    {
      teamName: "T1 Academy",
      joinedAt: "2024-09",
      leftAt: "2025-05",
    },
    {
      teamName: "T1",
      joinedAt: "2025-05",
      leftAt: "2025-11",
    },
    {
      teamName: "T1 Academy",
      joinedAt: "2025-11",
      leftAt: "2026-07",
    },
  ],

  highlights: [
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Korea: Stage 1",
      result: "3위",
    },
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Korea: Stage 2",
      result: "3위",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 2",
      result: "4위",
    },
    {
      year: 2025,
      title: "VALORANT Champions 2025",
      result: "9~12위",
    },
    {
      year: 2026,
      title: "VALORANT Challengers 2026 Korea: Split 1",
      result: "3위",
    },
  ],
};

const dhAwards: ProPlayerAward[] = [
  {
    year: 2026,
    title: "VALORANT Challengers 2026 Korea: Split 1",
    result: "스플릿 MVP",
  },
];

export const dh: ProPlayer = {
  id: "player-dh",
  slug: "dh",

  nickname: "DH",
  realName: "Kang Dong-ho",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/t1/dh.png",

  team: getRequiredTeam("t1"),

  primaryRole: "Controller",
  roles: createRoles("Controller", ["Sentinel"]),

  mainAgents: ["Omen", "Cypher", "Viper"],

  riotAccounts: [
    {
      name: "T1 Joshua",
      tag: "2006",

      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/T1%20Joshua%232006/overview",
      },
    },
  ],

  career: dhCareer,
  awards: dhAwards,

  settings: {
    dpi: 1600,
    sensitivity: 0.1,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 160,
    pollingRate: null,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-dh/",
    },
  },

  crosshair: {
    code: "0;P;c;0;h;0;d;0;f;0;0b;1;0a;1;0l;2;0t;2;0o;1;0m;0;0f;0;1b;0",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-dh/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "ARTISAN NINJA FX Zero",
    keyboard: "SteelSeries Apex Pro TKL Gen 3 White",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-dh/",
    },
  },

  stats: {
    rating: 0.88,
    acs: 173,
    kd: 0.84,
    kast: 72,
    adr: 115.2,
    hs: 27,
  },

  updatedAt: "2026-08-24",
};