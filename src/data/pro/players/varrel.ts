import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

const zexyCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "SLT Seongnam",
      joinedAt: "2024-10",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
      result: "3위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Road to Ascension",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
  ],
};

const xunaCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "SLT Seongnam",
      joinedAt: "2024-10",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
      result: "3위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Road to Ascension",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
  ],
};

const oonzmlpCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "SLT Seongnam",
      joinedAt: "2024-10",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
      result: "3위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Road to Ascension",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
  ],
};

const foxy9Career: ProPlayerCareer = {
  joinedAt: "2026-05",

  previousTeams: [
    {
      teamName: "World Game Star",
      joinedAt: "2021-02",
      leftAt: "2021-05",
    },
    {
      teamName: "REIGNITE",
      joinedAt: "2021-11",
      leftAt: "2022-09",
    },
    {
      teamName: "DRX",
      joinedAt: "2022-10",
      leftAt: "2024-10",
    },
    {
      teamName: "Gen.G Esports",
      joinedAt: "2024-10",
      leftAt: "2026-04",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "VCT LOCK//IN São Paulo",
      result: "3~4위",
    },
    {
      year: 2023,
      title: "VCT Pacific League",
      result: "준우승",
    },
    {
      year: 2023,
      title: "VALORANT Champions 2023",
      result: "5~6위",
    },
    {
      year: 2024,
      title: "VCT Pacific Stage 2",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT Champions 2024",
      result: "5~6위",
    },
  ],
};

const c1nderCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "SCARZ",
      joinedAt: "2021-04",
      leftAt: "2022-05",
    },
    {
      teamName: "Good 8 Squad",
      joinedAt: "2022-05",
      leftAt: "2023-03",
    },
    {
      teamName: "REIGNITE",
      joinedAt: "2023-09",
      leftAt: "2024-02",
    },
    {
      teamName: "SLT Seongnam",
      joinedAt: "2024-10",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
      result: "3위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Road to Ascension",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
  ],
};

const klausCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "SLT Seongnam",
      joinedAt: "2024-10",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "WDG Challengers League 2024 Korea Split 3",
      result: "3위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Korea Road to Ascension",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Ascension Pacific",
      result: "우승",
    },
  ],
};

export const varrelPlayers: ProPlayer[] = [
  {
    id: "player-zexy",
    slug: "zexy",
    nickname: "Zexy",
    realName: "Jang Suk-hyun",
    countryCode: "KR",
    countryName: "South Korea",
    region: "Pacific",
    status: "Active",
    profileImageUrl: null,
    team: getRequiredTeam("varrel"),
    primaryRole: "Duelist",
    roles: createRoles("Duelist"),
    mainAgents: ["Raze", "Waylay", "Neon", "Jett"],
    career: zexyCareer,

    settings: {
      dpi: 1600,
      sensitivity: 0.09,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 144,
      pollingRate: 1000,
      resolution: null,
      verification: {
        verifiedAt: "2026-07-16",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-zexy/",
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
      mouse: null,
      mousepad: null,
      keyboard: "Geon Venom 60 HE",
      monitor: null,
      verification: {
        verifiedAt: "2026-07-16",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-zexy/",
      },
    },

    stats: {
      rating: 0.92,
      acs: 210.33,
      kd: 0.95,
      kast: 65.94,
      adr: 130.21,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-xuna",
    slug: "xuna",
    nickname: "XuNa",
    realName: "Kim Tae-geon",
    countryCode: "KR",
    countryName: "South Korea",
    region: "Pacific",
    status: "Active",
    profileImageUrl: null,
    team: getRequiredTeam("varrel"),
    primaryRole: "Initiator",
    roles: createRoles("Initiator"),
    mainAgents: ["Fade", "Sova"],
    career: xunaCareer,

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
      mouse: null,
      mousepad: null,
      keyboard: null,
      monitor: null,
      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "공개 정보 없음",
        sourceUrl: "",
      },
    },

    stats: {
      rating: 1.14,
      acs: 211.15,
      kd: 1.09,
      kast: 74.63,
      adr: 146.99,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-oonzmlp",
    slug: "oonzmlp",
    nickname: "oonzmlp",
    realName: "Shin Sang-beom",
    countryCode: "KR",
    countryName: "South Korea",
    region: "Pacific",
    status: "Active",
    profileImageUrl: null,
    team: getRequiredTeam("varrel"),
    primaryRole: "Flex",
    roles: createRoles("Flex", ["Sentinel", "Duelist", "Controller"]),
    mainAgents: ["Sage", "Phoenix", "Cypher"],
    career: oonzmlpCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.21,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 168,
      pollingRate: null,
      resolution: null,
      verification: {
        verifiedAt: "2026-07-16",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-oonzmlp/",
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
      mouse: null,
      mousepad: "STEADY WINNNER ENVY Gray",
      keyboard: "Custom Keyboard",
      monitor: null,
      verification: {
        verifiedAt: "2026-07-16",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-oonzmlp/",
      },
    },

    stats: {
      rating: 1.03,
      acs: 198.8,
      kd: 0.96,
      kast: 73.82,
      adr: 134.61,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-foxy9",
    slug: "foxy9",
    nickname: "Foxy9",
    realName: "Jung Jae-sung",
    countryCode: "KR",
    countryName: "South Korea",
    region: "Pacific",
    status: "Active",
    profileImageUrl: null,
    team: getRequiredTeam("varrel"),
    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Controller"]),
    mainAgents: ["Cypher", "Viper", "Chamber"],
    career: foxy9Career,

    settings: {
      dpi: 800,
      sensitivity: 0.27,
      scopedSensitivity: 1,
      adsSensitivity: null,
      edpi: 216,
      pollingRate: 1000,
      resolution: "1920x1080",
      verification: {
        verifiedAt: "2026-07-27",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/foxy9/",
      },
    },

    crosshair: {
      code: "0;s;1;P;c;5;h;0;0l;3;0o;0;0a;1;0f;0;1b;0;S;c;5;o;1",
      color: "Cyan",
      outlines: false,
      centerDot: false,
      verification: {
        verifiedAt: "2026-07-27",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/foxy9/",
      },
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2c Black",
      mousepad: "Artisan FX Hien XSoft Wine Red",
      keyboard: "Custom Keyboard",
      monitor: null,
      verification: {
        verifiedAt: "2026-07-27",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/foxy9/",
      },
    },

    stats: {
      rating: 1.26,
      acs: 251.46,
      kd: 1.44,
      kast: 71.97,
      adr: 150.56,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-c1nder",
    slug: "c1nder",
    nickname: "C1ndeR",
    realName: "Ko Jae-hyuk",
    countryCode: "KR",
    countryName: "South Korea",
    region: "Pacific",
    status: "Active",
    profileImageUrl: null,
    team: getRequiredTeam("varrel"),
    primaryRole: "Controller",
    roles: createRoles("Controller"),
    mainAgents: ["Omen"],
    career: c1nderCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.25,
      scopedSensitivity: 1.05,
      adsSensitivity: 1,
      edpi: 200,
      pollingRate: 1000,
      resolution: null,
      verification: {
        verifiedAt: "2026-04-01",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-c1nder/",
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
      mouse: null,
      mousepad: null,
      keyboard: "Custom Keyboard",
      monitor: null,
      verification: {
        verifiedAt: "2026-04-01",
        sourceName: "BestGamers",
        sourceUrl: "https://b-gamers.net/valorant-c1nder/",
      },
    },

    stats: {
      rating: 0.76,
      acs: 133.0,
      kd: 0.69,
      kast: 66,
      adr: 89.4,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-klaus",
    slug: "klaus",
    nickname: "Klaus",
    realName: "Kim Min-hyuk",
    countryCode: "KR",
    countryName: "South Korea",
    region: "Pacific",
    status: "Active",
    profileImageUrl: null,
    team: getRequiredTeam("varrel"),
    primaryRole: "Flex",
    roles: createRoles("Flex", ["Controller", "Duelist"]),
    mainAgents: ["Omen", "Raze"],
    career: klausCareer,

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
      mouse: null,
      mousepad: null,
      keyboard: null,
      monitor: null,
      verification: {
        verifiedAt: "2026-08-09",
        sourceName: "공개 정보 없음",
        sourceUrl: "",
      },
    },

    stats: {
      rating: 1.44,
      acs: 235.0,
      kd: 1.40,
      kast: 70,
      adr: 138.5,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },
];