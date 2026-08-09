import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../types/proPlayer";
import { createRoles, getRequiredTeam } from "../common/helpers";

const absolCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "DetoNator Academy",
      leftAt: "2023-08",
    },
    {
      teamName: "Murash Gaming",
      joinedAt: "2023-08",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "Challengers League 2024 Japan Split 1",
      result: "5~6위",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Japan Split 2",
      result: "4위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Japan Stage 2",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "Red Bull Home Ground 2025 Japan Qualifier",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Red Bull Home Ground 2025",
      result: "3위",
    },
  ],
};

const sugarz3roCareer: ProPlayerCareer = {
  joinedAt: "2021-12",

  previousTeams: [
    {
      teamName: "NORTHEPTION",
      joinedAt: "2021-02",
      leftAt: "2021-12",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "VCT Japan Stage 3 Challengers Playoffs",
      result: "3위",
    },
    {
      year: 2022,
      title: "VALORANT Masters Reykjavík 2022",
      result: "3위",
    },
    {
      year: 2022,
      title: "VCT Japan Stage 2 Challengers Playoffs",
      result: "준우승",
    },
    {
      year: 2022,
      title: "VALORANT Champions 2022",
      result: "9~12위",
    },
    {
      year: 2023,
      title: "VCT Pacific Last Chance Qualifier",
      result: "우승",
    },
  ],
};

const xdllCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "BLUE BEES.ESP",
      joinedAt: "2022-02",
      leftAt: "2022-07",
    },
    {
      teamName: "SCARZ",
      joinedAt: "2022-07",
      leftAt: "2022-12",
    },
    {
      teamName: "FENNEL",
      joinedAt: "2022-12",
      leftAt: "2024-10",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Challengers League Japan Split 1",
      result: "우승",
    },
    {
      year: 2023,
      title: "Challengers League Japan Split 2",
      result: "3위",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Japan Split 1",
      result: "우승",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Japan Split 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Red Bull Home Ground 2025",
      result: "3위",
    },
  ],
};

const ekoCareer: ProPlayerCareer = {
  joinedAt: "2025-11",

  previousTeams: [
    {
      teamName: "TNL Esports",
      joinedAt: "2020-11",
      leftAt: "2021-09",
    },
    {
      teamName: "REIGNITE",
      joinedAt: "2021-11",
      leftAt: "2022-10",
    },
    {
      teamName: "Incheon On Sla2ers",
      joinedAt: "2022-07",
      leftAt: "2022-09",
    },
    {
      teamName: "Gen.G Esports",
      joinedAt: "2022-10",
      leftAt: "2023-09",
    },
    {
      teamName: "TOP Esports",
      joinedAt: "2023-09",
      leftAt: "2024-01",
    },
    {
      teamName: "NOEZ FOXX",
      joinedAt: "2024-03",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2020,
      title: "First Strike Korea",
      result: "준우승",
    },
    {
      year: 2022,
      title: "VCT East Asia Last Chance Qualifier",
      result: "준우승",
    },
    {
      year: 2023,
      title: "VCT Pacific League",
      result: "4위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Japan Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Red Bull Home Ground 2025",
      result: "3위",
    },
  ],
};

const syoutaCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "CREST GAMING Zst",
      joinedAt: "2021-12",
      leftAt: "2022-10",
    },
    {
      teamName: "FENNEL",
      joinedAt: "2022-12",
      leftAt: "2024-10",
    },
    {
      teamName: "Murash Gaming",
      joinedAt: "2025-06",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Challengers League Japan Split 1",
      result: "우승",
    },
    {
      year: 2023,
      title: "Challengers League Japan Split 2",
      result: "3위",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Japan Split 1",
      result: "우승",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Japan Split 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Red Bull Home Ground 2025 Japan Qualifier",
      result: "준우승",
    },
  ],
};

export const zetaPlayers: ProPlayer[] = [
  {
    id: "player-absol",
    slug: "absol",

    nickname: "Absol",
    realName: "Kazuki Fujinoki",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("zeta"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Neon", "Waylay", "Jett"],

    career: absolCareer,

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
      rating: 0.75,
      acs: 194.2,
      kd: 0.74,
      kast: 62.2,
      adr: 119.4,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-sugarz3ro",
    slug: "sugarz3ro",

    nickname: "SugarZ3ro",
    realName: "Shota Watanabe",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("zeta"),

    primaryRole: "Controller",
    roles: createRoles("Controller"),

    mainAgents: ["Omen", "Harbor"],

    career: sugarz3roCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.225,
      scopedSensitivity: 0.9,
      adsSensitivity: null,
      edpi: 180,
      pollingRate: 1000,
      resolution: "1440x1080",

      verification: {
        verifiedAt: "2026-07-13",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/sugarz3ro/",
      },
    },

    crosshair: {
      code: "0;P;c;1;o;1;0t;1;0l;2;0o;2;0a;1;0f;0;1b;0",
      color: "Green",
      outlines: true,
      centerDot: false,

      verification: {
        verifiedAt: "2026-07-13",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/sugarz3ro/",
      },
    },

    gear: {
      mouse: "Razer Viper V4 Pro Black",
      mousepad: "Pulsar eS Saturn Pro Black",
      keyboard: "Wooting 60HE v2 Black",
      monitor: "SONY INZONE M10S",

      verification: {
        verifiedAt: "2026-07-13",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/sugarz3ro/",
      },
    },

    stats: {
      rating: 0.92,
      acs: 166.5,
      kd: 0.91,
      kast: 75.8,
      adr: 104.3,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-xdll",
    slug: "xdll",

    nickname: "Xdll",
    realName: "Yuto Mizomori",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("zeta"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator", ["Sentinel"]),

    mainAgents: ["Sova", "Sage", "Skye"],

    career: xdllCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.235,
      scopedSensitivity: 1,
      adsSensitivity: null,
      edpi: 188,
      pollingRate: 4000,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-07-23",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/xdll/",
      },
    },

    crosshair: {
      code: "0;P;h;0;0t;1;0l;2;0o;1;0a;1;0f;0;1b;0",
      color: "White",
      outlines: false,
      centerDot: false,

      verification: {
        verifiedAt: "2026-07-23",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/xdll/",
      },
    },

    gear: {
      mouse: "Razer Viper V4 Pro White",
      mousepad: "Pulsar eS Saturn Pro Black",
      keyboard: "Razer Huntsman V3 Pro TKL Black",
      monitor: "SONY INZONE M10S",

      verification: {
        verifiedAt: "2026-07-23",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/xdll/",
      },
    },

    stats: {
      rating: 0.94,
      acs: 176.7,
      kd: 0.95,
      kast: 72.2,
      adr: 106.7,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-eko",
    slug: "eko",

    nickname: "eKo",
    realName: "Yeom Wang-ryong",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("zeta"),

    primaryRole: "Flex",
    roles: createRoles("Flex", ["Initiator", "Duelist"]),

    mainAgents: ["Sova", "Yoru", "Breach"],

    career: ekoCareer,

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
      rating: 1.37,
      acs: 247.6,
      kd: 1.38,
      kast: 80.9,
      adr: 157.6,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },

  {
    id: "player-syouta",
    slug: "syouta",

    nickname: "SyouTa",
    realName: "Shota Aoki",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("zeta"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Controller"]),

    mainAgents: ["Cypher", "Vyse", "Viper"],

    career: syoutaCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.355,
      scopedSensitivity: null,
      adsSensitivity: null,
      edpi: 284,
      pollingRate: null,
      resolution: "1920x1080",

      verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/syouta/",
      },
    },

    crosshair: {
      code: "0;P;o;1;d;1;0b;0;1b;0",
      color: "White",
      outlines: true,
      centerDot: true,

      verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/syouta/",
      },
    },

    gear: {
      mouse: "Logitech G Pro X2 SUPERSTRIKE",
      mousepad: "Pulsar eS PD170",
      keyboard: "Razer Huntsman V3 Pro TKL Black",
      monitor: "ZOWIE XL2566K",

      verification: {
        verifiedAt: "2026-08-05",
        sourceName: "ProSettings.net",
        sourceUrl: "https://prosettings.net/players/syouta/",
      },
    },

    stats: {
      rating: 1.11,
      acs: 207.3,
      kd: 1.15,
      kast: 76.2,
      adr: 143.6,
      hs: null,
    },

    updatedAt: "2026-08-09",
  },
];