import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const dhCareer: ProPlayerCareer = {
  joinedAt: "2026-07",

  previousTeams: [
    {
      teamName: "REIGNITE",
      joinedAt: "2024",
      leftAt: "2024-04",
    },
    {
      teamName: "CREST GAMING Zst",
      joinedAt: "2024-04",
      leftAt: "2024-09",
    },
    {
      teamName: "T1 Academy",
      joinedAt: "2024-09",
      leftAt: "2025-05",
    },
    {
      teamName: "T1",
      joinedAt: "2025-05",
      leftAt: "2025-11",
    },
    {
      teamName: "T1 Academy",
      joinedAt: "2025-11",
      leftAt: "2026-07",
    },
  ],

  highlights: [
    {
      year: 2025,
      title: "Challengers Korea Stage 1",
      result: "3위",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "4위",
    },
    {
      year: 2025,
      title: "Champions Paris",
      result: "9~12위",
    },
  ],
};

export const dh: ProPlayer = {
  id: "player-dh",
  slug: "dh",

  nickname: "DH",
  realName: "Kang Dong-ho",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("t1"),

  primaryRole: "Controller",
  roles: createRoles("Controller", ["Initiator"]),

  mainAgents: ["Omen", "Viper", "Astra"],

  career: dhCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.1,
    scopedSensitivity: 1,
    adsSensitivity: null,
    edpi: 160,
    pollingRate: 1000,
    resolution: null,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/dh/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;1;d;1;f;0;0t;4;0l;1;0o;0;0a;1;0f;0;1b;0;S;c;0;o;1",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/dh/",
    },
  },

  gear: {
    mouse: "Pulsar X2 V3 Mini T1 Edition",
    mousepad: null,
    keyboard: null,
    monitor: null,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/dh/",
    },
  },

  stats: {
    rating: 1.11,
    acs: 223.6,
    kd: 1.1,
    kast: 73,
    adr: 146.7,
    hs: 34,
  },

  updatedAt: null,
};