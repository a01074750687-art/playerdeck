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

    mainAgents: ["Jett", "Raze", "Neon"],

    career: absolCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.25,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 200,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.2,
      acs: 204.3,
      kd: 1.16,
      kast: 77,
      adr: 148.4,
      hs: 28,
    },

    updatedAt: null,
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

    mainAgents: ["Omen", "Viper", "Astra"],

    career: sugarz3roCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.26,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 208,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "Razer BlackShark V2 Pro",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.02,
      acs: 208.4,
      kd: 1.19,
      kast: 78,
      adr: 151.6,
      hs: 29,
    },

    updatedAt: null,
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
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Breach"],

    career: xdllCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.27,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 216,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "Cyan",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.04,
      acs: 212.5,
      kd: 1.01,
      kast: 72,
      adr: 154.8,
      hs: 30,
    },

    updatedAt: null,
  },

  {
    id: "player-eko",
    slug: "eko",

    nickname: "eko",
    realName: "Yeom Wang-ryong",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("zeta"),

    primaryRole: "Flex",
    roles: createRoles("Flex"),

    mainAgents: ["Gekko", "Omen", "Killjoy"],

    career: ekoCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.28,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 224,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.07,
      acs: 216.6,
      kd: 1.04,
      kast: 73,
      adr: 126.0,
      hs: 31,
    },

    updatedAt: null,
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
    roles: createRoles("Sentinel"),

    mainAgents: ["Cypher", "Killjoy", "Vyse"],

    career: syoutaCareer,

    settings: {
      dpi: 800,
      sensitivity: 0.29,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 231,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "Razer BlackShark V2 Pro",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.09,
      acs: 220.7,
      kd: 1.07,
      kast: 74,
      adr: 129.2,
      hs: 32,
    },

    updatedAt: null,
  },
];