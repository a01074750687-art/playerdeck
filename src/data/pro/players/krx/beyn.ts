import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const beynCareer: ProPlayerCareer = {
  joinedAt: "2025-01",

  previousTeams: [
    {
      teamName: "F4Q",
      joinedAt: "2022-04",
      leftAt: "2022-10",
    },
    {
      teamName: "DRX Academy",
      joinedAt: "2022-10",
      leftAt: "2023-01",
    },
    {
      teamName: "Maru Gaming",
      joinedAt: "2023-01",
      leftAt: "2023-06",
    },
    {
      teamName: "DRX Academy",
      joinedAt: "2023-06",
      leftAt: "2024-03",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Challengers Korea Split 1",
      result: "3위",
    },
    {
      year: 2023,
      title: "Challengers Korea Split 2",
      result: "3위",
    },
    {
      year: 2024,
      title: "VCT Pacific Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2025,
      title: "Champions Paris",
      result: "3위",
    },
  ],
};

export const beyn: ProPlayer = {
  id: "player-beyn",
  slug: "beyn",

  nickname: "BeYN",
  realName: "Kang Ha-bin",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("krx"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator", ["Controller"]),

  mainAgents: ["Sova", "Fade", "Skye"],

  riotAccounts: [
    {
      name: "DRX Beyn",
      tag: "V S",
      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "나무위키",
        sourceUrl:
          "https://namu.moe/w/%EA%B0%95%ED%95%98%EB%B9%88(%ED%94%84%EB%A1%9C%EA%B2%8C%EC%9D%B4%EB%A8%B8)",
      },
    },
  ],

  career: beynCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.2,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 160,
    pollingRate: 8000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/beyn/",
    },
  },

  crosshair: {
    code: "0;P;c;5;h;0;0l;2;0o;1;0a;1;0f;0;1b;0",
    color: "Cyan",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/beyn/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X2 Superlight",
    mousepad: "Pulsar Hyperion",
    keyboard: "Wooting 60HE Black",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/beyn/",
    },
  },

  stats: {
    rating: 1.1,
    acs: 202.5,
    kd: 1.08,
    kast: 76,
    adr: 132.1,
    hs: 29,
  },

  updatedAt: null,
};