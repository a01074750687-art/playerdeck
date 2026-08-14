import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const efinaCareer: ProPlayerCareer = {
  joinedAt: "2026-07",

  previousTeams: [
    {
      teamName: "TNL Esports",
      joinedAt: "2020-11",
      leftAt: "2021-02",
    },
    {
      teamName: "F4Q",
      joinedAt: "2021-02",
      leftAt: "2021-10",
    },
    {
      teamName: "Team IAM",
      joinedAt: "2024",
      leftAt: "2025-01",
    },
    {
      teamName: "T1 Academy",
      joinedAt: "2025-05",
      leftAt: "2025-11",
    },
    {
      teamName: "X-CAST",
      joinedAt: "2026",
      leftAt: "2026-07",
    },
  ],

  highlights: [
    {
      year: 2020,
      title: "First Strike: Korea",
      result: "준우승",
    },
    {
      year: 2021,
      title: "VCT 2021: Korea Stage 3 Challengers Playoffs",
      result: "준우승",
    },
    {
      year: 2021,
      title: "VALORANT Masters Berlin 2021",
      result: "9~12위",
    },
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Korea: Stage 2",
      result: "3위",
    },
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Korea: Stage 3",
      result: "우승",
    },
  ],
};

export const efina: ProPlayer = {
  id: "player-efina",
  slug: "efina",

  nickname: "Efina",
  realName: "Kim Nak-yeon",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("gen-g"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator", ["Sentinel"]),

  mainAgents: ["Sova", "Fade", "Skye"],

  riotAccounts: [
    {
      name: "GEN Efina",
      tag: "0527",
      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "나무위키",
        sourceUrl:
            "https://namu.moe/w/%EA%B9%80%EB%82%99%EC%97%B0",
      },
    },
  ],
  career: efinaCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.125,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 200,
    pollingRate: null,
    resolution:"1920x1080",

    verification: {
      verifiedAt: "2026-08-14",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-efina/",
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
    mouse: "Logitech G PRO X SUPERLIGHT 2c Pink",
    mousepad: "Pulsar eS Saturn Pro Red",
    keyboard: "Geon Venom TKL HE",
    monitor: "BenQ ZOWIE XL2586X",

    verification: {
      verifiedAt: "2026-08-14",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-efina/",
    },
  },

  stats: {
    rating: 1.07,
    acs: 193.8,
    kd: 1.04,
    kast: 75,
    adr: 127.5,
    hs: 31,
  },

  updatedAt: null,
};