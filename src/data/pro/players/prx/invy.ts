import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const invyCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "Hashira",
    },
    {
      teamName: "SV Empire",
    },
    {
      teamName: "Oasis Gaming",
    },
    {
      teamName: "Team Secret",
      joinedAt: "2022-11",
      leftAt: "2025-12",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "VCT Pacific",
      result: "5~6위",
    },
    {
      year: 2023,
      title: "VALORANT Champions Los Angeles",
      result: "9~12위",
    },
    {
      year: 2026,
      title: "VALORANT Masters Santiago",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "우승",
    },
    {
      year: 2026,
      title: "VALORANT Masters London",
      result: "준우승",
    },
  ],
};

export const invy: ProPlayer = {
  id: "player-invy",
  slug: "invy",

  nickname: "invy",
  realName: "Adrian Jiggs Aisa Reyes",

  countryCode: "PH",
  countryName: "Philippines",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("paper-rex"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator"),

  mainAgents: ["Sova", "Fade", "Skye"],

  career: invyCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.175,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 280,
    pollingRate: 4000,
    resolution: "1280x960",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/invy/",
    },
  },

  crosshair: {
    code: "0;P;c;5;h;0;0l;3;0o;2;0a;1;0f;0;1b;0",
    color: "Cyan",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/invy/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X2 Superlight",
    mousepad: "Pulsar eS Saturn Pro",
    keyboard: "Pulsar PCMK 2 HE TKL",
    monitor: "ZOWIE XL2566K+",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/invy/",
    },
  },

  stats: {
    rating: 1.13,
    acs: 213.7,
    kd: 1.12,
    kast: 77,
    adr: 139.1,
    hs: 30,
  },

  updatedAt: null,
};