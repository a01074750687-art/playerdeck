import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const killuaCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "FW Esports",
      leftAt: "2022-12",
    },
    {
      teamName: "Made in Thailand",
      joinedAt: "2023-12",
      leftAt: "2025-01",
    },
    {
      teamName: "TALON",
      joinedAt: "2025-02",
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
      year: 2024,
      title: "Challengers League 2024 Thailand Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Southeast Asia Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Southeast Asia Stage 1",
      result: "우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "준우승",
    },
  ],
};

export const killua: ProPlayer = {
  id: "player-killua",
  slug: "killua",

  nickname: "Killua",
  realName: "Tanate Teerasawad",

  countryCode: "TH",
  countryName: "Thailand",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,
  team: getRequiredTeam("full-sense"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator"),
  mainAgents: ["Fade", "Sova", "Skye"],

  career: killuaCareer,

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
    rating: 0.78,
    acs: 147.0,
    kd: 0.69,
    kast: 64.5,
    adr: 101.7,
    hs: null,
  },

  updatedAt: "2026-08-09",
};