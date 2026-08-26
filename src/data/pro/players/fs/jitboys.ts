import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const jitboysCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "FW Esports",
      joinedAt: "2021-06",
      leftAt: "2022-10",
    },
    {
      teamName: "TALON",
      joinedAt: "2022-10",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VCT Thailand Stage 2 Challengers",
      result: "준우승",
    },
    {
      year: 2023,
      title: "VCT LOCK//IN São Paulo",
      result: "5~8위",
    },
    {
      year: 2024,
      title: "VCT Pacific Stage 2",
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

export const jitboys: ProPlayer = {
  id: "player-jitboys",
  slug: "jitboys",

  nickname: "JitBoyS",
  realName: "Jittana Nokngam",

  countryCode: "TH",
  countryName: "Thailand",

  region: "Pacific",
  status: "Active",

  profileImageUrl: 
    "/images/valorant/players/fs/jitboys.png",

  team: getRequiredTeam("full-sense"),

  primaryRole: "Flex",
  roles: createRoles("Flex", ["Sentinel", "Duelist"]),
  mainAgents: ["Phoenix", "Neon", "Yoru"],

  career: jitboysCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.5,
    scopedSensitivity: 1,
    adsSensitivity: null,
    edpi: 400,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/jitboys/",
    },
  },

  crosshair: {
    code: "0;P;h;0;0l;4;0o;0;0a;1;0f;0;1b;0",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/jitboys/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X2 SUPERSTRIKE Lunar Eclipse",
    mousepad: "Artisan Ninja FX Zero Soft Orange",
    keyboard: "Wooting 80HE Frost",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/jitboys/",
    },
  },

  stats: {
    rating: 0.93,
    acs: 209,
    kd: 0.98,
    kast: 67,
    adr: 137.6,
    hs: 27,
  },

  updatedAt: "2026-08-24",
};