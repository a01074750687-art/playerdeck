import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const akameCareer: ProPlayerCareer = {
  joinedAt: "2024-10",
  previousTeams: [
    { teamName: "Food Eat", leftAt: "2021" },
    { teamName: "Alpha Six Gaming", joinedAt: "2021", leftAt: "2021" },
    { teamName: "K2 esports", leftAt: "2022-04" },
    { teamName: "Jadeite", joinedAt: "2022-04", leftAt: "2023-09" },
    { teamName: "REJECT", joinedAt: "2023-09", leftAt: "2024-09" },
  ],
  highlights: [
    { year: 2023, title: "Challengers League Japan Split 2", result: "준우승" },
    { year: 2024, title: "Challengers League Japan Split 1", result: "준우승" },
    { year: 2024, title: "VALORANT Radiant Asia Invitational", result: "준우승" },
    { year: 2025, title: "VCT Pacific Kickoff", result: "5~6위" },
    { year: 2025, title: "VCT Pacific Stage 2", result: "7~8위" },
  ],
};

export const akame: ProPlayer = {
  id: "player-akame",
  slug: "akame",
  nickname: "Akame",
  realName: "Yu Gwang-hui",
  countryCode: "KR",
  countryName: "South Korea",
  region: "Pacific",
  status: "Active",
  profileImageUrl: null,
  team: getRequiredTeam("dfm"),
  primaryRole: "Initiator",
  roles: createRoles("Initiator"),
  mainAgents: ["Sova", "Fade", "Skye"],
  career: akameCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.2,
    scopedSensitivity: 0.7,
    adsSensitivity: 0.7,
    edpi: 160,
    pollingRate: 2000,
    resolution: "1440x1080",
    verification: {
      verifiedAt: "2026-08-03",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-akame/",
    },
  },

  crosshair: {
    code: "0;s;1;P;u;000000FF;o;1;0l;4;0v;3;0g;1;0o;0;0a;1;0f;0;1b;0;S;o;1",
    color: "Cyan",
    outlines: false,
    centerDot: false,
    verification: {
      verifiedAt: "2026-07-31",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-akame/",
    },
  },

  gear: {
    mouse: "LAMZU Maya X Light Pink",
    mousepad: "ARTISAN NINJA FX Type-99 Matcha Soft",
    keyboard: "Geon Venom 60 HE",
    monitor: null,
    verification: {
      verifiedAt: "2026-08-03",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-akame/",
    },
  },

  stats: {
    rating: 1.10,
    acs: 228.9,
    kd: 1.07,
    kast: 74.0,
    adr: 151.1,
    hs: null,
  },

  updatedAt: "2026-08-09",
};