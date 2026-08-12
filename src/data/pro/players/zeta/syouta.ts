import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const syoutaCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "CREST GAMING Zst",
      joinedAt: "2021-12",
      leftAt: "2022-10",
    },
    {
      teamName: "FENNEL",
      joinedAt: "2022-12",
      leftAt: "2024-10",
    },
    {
      teamName: "Murash Gaming",
      joinedAt: "2025-06",
      leftAt: "2025-12",
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
      title: "Red Bull Home Ground 2025 Japan Qualifier",
      result: "준우승",
    },
  ],
};

export const syouta: ProPlayer = {
  id: "player-syouta",
  slug: "syouta",

  nickname: "SyouTa",
  realName: "Shota Aoki",

  countryCode: "JP",
  countryName: "Japan",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("zeta"),

  primaryRole: "Sentinel",
  roles: createRoles("Sentinel", ["Controller"]),

  mainAgents: ["Cypher", "Vyse", "Viper"],

  career: syoutaCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.355,
    scopedSensitivity: null,
    adsSensitivity: null,
    edpi: 284,
    pollingRate: null,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-05",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/syouta/",
    },
  },

  crosshair: {
    code: "0;P;o;1;d;1;0b;0;1b;0",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-05",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/syouta/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X2 SUPERSTRIKE",
    mousepad: "Pulsar eS PD170",
    keyboard: "Razer Huntsman V3 Pro TKL Black",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-05",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/syouta/",
    },
  },

  stats: {
    rating: 1.11,
    acs: 207.3,
    kd: 1.15,
    kast: 76.2,
    adr: 143.6,
    hs: null,
  },

  updatedAt: "2026-08-09",
};