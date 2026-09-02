import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const sylvanCareer: ProPlayerCareer = {
  joinedAt: "2025-10",

  previousTeams: [
    {
      teamName: "aNg DarkHorse",
      joinedAt: "2020-09",
      leftAt: "2021-01",
    },
    {
      teamName: "ZFGaming",
      joinedAt: "2021-01",
      leftAt: "2021-03",
    },
    {
      teamName: "World Game Star",
      joinedAt: "2021-05",
      leftAt: "2022-11",
    },
    {
      teamName: "Gen.G Esports",
      joinedAt: "2023-03",
      leftAt: "2023-09",
    },
    {
      teamName: "TOP Esports",
      joinedAt: "2023-09",
      leftAt: "2024-01",
    },
    {
      teamName: "T1",
      joinedAt: "2024-10",
      leftAt: "2025-10",
    },
  ],

  highlights: [
    {
      year: 2020,
      title: "First Strike Korea",
      result: "3~4위",
    },
    {
      year: 2022,
      title: "VCT 2022: Korea Stage 2 Challengers",
      result: "4위",
    },
    {
      year: 2023,
      title: "VCT 2023: Pacific League",
      result: "4위",
    },
    {
      year: 2023,
      title: "VCT 2023: Pacific Last Chance Qualifier",
      result: "3위",
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
      title: "VCT 2025: Pacific Stage 1",
      result: "7~8위",
    },
    {
      year: 2026,
      title: "Esports World Cup 2026: Pacific Qualifier Stage 1",
      result: "3위",
    },
  ],
};

export const sylvan: ProPlayer = {
  id: "player-sylvan",
  slug: "sylvan",

  nickname: "Sylvan",
  realName: "Ko Young-sub",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/ts/sylvan.png",

  team: getRequiredTeam("team-secret"),

  primaryRole: "Controller",
  roles: createRoles("Controller", ["Flex"]),

  mainAgents: ["Omen", "Astra", "Viper"],

  riotAccounts: [
    {
      name: "Secret Sylvan",
      tag: "1004",
      puuid: "41457026-d60b-5f8f-9a96-d0d39782cdd2",

      verification: {
        verifiedAt: "2026-08-21",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/Secret%20Sylvan%231004/overview",
      },
    },
  ],

  career: sylvanCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.27,
    scopedSensitivity: 1,
    adsSensitivity: null,
    edpi: 216,
    pollingRate: 1000,
    resolution: null,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/sylvan/",
    },
  },

  crosshair: {
    code: "0;P;c;0;o;1;d;1;z;2;0b;0;1b;0",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-sylvan/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight White",
    mousepad: "SteelSeries QcK Heavy Black",
    keyboard: "Logitech G Pro X Keyboard",
    monitor: null,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/sylvan/",
    },
  },

  stats: {
    rating: 1.01,
    acs: 193,
    kd: 1.0,
    kast: 70,
    adr: 130.2,
    hs: 33,
  },

  updatedAt: "2026-08-25",
};