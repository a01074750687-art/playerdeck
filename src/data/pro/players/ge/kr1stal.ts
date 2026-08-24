import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const kr1stalCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "BLUE BEES.ESP",
      joinedAt: "2022-02",
      leftAt: "2022-08",
    },
    {
      teamName: "SCARZ",
      joinedAt: "2022-08",
      leftAt: "2023-10",
    },
    {
      teamName: "Night Wings Gaming",
      leftAt: "2023-12",
    },
    {
      teamName: "Xi Lai Gaming",
      joinedAt: "2024-03",
      leftAt: "2024-09",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Challengers Japan Split 2",
      result: "우승",
    },
    {
      year: 2023,
      title: "VCT Ascension Pacific",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT China National Competition Season 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Ascension China",
      result: "우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "3위",
    },
  ],
};

export const kr1stal: ProPlayer = {
  id: "player-kr1stal",
  slug: "kr1stal",

  nickname: "Kr1stal",
  realName: "Savva Fedorov",

  countryCode: "RU",
  countryName: "Russia",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("global-esports"),

  primaryRole: "Flex",
  roles: createRoles("Flex", ["Initiator", "Sentinel", "Controller"]),

  mainAgents: ["Sova", "Killjoy", "Fade"],

  riotAccounts: [
    {
      name: "GE Kr1stal",
      tag: "5252",

      verification:{
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/GE%20Kr1stal%235252/overview",
      },
    },
  ],

  career: kr1stalCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.21,
    scopedSensitivity: 0.9,
    adsSensitivity: 0.9,
    edpi: 336,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings",
      sourceUrl: "https://prosettings.net/players/kr1stal/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;1;d;1;0l;2;0o;0;0a;1;0f;0;1t;0;1l;0;1o;0;1a;0;1m;0;1f;0;S;s;0.6;o;1",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings",
      sourceUrl: "https://prosettings.net/players/kr1stal/",
    },
  },

  gear: {
    mouse: "VAXEE XE V2 Black",
    mousepad: "Pulsar eS Saturn Pro Black",
    keyboard: "Wooting 60HE v2 Black",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings",
      sourceUrl: "https://prosettings.net/players/kr1stal/",
    },
  },

  stats: {
    rating: 1.00,
    acs: 168.3,
    kd: 0.96,
    kast: 68.9,
    adr: 118.6,
    hs: null,
  },

  updatedAt: "2026-08-09",
};