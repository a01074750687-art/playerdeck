import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const somethingCareer: ProPlayerCareer = {
  joinedAt: "2023-03",

  previousTeams: [
    {
      teamName: "Insomnia",
      joinedAt: "2021-03",
      leftAt: "2021-08",
    },
    {
      teamName: "BLUE BEES.ESP",
      joinedAt: "2021-09",
      leftAt: "2022-05",
    },
    {
      teamName: "Sengoku Gaming",
      joinedAt: "2022-05",
      leftAt: "2023-03",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "VCT Pacific",
      result: "우승",
    },
    {
      year: 2023,
      title: "VALORANT Champions Los Angeles",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VCT Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Toronto",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters London",
      result: "준우승",
    },
  ],
};

export const something: ProPlayer = {
  id: "player-something",
  slug: "something",

  nickname: "something",
  realName: "Ilya Petrov",

  countryCode: "RU",
  countryName: "Russia",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("paper-rex"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),

  mainAgents: ["Jett", "Yoru", "Phoenix"],

  riotAccounts: [
    {
      name: "PRX something",
      tag: "112",
      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "나무위키",
        sourceUrl:
          "https://namu.moe/w/%EC%9D%BC%EB%A6%AC%EC%95%BC%20%ED%8E%98%ED%8A%B8%EB%A1%9C%ED%94%84",
      },
    },
  ],

  career: somethingCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.58,
    scopedSensitivity: 1.115,
    adsSensitivity: 1,
    edpi: 464,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/something/",
    },
  },

  crosshair: {
    code: "0;s;1;P;h;0;0l;2;0o;1;0a;1;0f;0;1b;0;S;c;0;s;0.713;o;1",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/something/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X2 Superlight",
    mousepad: "Pulsar eS Saturn Pro Red",
    keyboard: "Pulsar PCMK 3",
    monitor: "ZOWIE XL2586K",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/something/",
    },
  },

  stats: {
    rating: 1.25,
    acs: 252.1,
    kd: 1.29,
    kast: 73,
    adr: 162.7,
    hs: 27,
  },

  updatedAt: null,
};