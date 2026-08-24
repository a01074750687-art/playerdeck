import type {
  ProPlayer,
  ProPlayerAward,
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
      title: "VCT 2023: Pacific League",
      result: "우승",
    },
    {
      year: 2023,
      title: "VALORANT Masters Tokyo 2023",
      result: "3위",
    },
    {
      year: 2023,
      title: "VALORANT Champions 2023",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT Masters Madrid 2024",
      result: "3위",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Stage 2",
      result: "3위",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 1",
      result: "3위",
    },
    {
      year: 2025,
      title: "VALORANT Masters Toronto 2025",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Champions 2025",
      result: "4위",
    },
    {
      year: 2025,
      title: "VALORANT Radiant International Invitational",
      result: "우승",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Kickoff",
      result: "3위",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters London 2026",
      result: "준우승",
    },
  ],
};

const somethingAwards: ProPlayerAward[] = [
  {
    year: 2023,
    title: "VCT 2023: Pacific League",
    result: "MVP",
  },
  {
    year: 2023,
    title: "VCT 2023: Pacific League",
    result: "결승 MVP",
  },
  {
    year: 2023,
    title: "VCT 2023: Pacific League",
    result: "올해의 타격대",
  },
  {
    year: 2025,
    title: "VCT 2025: Pacific Stage 2",
    result: "MVP",
  },
  {
    year: 2025,
    title: "VCT Pacific 2025 Season Awards",
    result: "올해의 타격대",
  },
];

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

  primaryRole: "Flex",
  roles: createRoles("Flex", [
    "Duelist",
    "Controller",
    "Sentinel",
    "Initiator",
  ]),

  mainAgents: ["Yoru", "Sage", "Viper"],

  riotAccounts: [
    {
      name: "PRX something",
      tag: "112",

      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/PRX%20something%23112/overview",
      },
    },
  ],

  career: somethingCareer,
  awards: somethingAwards,

  settings: {
    dpi: 800,
    sensitivity: 0.58,
    scopedSensitivity: 1.115,
    adsSensitivity: 1,
    edpi: 464,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net / BestGamers",
      sourceUrl: "https://prosettings.net/players/something/",
    },
  },

  crosshair: {
    code: "0;s;1;P;h;0;0l;2;0o;1;0a;1;0f;0;1b;0;S;c;0;s;0.713;o;1",
    color: "White",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/something/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X2 SUPERSTRIKE Lunar Eclipse",
    mousepad: "Lethal Gaming Gear Saturn Pro Red",
    keyboard: "Pulsar PCMK 3HE TKL Something Edition",
    monitor: "ZOWIE XL2586X",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-something/",
    },
  },

  stats: {
    rating: 1.2,
    acs: 234,
    kd: 1.33,
    kast: 71,
    adr: 149.8,
    hs: 30,
  },

  updatedAt: "2026-08-24",
};