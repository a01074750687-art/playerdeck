import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const yatsukaCareer: ProPlayerCareer = {
  joinedAt: "2026-01",

  previousTeams: [
    {
      teamName: "ZETA DIVISION Academy",
      joinedAt: "2022-03",
      leftAt: "2023-12",
    },
    {
      teamName: "RIDDLE ORDER",
      joinedAt: "2023-12",
      leftAt: "2026-01",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Challengers League Japan Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Ascension Pacific",
      result: "4위",
    },
    {
      year: 2025,
      title: "Challengers Japan Stage 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers Japan Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers League Japan Season Finals",
      result: "우승",
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

export const yatsuka: ProPlayer = {
  id: "player-yatsuka",
  slug: "yatsuka",

  nickname: "yatsuka",
  realName: "Kazuya Ikeda",

  countryCode: "JP",
  countryName: "Japan",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/dfm/yatsuka.png",

  team: getRequiredTeam("dfm"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist", ["Initiator", "Sentinel"]),
  mainAgents: ["Neon", "Raze", "Phoenix"],

  riotAccounts: [
    {
      name: "DFM yatsuka",
      tag: "397",
      puuid: "cd3478ea-b5ed-567b-abe5-a26518d34c91",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/DFM%20yatsuka%23397/overview",
      },
    },
  ],

  career: yatsukaCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.08,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 128,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-yatsuka/",
    },
  },

  crosshair: {
    code: "0;p;0;s;1;P;c;1;o;1;d;1;0b;0;1b;0;A;o;1;d;1;z;1;0b;0;1b;0;S;c;1;s;0.298;o;1",
    color: "Green",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "GameLens",
      sourceUrl:
        "https://mediator-net.jp/players/valorant/yatsuka/",
    },
  },

  gear: {
    mouse: "Finalmouse UltralightX Prophecy Scream",
    mousepad: "WALLHACK SP-004 Hatsune Miku",
    keyboard: "HYPESHOP Keyboard",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-yatsuka/",
    },
  },

  stats: {
    rating: 0.93,
    acs: 198,
    kd: 0.89,
    kast: 70,
    adr: 131.8,
    hs: 28,
  },

  updatedAt: "2026-08-24",
};