import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const ivyCareer: ProPlayerCareer = {
  joinedAt: "2024-11",

  previousTeams: [
    {
      teamName: "Our Growth Story",
      leftAt: "2023-09",
    },
    {
      teamName: "Shadow Corporation",
      joinedAt: "2023-09",
      leftAt: "2023-12",
    },
    {
      teamName: "Sin Prisa Gaming",
      joinedAt: "2023-12",
      leftAt: "2024-11",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "우승",
    },
    {
      year: 2026,
      title: "Esports World Cup 2026",
      result: "3위",
    },
  ],
};

export const ivy: ProPlayer = {
  id: "player-ivy",
  slug: "ivy",

  nickname: "Ivy",
  realName: "Park Sung-hyeon",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/ns/ivy.png",

  team: getRequiredTeam("nongshim-redforce"),

  primaryRole: "Sentinel",
  roles: createRoles("Sentinel", ["Controller"]),

  mainAgents: ["Cypher", "Viper", "Killjoy"],

  riotAccounts: [
    {
      name: "NS Ivy",
      tag: "0520",
      puuid: "996cc6b6-4e8e-5bfe-a6b3-38c74ff3d47a",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/leaderboards/ranked/pc/default?act=9d85c932-4820-c060-09c3-668636d4df1b&page=23&platform=pc&region=global",
      },
    },
  ],

  career: ivyCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.1,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 160,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/ivy/",
    },
  },

  crosshair: {
    code: "0;c;1;s;1;P;c;1;o;1;d;1;f;0;0b;0;1b;0;S;c;1;s;0.619;o;1",
    color: "Green",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/ivy/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "Artisan FX Hien XSoft Wine Red",
    keyboard: "Wooting 60HE v2 Black",
    monitor: "ZOWIE XL2546K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/ivy/",
    },
  },

  stats: {
    rating: 1.00,
    acs: 197,
    kd: 1.04,
    kast: 70,
    adr: 128.1,
    hs: 30,
  },

  updatedAt: "2026-08-24",
};