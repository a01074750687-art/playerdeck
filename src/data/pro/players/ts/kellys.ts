import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const kellysCareer: ProPlayerCareer = {
  joinedAt: "2025-05",

  previousTeams: [
    {
      teamName: "DR Esports",
      leftAt: "2022-01",
    },
    {
      teamName: "Rex Regum Qeon",
      joinedAt: "2022-01",
      leftAt: "2022-10",
    },
    {
      teamName: "Action PH",
      joinedAt: "2023-03",
      leftAt: "2023-06",
    },
    {
      teamName: "Oasis Gaming",
      joinedAt: "2023-10",
      leftAt: "2024-10",
    },
    {
      teamName: "Global Esports",
      joinedAt: "2024-10",
      leftAt: "2025-05",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VCT 2022: Philippines Stage 2 Challengers",
      result: "3위",
    },
    {
      year: 2022,
      title: "Predator League 2022 - Philippines",
      result: "우승",
    },
    {
      year: 2023,
      title: "Predator League Philippines 2024",
      result: "우승",
    },
    {
      year: 2024,
      title: "VALORANT Challengers 2024 Philippines: Split 2",
      result: "3위",
    },
    {
      year: 2024,
      title: "Spotlight Series Pacific 2024",
      result: "준우승",
    },
    {
      year: 2026,
      title: "Esports World Cup 2026: Pacific Qualifier Stage 1",
      result: "3위",
    },
  ],
};

export const kellys: ProPlayer = {
  id: "player-kellys",
  slug: "kellys",

  nickname: "kellyS",
  realName: "Kelly Kent Sedillo",

  countryCode: "PH",
  countryName: "Philippines",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("team-secret"),

  primaryRole: "Flex",
  roles: createRoles("Flex", [
    "Controller",
    "Duelist",
    "Initiator",
    "Sentinel",
  ]),

  mainAgents: ["Viper", "Phoenix", "KAY/O"],

  riotAccounts: [
    {
      name: "Secret kellyS",
      tag: "MJC",

      verification: {
        verifiedAt: "2026-08-25",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/Secret%20kellyS%23MJC/overview",
      },
    },
  ],

  career: kellysCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.3,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 240,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/kellys/",
    },
  },

  crosshair: {
    code: "0;s;1;P;c;5;h;0;f;0;0l;2;0o;1;0a;1;0f;0;1b;0;S;c;5;s;1.2;o;1",
    color: "Cyan",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/kellys/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "ARTISAN NINJA FX Zero Black",
    keyboard: "Wooting 60HE+",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-kellys/",
    },
  },

  stats: {
    rating: 0.91,
    acs: 192,
    kd: 0.86,
    kast: 71,
    adr: 130.8,
    hs: 22,
  },

  updatedAt: "2026-08-25",
};