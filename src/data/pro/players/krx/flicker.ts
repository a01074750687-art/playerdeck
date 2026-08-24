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
      teamName: "DRX",
      joinedAt: "2025-07",
      leftAt: "2026-01",
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
      title: "VALORANT Challengers 2026 Japan: Split 1",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Challengers 2026 Japan: Split 2",
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

  primaryRole: "Duelist",
  roles: createRoles("Duelist"),

  mainAgents: ["Waylay", "Neon"],

  riotAccounts: [
    {
      name: "DRX Flicker",
      tag: "V S",

      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/DRX%20Flicker%23V%20S/overview",
      },
    },
  ],

  career: flickerCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.1,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 160,
    pollingRate: 4000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-flicker/",
    },
  },

  crosshair: {
    code: "0;s;1;P;c;5;h;0;f;0;0l;4;0o;0;0a;1;0f;0;1b;0;S;c;0;o;1",
    color: "Cyan",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
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
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-flicker/",
    },
  },

  stats: {
    rating: 0.67,
    acs: 149,
    kd: 0.63,
    kast: 65,
    adr: 104.1,
    hs: 22,
  },

  updatedAt: "2026-08-24",
};