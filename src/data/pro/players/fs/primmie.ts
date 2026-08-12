import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const primmieCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "TALON",
      joinedAt: "2024-07",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "VCT Pacific Stage 2",
      result: "4위",
    },
    {
      year: 2024,
      title: "VALORANT Champions 2024",
      result: "13~16위",
    },
    {
      year: 2025,
      title: "VCT Pacific Kickoff",
      result: "4위",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "3위",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "준우승",
    },
  ],
};

export const primmie: ProPlayer = {
  id: "player-primmie",
  slug: "primmie",

  nickname: "Primmie",
  realName: "Papaphat Sriprapha",

  countryCode: "TH",
  countryName: "Thailand",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,
  team: getRequiredTeam("full-sense"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),
  mainAgents: ["Jett", "Raze", "Neon"],

  career: primmieCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.3,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 240,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-03",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/primmie/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;1;d;1;f;0;0b;0;1b;0;S;o;1",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-03",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/primmie/",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro Faker Edition",
    mousepad: null,
    keyboard: "Wooting 60HE v2 Black",
    monitor: null,

    verification: {
      verifiedAt: "2026-08-03",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/primmie/",
    },
  },

  stats: {
    rating: null,
    acs: null,
    kd: null,
    kast: null,
    adr: null,
    hs: null,
  },

  updatedAt: "2026-08-09",
};