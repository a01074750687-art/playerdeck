import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const jingggCareer: ProPlayerCareer = {
  joinedAt: "2021-09",

  previousTeams: [
    {
      teamName: "Team SMG",
      joinedAt: "2021-06",
      leftAt: "2021-09",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VALORANT Masters Copenhagen",
      result: "준우승",
    },
    {
      year: 2023,
      title: "VCT Pacific",
      result: "우승",
    },
    {
      year: 2023,
      title: "VALORANT Champions Los Angeles",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Toronto",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters London",
      result: "준우승",
    },
  ],
};

export const jinggg: ProPlayer = {
  id: "player-jinggg",
  slug: "jinggg",

  nickname: "Jinggg",
  realName: "Wang Jing Jie",

  countryCode: "SG",
  countryName: "Singapore",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("paper-rex"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist", ["Controller"]),

  mainAgents: ["Raze", "Neon", "Omen"],

  career: jingggCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.175,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 280,
    pollingRate: 2000,
    resolution: "1280x960",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/jinggg/",
    },
  },

  crosshair: {
    code: "0;s;1;P;c;8;u;FF99FFFF;o;1;b;1;f;0;0l;3;0o;2;0a;1;0f;0;1b;0;S;c;5;o;1",
    color: "Pink",
    outlines: true,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/jinggg/",
    },
  },

  gear: {
    mouse: "Pulsar Jinggg-X",
    mousepad: "Artisan Hayate Otsu V2 XSoft Black",
    keyboard: "Wooting 60He v2 Silver",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/jinggg/",
    },
  },

  stats: {
    rating: 1.22,
    acs: 247.8,
    kd: 1.24,
    kast: 74,
    adr: 159.6,
    hs: 27,
  },

  updatedAt: null,
};