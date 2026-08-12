import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const karonCareer: ProPlayerCareer = {
  joinedAt: "2023-11",

  previousTeams: [],

  highlights: [
    {
      year: 2024,
      title: "VCT 2024: Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2024,
      title: "VALORANT Masters Madrid 2024",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT Masters Shanghai 2024",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "Esports World Cup 2025",
      result: "3위",
    },
  ],
};

const karonAwards: ProPlayerAward[] = [
  {
    year: 2024,
    title: "VCT 2024: Pacific Kickoff",
    result: "MVP",
  },
  {
    year: 2024,
    title: "VCT 2024: Pacific Stage 2",
    result: "올해의 연막",
  },
];

export const karon: ProPlayer = {
  id: "player-karon",
  slug: "karon",

  nickname: "Karon",
  realName: "Kim Won-tae",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("gen-g"),

  primaryRole: "Controller",
  roles: createRoles("Controller"),

  mainAgents: ["Omen", "Viper", "Astra"],

  career: karonCareer,
  awards: karonAwards,

  settings: {
    dpi: 800,
    sensitivity: 0.2,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 160,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-07-28",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/karon/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;1;d;1;0b;0;1b;0;S;d;0",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-07-28",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/karon/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight Magenta",
    mousepad: "X-raypad Aqua Control+ Wave Black",
    keyboard: "Wooting 60HE+",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-07-28",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/karon/",
    },
  },

  stats: {
    rating: 1.16,
    acs: 205.7,
    kd: 1.18,
    kast: 78,
    adr: 132.6,
    hs: 32,
  },

  updatedAt: null,
};