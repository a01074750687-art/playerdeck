import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const xrossCareer: ProPlayerCareer = {
  joinedAt: "2024-02",

  previousTeams: [
    {
      teamName: "골판지 전사",
      leftAt: "2024-02",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 1",
      result: "3위",
    },
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 2",
      result: "준우승",
    },
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
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

export const xross: ProPlayer = {
  id: "player-xross",
  slug: "xross",

  nickname: "Xross",
  realName: "Jeonghwan",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/ns/xross.png",

  team: getRequiredTeam("nongshim-redforce"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator", ["Duelist"]),

  mainAgents: ["Sova", "Phoenix", "Fade"],

  riotAccounts: [
    {
      name: "NS Xross",
      tag: "2012y",
      puuid: "ffa83fe7-411e-56ab-835a-84ccc5d7dd2d",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/leaderboards/ranked/pc/default?act=4f0864e2-40af-28a4-de2c-0e9e64e75f23&page=20&platform=pc&region=ap",
      },
    },
  ],

  career: xrossCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.27,
    scopedSensitivity: 1,
    adsSensitivity: 0.8,
    edpi: 216,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/xross/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;1;d;1;z;1;f;0;0b;0;1b;0;S;c;0;s;1.007;o;1",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/xross/",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro White",
    mousepad: "ARTISAN NINJA FX Zero",
    keyboard: "Wooting 60HE v2 Silver",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-xross/",
    },
  },

  stats: {
    rating: 1.16,
    acs: 210,
    kd: 1.17,
    kast: 74,
    adr: 142.8,
    hs: 27,
  },

  updatedAt: "2026-08-24",
};