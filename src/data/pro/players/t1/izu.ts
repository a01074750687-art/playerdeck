import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const izuCareer: ProPlayerCareer = {
  joinedAt: "2023-09",

  previousTeams: [
    {
      teamName: "Jadeite",
      joinedAt: "2022-09",
      leftAt: "2023-06",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "Challengers Japan Split 1",
      result: "준우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Kickoff",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Masters Bangkok",
      result: "우승",
    },
    {
      year: 2025,
      title: "VCT Pacific Stage 2",
      result: "4위",
    },
    {
      year: 2025,
      title: "Champions Paris",
      result: "9~12위",
    },
  ],
};

export const izu: ProPlayer = {
  id: "player-izu",
  slug: "izu",

  nickname: "iZu",
  realName: "Ham Woo-joo",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("t1"),

  primaryRole: "Flex",
  roles: createRoles("Flex", ["Duelist"]),

  mainAgents: ["Sova", "Chamber", "Yoru"],

  career: izuCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.28,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 224,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/izu/",
    },
  },

  crosshair: {
    code: "0;s;1;P;u;000000FF;o;1;s;0;0t;3;0l;1;0v;0;0g;1;0o;0;0a;1;0f;0;1t;1;1l;4;1g;1;1o;0;1a;1;1m;0;1f;0",
    color: "Black",
    outlines: true,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/izu/",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro Black",
    mousepad: "SteelSeries QcK Heavy",
    keyboard: "Wooting 60HE",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/izu/",
    },
  },

  stats: {
    rating: 1.12,
    acs: 211.3,
    kd: 1.11,
    kast: 75,
    adr: 138.4,
    hs: 31,
  },

  updatedAt: null,
};