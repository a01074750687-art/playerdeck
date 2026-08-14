import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const kushyCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "Alter Ego",
      joinedAt: "2021-10",
      leftAt: "2024-10",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Challengers Indonesia Split 1",
      result: "준우승",
    },
    {
      year: 2024,
      title: "Challengers Indonesia Split 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Champions Paris",
      result: "9~12위",
    },
  ],
};

export const kushy: ProPlayer = {
  id: "player-kushy",
  slug: "kushy",

  nickname: "Kushy",
  realName: "Bryan Carlos Setiawan",

  countryCode: "ID",
  countryName: "Indonesia",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("rrq"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator"),

  mainAgents: ["Sova", "Fade"],

  career: kushyCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.14,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 224,
    pollingRate: 2000,
    resolution: "1680x1050",

    verification: {
      verifiedAt: "2026-08-05",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/valorant/players/kushy",
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
    mouse: "Razer Viper V3 Pro Black",
    mousepad: "ARTISAN NINJA FX Type-99 Matcha",
    keyboard: "Wooting 60HE v2 Silver",
    monitor: null,

    verification: {
      verifiedAt: "2026-08-14",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-kushy/",
    },
  },

  stats: {
    rating: 1.04,
    acs: 204.3,
    kd: 1.13,
    kast: 76,
    adr: 142.0,
    hs: 28,
  },

  updatedAt: null,
};