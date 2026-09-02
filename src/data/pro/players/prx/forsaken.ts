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
      title: "VALORANT Masters Reykjavík 2022",
      result: "4위",
    },
    {
      year: 2022,
      title: "VALORANT Masters Copenhagen 2022",
      result: "준우승",
    },
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

const forsakenAwards: ProPlayerAward[] = [
  {
    year: 2023,
    title: "VCT 2023: Pacific League",
    result: "올해의 감시자",
  },
  {
    year: 2024,
    title: "VALORANT Radiant Asia Invitational",
    result: "결승 MVP",
  },
  {
    year: 2025,
    title: "VALORANT Masters Toronto 2025",
    result: "MVP",
  },
  {
    year: 2025,
    title: "VCT 2025: Pacific Stage 2",
    result: "올해의 선수",
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

  profileImageUrl:
    "/images/valorant/players/prx/forsaken.png",

  team: getRequiredTeam("paper-rex"),

  primaryRole: "Flex",
  roles: createRoles("Flex", [
    "Controller",
    "Initiator",
    "Duelist",
  ]),

  mainAgents: ["Omen", "Harbor", "Yoru"],

  riotAccounts: [
    {
      name: "PRX f0rsakeN",
      tag: "bibii",
      puuid: "9f245fd0-1813-546a-be01-08c2145c7dd2",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "OP.GG",
        sourceUrl:
          "https://op.gg/valorant/profile/PRX%20f0rsakeN-bibii",
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
      verifiedAt: "2026-08-24",
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
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/f0rsaken/",
    },
  },

  gear: {
    mouse: "Pulsar Susanto-X",
    mousepad: "Pulsar eS Saturn Pro Red",
    keyboard: "Wooting 60HE v2 Silver",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-f0rsaken/",
    },
  },

  stats: {
    rating: 0.97,
    acs: 213,
    kd: 0.98,
    kast: 70,
    adr: 135.8,
    hs: 33,
  },

  updatedAt: "2026-08-24",
};