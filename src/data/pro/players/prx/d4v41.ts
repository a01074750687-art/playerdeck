import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const d4v41Career: ProPlayerCareer = {
  joinedAt: "2021-02",

  previousTeams: [],

  highlights: [
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

const d4v41Awards: ProPlayerAward[] = [
  {
    year: 2023,
    title: "VCT 2023: Pacific League",
    result: "올해의 척후대",
  },
  {
    year: 2025,
    title: "VCT 2025: Pacific Stage 2",
    result: "올해의 감시자",
  },
  {
    year: 2025,
    title: "VALORANT Radiant International Invitational",
    result: "MVP",
  },
];

export const d4v41: ProPlayer = {
  id: "player-d4v41",
  slug: "d4v41",

  nickname: "d4v41",
  realName: "Ahmad Khalish Rusyaidee bin Nordin",

  countryCode: "MY",
  countryName: "Malaysia",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/prx/d4v41.png",

  team: getRequiredTeam("paper-rex"),

  primaryRole: "Sentinel",
  roles: createRoles("Sentinel", ["Initiator"]),

  mainAgents: ["Viper", "Chamber", "Killjoy"],

  riotAccounts: [
    {
      name: "PRX d4v41",
      tag: "556",

      verification: {
        verifiedAt: "2026-08-16",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/PRX%20d4v41%23556/overview",
      },
    },
  ],

  career: d4v41Career,
  awards: d4v41Awards,

  settings: {
    dpi: 900,
    sensitivity: 0.23,
    scopedSensitivity: 1.15,
    adsSensitivity: null,
    edpi: 207,
    pollingRate: 2000,
    resolution: "1280x1024",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net / BestGamers",
      sourceUrl: "https://prosettings.net/players/d4v41/",
    },
  },

  crosshair: {
    code: "0;P;c;8;o;1;d;1;b;1;z;1;0t;1;0l;1;0o;0;0a;1;0f;0;1b;0",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/d4v41/",
    },
  },

  gear: {
    mouse: "VAXEE ZYGEN NP-01S V2 Wireless Fluorescent Green",
    mousepad: "Pulsar Pro Series D4v41",
    keyboard: "Arbiter Studio Polar 65",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-d4v41/",
    },
  },

  stats: {
    rating: 1.09,
    acs: 206,
    kd: 1.23,
    kast: 75,
    adr: 135.1,
    hs: 33,
  },

  updatedAt: "2026-08-24",
};