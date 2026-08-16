import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const forsakenCareer: ProPlayerCareer = {
  joinedAt: "2021-02",

  previousTeams: [],

  highlights: [
    {
      year: 2022,
      title: "VALORANT Masters Copenhagen",
      result: "준우승",
    },
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

const forsakenAwards: ProPlayerAward[] = [
  {
    year: 2023,
    title: "VCT Pacific Awards",
    result: "올해의 감시자",
  },
  {
    year: 2025,
    title: "VALORANT Masters Toronto",
    result: "결승 MVP",
  },
];

export const forsaken: ProPlayer = {
  id: "player-forsaken",
  slug: "forsaken",

  nickname: "f0rsakeN",
  realName: "Jason Susanto",

  countryCode: "ID",
  countryName: "Indonesia",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("paper-rex"),

  primaryRole: "Flex",
  roles: createRoles("Flex", [
    "Duelist",
    "Initiator",
    "Controller",
    "Sentinel",
  ]),

  mainAgents: ["Yoru", "Omen", "Neon"],

  riotAccounts: [
    {
      name: "PRX f0rsakeN",
      tag: "bibii",
      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "Tracker Network / OP.GG",
        sourceUrl:
          "https://tracker.gg/valorant/crosshairs/gallery?players=pros",
      },
    },
  ],

  career: forsakenCareer,
  awards: forsakenAwards,

  settings: {
    dpi: 800,
    sensitivity: 0.712,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 569.6,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-16",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-f0rsaken/",
    },
  },

  crosshair: {
    code: "0;p;0;c;1;s;1;P;h;0;f;0;s;0;0l;3;0v;3;0g;1;0o;0;0a;1;0f;0;1b;0;A;o;1;d;1;0b;0;1b;0;S;d;0",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-16",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/f0rsaken/",
    },
  },

  gear: {
    mouse: "Pulsar Susanto-X",
    mousepad: "Pulsar eS Saturn Pro Red",
    keyboard: "Wooting 60HE v2 Silver",
    monitor: "ZOWIE XL2566K+",

    verification: {
      verifiedAt: "2026-08-16",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-f0rsaken/",
    },
  },

  stats: {
    rating: 1.18,
    acs: 224.6,
    kd: 1.17,
    kast: 76,
    adr: 146.8,
    hs: 33,
  },

  updatedAt: null,
};