import type {
  ProPlayer,
  ProPlayerAward,
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
      title: "VALORANT Challengers 2023 Japan: Split 1",
      result: "3위",
    },
    {
      year: 2023,
      title: "VALORANT Challengers 2023 Japan: Split 2",
      result: "우승",
    },
    {
      year: 2023,
      title: "VCT Ascension Pacific 2023",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Stage 2",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Toronto 2025",
      result: "7~8위",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 2",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Champions 2025",
      result: "9~12위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Kickoff",
      result: "4위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Stage 1",
      result: "5~6위",
    },
  ],
};

const jemkinAwards: ProPlayerAward[] = [
  {
    year: 2025,
    title: "VCT 2025: Pacific Stage 1",
    result: "결승 MVP",
  },
];

export const jemkin: ProPlayer = {
  id: "player-jemkin",
  slug: "jemkin",

  nickname: "Jemkin",
  realName: "Maksim Batorov",

  countryCode: "RU",
  countryName: "Russia",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/rrq/jemkin.png",

  team: getRequiredTeam("rrq"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist", ["Sentinel"]),

  mainAgents: ["Yoru", "Chamber", "Waylay"],

  riotAccounts: [
    {
      name: "RRQ Jemkin",
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
  awards: jemkinAwards,

  settings: {
    dpi: 1600,
    sensitivity: 0.125,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 200,
    pollingRate: null,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "ProSettings.net / BestGamers",
      sourceUrl: "https://prosettings.net/players/jemkin/",
    },
  },

  crosshair: {
    code: "0;P;h;0;0l;3;0o;0;0a;1;0f;0;1b;0",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/jemkin/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight 2c Magenta",
    mousepad: "Pulsar eS Saturn Pro Black",
    keyboard: "Wooting 80HE Black",
    monitor: null,

    verification: {
      verifiedAt: "2026-08-25",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-jemkin/",
    },
  },

  stats: {
    rating: 1.01,
    acs: 195,
    kd: 1.03,
    kast: 70,
    adr: 124.8,
    hs: 26,
  },

  updatedAt: "2026-08-25",
};