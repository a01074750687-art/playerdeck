import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const karonCareer: ProPlayerCareer = {
  joinedAt: "2025-10",

  previousTeams: [
    {
      teamName: "Gen.G Esports",
      joinedAt: "2023-11",
      leftAt: "2025-10",
    },
  ],

  highlights: [
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
      title: "VCT 2025: Pacific Stage 1",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Toronto 2025",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "Esports World Cup 2025",
      result: "3위",
    },
  ],
};

const karonAwards: ProPlayerAward[] = [
  {
    year: 2024,
    title: "VCT 2024: Pacific Kickoff",
    result: "MVP",
  },
  {
    year: 2024,
    title: "VCT 2024: Pacific Stage 2",
    result: "Controller of the Year",
  },
];

export const karon: ProPlayer = {
  id: "player-karon",
  slug: "karon",

  nickname: "Karon",
  realName: "Kim Won-tae",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/gen/karon.png",

  team: getRequiredTeam("gen-g"),

  primaryRole: "Controller",
  roles: createRoles("Controller"),

  mainAgents: ["Omen", "Astra", "Harbor"],

  riotAccounts: [
    {
      name: "Peter Parker",
      tag: "karon",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/Peter%20Parker%23Karon"
      },
    },
  ],

  career: karonCareer,
  awards: karonAwards,

  settings: {
    dpi: 800,
    sensitivity: 0.2,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 160,
    pollingRate: null,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-karon/",
    },
  },

  crosshair: {
    code: "0;s;1;P;o;1;d;1;0b;0;1b;0;S;d;0",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-karon/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X Superlight Magenta",
    mousepad: "X-raypad Aqua Control Plus Wave Night",
    keyboard: "Wooting 60HE+ White",
    monitor: "ZOWIE XL2566X+",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net / BestGamers",
      sourceUrl: "https://prosettings.net/players/karon/",
    },
  },

  stats: {
    rating: 1.12,
    acs: 206,
    kd: 1.12,
    kast: 74,
    adr: 129.3,
    hs: 38,
  },

  updatedAt: "2026-08-24",
};