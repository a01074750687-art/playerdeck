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
      teamName: "Vision Strikers",
      joinedAt: "2020-06",
      leftAt: "2020-06",
    },
    {
      teamName: "Quantum Strikers",
      joinedAt: "2020-06",
      leftAt: "2020-11",
    },
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
      teamName: "IAM",
      joinedAt: "2023-04",
      leftAt: "2025-01",
    },
    {
      teamName: "T1 Academy",
      joinedAt: "2025-05",
      leftAt: "2025-11",
    },
    {
      teamName: "Rookies",
      joinedAt: "2026-01",
      leftAt: "2026-05",
    },
    {
      teamName: "X-CAST",
      joinedAt: "2026-06",
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

  profileImageUrl:
    "/images/valorant/players/gen/efina.png",

  team: getRequiredTeam("gen-g"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator"),

  mainAgents: ["Fade", "Sova", "Skye"],

  riotAccounts: [
    {
      name: "GEN Efina",
      tag: "0527",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/GEN%20Efina%230527/overview",
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
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-efina/",
    },
  },

  crosshair: {
    code: "0;P;h;0;0l;4;0o;2;0a;1;0f;0;1b;0",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers (설정 기반 변환)",
      sourceUrl: "https://b-gamers.net/valorant-efina/",
    },
  },

  gear: {
    mouse: "Logitech G PRO X SUPERLIGHT 2c Pink",
    mousepad: "Pulsar eS Saturn Pro Soft Red",
    keyboard: "Geon Venom TKL HE",
    monitor: "BenQ ZOWIE XL2586X",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-efina/",
    },
  },

  stats: {
    rating: 0.78,
    acs: 149,
    kd: 0.75,
    kast: 71,
    adr: 101.7,
    hs: 18,
  },

  updatedAt: "2026-08-24",
};