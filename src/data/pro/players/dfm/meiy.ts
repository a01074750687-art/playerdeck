import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const meiyCareer: ProPlayerCareer = {
  joinedAt: "2023-11",

  previousTeams: [
    {
      teamName: "Nester",
      joinedAt: "2020-11",
      leftAt: "2021-02",
    },
    {
      teamName: "NORTHEPTION",
      joinedAt: "2021-02",
      leftAt: "2021-12",
    },
    {
      teamName: "Crazy Raccoon",
      joinedAt: "2022-01",
      leftAt: "2023-11",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "VCT Japan Stage 3 Challengers Playoffs",
      result: "3위",
    },
    {
      year: 2022,
      title: "VCT Japan Stage 2 Challengers Playoffs",
      result: "3위",
    },
    {
      year: 2023,
      title: "Challengers League Japan Split 1",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT Radiant Asia Invitational",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "7~8위",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 2 Play-Ins",
      result: "5~6위",
    },
  ],
};

export const meiy: ProPlayer = {
  id: "player-meiy",
  slug: "meiy",

  nickname: "Meiy",
  realName: "Ibuki Seki",

  countryCode: "JP",
  countryName: "Japan",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/dfm/meiy.png",

  team: getRequiredTeam("dfm"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),
  mainAgents: ["Jett", "Waylay", "Neon"],

  riotAccounts: [
    {
      name: "Meiy",
      tag: "B3L",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/Meiy%23B3L/",
      },
    },
  ],

  career: meiyCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.13,
    scopedSensitivity: 0.89,
    adsSensitivity: 0.9,
    edpi: 104,
    pollingRate: 4000,
    resolution: "1680x1050",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-meiy/",
    },
  },

  crosshair: {
    code: null,
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-meiy/",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro White",
    mousepad: "Pulsar Meiy Glass MousePad",
    keyboard: "Pulsar PCMK 3HE 60",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-meiy/",
    },
  },

  stats: {
    rating: 1.13,
    acs: 246,
    kd: 1.17,
    kast: 72,
    adr: 154.2,
    hs: 25,
  },

  updatedAt: "2026-08-24",
};