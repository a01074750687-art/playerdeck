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
      teamName: "Shadow Corporation",
      joinedAt: "2023-03",
      leftAt: "2023-06",
    },
    {
      teamName: "Four Angry Men",
      joinedAt: "2023-09",
      leftAt: "2024-02",
    },
    {
      teamName: "Rare Atom",
      joinedAt: "2024-02",
      leftAt: "2024-10",
    },
  ],

  highlights: [
    {
      year: 2024,
      title: "VCT Ascension China 2024",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Stage 1",
      result: "3위",
    },
    {
      year: 2026,
      title: "VALORANT Masters London 2026",
      result: "9~10위",
    },
    {
      year: 2026,
      title: "Esports World Cup 2026: Pacific Qualifier",
      result: "본선 진출",
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

  profileImageUrl:
    "/images/valorant/players/ge/udotan.png",

  team: getRequiredTeam("global-esports"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),

  mainAgents: ["Raze", "Neon", "Jett"],

  riotAccounts: [
    {
      name: "GE UdoTan",
      tag: "GOOSE",
      puuid: "763976bf-3b63-5335-bf31-cb6f3c89011d",

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
      verifiedAt: "2026-08-25",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/udotan/",
    },
  },

  crosshair: {
    code: "0;c;1;s;1;P;o;1;f;0;m;1;0t;1;0l;2;0a;1;0f;0;1b;0;S;b;1;c;8;t;040510FF;s;0.9;o;1",
    color: "White",
    outlines: true,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/udotan/",
    },
  },

  gear: {
    mouse: "Razer Viper V4 Pro Black",
    mousepad: "Pulsar eS Saturn Pro Red",
    keyboard: "Wooting 60HE v2 Silver",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-udotan/",
    },
  },

  stats: {
    rating: 1.08,
    acs: 231,
    kd: 1.15,
    kast: 70,
    adr: 154.8,
    hs: 26,
  },

  updatedAt: "2026-08-25",
};