import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const meteorCareer: ProPlayerCareer = {
  joinedAt: "2024-10",

  previousTeams: [
    {
      teamName: "TNL Esports",
      joinedAt: "2021-05",
      leftAt: "2022-01",
    },
    {
      teamName: "NORTHEPTION",
      joinedAt: "2022-02",
      leftAt: "2022-10",
    },
    {
      teamName: "Gen.G Esports",
      joinedAt: "2022-10",
      leftAt: "2024-10",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VCT 2022: Japan Stage 2 Challengers",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2024,
      title: "VALORANT Masters Madrid 2024",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Stage 1",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT Masters Shanghai 2024",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Stage 2",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Kickoff",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Bangkok 2025",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Stage 2",
      result: "4위",
    },
    {
      year: 2025,
      title: "VALORANT Champions 2025",
      result: "9~12위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Kickoff",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago 2026",
      result: "9~10위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Stage 1",
      result: "4위",
    },
  ],
};

const meteorAwards: ProPlayerAward[] = [
  {
    year: 2024,
    title: "VCT 2024: Pacific Stage 2",
    result: "올해의 감시자",
  },
  {
    year: 2025,
    title: "VALORANT Masters Bangkok 2025",
    result: "결승 MVP",
  },
];

export const meteor: ProPlayer = {
  id: "player-meteor",
  slug: "meteor",

  nickname: "Meteor",
  realName: "Kim Tae-o",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("t1"),

  primaryRole: "Sentinel",
  roles: createRoles("Sentinel", ["Duelist"]),

  mainAgents: ["Chamber", "Yoru", "Jett"],

  riotAccounts: [
    {
      name: "T1 Meteor",
      tag: "0617",

      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/T1%20Meteor%230617/overview",
      },
    },
  ],

  career: meteorCareer,
  awards: meteorAwards,

  settings: {
    dpi: 800,
    sensitivity: 0.2,
    scopedSensitivity: 1.3,
    adsSensitivity: 1,
    edpi: 160,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-Meteor/",
    },
  },

  crosshair: {
    code: "0;P;c;5;h;0;d;0;f;0;0b;1;0a;1;0l;4;0t;2;0o;2;0m;0;0f;0;1b;0",
    color: "Cyan",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-Meteor/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight 2 Cyan",
    mousepad: "ARTISAN NINJA FX Hayate Otsu Soft Wine Red",
    keyboard: "Wooting 60HE+",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-Meteor/",
    },
  },

  stats: {
    rating: 1.11,
    acs: 232,
    kd: 1.19,
    kast: 71,
    adr: 149.6,
    hs: 28,
  },

  updatedAt: "2026-08-24",
};