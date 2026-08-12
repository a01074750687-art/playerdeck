import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

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

export const meiy: ProPlayer = {
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
};