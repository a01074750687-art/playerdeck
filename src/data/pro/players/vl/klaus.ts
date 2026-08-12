import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const klausCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "SLT Seongnam",
      joinedAt: "2024-10",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
      result: "3위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Road to Ascension",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
  ],
};

export const klaus: ProPlayer = {
  id: "player-klaus",
  slug: "klaus",
  nickname: "Klaus",
  realName: "Kim Min-hyuk",
  countryCode: "KR",
  countryName: "South Korea",
  region: "Pacific",
  status: "Active",
  profileImageUrl: null,
  team: getRequiredTeam("varrel"),
  primaryRole: "Flex",
  roles: createRoles("Flex", ["Controller", "Duelist"]),
  mainAgents: ["Omen", "Raze"],
  career: klausCareer,

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
    rating: 1.44,
    acs: 235.0,
    kd: 1.40,
    kast: 70,
    adr: 138.5,
    hs: null,
  },

  updatedAt: "2026-08-09",
};