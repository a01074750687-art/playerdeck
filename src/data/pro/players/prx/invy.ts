import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const invyCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "Hashira",
      joinedAt: "2021-02",
      leftAt: "2021-07",
    },
    {
      teamName: "SV Empire",
      joinedAt: "2021-07",
      leftAt: "2021-09",
    },
    {
      teamName: "Oasis Gaming",
      joinedAt: "2021-09",
      leftAt: "2022-10",
    },
    {
      teamName: "Team Secret",
      joinedAt: "2022-12",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "VCT 2023: Pacific League",
      result: "5~6위",
    },
    {
      year: 2023,
      title: "VALORANT Champions 2023",
      result: "9~12위",
    },
    {
      year: 2024,
      title: "Predator League Asia Pacific 2024",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Radiant International Invitational",
      result: "우승",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Kickoff",
      result: "3위",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters London 2026",
      result: "준우승",
    },
  ],
};

export const invy: ProPlayer = {
  id: "player-invy",
  slug: "invy",

  nickname: "invy",
  realName: "Adrian Jiggs Aisa Reyes",

  countryCode: "PH",
  countryName: "Philippines",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("paper-rex"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator", ["Controller"]),

  mainAgents: ["Sova", "Fade", "Harbor"],

  riotAccounts: [
    {
      name: "PRX invy",
      tag: "jia",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/PRX%20invy%23jia/overview",
      },
    },
  ],

  career: invyCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.135,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 216,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-invy/",
    },
  },

  crosshair: {
    code: "0;P;c;5;h;0;d;0;f;0;0b;1;0a;1;0l;4;0t;2;0o;0;0m;0;0f;0;1b;0",
    color: "Cyan",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-invy/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X2 SUPERSTRIKE Lunar Eclipse",
    mousepad: "ARTISAN NINJA FX Zero TenZ",
    keyboard: "Wooting 60HE v2 Silver",
    monitor: "ZOWIE XL2586X+",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers / SPECS.GG",
      sourceUrl: "https://b-gamers.net/valorant-invy/",
    },
  },

  stats: {
    rating: 1.11,
    acs: 196,
    kd: 1.14,
    kast: 77,
    adr: 137.3,
    hs: 30,
  },

  updatedAt: "2026-08-24",
};