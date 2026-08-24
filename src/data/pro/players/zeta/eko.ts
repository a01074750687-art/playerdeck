import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const ekoCareer: ProPlayerCareer = {
  joinedAt: "2025-11",

  previousTeams: [
    {
      teamName: "TNL Esports",
      joinedAt: "2020-11",
      leftAt: "2021-09",
    },
    {
      teamName: "REIGNITE",
      joinedAt: "2021-11",
      leftAt: "2022-10",
    },
    {
      teamName: "Incheon On Sla2ers",
      joinedAt: "2022-07",
      leftAt: "2022-09",
    },
    {
      teamName: "Gen.G Esports",
      joinedAt: "2022-10",
      leftAt: "2023-09",
    },
    {
      teamName: "TOP Esports",
      joinedAt: "2023-09",
      leftAt: "2024-01",
    },
    {
      teamName: "NOEZ FOXX",
      joinedAt: "2024-03",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2020,
      title: "First Strike Korea",
      result: "준우승",
    },
    {
      year: 2022,
      title: "VCT East Asia Last Chance Qualifier",
      result: "준우승",
    },
    {
      year: 2023,
      title: "VCT Pacific League",
      result: "4위",
    },
    {
      year: 2025,
      title: "Challengers 2025 Japan Stage 3",
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

export const eko: ProPlayer = {
  id: "player-eko",
  slug: "eko",

  nickname: "eKo",
  realName: "Yeom Wang-ryong",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,
  team: getRequiredTeam("zeta"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator", ["Duelist"]),
  mainAgents: ["Yoru", "Fade", "Sova"],

  riotAccounts: [
    {
      name: "ZETA eKo",
      tag: "twoSu",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/ZETA%20eKo%23twoSu/overview",
      },
    },
  ],

  career: ekoCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.27,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 216,
    pollingRate: null,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-eKo/",
    },
  },

  crosshair: {
    code: "0;P;o;1;d;1;0b;0;1b;0",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "FPS Loadout",
      sourceUrl: "https://www.fps-loadout.com/valorant-eko/",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro Black",
    mousepad: "ARTISAN NINJA FX Zero",
    keyboard: "SONY INZONE KBD-H75",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-eKo/",
    },
  },

  stats: {
    rating: 1.03,
    acs: 203,
    kd: 0.96,
    kast: 71,
    adr: 137.2,
    hs: 30,
  },

  updatedAt: "2026-08-24",
};