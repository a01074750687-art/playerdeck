import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const yongCareer: ProPlayerCareer = {
  joinedAt: "2026-03",

  previousTeams: [
    {
      teamName: "DRX Academy",
      joinedAt: "2025-02",
      leftAt: "2026-03",
    },
  ],

  highlights: [
    {
      year: 2025,
      title: "Global Esports Fight Night: Academy",
      result: "우승",
    },
    {
      year: 2025,
      title: "GoNxt Asia Clash Invitational",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers Korea Stage 3",
      result: "4위",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "5~6위",
    },
    {
      year: 2026,
      title: "Esports World Cup Pacific Qualifier",
      result: "5~6위",
    },
  ],
};

export const yong: ProPlayer = {
  id: "player-yong",
  slug: "yong",

  nickname: "yong",
  realName: "Kim Ho-yong",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("krx"),

  primaryRole: "Sentinel",
  roles: createRoles("Sentinel"),

  mainAgents: ["Cypher", "Killjoy", "Vyse"],

  riotAccounts: [
    {
      name: "DRX Yong",
      tag: "V S",
      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "나무위키",
        sourceUrl:
          "https://d.namu.moe/w/%EA%B9%80%ED%98%B8%EC%9A%A9(%ED%94%84%EB%A1%9C%EA%B2%8C%EC%9D%B4%EB%A8%B8)",
      },
    },
  ],

  career: yongCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.19,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 152,
    pollingRate: 2000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/yong/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;1;d;1;f;0;0b;0;1b;0",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/yong/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X2 SUPERSTRIKE",
    mousepad: null,
    keyboard: null,
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/yong/",
    },
  },

  stats: {
    rating: 1.08,
    acs: 199.4,
    kd: 1.06,
    kast: 75,
    adr: 130.8,
    hs: 31,
  },

  updatedAt: null,
};