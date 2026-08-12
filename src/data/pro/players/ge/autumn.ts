import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const autumnCareer: ProPlayerCareer = {
  joinedAt: "2025-11",

  previousTeams: [
    {
      teamName: "ORDER",
      joinedAt: "2020-10",
      leftAt: "2022-09",
    },
    {
      teamName: "Gods Reign",
      leftAt: "2023-09",
    },
    {
      teamName: "FunPlus Phoenix",
      joinedAt: "2023-09",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "Oceania Tour Championship",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT China Kickoff",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VCT China Stage 1",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VCT China Stage 2",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "3위",
    },
  ],
};

export const autumn: ProPlayer = {
  id: "player-autumn",
  slug: "autumn",

  nickname: "autumn",
  realName: "Kale Dunne",

  countryCode: "AU",
  countryName: "Australia",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("global-esports"),

  primaryRole: "Flex",
  roles: createRoles("Flex", ["Duelist", "Sentinel", "Controller"]),

  mainAgents: ["Phoenix", "Veto", "Yoru"],

  career: autumnCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.113,
    scopedSensitivity: null,
    adsSensitivity: null,
    edpi: 180.8,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/autumn/",
    },
  },

  crosshair: {
    code: "0;s;1;P;c;5;o;1;f;0;0b;0;1b;0;S;c;1;o;1",
    color: "Cyan",
    outlines: true,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/autumn/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight 2 Black",
    mousepad: "VAXEE PE Tortoiseshell Cats",
    keyboard: "Wooting 60HE+",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/autumn/",
    },
  },

  stats: {
    rating: 0.98,
    acs: 198.5,
    kd: 1.04,
    kast: 69.3,
    adr: 130.7,
    hs: null,
  },

  updatedAt: "2026-08-09",
};