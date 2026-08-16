import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const free1ngCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "Dplus Esports",
      joinedAt: "2023-10",
      leftAt: "2024-08",
    },
    {
      teamName: "Rare Atom",
      joinedAt: "2024-08",
      leftAt: "2024-10",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Challengers Korea Split 2",
      result: "3위",
    },
    {
      year: 2024,
      title: "VCT China Ascension",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2025,
      title: "HERO Esports Asian Champions League",
      result: "우승",
    },
    {
      year: 2025,
      title: "Champions Paris",
      result: "3위",
    },
  ],
};

export const free1ng: ProPlayer = {
  id: "player-free1ng",
  slug: "free1ng",

  nickname: "free1ng",
  realName: "No Ha-jun",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("krx"),

  primaryRole: "Flex",
  roles: createRoles("Flex", ["Initiator", "Sentinel"]),

  mainAgents: ["Sova", "Neon", "Cypher"],

  riotAccounts: [
    {
      name: "DRX free1ng",
      tag: "KJS",
      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "Tracker Network",
        sourceUrl: 
          "https://tracker.gg/valorant/profile/riot/DRX%20free1ng%23KJS/overview",
      },
    },
  ],

  career: free1ngCareer,

  settings: {
    dpi: 400,
    sensitivity: 0.4,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 160,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/free1ng/",
    },
  },

  crosshair: {
    code: "0;p;0;P;c;1;o;1;d;1;0b;0;1b;0",
    color: "Green",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/free1ng/",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro White",
    mousepad: "Artisan Raiden FX XSoft",
    keyboard: "Wooting 60HE+",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/free1ng/",
    },
  },

  stats: {
    rating: 1.1,
    acs: 207.2,
    kd: 1.09,
    kast: 76,
    adr: 136.1,
    hs: 30,
  },

  updatedAt: null,
};