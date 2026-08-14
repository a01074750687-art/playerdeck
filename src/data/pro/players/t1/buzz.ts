import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const buzzCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "Cloud9 Korea",
      joinedAt: "2020-10",
      leftAt: "2020-12",
    },
    {
      teamName: "Rio Company",
      joinedAt: "2021-03",
      leftAt: "2021-05",
    },
    {
      teamName: "Vision Strikers",
      joinedAt: "2021-05",
      leftAt: "2022-01",
    },
    {
      teamName: "DRX",
      joinedAt: "2022-01",
      leftAt: "2024-10",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "VCT Korea Stage 3 Challengers",
      result: "우승",
    },
    {
      year: 2022,
      title: "Masters Reykjavík",
      result: "5~6위",
    },
    {
      year: 2022,
      title: "Champions Istanbul",
      result: "3위",
    },
    {
      year: 2023,
      title: "VCT Pacific",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Masters Bangkok",
      result: "우승",
    },
  ],
};

export const buzz: ProPlayer = {
  id: "player-buzz",
  slug: "buzz",

  nickname: "BuZz",
  realName: "Yu Byeong-cheol",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("t1"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist", ["Sentinel"]),

  mainAgents: ["Jett", "Neon", "Killjoy"],

  riotAccounts: [
    {
      name: "T1 Buzz",
      tag: "5555",
      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "Tracker Network",
        sourceUrl:
            "https://tracker.gg/valorant/crosshairs/gallery?page=9",
      },
    },
  ],

  career: buzzCareer,

  settings: {
    dpi: 400,
    sensitivity: 0.57,
    scopedSensitivity: 1,
    adsSensitivity: 0.8,
    edpi: 228,
    pollingRate: 1000,
    resolution: "1280x960",

    verification: {
      verifiedAt: "2026-08-14",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-buzz/",
    },
  },

  crosshair: {
    code: "0;p;0;s;1;P;h;0;f;0;0l;2;0o;2;0a;1;0f;0;1b;0;A;o;1;d;1;0b;0;1b;0",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-14",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/buzz/",
    },
  },

  gear: {
    mouse: "Pulsar Pro Series BUZZ-X",
    mousepad: "X-raypad Aqua Control Plus AC+ Storm",
    keyboard: "Custom Keyboard",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-14",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-buzz/",
    },
  },

  stats: {
    rating: 1.17,
    acs: 238.4,
    kd: 1.19,
    kast: 74,
    adr: 153.6,
    hs: 29,
  },

  updatedAt: null,
};