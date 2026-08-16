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
      teamName: "FN Pocheon",
      joinedAt: "2025-01",
      leftAt: "2025-06",
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

  profileImageUrl: null,

  team: getRequiredTeam("gen-g"),

  primaryRole: "Flex",
  roles: createRoles("Flex", ["Duelist", "Initiator"]),

  mainAgents: ["Phoenix", "Vyse", "Omen"],

  riotAccounts: [
    {
      name: "LEV Sato",
      tag: "락스칼이다",

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
    mouse: "Razer Viper V4 Pro White",
    mousepad: "ARTISAN NINJA FX Type-99 Matcha",
    keyboard:"Wooting 60HE+",
    monitor: null,

    verification: {
      verifiedAt: "2026-08-14",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-raxcal/",
    },
  },

  stats: {
    rating: 1.18,
    acs: 235.4,
    kd: 1.2,
    kast: 74,
    adr: 151.8,
    hs: 27,
  },

  updatedAt: null,
};