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
      teamName: "All Ways Incheon",
      joinedAt: "2022-05",
      leftAt: "2022-05",
    },
    {
      teamName: "Jadeite",
      joinedAt: "2022-09",
      leftAt: "2023-06",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "VALORANT Challengers 2023 Japan: Split 2",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Stage 1",
      result: "3위",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Kickoff",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Bangkok 2025",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 2",
      result: "4위",
    },
    {
      year: 2025,
      title: "VALORANT Champions 2025",
      result: "9~12위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Kickoff",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "9~10위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Stage 1",
      result: "4위",
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

  profileImageUrl:
    "/images/valorant/players/t1/izu.png",

  team: getRequiredTeam("t1"),

  primaryRole: "Flex",
  roles: createRoles("Flex", ["Initiator", "Duelist"]),

  mainAgents: ["Sova", "Neon", "Skye"],

  riotAccounts: [
    {
      name: "T1 izu",
      tag: "1223",
      puuid: "1cddc74c-f452-5949-bd98-96883cc4b0cb",

      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/T1%20iZu%231223/overview",
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
    pollingRate: 2000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-izu/",
    },
  },

  crosshair: {
    code: "0;P;c;5;h;0;d;0;f;0;0b;1;0a;1;0l;4;0t;2;0o;0;0m;0;0f;0;1b;0",
    color: "Cyan",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-izu/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X2 SUPERSTRIKE Lunar Eclipse",
    mousepad: "Pulsar eS Saturn Pro Black",
    keyboard: "Geon Venom TKL HE",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-izu/",
    },
  },

  stats: {
    rating: 1.12,
    acs: 216,
    kd: 1.2,
    kast: 77,
    adr: 140.6,
    hs: 24,
  },

  updatedAt: "2026-08-24",
};