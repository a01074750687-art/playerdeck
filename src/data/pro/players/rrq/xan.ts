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

  career: xanCareer,

  settings: {
    dpi: 1280,
    sensitivity: 0.18,
    scopedSensitivity: null,
    adsSensitivity: null,
    edpi: 230.4,
    pollingRate: null,
    resolution: "1280x960",

    verification: {
      verifiedAt: "2026-08-05",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/valorant/players/xan",
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
    mouse: "Razer DeathAdder V3 Pro",
    mousepad: "X-Raypad Aqua Control 2 Medium",
    keyboard: "Wooting 60HE",
    monitor: "Acer Nitro XV271",

    verification: {
      verifiedAt: "2026-08-05",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/valorant/players/xan",
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