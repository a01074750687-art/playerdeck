import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const makoCareer: ProPlayerCareer = {
  joinedAt: "2022-01",

  previousTeams: [
    {
      teamName: "TUBEPLE Gaming",
      joinedAt: "2021-01",
      leftAt: "2021-05",
    },
    {
      teamName: "Vision Strikers",
      joinedAt: "2021-05",
      leftAt: "2022-01",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "VCT 2021: Korea Stage 3 Challengers Playoffs",
      result: "우승",
    },
    {
      year: 2022,
      title: "VCT 2022: Korea Stage 1 Challengers",
      result: "우승",
    },
    {
      year: 2022,
      title: "VCT 2022: Korea Stage 2 Challengers",
      result: "우승",
    },
    {
      year: 2022,
      title: "VALORANT Champions Istanbul 2022",
      result: "3위",
    },
    {
      year: 2023,
      title: "VCT 2023: LOCK//IN São Paulo",
      result: "3~4위",
    },
    {
      year: 2023,
      title: "VCT 2023: Pacific League",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Stage 2",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT Champions 2024",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Bangkok 2025",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 1",
      result: "4위",
    },
    {
      year: 2025,
      title: "HERO ESPORTS Asian Champions League 2025",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 2",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "VALORANT Champions 2025",
      result: "3위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Stage 1",
      result: "5~6위",
    },
  ],
};

const makoAwards: ProPlayerAward[] = [
  {
    year: 2022,
    title: "VCT 2022: Korea Stage 2 Challengers",
    result: "결승 MVP",
  },
  {
    year: 2023,
    title: "VCT 2023: Pacific League",
    result: "리그 플레이 MVP",
  },
  {
    year: 2023,
    title: "VCT 2023: Pacific League",
    result: "올해의 연막",
  },
  {
    year: 2025,
    title: "VCT Pacific 2025 Season Awards",
    result: "올해의 연막",
  },
];

export const mako: ProPlayer = {
  id: "player-mako",
  slug: "mako",

  nickname: "MaKo",
  realName: "Kim Myeong-kwan",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/krx/mako.png",


  team: getRequiredTeam("krx"),

  primaryRole: "Controller",
  roles: createRoles("Controller"),

  mainAgents: ["Omen", "Viper"],

  riotAccounts: [
    {
      name: "DRX Mako",
      tag: "V S",
      puuid: "84ee1311-4c39-5d40-8440-717461bbf29f",

      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/DRX%20Mako%23V%20S/overview",
      },
    },
  ],

  career: makoCareer,
  awards: makoAwards,

  settings: {
    dpi: 400,
    sensitivity: 0.45,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 180,
    pollingRate: null,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-mako/",
    },
  },

  crosshair: {
    code: "0;P;o;1;d;1;f;0;0b;0;1b;0",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/mako/",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro White",
    mousepad: "ARTISAN NINJA FX Zero XSoft Black",
    keyboard: "Razer Huntsman V3 Pro TKL 8KHz Black",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-mako/",
    },
  },

  stats: {
    rating: 0.93,
    acs: 181,
    kd: 0.88,
    kast: 72,
    adr: 116.2,
    hs: 29,
  },

  updatedAt: "2026-08-24",
};