import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const raxcalCareer: ProPlayerCareer = {
  joinedAt: "2026-07",

  previousTeams: [
    {
      teamName: "URACHACHA",
      joinedAt: "2024-09",
      leftAt: "2024-12",
    },
    {
      teamName: "FN Pocheon",
      joinedAt: "2025-01",
      leftAt: "2025-04",
    },
    {
      teamName: "ONSIDE GAMING",
      joinedAt: "2025-06",
      leftAt: "2025-09",
    },
    {
      teamName: "Gen.G Global Academy",
      joinedAt: "2026-02",
      leftAt: "2026-07",
    },
  ],

  highlights: [
    {
      year: 2025,
      title: "VALORANT Challengers 2025 Korea: Road to Ascension",
      result: "3위",
    },
    {
      year: 2026,
      title: "VALORANT Challengers 2026 Korea: Split 1",
      result: "준우승",
    },
  ],
};

export const raxcal: ProPlayer = {
  id: "player-raxcal",
  slug: "raxcal",

  nickname: "RaxcaL",
  realName: "Kim Min-seok",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/gen/raxcal.png",

  team: getRequiredTeam("gen-g"),

  primaryRole: "Flex",
  roles: createRoles("Flex", ["Duelist", "Sentinel"]),

  mainAgents: ["Sage", "Phoenix", "Vyse"],

  riotAccounts: [
    {
      name: "LEV Sato",
      tag: "락스칼이다",
      puuid: "6639d262-b70d-554e-9cbd-5d1fb5df307f",

      verification: {
        verifiedAt: "2026-08-16",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/LEV%20Sato%23%EB%9D%BD%EC%8A%A4%EC%B9%BC%EC%9D%B4%EB%8B%A4/overview",
      },
    },
  ],

  career: raxcalCareer,

  settings: {
    dpi: 400,
    sensitivity: 0.43,
    scopedSensitivity: null,
    adsSensitivity: null,
    edpi: 172,
    pollingRate: null,
    resolution: null,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-raxcal/",
    },
  },

  crosshair: {
    code: "0;P;c;0;h;0;d;0;f;0;0b;1;0t;2;0l;3;0o;2;0a;1;0m;0;0f;0;1b;0",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-raxcal/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro White",
    mousepad: "ARTISAN NINJA FX Type-99 Matcha",
    keyboard: "Wooting 60HE+",
    monitor: null,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-raxcal/",
    },
  },

  stats: {
    rating: 1.06,
    acs: 201,
    kd: 1.08,
    kast: 75,
    adr: 130.4,
    hs: 25,
  },

  updatedAt: "2026-08-24",
};