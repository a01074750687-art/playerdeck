import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const flickerCareer: ProPlayerCareer = {
  joinedAt: "2026-07",

  previousTeams: [
    {
      teamName: "DRX Academy",
      joinedAt: "2023-09",
      leftAt: "2025-07",
    },
    {
      teamName: "CREST GAMING Zst",
      joinedAt: "2026-01",
      leftAt: "2026-07",
    },
  ],

  highlights: [
    {
      year: 2025,
      title: "Global Esports Fight Night: Academy",
      result: "우승",
    },
    {
      year: 2025,
      title: "GoNxt Asia Clash Invitational",
      result: "준우승",
    },
    {
      year: 2025,
      title: "TEN Global Invitational",
      result: "준우승",
    },
    {
      year: 2026,
      title: "Challengers Japan Split 1",
      result: "우승",
    },
    {
      year: 2026,
      title: "Challengers Japan Split 2",
      result: "5~6위",
    },
  ],
};

export const flicker: ProPlayer = {
  id: "player-flicker",
  slug: "flicker",

  nickname: "Flicker",
  realName: "Yoon Tae-hee",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("krx"),

  primaryRole: "Flex",
  roles: createRoles("Flex", ["Initiator", "Sentinel"]),

  mainAgents: ["Breach", "Fade", "Cypher"],

  career: flickerCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.1,
    scopedSensitivity: 0.9,
    adsSensitivity: 1,
    edpi: 160,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/flicker/",
    },
  },

  crosshair: {
    code: "0;s;1;P;c;5;h;0;f;0;0l;4;0o;0;0a;1;0f;0;1b;0;S;c;0;o;1",
    color: "Cyan",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/flicker/",
    },
  },

  gear: {
    mouse: "Lamzu Maya X Purple Shadow",
    mousepad: "Pulsar eS Saturn Pro Red",
    keyboard: "Wooting 60HE+",
    monitor: "ZOWIE XL2546K",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/flicker/",
    },
  },

  stats: {
    rating: 1.07,
    acs: 201.5,
    kd: 1.05,
    kast: 75,
    adr: 131.6,
    hs: 32,
  },

  updatedAt: null,
};