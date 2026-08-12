import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

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

export const foxy9: ProPlayer = {
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
};