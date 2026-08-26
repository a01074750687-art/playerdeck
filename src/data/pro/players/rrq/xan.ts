import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const xanCareer: ProPlayerCareer = {
  joinedAt: "2026-06",

  previousTeams: [
    {
      teamName: "No Namers",
      joinedAt: "2022-07",
      leftAt: "2022-08",
    },
    {
      teamName: "Enigma Gaming",
      joinedAt: "2023-02",
      leftAt: "2023-07",
    },
    {
      teamName: "LaZe",
      joinedAt: "2023-12",
      leftAt: "2024-07",
    },
    {
      teamName: "IGNITE",
      joinedAt: "2024-10",
      leftAt: "2025-03",
    },
    {
      teamName: "NAOS Esports",
      joinedAt: "2025-03",
      leftAt: "2025-10",
    },
    {
      teamName: "Motiv Esports",
      joinedAt: "2026-01",
      leftAt: "2026-05",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Cloudy's Tournament: Malaysia and Singapore Rivalry",
      result: "우승",
    },
    {
      year: 2024,
      title: "VALORANT Challengers 2024 Malaysia and Singapore: Split 1",
      result: "준우승",
    },
    {
      year: 2024,
      title: "Vortex: Hidden Gem",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Southeast Asia: Split 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Southeast Asia: Split 3",
      result: "3위",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific 2025",
      result: "5~6위",
    },
    {
      year: 2026,
      title: "VALORANT Challengers 2026 Southeast Asia: Split 1",
      result: "우승",
    },
  ],
};

export const xan: ProPlayer = {
  id: "player-xan",
  slug: "xan",

  nickname: "Xan",
  realName: "Xan Ng Wei Chuin",

  countryCode: "MY",
  countryName: "Malaysia",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/rrq/xan.png",

  team: getRequiredTeam("rrq"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),

  mainAgents: ["Neon", "Raze"],

  riotAccounts: [
    {
      name: "RRQ Xan",
      tag: "mitzi",

      verification: {
        verifiedAt: "2026-08-25",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/RRQ%20Xan%23mitzi/overview",
      },
    },
  ],

  career: xanCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.21,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 168,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/xan/",
    },
  },

  crosshair: {
    code: "0;c;1;s;1;P;o;1;f;0;m;1;0t;1;0l;3;0o;2;0a;1;0f;0;1b;0;S;c;5;s;0.5;o;1",
    color: "White",
    outlines: true,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/xan/",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro Black",
    mousepad: "Xraypad Aqua Control II Black",
    keyboard: "Wooting 60HE v2 Black",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/xan/",
    },
  },

  stats: {
    rating: 0.86,
    acs: 201,
    kd: 0.9,
    kast: 68,
    adr: 129.1,
    hs: 25,
  },

  updatedAt: "2026-08-25",
};