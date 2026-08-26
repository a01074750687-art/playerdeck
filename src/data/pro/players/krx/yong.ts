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
      title: "VALORANT Challengers 2025 Korea: Stage 2",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Korea: Stage 3",
      result: "4위",
    },
    {
      year: 2026,
      title: "VALORANT Challengers 2026 Korea: Split 1",
      result: "5~6위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Stage 1",
      result: "5~6위",
    },
    {
      year: 2026,
      title: "Esports World Cup 2026: Pacific Qualifier",
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

  profileImageUrl:
    "/images/valorant/players/krx/yong.png",

  team: getRequiredTeam("krx"),

  primaryRole: "Sentinel",
  roles: createRoles("Sentinel", ["Controller"]),

  mainAgents: ["Cypher", "Vyse", "Chamber"],

  riotAccounts: [
    {
      name: "DRX Yong",
      tag: "V S",

      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/DRX%20Yong%23V%20S/overview",
      },
    },
  ],

  career: yongCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.393,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 314.4,
    pollingRate: 2000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-yong/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;1;d;1;f;0;0b;0;1b;0",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/yong/",
    },
  },

  gear: {
    mouse: "LAMZU Maya X Purple Shadow",
    mousepad: "ARTISAN NINJA FX Zero Soft Orange",
    keyboard: "HYPESHOP Dama60 Pink",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-yong/",
    },
  },

  stats: {
    rating: 1.04,
    acs: 207,
    kd: 1.12,
    kast: 69,
    adr: 133.4,
    hs: 33,
  },

  updatedAt: "2026-08-24",
};