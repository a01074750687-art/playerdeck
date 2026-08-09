import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

const meiyCareer: ProPlayerCareer = {
  joinedAt: "2023-11",
  previousTeams: [
    { teamName: "NORTHEPTION", joinedAt: "2021-02", leftAt: "2021-12" },
    { teamName: "Crazy Raccoon", joinedAt: "2022-01", leftAt: "2023-11" },
  ],
  highlights: [
    { year: 2021, title: "VCT Japan Stage 3 Challengers Playoffs", result: "3위" },
    { year: 2022, title: "VCT Japan Stage 2 Challengers Playoffs", result: "3위" },
    { year: 2023, title: "Challengers League Japan Split 1", result: "준우승" },
    { year: 2024, title: "VALORANT Radiant Asia Invitational", result: "준우승" },
    { year: 2025, title: "VCT Pacific Stage 2", result: "7~8위" },
  ],
};

const caedyeCareer: ProPlayerCareer = {
  joinedAt: "2026-01",
  previousTeams: [
    { teamName: "ZETA DIVISION Academy", joinedAt: "2022-08", leftAt: "2023-12" },
    { teamName: "RIDDLE ORDER", joinedAt: "2023-12", leftAt: "2026-01" },
  ],
  highlights: [
    { year: 2024, title: "Challengers League Japan Split 2", result: "우승" },
    { year: 2024, title: "VCT Ascension Pacific", result: "4위" },
    { year: 2025, title: "Challengers Japan Stage 1", result: "우승" },
    { year: 2025, title: "Challengers Japan Stage 2", result: "우승" },
    { year: 2025, title: "Challengers League Japan Season Finals", result: "우승" },
  ],
};

const akameCareer: ProPlayerCareer = {
  joinedAt: "2024-10",
  previousTeams: [
    { teamName: "Food Eat", leftAt: "2021" },
    { teamName: "Alpha Six Gaming", joinedAt: "2021", leftAt: "2021" },
    { teamName: "K2 esports", leftAt: "2022-04" },
    { teamName: "Jadeite", joinedAt: "2022-04", leftAt: "2023-09" },
    { teamName: "REJECT", joinedAt: "2023-09", leftAt: "2024-09" },
  ],
  highlights: [
    { year: 2023, title: "Challengers League Japan Split 2", result: "준우승" },
    { year: 2024, title: "Challengers League Japan Split 1", result: "준우승" },
    { year: 2024, title: "VALORANT Radiant Asia Invitational", result: "준우승" },
    { year: 2025, title: "VCT Pacific Kickoff", result: "5~6위" },
    { year: 2025, title: "VCT Pacific Stage 2", result: "7~8위" },
  ],
};

const sseesCareer: ProPlayerCareer = {
  joinedAt: "2023-11",
  previousTeams: [
    { teamName: "DNG White", joinedAt: "2021-10", leftAt: "2022-10" },
  ],
  highlights: [
    { year: 2024, title: "VALORANT Radiant Asia Invitational", result: "준우승" },
    { year: 2025, title: "VCT Pacific Stage 2", result: "7~8위" },
    { year: 2026, title: "VCT Pacific Kickoff", result: "5위" },
    { year: 2026, title: "VCT Pacific Stage 1", result: "7~8위" },
  ],
};

const yatsukaCareer: ProPlayerCareer = {
  joinedAt: "2026-01",
  previousTeams: [
    { teamName: "ZETA DIVISION Academy", joinedAt: "2022-03", leftAt: "2023-12" },
    { teamName: "RIDDLE ORDER", joinedAt: "2023-12", leftAt: "2026-01" },
  ],
  highlights: [
    { year: 2024, title: "Challengers League Japan Split 2", result: "우승" },
    { year: 2024, title: "VCT Ascension Pacific", result: "4위" },
    { year: 2025, title: "Challengers Japan Stage 1", result: "우승" },
    { year: 2025, title: "Challengers Japan Stage 2", result: "우승" },
    { year: 2025, title: "Challengers League Japan Season Finals", result: "우승" },
  ],
};

export const dfmPlayers: ProPlayer[] = [
  {
    id: "player-meiy",
    slug: "meiy",
    nickname: "Meiy",
    realName: "Ibuki Seki",
    countryCode: "JP",
    countryName: "Japan",
    region: "Pacific",
    status: "Active",
    profileImageUrl: null,
    team: getRequiredTeam("dfm"),
    primaryRole: "Duelist",
    roles: createRoles("Duelist"),
    mainAgents: ["Jett", "Waylay", "Neon"],
    career: meiyCareer,

    settings: {
      dpi: 400,
      sensitivity: 0.347,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 138.8,
      pollingRate: 4000,
      resolution: "1680x1050",
      verification: {
        verifiedAt: "2026-07-27",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/meiy/",
      },
    },

    crosshair: {
      code: "0;s;1;P;c;8;u;005AFFFF;o;1;d;1;b;1;0b;0;1b;0;S;d;0",
      color: "Blue",
      outlines: true,
      centerDot: true,
      verification: {
        verifiedAt: "2026-07-27",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/meiy/",
      },
    },

    gear: {
      mouse: "Razer Viper V4 Pro White",
      mousepad: "Pulsar Meiy Glass",
      keyboard: "Wooting 60HE+",
      monitor: "ZOWIE XL2566X+",
      verification: {
        verifiedAt: "2026-07-27",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/meiy/",
      },
    },

    stats: {
      rating: 1.20,
      acs: 243.5,
      kd: 1.28,
      kast: 74.6,
      adr: 155.4,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-caedye",
    slug: "caedye",
    nickname: "Caedye",
    realName: "Amon Mateus Okakura",
    countryCode: "JP",
    countryName: "Japan",
    region: "Pacific",
    status: "Active",
    profileImageUrl: null,
    team: getRequiredTeam("dfm"),
    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Controller"]),
    mainAgents: ["Cypher", "Viper", "Vyse"],
    career: caedyeCareer,

    settings: {
      dpi: 400,
      sensitivity: 0.35,
      scopedSensitivity: 0.84,
      adsSensitivity: 0.5,
      edpi: 140,
      pollingRate: 4000,
      resolution: "1920x1080",
      verification: {
        verifiedAt: "2026-08-03",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-caedye/",
      },
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: true,
      centerDot: true,
      verification: {
        verifiedAt: "2026-08-03",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-caedye/",
      },
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2 Black",
      mousepad: "ARTISAN NINJA FX Hayate Otsu Soft Red",
      keyboard: null,
      monitor: "ZOWIE XL2566K",
      verification: {
        verifiedAt: "2026-08-03",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-caedye/",
      },
    },

    stats: {
      rating: 0.90,
      acs: 189.7,
      kd: 0.97,
      kast: 72.5,
      adr: 119.8,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-akame",
    slug: "akame",
    nickname: "Akame",
    realName: "Yu Gwang-hui",
    countryCode: "KR",
    countryName: "South Korea",
    region: "Pacific",
    status: "Active",
    profileImageUrl: null,
    team: getRequiredTeam("dfm"),
    primaryRole: "Initiator",
    roles: createRoles("Initiator"),
    mainAgents: ["Sova", "Fade", "Skye"],
    career: akameCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.2,
      scopedSensitivity: 0.7,
      adsSensitivity: 0.7,
      edpi: 160,
      pollingRate: 2000,
      resolution: "1440x1080",
      verification: {
        verifiedAt: "2026-08-03",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-akame/",
      },
    },

    crosshair: {
      code: "0;s;1;P;u;000000FF;o;1;0l;4;0v;3;0g;1;0o;0;0a;1;0f;0;1b;0;S;o;1",
      color: "Cyan",
      outlines: false,
      centerDot: false,
      verification: {
        verifiedAt: "2026-07-31",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-akame/",
      },
    },

    gear: {
      mouse: "LAMZU Maya X Light Pink",
      mousepad: "ARTISAN NINJA FX Type-99 Matcha Soft",
      keyboard: "Geon Venom 60 HE",
      monitor: null,
      verification: {
        verifiedAt: "2026-08-03",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-akame/",
      },
    },

    stats: {
      rating: 1.10,
      acs: 228.9,
      kd: 1.07,
      kast: 74.0,
      adr: 151.1,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-ssees",
    slug: "ssees",
    nickname: "SSeeS",
    realName: "Tomonori Okimura",
    countryCode: "JP",
    countryName: "Japan",
    region: "Pacific",
    status: "Active",
    profileImageUrl: null,
    team: getRequiredTeam("dfm"),
    primaryRole: "Controller",
    roles: createRoles("Controller"),
    mainAgents: ["Omen", "Astra"],
    career: sseesCareer,

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
      mouse: "WLMOUSE Beast X Max White",
      mousepad: null,
      keyboard: null,
      monitor: null,
      verification: {
        verifiedAt: "2026-07-17",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-ssees/",
      },
    },

    stats: {
      rating: 0.84,
      acs: 153.2,
      kd: 0.76,
      kast: 72.0,
      adr: 97.1,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-yatsuka",
    slug: "yatsuka",
    nickname: "yatsuka",
    realName: "Kazuya Ikeda",
    countryCode: "JP",
    countryName: "Japan",
    region: "Pacific",
    status: "Active",
    profileImageUrl: null,
    team: getRequiredTeam("dfm"),
    primaryRole: "Flex",
    roles: createRoles("Flex", ["Duelist", "Initiator", "Sentinel"]),
    mainAgents: ["Sage", "Neon", "Raze"],
    career: yatsukaCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.08,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 128,
      pollingRate: 4000,
      resolution: "1920x1080",
      verification: {
        verifiedAt: "2026-08-01",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-yatsuka/",
      },
    },

    crosshair: {
      code: null,
      color: "Green",
      outlines: true,
      centerDot: true,
      verification: {
        verifiedAt: "2026-08-01",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-yatsuka/",
      },
    },

    gear: {
      mouse: "Finalmouse UltralightX Prophecy Scream",
      mousepad: "WALLHACK SP-004 Hatsune Miku",
      keyboard: "HYPESHOP Keyboard",
      monitor: "ZOWIE XL2566X+",
      verification: {
        verifiedAt: "2026-08-01",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-yatsuka/",
      },
    },

    stats: {
      rating: 1.00,
      acs: 198.0,
      kd: 0.89,
      kast: 66.1,
      adr: 132.8,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },
];