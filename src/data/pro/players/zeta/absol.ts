import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const absolCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "DetoNator Academy",
      leftAt: "2023-08",
    },
    {
      teamName: "Murash Gaming",
      joinedAt: "2023-08",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Challengers League 2024 Japan Split 1",
      result: "5~6위",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Japan Split 2",
      result: "4위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Japan Stage 2",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "Red Bull Home Ground 2025 Japan Qualifier",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Red Bull Home Ground 2025",
      result: "3위",
    },
  ],
};

export const absol: ProPlayer = {
  id: "player-absol",
  slug: "absol",

  nickname: "Absol",
  realName: "Kazuki Fujinoki",

  countryCode: "JP",
  countryName: "Japan",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("zeta"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),

  mainAgents: ["Neon", "Waylay", "Jett"],

  career: absolCareer,

  settings: {
    dpi: null,
    sensitivity: null,
    scopedSensitivity: null,
    adsSensitivity: null,
    edpi: null,
    pollingRate: null,
    resolution: null,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "공개 정보 없음",
      sourceUrl: "",
    },
  },

  crosshair: {
    code: null,
    color: null,
    outlines: null,
    centerDot: null,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "공개 정보 없음",
      sourceUrl: "",
    },
  },

  gear: {
    mouse: null,
    mousepad: null,
    keyboard: null,
    monitor: null,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "공개 정보 없음",
      sourceUrl: "",
    },
  },

  stats: {
    rating: 0.75,
    acs: 194.2,
    kd: 0.74,
    kast: 62.2,
    adr: 119.4,
    hs: null,
  },

  updatedAt: "2026-08-09",
};