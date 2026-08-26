import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const jingggCareer: ProPlayerCareer = {
  joinedAt: "2021-09",

  previousTeams: [
    {
      teamName: "Reality Rift",
      joinedAt: "2020-11",
      leftAt: "2021-03",
    },
    {
      teamName: "Team SMG",
      joinedAt: "2021-06",
      leftAt: "2021-09",
    },
  ],

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

const jingggAwards: ProPlayerAward[] = [
  {
    year: 2021,
    title: "The Esports Club Showdown",
    result: "MVP",
  },
  {
    year: 2024,
    title: "VCT 2024: Pacific Stage 1",
    result: "결승 MVP",
  },
];

export const jinggg: ProPlayer = {
  id: "player-jinggg",
  slug: "jinggg",

  nickname: "Jinggg",
  realName: "Wang Jing Jie",

  countryCode: "SG",
  countryName: "Singapore",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/prx/jinggg.png",

  team: getRequiredTeam("paper-rex"),

  primaryRole: "Duelist",
  roles: createRoles("Duelist", ["Controller"]),

  mainAgents: ["Raze", "Sage", "Omen"],

  riotAccounts: [
    {
      name: "PRX Jinggg",
      tag: "Jing",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "OP.GG",
        sourceUrl:
          "https://op.gg/valorant/profile/PRX%20Jinggg-Jing",
      },
    },
  ],

  career: jingggCareer,
  awards: jingggAwards,

  settings: {
    dpi: 1600,
    sensitivity: 0.195,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 312,
    pollingRate: 2000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net / BestGamers",
      sourceUrl: "https://prosettings.net/players/jinggg/",
    },
  },

  crosshair: {
    code: "0;s;1;P;c;5;o;1;f;0;m;1;0t;3;0l;0;0v;1;0g;1;0o;0;0a;1;0f;0;1t;1;1l;4;1g;1;1o;0;1a;1;1m;0;1f;0;S;c;5;o;1",
    color: "Cyan",
    outlines: true,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/jinggg/",
    },
  },

  gear: {
    mouse: "Pulsar Pro Series Jinggg-X",
    mousepad: "ARTISAN NINJA FX Hayate Otsu V2 XSoft Black",
    keyboard: "Wooting 60HE v2 Silver",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net / BestGamers",
      sourceUrl: "https://prosettings.net/players/jinggg/",
    },
  },

  stats: {
    rating: 0.91,
    acs: 192,
    kd: 0.89,
    kast: 72,
    adr: 128.8,
    hs: 27,
  },

  updatedAt: "2026-08-24",
};