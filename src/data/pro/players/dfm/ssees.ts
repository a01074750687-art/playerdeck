import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

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

export const ssees: ProPlayer = {
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
};