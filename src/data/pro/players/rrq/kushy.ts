import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const kushyCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "Alter Ego",
      joinedAt: "2021-10",
      leftAt: "2024-10",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "The Esports Club Challenger Series 6",
      result: "우승",
    },
    {
      year: 2022,
      title: "VCT 2022: Indonesia Stage 2 Challengers",
      result: "준우승",
    },
    {
      year: 2023,
      title: "Red Bull Campus Clutch 2023",
      result: "우승",
    },
    {
      year: 2024,
      title: "VALORANT Challengers 2024 Indonesia: Split 1",
      result: "우승",
    },
    {
      year: 2024,
      title: "VALORANT Challengers 2024 Indonesia: Split 2",
      result: "준우승",
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

const kushyAwards: ProPlayerAward[] = [
  {
    year: 2023,
    title: "Red Bull Campus Clutch 2023",
    result: "결승 MVP",
  },
];

export const kushy: ProPlayer = {
  id: "player-kushy",
  slug: "kushy",

  nickname: "Kushy",
  realName: "Bryan Carlos Setiawan",

  countryCode: "ID",
  countryName: "Indonesia",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/rrq/kushy.png",

  team: getRequiredTeam("rrq"),

  primaryRole: "Flex",
  roles: createRoles("Flex", [
    "Duelist",
    "Initiator",
    "Sentinel",
  ]),

  mainAgents: ["Phoenix", "Fade", "Sage"],

  riotAccounts: [
    {
      name: "Vigil",
      tag: "Pray",

      verification: {
        verifiedAt: "2026-08-21",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/Vigil%23Pray",
      },
    },
  ],

  career: kushyCareer,
  awards: kushyAwards,

  settings: {
    dpi: 1600,
    sensitivity: 0.14,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 224,
    pollingRate: 2000,
    resolution: "1680x1050",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-kushy/",
    },
  },

  crosshair: {
    code: "0;s;1;P;u;0000FFFF;h;0;0l;2;0v;2;0o;1;0a;1;0f;0;1b;0;S;o;1",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "E-Sports_GG",
      sourceUrl: "https://e-sportsgg.com/News/LkF_bE1B",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro Black",
    mousepad: "ARTISAN NINJA FX Type-99 Matcha",
    keyboard: "Wooting 60HE v2 Silver",
    monitor: null,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-kushy/",
    },
  },

  stats: {
    rating: 0.66,
    acs: 167,
    kd: 0.67,
    kast: 64,
    adr: 113.0,
    hs: 31,
  },

  updatedAt: "2026-08-25",
};