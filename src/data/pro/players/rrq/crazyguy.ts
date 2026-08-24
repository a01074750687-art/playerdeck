import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const crazyguyCareer: ProPlayerCareer = {
  joinedAt: "2025-03",

  previousTeams: [
    {
      teamName: "Steal Your Glory",
      joinedAt: "2020-10",
      leftAt: "2021-07",
    },
    {
      teamName: "Team Big BAAM",
      joinedAt: "2021-07",
      leftAt: "2021-10",
    },
    {
      teamName: "Nigma Galaxy",
      joinedAt: "2021-11",
      leftAt: "2022-07",
    },
    {
      teamName: "BLEED Esports",
      joinedAt: "2022-10",
      leftAt: "2024-10",
    },
    {
      teamName: "Disguised",
      joinedAt: "2024-11",
      leftAt: "2025-01",
    },
    {
      teamName: "KIMMY KITTENS",
      joinedAt: "2025-01",
      leftAt: "2025-03",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "VALORANT Challengers 2023 Malaysia & Singapore: Split 1",
      result: "우승",
    },
    {
      year: 2023,
      title: "VALORANT Challengers 2023 Malaysia & Singapore: Split 2",
      result: "우승",
    },
    {
      year: 2023,
      title: "VCT Ascension Pacific 2023",
      result: "우승",
    },
    {
      year: 2024,
      title: "VALORANT Challengers 2024 Southeast Asia: Split 3",
      result: "우승",
    },
    {
      year: 2024,
      title: "OneGame Showdown 2024",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Southeast Asia: Split 1",
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

const crazyguyAwards: ProPlayerAward[] = [
  {
    year: 2023,
    title: "VALORANT Challengers 2023 Malaysia & Singapore: Split 2",
    result: "MVP",
  },
  {
    year: 2024,
    title: "OneGame Showdown 2024",
    result: "MVP",
  },
  {
    year: 2025,
    title: "VCT Pacific 2025 Season Awards",
    result: "올해의 인게임 리더",
  },
];

export const crazyguy: ProPlayer = {
  id: "player-crazyguy",
  slug: "crazyguy",

  nickname: "crazyguy",
  realName: "Ngô Công Anh",

  countryCode: "VN",
  countryName: "Vietnam",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("rrq"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator", ["Sentinel"]),

  mainAgents: ["Sova", "Fade", "Sage"],

  riotAccounts: [
    {
      name: "crazyguy",
      tag: "nunca",

      verification: {
        verifiedAt: "2026-08-18",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/crazyguy%23nunca/overview",
      },
    },
  ],

  career: crazyguyCareer,
  awards: crazyguyAwards,

  settings: {
    dpi: 1600,
    sensitivity: 0.13,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 208,
    pollingRate: 1000,
    resolution: "1280x960",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/crazyguy/",
    },
  },

  crosshair: {
    code: "0;P;h;0;0l;4;0v;4;0g;1;0o;0;0a;1;0f;0;1b;0",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/crazyguy/",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro Green",
    mousepad: "Pulsar eS Saturn Pro Black",
    keyboard: "Wooting 60HE v2 Silver",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "ProSettings.net / BestGamers",
      sourceUrl: "https://prosettings.net/players/crazyguy/",
    },
  },

  stats: {
    rating: 1.02,
    acs: 211,
    kd: 0.94,
    kast: 71,
    adr: 138.4,
    hs: 23,
  },

  updatedAt: "2026-08-25",
};