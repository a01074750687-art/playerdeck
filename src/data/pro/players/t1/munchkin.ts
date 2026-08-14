import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const munchkinCareer: ProPlayerCareer = {
  joinedAt: "2025-11",

  previousTeams: [
    {
      teamName: "Cloud9 Korea",
      joinedAt: "2020-08",
      leftAt: "2020-12",
    },
    {
      teamName: "Crazy Raccoon",
      joinedAt: "2021-01",
      leftAt: "2022-04",
    },
    {
      teamName: "T1",
      joinedAt: "2022-05",
      leftAt: "2023-09",
    },
    {
      teamName: "Gen.G Esports",
      joinedAt: "2023-11",
      leftAt: "2025-10",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "VCT Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2024,
      title: "Masters Madrid",
      result: "준우승",
    },
    {
      year: 2024,
      title: "Masters Shanghai",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Pacific Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "Esports World Cup",
      result: "3위",
    },
  ],
};

const munchkinAwards: ProPlayerAward[] = [
  {
    year: 2024,
    title: "VCT Pacific Stage 2",
    result: "결승 MVP",
  },
  {
    year: 2024,
    title: "VCT Pacific Awards",
    result: "올해의 인게임 리더",
  },
];

export const munchkin: ProPlayer = {
  id: "player-munchkin",
  slug: "munchkin",

  nickname: "Munchkin",
  realName: "Byeon Sang-beom",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("t1"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator", ["Sentinel"]),

  mainAgents: ["KAY/O", "Skye", "Viper"],

  riotAccounts: [
    {
      name: "Munchkin",
      tag: "98327",
      verification:{
        verifiedAt: "2026-08-14",
        sourceName: "나무위키",
        sourceUrl: 
             "https://namu.moe/w/%EB%B3%80%EC%83%81%EB%B2%94",
      },
    },
  ],

  career: munchkinCareer,
  awards: munchkinAwards,

  settings: {
    dpi: 800,
    sensitivity: 0.35,
    scopedSensitivity: 1,
    adsSensitivity: null,
    edpi: 280,
    pollingRate: 1000,
    resolution: "1440x1080",

    verification: {
      verifiedAt: "2026-08-14",
      sourceName: "ProSettings.net / BestGamers",
      sourceUrl: "https://prosettings.net/players/munchkin/",
    },
  },

  crosshair: {
    code: "0;P;c;5;h;0;0l;4;0o;2;0a;1;0f;0;1b;0",
    color: "Cyan",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-14",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/munchkin/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "X-raypad Aqua Control+ Wave Black",
    keyboard: "Wooting 60HE",
    monitor: "ZOWIE XL2546K",

    verification: {
      verifiedAt: "2026-08-14",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-munchkin/",
    },
  },

  stats: {
    rating: 1.09,
    acs: 202.4,
    kd: 1.08,
    kast: 76,
    adr: 132.8,
    hs: 31,
  },

  updatedAt: null,
};