import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const hyunminCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "CREST GAMING Zst",
      joinedAt: "2023-09",
      leftAt: "2024-08",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Challengers Japan Split 1",
      result: "3위",
    },
    {
      year: 2025,
      title: "VCT Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2025,
      title: "Masters Bangkok",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "HERO Esports Asian Champions League",
      result: "우승",
    },
    {
      year: 2025,
      title: "Champions Paris",
      result: "3위",
    },
  ],
};

const hyunminAwards: ProPlayerAward[] = [
  {
    year: 2025,
    title: "VCT Pacific Awards",
    result: "올해의 기량 발전 선수",
  },
];

export const hyunmin: ProPlayer = {
  id: "player-hyunmin",
  slug: "hyunmin",

  nickname: "HYUNMIN",
  realName: "Song Hyun-min",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("krx"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),

  mainAgents: ["Jett", "Yoru", "Phoenix"],

  career: hyunminCareer,
  awards: hyunminAwards,

  settings: {
    dpi: 800,
    sensitivity: 0.2,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 160,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/hyunmin/",
    },
  },

  crosshair: {
    code: "0;P;o;1;d;1;0b;0;1b;0",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/hyunmin/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "Artisan Ninja FX Zero XSoft Black",
    keyboard: "Wooting 60HE+",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/hyunmin/",
    },
  },

  stats: {
    rating: 1.18,
    acs: 239.6,
    kd: 1.2,
    kast: 74,
    adr: 154.2,
    hs: 28,
  },

  updatedAt: null,
};