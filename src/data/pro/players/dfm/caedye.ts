import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const caedyeCareer: ProPlayerCareer = {
  joinedAt: "2026-01",

  previousTeams: [
    {
      teamName: "ZETA DIVISION Academy",
      joinedAt: "2022-08",
      leftAt: "2023-12",
    },
    {
      teamName: "RIDDLE ORDER",
      joinedAt: "2023-12",
      leftAt: "2026-01",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Challengers League Japan Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Ascension Pacific",
      result: "4위",
    },
    {
      year: 2025,
      title: "Challengers Japan Stage 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers Japan Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers League Japan Season Finals",
      result: "우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 2",
      result: "7~8위",
    },
  ],
};

export const caedye: ProPlayer = {
  id: "player-caedye",
  slug: "caedye",

  nickname: "Caedye",
  realName: "Amon Mateus Okakura",

  countryCode: "JP",
  countryName: "Japan",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/dfm/caedye.png",

  team: getRequiredTeam("dfm"),

  primaryRole: "Sentinel",
  roles: createRoles("Sentinel", ["Controller"]),
  mainAgents: ["Cypher", "Viper", "Vyse"],

  riotAccounts: [
    {
      name: "Caedye",
      tag: "noroc",
      puuid: "5425a8f9-8f61-5cd1-bf01-8f0970073d11",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/Caedye%23noroc/",
      },
    },
  ],

  career: caedyeCareer,

  settings: {
    dpi: 400,
    sensitivity: 0.35,
    scopedSensitivity: 0.84,
    adsSensitivity: 0.5,
    edpi: 140,
    pollingRate: 4000,
    resolution: "1440x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-caedye/",
    },
  },

  crosshair: {
    code: null,
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-caedye/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "ARTISAN NINJA FX Zero Daidai Soft",
    keyboard: "Pulsar PCMK 3HE 60",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-caedye/",
    },
  },

  stats: {
    rating: 0.89,
    acs: 179,
    kd: 0.87,
    kast: 70,
    adr: 118.1,
    hs: 34,
  },

  updatedAt: "2026-08-24",
};