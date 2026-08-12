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
      teamName: "TALON",
      joinedAt: "2022-07",
      leftAt: "2022-09",
    },
    {
      teamName: "Stream Raiders Nacague",
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
      title: "Challengers Philippines Split 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 1",
      result: "3위",
    },
    {
      year: 2025,
      title: "VALORANT Masters Toronto",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Champions Paris",
      result: "4위",
    },
  ],
};

const patmenAwards: ProPlayerAward[] = [
  {
    year: 2025,
    title: "VCT Pacific Awards",
    result: "올해의 신인",
  },
  {
    year: 2025,
    title: "VCT Pacific Awards",
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

  mainAgents: ["Omen", "Fade", "Gekko"],

  career: patmenCareer,
  awards: patmenAwards,

  settings: {
    dpi: 1600,
    sensitivity: 0.125,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 200,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/patmen/",
    },
  },

  crosshair: {
    code: "0;s;1;P;h;0;f;0;0l;3;0o;0;0a;1;0f;0;1b;0;S;c;1;s;0.7;o;1",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/patmen/",
    },
  },

  gear: {
    mouse: "VAXEE XE V2 Black",
    mousepad: "Pulsar eS Saturn Pro Black",
    keyboard: "Wooting 60HE v2 Silver",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/patmen/",
    },
  },

  stats: {
    rating: 1.00,
    acs: 202.8,
    kd: 1.01,
    kast: 69.1,
    adr: 129.6,
    hs: null,
  },

  updatedAt: "2026-08-09",
};