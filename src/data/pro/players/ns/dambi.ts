import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const dambiCareer: ProPlayerCareer = {
  joinedAt: "2024-11",

  previousTeams: [
    {
      teamName: "Gwangju Shadow",
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
  ],
};

const dambiAwards: ProPlayerAward[] = [
  {
    year: 2026,
    title: "VALORANT Masters Santiago 2026",
    result: "MVP",
  },
];

export const dambi: ProPlayer = {
  id: "player-dambi",
  slug: "dambi",

  nickname: "Dambi",
  realName: "Lee Hyuk-kyu",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("nongshim-redforce"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),

  mainAgents: ["Neon", "Jett", "Waylay"],

  career: dambiCareer,
  awards: dambiAwards,

  settings: {
    dpi: 1600,
    sensitivity: 0.175,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 280,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-05",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/dambi/",
    },
  },

  crosshair: {
    code: "0;p;0;s;1;P;h;0;f;0;0l;3;0o;2;0a;1;0f;0;1b;0;A;o;1;d;1;0b;0;1b;0;S;c;0;s;0.933;o;1",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-05",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/dambi/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight 2 Cyan",
    mousepad: "Artisan Ninja FX Zero Soft Orange",
    keyboard: "Custom Keyboard",
    monitor: null,

    verification: {
      verifiedAt: "2026-08-05",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/dambi/",
    },
  },

  stats: {
    rating: 1.03,
    acs: 225.8,
    kd: 1.06,
    kast: 70.4,
    adr: 148.2,
    hs: null,
  },

  updatedAt: "2026-08-09",
};