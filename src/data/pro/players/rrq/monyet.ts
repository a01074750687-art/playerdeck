import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const monyetCareer: ProPlayerCareer = {
  joinedAt: "2024-05",

  previousTeams: [
    {
      teamName: "ONIC Esports",
      joinedAt: "2020-11",
      leftAt: "2022-10",
    },
    {
      teamName: "Global Esports",
      joinedAt: "2022-10",
      leftAt: "2023-09",
    },
    {
      teamName: "Paper Rex",
      joinedAt: "2023-09",
      leftAt: "2024-05",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VCT 2022: Indonesia Stage 2 Challengers",
      result: "우승",
    },
    {
      year: 2022,
      title: "VCT APAC Last Chance Qualifier",
      result: "3위",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Kickoff",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT Masters Madrid 2024",
      result: "3위",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Toronto 2025",
      result: "7~8위",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Champions 2025",
      result: "9~12위",
    },
    {
      year: 2025,
      title: "Spotlight Series Pacific 2025 x GES Asia",
      result: "우승",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Kickoff",
      result: "4위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Stage 1",
      result: "5~6위",
    },
  ],
};

const monyetAwards: ProPlayerAward[] = [
  {
    year: 2022,
    title: "SEA Esports Championship 2021",
    result: "MVP",
  },
  {
    year: 2022,
    title: "VCT 2022: Indonesia Stage 2 Challengers",
    result: "MVP",
  },
  {
    year: 2025,
    title: "Spotlight Series Pacific 2025 x GES Asia",
    result: "MVP",
  },
];

export const monyet: ProPlayer = {
  id: "player-monyet",
  slug: "monyet",

  nickname: "Monyet",
  realName: "I Made Adhi Cahya Nugraha",

  countryCode: "ID",
  countryName: "Indonesia",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("rrq"),

  primaryRole: "Controller",
  roles: createRoles("Controller"),

  mainAgents: ["Omen", "Astra", "Harbor"],

  riotAccounts: [
    {
      name: "monyet",
      tag: "0506",

      verification: {
        verifiedAt: "2026-08-16",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/monyet%230506/overview",
      },
    },
  ],

  career: monyetCareer,
  awards: monyetAwards,

  settings: {
    dpi: 400,
    sensitivity: 0.639,
    scopedSensitivity: 0.98,
    adsSensitivity: 0.98,
    edpi: 255.6,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-monyet/",
    },
  },

  crosshair: {
    code: "0;P;c;0;h;0;d;0;f;0;0b;1;0a;1;0l;3;0t;2;0o;2;0m;0;0f;0;1b;0",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-monyet/",
    },
  },

  gear: {
    mouse: "VAXEE NP-01S V3",
    mousepad: "VAXEE PD151",
    keyboard: "Wooting 80HE",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-monyet/",
    },
  },

  stats: {
    rating: 1.14,
    acs: 217,
    kd: 1.1,
    kast: 75,
    adr: 138.2,
    hs: 33,
  },

  updatedAt: "2026-08-25",
};