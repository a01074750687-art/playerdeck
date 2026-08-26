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
      teamName: "Ground Zero Gaming",
      joinedAt: "2020-09",
      leftAt: "2020-10",
    },
    {
      teamName: "ORDER",
      joinedAt: "2020-10",
      leftAt: "2022-09",
    },
    {
      teamName: "HONEY BADGERS",
      joinedAt: "2022-07",
      leftAt: "2023-03",
    },
    {
      teamName: "Gods Reign",
      joinedAt: "2023-03",
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
      title: "Oceania Tour: Championship",
      result: "우승",
    },
    {
      year: 2023,
      title: "VALORANT Challengers 2023 South Asia: Split 1",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VCT 2024: China Kickoff",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VCT 2024: China Stage 1",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VCT 2024: China Stage 2",
      result: "준우승",
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

export const autumn: ProPlayer = {
  id: "player-autumn",
  slug: "autumn",

  nickname: "autumn",
  realName: "Kale Dunne",

  countryCode: "AU",
  countryName: "Australia",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/ge/autumn.png",

  team: getRequiredTeam("global-esports"),

  primaryRole: "Flex",
  roles: createRoles("Flex", ["Sentinel", "Duelist"]),

  mainAgents: ["Veto", "Yoru", "Phoenix"],

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
      verifiedAt: "2026-08-25",
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
      verifiedAt: "2026-08-25",
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
      verifiedAt: "2026-08-25",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/autumn/",
    },
  },

  stats: {
    rating: 1.11,
    acs: 209,
    kd: 1.19,
    kast: 73,
    adr: 133.1,
    hs: 27,
  },

  updatedAt: "2026-08-25",
};