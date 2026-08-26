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
      title: "VALORANT Challengers 2024 Japan: Split 1",
      result: "3위",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Bangkok 2025",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 1",
      result: "4위",
    },
    {
      year: 2025,
      title: "HERO ESPORTS Asian Champions League 2025",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 2",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "VALORANT Champions 2025",
      result: "3위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Stage 1",
      result: "5~6위",
    },
  ],
};

const hyunminAwards: ProPlayerAward[] = [
  {
    year: 2025,
    title: "VCT Pacific 2025 Season Awards",
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

  profileImageUrl:
    "/images/valorant/players/krx/hyunmin.png",

  team: getRequiredTeam("krx"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),

  mainAgents: ["Phoenix", "Yoru", "Raze"],

  riotAccounts: [
    {
      name: "DRX HYUNMIN",
      tag: "V S",

      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/DRX%20HYUNMIN%23V%20S/overview",
      },
    },
  ],

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
      verifiedAt: "2026-08-24",
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
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/hyunmin/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X2 SUPERSTRIKE Lunar Eclipse",
    mousepad: "ARTISAN NINJA FX Zero XSoft Black",
    keyboard: "Wooting 80HE",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-hyunmin/",
    },
  },

  stats: {
    rating: 1.11,
    acs: 229,
    kd: 1.11,
    kast: 75,
    adr: 152.4,
    hs: 32,
  },

  updatedAt: "2026-08-24",
};