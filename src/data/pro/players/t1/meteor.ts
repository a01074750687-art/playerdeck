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
      title: "VCT Japan Stage 2 Challengers",
      result: "우승",
    },
    {
      year: 2024,
      title: "VCT Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2024,
      title: "Masters Madrid",
      result: "준우승",
    },
    {
      year: 2024,
      title: "Masters Shanghai",
      result: "우승",
    },
    {
      year: 2025,
      title: "Masters Bangkok",
      result: "우승",
    },
  ],
};

const meteorAwards: ProPlayerAward[] = [
  {
    year: 2025,
    title: "Masters Bangkok",
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

  mainAgents: ["Killjoy", "Chamber", "Jett"],

  career: meteorCareer,
  awards: meteorAwards,

  settings: {
    dpi: 800,
    sensitivity: 0.3,
    scopedSensitivity: 1.25,
    adsSensitivity: 1,
    edpi: 240,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/meteor/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;1;d;1;f;0;0t;4;0l;1;0o;0;0a;1;0f;0;1b;0;S;c;0;o;1",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/meteor/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X2 Superlight ",
    mousepad: "Artisan Hayate Otsu V2 Soft Whine Red",
    keyboard: "Wooting 60HE v2 Silver",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/meteor/",
    },
  },

  stats: {
    rating: 1.2,
    acs: 222.8,
    kd: 1.24,
    kast: 76,
    adr: 145.2,
    hs: 30,
  },

  updatedAt: null,
};