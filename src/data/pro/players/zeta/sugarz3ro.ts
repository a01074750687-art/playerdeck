import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const sugarz3roCareer: ProPlayerCareer = {
  joinedAt: "2021-12",

  previousTeams: [
    {
      teamName: "NORTHEPTION",
      joinedAt: "2021-02",
      leftAt: "2021-12",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "VCT Japan Stage 3 Challengers Playoffs",
      result: "3위",
    },
    {
      year: 2022,
      title: "VALORANT Masters Reykjavík 2022",
      result: "3위",
    },
    {
      year: 2022,
      title: "VCT Japan Stage 2 Challengers Playoffs",
      result: "준우승",
    },
    {
      year: 2022,
      title: "VALORANT Champions 2022",
      result: "9~12위",
    },
    {
      year: 2023,
      title: "VCT Pacific Last Chance Qualifier",
      result: "우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 2 Play-Ins",
      result: "7~8위",
    },
  ],
};

export const sugarz3ro: ProPlayer = {
  id: "player-sugarz3ro",
  slug: "sugarz3ro",

  nickname: "SugarZ3ro",
  realName: "Shota Watanabe",

  countryCode: "JP",
  countryName: "Japan",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/zeta/sugarz3ro.png",

  team: getRequiredTeam("zeta"),

  primaryRole: "Controller",
  roles: createRoles("Controller"),

  mainAgents: ["Omen", "Harbor"],

  riotAccounts: [
    {
      name: "SugarZ3ro",
      tag: "397",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/SugarZ3ro%23397/",
      },
    },
  ],

  career: sugarz3roCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.225,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 180,
    pollingRate: 2000,
    resolution: "1440x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-sugarz3ro/",
    },
  },

  crosshair: {
    code: "0;P;c;1;o;1;0t;1;0l;2;0o;2;0a;1;0f;0;1b;0",
    color: "Green",
    outlines: true,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/sugarz3ro/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight 2 Black",
    mousepad: "ZOWIE H-SR-SE Rouge II",
    keyboard: "Wooting 60HE v2 Black",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-sugarz3ro/",
    },
  },

  stats: {
    rating: 0.84,
    acs: 166,
    kd: 0.75,
    kast: 72,
    adr: 110.8,
    hs: 28,
  },

  updatedAt: "2026-08-24",
};