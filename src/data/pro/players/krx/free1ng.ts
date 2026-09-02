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
      teamName: "aNg DarkHorse",
      joinedAt: "2020-09",
      leftAt: "2021-01",
    },
    {
      teamName: "Dplus Esports",
      joinedAt: "2023-10",
      leftAt: "2024-08",
    },
    {
      teamName: "Rare Atom",
      joinedAt: "2024-09",
      leftAt: "2024-10",
    },
  ],

  highlights: [
    {
      year: 2020,
      title: "First Strike Korea",
      result: "3~4위",
    },
    {
      year: 2024,
      title: "VALORANT Challengers 2024 Korea: Split 2",
      result: "3위",
    },
    {
      year: 2024,
      title: "VALORANT Champions Tour 2024: Ascension China",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Bangkok 2025",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 1",
      result: "4위",
    },
    {
      year: 2025,
      title: "HERO ESPORTS Asian Champions League 2025",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 2",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "VALORANT Champions 2025",
      result: "3위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Stage 1",
      result: "5~6위",
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

  profileImageUrl:
    "/images/valorant/players/krx/free1ng.png",

  team: getRequiredTeam("krx"),

  primaryRole: "Flex",
  roles: createRoles("Flex", ["Duelist", "Sentinel"]),

  mainAgents: ["Neon", "Cypher", "Chamber"],

  riotAccounts: [
    {
      name: "DRX free1ng",
      tag: "KJS",
      puuid: "97f28b25-5058-5706-a415-9771df82b393",

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
    dpi: 800,
    sensitivity: 0.2,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 160,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
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
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/free1ng/",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro White",
    mousepad: "ARTISAN NINJA FX Raiden Black",
    keyboard: "Wooting 60HE+",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-free1ng/",
    },
  },

  stats: {
    rating: 0.99,
    acs: 204,
    kd: 1.07,
    kast: 71,
    adr: 128.7,
    hs: 30,
  },

  updatedAt: "2026-08-24",
};