import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

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
      teamName: "ZETA DIVISION",
      joinedAt: "2024-10",
      leftAt: "2025-06",
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
    {
      year: 2026,
      title: "VCT Pacific Stage 2 Play-Ins",
      result: "7~8위",
    },
  ],
};

export const syouta: ProPlayer = {
  id: "player-syouta",
  slug: "syouta",

  nickname: "SyouTa",
  realName: "Shota Aoki",

  countryCode: "JP",
  countryName: "Japan",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/zeta/syouta.png",

  team: getRequiredTeam("zeta"),

  primaryRole: "Sentinel",
  roles: createRoles("Sentinel", ["Controller"]),

  mainAgents: ["Cypher", "Viper", "Vyse"],

  riotAccounts: [
    {
      name: "下 忍",
      tag: "手裏剣",
      puuid: "3c8214a1-b8d7-5faa-bb5a-6f5fb6afa479",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/%E4%B8%8B%20%20%20%E5%BF%8D%23%E6%89%8B%E8%A3%8F%E5%89%A3/",
      },
    },
  ],

  career: syoutaCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.4,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 320,
    pollingRate: null,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-syouta/",
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
      sourceUrl: "https://prosettings.net/players/syouta/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X2 SUPERSTRIKE Lunar Eclipse",
    mousepad: "Pulsar eS PD170",
    keyboard: "Razer Huntsman V3 Pro TKL Black",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-syouta/",
    },
  },

  stats: {
    rating: 0.97,
    acs: 199,
    kd: 0.95,
    kast: 69,
    adr: 137.0,
    hs: 35,
  },

  updatedAt: "2026-08-24",
};