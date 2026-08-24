import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const udotanCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "Team Nutria",
      leftAt: "2021",
    },
    {
      teamName: "Noble Experience",
      leftAt: "2021",
    },
    {
      teamName: "GoNGo Prince",
      joinedAt: "2022-01",
      leftAt: "2022-04",
    },
    {
      teamName: "TALON",
      joinedAt: "2022-04",
      leftAt: "2022-10",
    },
    {
      teamName: "Gwangju Shadow",
      joinedAt: "2023-03",
      leftAt: "2023-12",
    },
    {
      teamName: "Four Angry Men",
      joinedAt: "2023-10",
      leftAt: "2024-02",
    },
    {
      teamName: "Rare Atom",
      joinedAt: "2024-02",
      leftAt: "2024-09",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "VCT Ascension China",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "3위",
    },
    {
      year: 2026,
      title: "VALORANT Masters London",
      result: "9~10위",
    },
    {
      year: 2026,
      title: "Esports World Cup Pacific Qualifier Stage 2",
      result: "준우승",
    },
  ],
};

export const udotan: ProPlayer = {
  id: "player-udotan",
  slug: "udotan",

  nickname: "UdoTan",
  realName: "Go Kyung-won",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("global-esports"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),

  mainAgents: ["Neon", "Raze", "Jett"],

  riotAccounts: [
    {
      name: "GE UdoTan",
      tag: "GOOSE",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/GE%20UdoTan%23GOOSE/overview",
      },
    },
  ],

  career: udotanCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.101,
    scopedSensitivity: 0.8,
    adsSensitivity: 0.6,
    edpi: 161.6,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "ProSettings",
      sourceUrl: "https://prosettings.net/players/udotan/",
    },
  },

  crosshair: {
    code: "0;c;1;s;1;P;o;1;f;0;m;1;0t;1;0l;2;0a;1;0f;0;1b;0;S;b;1;c;8;t;040510FF;s;0.9;o;1",
    color: "White",
    outlines: true,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "ProSettings",
      sourceUrl: "https://prosettings.net/players/udotan/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro Black",
    mousepad: "Pulsar eS Saturn Pro Black",
    keyboard: "Wooting 60HE v2 Black",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-09",
      sourceName: "ProSettings",
      sourceUrl: "https://prosettings.net/players/udotan/",
    },
  },

  stats: {
    rating: 0.92,
    acs: 202.0,
    kd: 0.92,
    kast: 65.8,
    adr: 134.6,
    hs: null,
  },

  updatedAt: "2026-08-09",
};