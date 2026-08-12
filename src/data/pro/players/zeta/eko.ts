import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const ekoCareer: ProPlayerCareer = {
  joinedAt: "2025-11",

  previousTeams: [
    {
      teamName: "TNL Esports",
      joinedAt: "2020-11",
      leftAt: "2021-09",
    },
    {
      teamName: "REIGNITE",
      joinedAt: "2021-11",
      leftAt: "2022-10",
    },
    {
      teamName: "Incheon On Sla2ers",
      joinedAt: "2022-07",
      leftAt: "2022-09",
    },
    {
      teamName: "Gen.G Esports",
      joinedAt: "2022-10",
      leftAt: "2023-09",
    },
    {
      teamName: "TOP Esports",
      joinedAt: "2023-09",
      leftAt: "2024-01",
    },
    {
      teamName: "NOEZ FOXX",
      joinedAt: "2024-03",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2020,
      title: "First Strike Korea",
      result: "준우승",
    },
    {
      year: 2022,
      title: "VCT East Asia Last Chance Qualifier",
      result: "준우승",
    },
    {
      year: 2023,
      title: "VCT Pacific League",
      result: "4위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Japan Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Red Bull Home Ground 2025",
      result: "3위",
    },
  ],
};

export const eko: ProPlayer = {
  id: "player-eko",
  slug: "eko",

  nickname: "eKo",
  realName: "Yeom Wang-ryong",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("zeta"),

  primaryRole: "Flex",
  roles: createRoles("Flex", ["Initiator", "Duelist"]),

  mainAgents: ["Sova", "Yoru", "Breach"],

  career: ekoCareer,

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
    rating: 1.37,
    acs: 247.6,
    kd: 1.38,
    kast: 80.9,
    adr: 157.6,
    hs: null,
  },

  updatedAt: "2026-08-09",
};