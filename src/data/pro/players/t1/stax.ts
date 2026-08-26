import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const staxCareer: ProPlayerCareer = {
  joinedAt: "2024-06",

  previousTeams: [
    {
      teamName: "Vision Strikers",
      joinedAt: "2020-06",
      leftAt: "2022-01",
    },
    {
      teamName: "DRX",
      joinedAt: "2022-01",
      leftAt: "2024-06",
    },
  ],

  highlights: [
    {
      year: 2020,
      title: "First Strike Korea",
      result: "우승",
    },
    {
      year: 2021,
      title: "VCT 2021: Korea Stage 1 Masters",
      result: "우승",
    },
    {
      year: 2021,
      title: "VCT 2021: Korea Stage 3 Challengers Playoffs",
      result: "우승",
    },
    {
      year: 2022,
      title: "VALORANT Masters Reykjavík 2022",
      result: "5~6위",
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
      title: "Red Bull Home Ground #5",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Kickoff",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Bangkok 2025",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 2",
      result: "4위",
    },
    {
      year: 2025,
      title: "VALORANT Champions 2025",
      result: "9~12위",
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

const staxAwards: ProPlayerAward[] = [
  {
    year: 2023,
    title: "VCT 2023: Pacific League",
    result: "올해의 인게임 리더",
  },
  {
    year: 2024,
    title: "Red Bull Home Ground #5: APAC Play-In",
    result: "MVP",
  },
];

export const stax: ProPlayer = {
  id: "player-stax",
  slug: "stax",

  nickname: "stax",
  realName: "Kim Gu-taek",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/t1/stax.png",

  team: getRequiredTeam("t1"),

  primaryRole: "Controller",
  roles: createRoles("Controller"),

  mainAgents: ["Omen", "Harbor"],

  riotAccounts: [
    {
      name: "Señor Vac",
      tag: "prime",

      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "Tracker Network / 나무위키",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/Se%C3%B1or%20Vac%23prime/overview",
      },
    },
  ],

  career: staxCareer,
  awards: staxAwards,

  settings: {
    dpi: 800,
    sensitivity: 0.22,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 176,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-stax/",
    },
  },

  crosshair: {
    code: "0;P;c;0;o;1;d;0;f;0;0b;1;0t;2;0l;4;0o;3;0a;1;0m;0;0f;0;1b;0",
    color: "White",
    outlines: true,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-stax/",
    },
  },

  gear: {
    mouse: "Pulsar Pro Series STA-X",
    mousepad: "ARTISAN NINJA FX Hayate Otsu V2 Wine Red",
    keyboard: "Geon Venom TKL HE",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-stax/",
    },
  },

  stats: {
    rating: 1.03,
    acs: 191,
    kd: 1.05,
    kast: 78,
    adr: 125.1,
    hs: 28,
  },

  updatedAt: "2026-08-24",
};