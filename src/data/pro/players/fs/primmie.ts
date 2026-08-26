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
      teamName: "FW Esports",
      joinedAt: "2022-01",
      leftAt: "2023-01",
    },
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

  profileImageUrl:
    "/images/valorant/players/fs/primmie.png",

  team: getRequiredTeam("full-sense"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),
  mainAgents: ["Jett", "Raze", "Neon"],

  riotAccounts: [
    {
      name: "666mirp",
      tag: "kill",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/666mirp%23kill/overview",
      },
    },
  ],

  career: primmieCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.31,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 248,
    pollingRate: 2000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-primmie/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;1;d;1;f;0;0b;0;1b;0;S;o;1",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/primmie/",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro White",
    mousepad: "Pulsar eS Saturn Pro Radiant Ruby",
    keyboard: "Wooting 60HE+",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-primmie/",
    },
  },

  stats: {
    rating: 1.15,
    acs: 229,
    kd: 1.23,
    kast: 72,
    adr: 152.6,
    hs: 30,
  },

  updatedAt: "2026-08-24",
};