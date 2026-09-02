import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const t3xtureCareer: ProPlayerCareer = {
  joinedAt: "2023-09",

  previousTeams: [
    {
      teamName: "DWG KIA",
      joinedAt: "2021-01",
      leftAt: "2022-10",
    },
    {
      teamName: "Global Esports",
      joinedAt: "2022-10",
      leftAt: "2023-09",
    },
  ],

  highlights: [
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
      title: "Esports World Cup 2025",
      result: "3위",
    },
  ],
};

const t3xtureAwards: ProPlayerAward[] = [
  {
    year: 2022,
    title: "VCT 2022: Korea Stage 2 Challengers",
    result: "그룹 스테이지 MVP",
  },
  {
    year: 2024,
    title: "VCT 2024: Pacific Stage 2",
    result: "올해의 타격대",
  },
  {
    year: 2024,
    title: "VCT 2024: Pacific Stage 2",
    result: "VCT Pacific 2024 MVP",
  },
];

export const t3xture: ProPlayer = {
  id: "player-texture",
  slug: "texture",

  nickname: "t3xture",
  realName: "Kim Na-ra",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/gen/t3xture.png",

  team: getRequiredTeam("gen-g"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist", ["Sentinel"]),

  mainAgents: ["Chamber", "Raze", "Phoenix"],

  riotAccounts: [
    {
      name: "WelcometotheShow",
      tag: "1111",
      puuid: "a43bf7f7-c60a-54b6-99fc-60517d1e13e8",

      verification: {
        verifiedAt: "2026-08-16",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/WelcometotheShow%231111/overview",
      },
    },
  ],

  career: t3xtureCareer,
  awards: t3xtureAwards,

  settings: {
    dpi: 800,
    sensitivity: 0.45,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 360,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/t3xture/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;0;f;0;0l;3;0o;2;0a;1;0f;0;1b;0;S;o;0",
    color: "White",
    outlines: true,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/t3xture/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight 2 Cyan",
    mousepad: "SteelSeries QcK Heavy Black",
    keyboard: "SteelSeries Apex Pro TKL Gen 3 White",
    monitor: "ZOWIE XL2546K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/t3xture/",
    },
  },

  stats: {
    rating: 1.08,
    acs: 223,
    kd: 1.16,
    kast: 71,
    adr: 144.0,
    hs: 23,
  },

  updatedAt: "2026-08-24",
};