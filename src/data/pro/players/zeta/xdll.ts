import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const xdllCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "BLUE BEES.ESP",
      joinedAt: "2022-02",
      leftAt: "2022-07",
    },
    {
      teamName: "SCARZ",
      joinedAt: "2022-07",
      leftAt: "2022-12",
    },
    {
      teamName: "FENNEL",
      joinedAt: "2022-12",
      leftAt: "2024-10",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Challengers League Japan Split 1",
      result: "우승",
    },
    {
      year: 2023,
      title: "Challengers League Japan Split 2",
      result: "3위",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Japan Split 1",
      result: "우승",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Japan Split 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Red Bull Home Ground 2025",
      result: "3위",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 2 Play-Ins",
      result: "7~8위",
    },
  ],
};

export const xdll: ProPlayer = {
  id: "player-xdll",
  slug: "xdll",

  nickname: "Xdll",
  realName: "Yuto Mizomori",

  countryCode: "JP",
  countryName: "Japan",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("zeta"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator", ["Sentinel"]),

  mainAgents: ["Sage", "Sova", "Skye"],

  riotAccounts: [
    {
      name: "ZETA Xdll",
      tag: "mizo",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/ZETA%20Xdll%23mizo/overview",
      },
    },
  ],

  career: xdllCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.175,
    scopedSensitivity: 0.9,
    adsSensitivity: 1,
    edpi: 140,
    pollingRate: null,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-Xdll/",
    },
  },

  crosshair: {
    code: "0;P;h;0;0t;1;0l;2;0o;1;0a;1;0f;0;1b;0",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/xdll/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "Pulsar eS Saturn Pro Black",
    keyboard: "Razer Huntsman V3 Pro TKL Black",
    monitor: "SONY INZONE M10S",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/xdll/",
    },
  },

  stats: {
    rating: 0.91,
    acs: 170,
    kd: 0.90,
    kast: 68,
    adr: 112.8,
    hs: 28,
  },

  updatedAt: "2026-08-24",
};