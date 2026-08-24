import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const c1nderCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "SCARZ",
      joinedAt: "2021-04",
      leftAt: "2022-05",
    },
    {
      teamName: "Good 8 Squad",
      joinedAt: "2022-05",
      leftAt: "2023-03",
    },
    {
      teamName: "REIGNITE",
      joinedAt: "2023-09",
      leftAt: "2024-02",
    },
    {
      teamName: "T1 Rookies",
      joinedAt: "2024-07",
      leftAt: "2024-10",
    },
    {
      teamName: "SLT Seongnam",
      joinedAt: "2024-10",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
      result: "3위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Road to Ascension",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
  ],
};

export const c1nder: ProPlayer = {
  id: "player-c1nder",
  slug: "c1nder",

  nickname: "C1ndeR",
  realName: "Ko Jae-hyuk",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("varrel"),

  primaryRole: "Controller",
  roles: createRoles("Controller"),

  mainAgents: ["Omen", "Brimstone", "Astra"],

  riotAccounts: [
    {
      name: "VARREL C1ndeR",
      tag: "2009",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/VARREL%20C1ndeR%232009/performance?platform=pc&playlist=competitive&season=3ea2b318-423b-cf86-25da-7cbb0eefbe2d",
      },
    },
  ],

  career: c1nderCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.25,
    scopedSensitivity: 1.05,
    adsSensitivity: 1,
    edpi: 200,
    pollingRate: 1000,
    resolution: null,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-c1nder/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;1;d;1;0b;0;1b;0;S;s;0.64",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "Gearly",
      sourceUrl:
        "https://gamingqa.com/%E3%80%90vct-ascension%E5%84%AA%E5%8B%9D%E3%80%91slt-c1nder-%E3%82%B7%E3%83%B3%E3%83%80%E3%83%BC%E9%81%B8%E6%89%8B%E3%81%AE%E7%B5%8C%E6%AD%B4%E3%83%BB%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9%E3%83%BB/",
    },
  },

  gear: {
    mouse: "Logitech G PRO X2 SUPERSTRIKE",
    mousepad: "ARTISAN NINJA FX Zero Daidai",
    keyboard: "Custom Keyboard",
    monitor: null,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-c1nder/",
    },
  },

  stats: {
    rating: 0.83,
    acs: 150.7,
    kd: 0.75,
    kast: 67,
    adr: 102.2,
    hs: 27,
  },

  updatedAt: "2026-08-24",
};