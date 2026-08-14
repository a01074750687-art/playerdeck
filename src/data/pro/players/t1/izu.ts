import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const izuCareer: ProPlayerCareer = {
  joinedAt: "2023-09",

  previousTeams: [
    {
      teamName: "Jadeite",
      joinedAt: "2022-09",
      leftAt: "2023-06",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Challengers Japan Split 1",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Kickoff",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Masters Bangkok",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "4위",
    },
    {
      year: 2025,
      title: "Champions Paris",
      result: "9~12위",
    },
  ],
};

export const izu: ProPlayer = {
  id: "player-izu",
  slug: "izu",

  nickname: "iZu",
  realName: "Ham Woo-joo",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("t1"),

  primaryRole: "Flex",
  roles: createRoles("Flex", ["Duelist"]),

  mainAgents: ["Sova", "Chamber", "Yoru"],

  riotAccounts: [
    {
      name: "T1 izu",
      tag: "1223",
      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "나무위키",
        sourceUrl: 
            "https://namu.moe/w/%ED%95%A8%EC%9A%B0%EC%A3%BC",
      },
    },
  ],

  career: izuCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.25,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 200,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-14",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-izu/",
    },
  },

  crosshair: {
    code: "0;s;1;P;u;000000FF;o;1;s;0;0t;3;0l;1;0v;0;0g;1;0o;0;0a;1;0f;0;1t;1;1l;4;1g;1;1o;0;1a;1;1m;0;1f;0",
    color: "Black",
    outlines: true,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/izu/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X2 SUPERSTRIKE Lunar Eclipse",
    mousepad: "Pulsar eS Saturn Pro Black",
    keyboard: "Geon Venom TKL HE",
    monitor: "ZOWIE XL2566K",
    verification: {
      verifiedAt: "2026-08-14",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-izu/",
    },
  },

  stats: {
    rating: 1.12,
    acs: 211.3,
    kd: 1.11,
    kast: 75,
    adr: 138.4,
    hs: 31,
  },

  updatedAt: null,
};