import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const jemkinCareer: ProPlayerCareer = {
  joinedAt: "2023-10",

  previousTeams: [
    {
      teamName: "CREST GAMING Zst",
      joinedAt: "2022-02",
      leftAt: "2022-04",
    },
    {
      teamName: "BLUE BEES.ESP",
      joinedAt: "2022-05",
      leftAt: "2022-08",
    },
    {
      teamName: "SCARZ",
      joinedAt: "2022-08",
      leftAt: "2023-10",
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

export const jemkin: ProPlayer = {
  id: "player-jemkin",
  slug: "jemkin",

  nickname: "Jemkin",
  realName: "Maksim Batorov",

  countryCode: "RU",
  countryName: "Russia",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("rrq"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist", ["Sentinel"]),

  mainAgents: ["Jett", "Raze", "Chamber"],

  riotAccounts: [
    {
      name:"RRQ Jemkin",
      tag: "1351",
      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/RRQ%20Jemkin%231351/overview",
      },
    },
  ],

  career: jemkinCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.125,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 200,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-05",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/valorant/players/jemkin/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;1;d;1;f;0;0b;0;1b;0;S;s;1.0",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-14",
      sourceName: "ProSettings.net",
      sourceUrl:
        "https://prosettings.net/players/jemkin/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro Black",
    mousepad: "Pulsar eS Saturn Pro Black",
    keyboard: "Wooting 80HE",
    monitor: null,

    verification: {
      verifiedAt: "2026-08-05",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/valorant/players/jemkin/",
    },
  },

  stats: {
    rating: 1.17,
    acs: 192.0,
    kd: 1.04,
    kast: 73,
    adr: 132.4,
    hs: 25,
  },

  updatedAt: null,
};