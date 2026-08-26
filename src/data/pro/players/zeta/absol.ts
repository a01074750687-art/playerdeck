import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const absolCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "DetoNator Academy",
      joinedAt: "2022-12",
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
    {
      year: 2026,
      title: "VCT Pacific Stage 2 Play-Ins",
      result: "7~8위",
    },
  ],
};

export const absol: ProPlayer = {
  id: "player-absol",
  slug: "absol",

  nickname: "Absol",
  realName: "Kazuki Fujinoki",

  countryCode: "JP",
  countryName: "Japan",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/zeta/absol.png",

  team: getRequiredTeam("zeta"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),
  mainAgents: ["Neon", "Waylay", "Yoru"],

  riotAccounts: [
    {
      name: "Absol",
      tag: "1321",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/Absol%231321/overview",
      },
    },
  ],

  career: absolCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.22,
    scopedSensitivity: 1.23,
    adsSensitivity: 1,
    edpi: 176,
    pollingRate: null,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-absol/",
    },
  },

  crosshair: {
    code: "0;p;0;s;1;P;o;1;d;1;f;0;0b;0;1b;0;A;o;1;0t;1;0l;3;0o;2;0a;1;0f;0;1b;0;S;c;1;o;1",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "Better Buy",
      sourceUrl: "https://better-buy.jp/absol-device/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight 2 White",
    mousepad: "Nachoneko × Fumo Collection",
    keyboard: "Wooting 60HE v2",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-absol/",
    },
  },

  stats: {
    rating: 0.95,
    acs: 207,
    kd: 0.94,
    kast: 65,
    adr: 135.9,
    hs: 20,
  },

  updatedAt: "2026-08-24",
};