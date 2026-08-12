import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const keilysCareer: ProPlayerCareer = {
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
      title: "VCT Philippines Stage 2 Challengers",
      result: "3위",
    },
    {
      year: 2022,
      title: "Predator League Philippines",
      result: "우승",
    },
    {
      year: 2023,
      title: "Predator League Philippines 2024",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT OFF//SEASON Spotlight Series Pacific",
      result: "준우승",
    },
    {
      year: 2026,
      title: "Esports World Cup Pacific Qualifier Stage 1",
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

  primaryRole: "Initiator",
  roles: createRoles("Initiator", ["Flex", "Controller"]),

  mainAgents: ["Phoenix", "KAY/O", "Viper"],

  career: keilysCareer,

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
      sourceUrl: "https://prosettings.net/players/kellys/",
    },
  },

  crosshair: {
    code: "0;s;1;P;c;5;h;0;f;0;0l;2;0o;1;0a;1;0f;0;1b;0;S;c;5;s;1.2;o;1",
    color: "Cyan",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-03",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/kellys/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "Razer Gigantus V2 Pro Balance",
    keyboard: "Wooting 80HE Black",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-03",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/kellys/",
    },
  },

  stats: {
    rating: 1.07,
    acs: 213.2,
    kd: 1.0,
    kast: 75.97,
    adr: 148.1,
    hs: null,
  },

  updatedAt: null,
};