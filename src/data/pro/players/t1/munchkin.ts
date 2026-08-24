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
      year: 2023,
      title: "VCT 2023: Pacific League",
      result: "3위",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2024,
      title: "VALORANT Masters Madrid 2024",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Stage 1",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT Masters Shanghai 2024",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 1",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Esports World Cup 2025",
      result: "3위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Kickoff",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "9~10위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Stage 1",
      result: "4위",
    },
  ],
};

const munchkinAwards: ProPlayerAward[] = [
  {
    year: 2024,
    title: "VCT 2024: Pacific Stage 2",
    result: "결승 MVP",
  },
  {
    year: 2024,
    title: "VCT Pacific 2024 Season Awards",
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

  mainAgents: ["Sova", "Cypher", "KAY/O"],

  riotAccounts: [
    {
      name: "Munchkin",
      tag: "98327",

      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/Munchkin%2398327/overview",
      },
    },
  ],

  career: munchkinCareer,
  awards: munchkinAwards,

  settings: {
    dpi: 800,
    sensitivity: 0.35,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 280,
    pollingRate: null,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-munchkin/",
    },
  },

  crosshair: {
    code: "0;P;c;0;o;1;d;0;f;0;0b;1;0a;1;0l;3;0t;2;0o;0;0m;0;0f;0;1b;0",
    color: "White",
    outlines: true,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-munchkin/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "X-raypad Aqua Control Plus Wave Night",
    keyboard: "Wooting 80HE",
    monitor: "ZOWIE XL2546K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-munchkin/",
    },
  },

  stats: {
    rating: 0.98,
    acs: 183,
    kd: 1.0,
    kast: 70,
    adr: 121.5,
    hs: 21,
  },

  updatedAt: "2026-08-24",
};