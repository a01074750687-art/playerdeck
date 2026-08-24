import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const patmenCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "SunSparks",
      joinedAt: "2021-11",
      leftAt: "2022-07",
    },
    {
      teamName: "TALON",
      joinedAt: "2022-07",
      leftAt: "2022-09",
    },
    {
      teamName: "Stream Raiders Nacague",
      joinedAt: "2022-08",
      leftAt: "2023-03",
    },
    {
      teamName: "ZOL Esports",
      joinedAt: "2023-03",
      leftAt: "2024-12",
    },
    {
      teamName: "NAOS Esports",
      joinedAt: "2025-01",
      leftAt: "2025-03",
    },
    {
      teamName: "Paper Rex",
      joinedAt: "2025-03",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "VALORANT Challengers 2024 Philippines: Split 1",
      result: "우승",
    },
    {
      year: 2024,
      title: "VALORANT Challengers 2024 Philippines: Split 2",
      result: "준우승",
    },
    {
      year: 2024,
      title: "Predator League Philippines 2025",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 1",
      result: "3위",
    },
    {
      year: 2025,
      title: "VALORANT Masters Toronto 2025",
      result: "우승",
    },
    {
      year: 2025,
      title: "Esports World Cup 2025",
      result: "4위",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Champions 2025",
      result: "4위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Stage 1",
      result: "3위",
    },
    {
      year: 2026,
      title: "VALORANT Masters London 2026",
      result: "9~10위",
    },
  ],
};

const patmenAwards: ProPlayerAward[] = [
  {
    year: 2025,
    title: "VCT Pacific 2025 Season Awards",
    result: "올해의 신인",
  },
  {
    year: 2025,
    title: "VCT Pacific 2025 Season Awards",
    result: "올해의 척후대",
  },
];

export const patmen: ProPlayer = {
  id: "player-patmen",
  slug: "patmen",

  nickname: "PatMen",
  realName: "Patrick Mendoza",

  countryCode: "PH",
  countryName: "Philippines",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("global-esports"),

  primaryRole: "Controller",
  roles: createRoles("Controller", ["Initiator"]),

  mainAgents: ["Omen", "Viper", "Skye"],

  career: patmenCareer,
  awards: patmenAwards,

  settings: {
    dpi: 1600,
    sensitivity: 0.12,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 192,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-patmen/",
    },
  },

  crosshair: {
    code: "0;s;1;P;h;0;f;0;0l;3;0o;0;0a;1;0f;0;1b;0;S;c;1;s;0.7;o;1",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/patmen/",
    },
  },

  gear: {
    mouse: "VAXEE NP-01S V3 Light Blue",
    mousepad: "Pulsar eS Saturn Pro XSoft Black",
    keyboard: "Wooting 60HE v2 Silver",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-patmen/",
    },
  },

  stats: {
    rating: 1.05,
    acs: 231,
    kd: 1.09,
    kast: 71,
    adr: 147.3,
    hs: 31,
  },

  updatedAt: "2026-08-25",
};