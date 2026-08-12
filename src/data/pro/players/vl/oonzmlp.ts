import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const oonzmlpCareer: ProPlayerCareer = {
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

export const oonzmlp: ProPlayer = {
  id: "player-oonzmlp",
  slug: "oonzmlp",
  nickname: "oonzmlp",
  realName: "Shin Sang-beom",
  countryCode: "KR",
  countryName: "South Korea",
  region: "Pacific",
  status: "Active",
  profileImageUrl: null,
  team: getRequiredTeam("varrel"),
  primaryRole: "Flex",
  roles: createRoles("Flex", ["Sentinel", "Duelist", "Controller"]),
  mainAgents: ["Sage", "Phoenix", "Cypher"],
  career: oonzmlpCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.21,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 168,
    pollingRate: null,
    resolution: null,
    verification: {
      verifiedAt: "2026-07-16",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-oonzmlp/",
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
    mousepad: "STEADY WINNNER ENVY Gray",
    keyboard: "Custom Keyboard",
    monitor: null,
    verification: {
      verifiedAt: "2026-07-16",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-oonzmlp/",
    },
  },

  stats: {
    rating: 1.03,
    acs: 198.8,
    kd: 0.96,
    kast: 73.82,
    adr: 134.61,
    hs: null,
  },

  updatedAt: "2026-08-09",
};