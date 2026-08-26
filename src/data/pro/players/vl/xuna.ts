import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const xunaCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
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
    {
      year: 2025,
      title: "SOOP VALORANT League",
      result: "3~4위",
    },
  ],
};

export const xuna: ProPlayer = {
  id: "player-xuna",
  slug: "xuna",

  nickname: "XuNa",
  realName: "Kim Tae-geon",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/vl/xuna.png",

  team: getRequiredTeam("varrel"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator"),

  mainAgents: ["Fade", "Sova", "Tejo"],

  riotAccounts: [
    {
      name: "VARREL XuNa",
      tag: "2007",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/leaderboards/ranked/pc/default?a=&page=16&region=ap",
      },
    },
  ],

  career: xunaCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.1,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 160,
    pollingRate: 2000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-xuna/",
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
        "https://gamingqa.com/%E3%80%90vct-ascension%E5%84%AA%E5%8B%9D%E3%80%91slt-xuna-%E3%82%B9%E3%83%8A%E9%81%B8%E6%89%8B%E3%81%AE%E7%B5%8C%E6%AD%B4%E3%83%BB%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9%E3%83%BB%E6%84%9F%E5%BA%A6/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight 2 Cyan",
    mousepad: "STEADY WINNERS MAGEN",
    keyboard: "Geon Venom 60 HE",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-xuna/",
    },
  },

  stats: {
    rating: 1.18,
    acs: 216,
    kd: 1.16,
    kast: 78,
    adr: 151.1,
    hs: 35,
  },

  updatedAt: "2026-08-24",
};