import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const xanCareer: ProPlayerCareer = {
  joinedAt: "2026-07",

  previousTeams: [
    {
      teamName: "Team SMG",
      leftAt: "2026-07",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Predator League Malaysia",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers Malaysia & Singapore Split 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "Challengers Malaysia & Singapore Split 2",
      result: "준우승",
    },
  ],
};

export const xan: ProPlayer = {
  id: "player-xan",
  slug: "xan",

  nickname: "Xan",
  realName: "Xan Ng",

  countryCode: "MY",
  countryName: "Malaysia",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("rrq"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),

  mainAgents: ["Neon"],

  riotAccounts: [
    {
      name: "RRQ Xan",
      tag: "mitzi",

      verification: {
        verifiedAt: "2026-08-21",
        sourceName: "Tracker Network",
        sourceUrl: 
          "https://tracker.gg/valorant/profile/riot/Vigil%23Pray",
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
      verifiedAt: "2026-08-14",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/xan/",
    },
  },

  crosshair: {
    code: "0;c;1;s;1;P;o;1;f;0;m;1;0t;1;0l;3;0o;2;0a;1;0f;0;1b;0;S;c;5;s;0.5;o;1",
    color:"White",
    outlines: true,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-14",
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
      verifiedAt: "2026-08-14",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/xan/",
    },
  },

  stats: {
    rating: 1.05,
    acs: 206.0,
    kd: 1.08,
    kast: 75,
    adr: 137.0,
    hs: 28,
  },

  updatedAt: null,
};