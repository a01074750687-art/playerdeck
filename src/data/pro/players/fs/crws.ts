import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import { createRoles } from "../../common/helpers";

const crwsCareer: ProPlayerCareer = {
  previousTeams: [
    {
      teamName: "X10 Esports",
      joinedAt: "2020-12",
      leftAt: "2022-01",
    },
    {
      teamName: "XERXIA Esports",
      joinedAt: "2022-01",
      leftAt: "2022-10",
    },
    {
      teamName: "TALON",
      joinedAt: "2022-10",
      leftAt: "2025-11",
    },
    {
      teamName: "FULL SENSE",
      joinedAt: "2026-04",
      leftAt: "2026-08",
    },
  ],

  highlights: [
    {
      year: 2021,
      title: "VCT Southeast Asia Stage 1 Masters",
      result: "우승",
    },
    {
      year: 2021,
      title: "VCT Southeast Asia Stage 2 Challengers Finals",
      result: "우승",
    },
    {
      year: 2021,
      title: "VALORANT Champions 2021",
      result: "5~8위",
    },
    {
      year: 2022,
      title: "VCT Asia Pacific Stage 2 Challengers",
      result: "준우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "준우승",
    },
  ],
};

export const crws: ProPlayer = {
  id: "player-crws",
  slug: "crws",

  nickname: "Crws",
  realName: "Thanamethk Mahatthananuyut",

  countryCode: "TH",
  countryName: "Thailand",

  region: "Pacific",
  status: "Retired",

  profileImageUrl:
    "/images/valorant/players/fs/crws.png",
    
  team: null,

  primaryRole: "Flex",
  roles: createRoles("Flex", ["Controller", "Sentinel", "Initiator"]),
  mainAgents: ["Omen", "Viper", "Breach"],

  riotAccounts: [
    {
      name: "FS Crws",
      tag: "ssss",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/FS%20Crws%23ssss",
      },
    },
  ],

  career: crwsCareer,

  settings: {
    dpi: 1600,
    sensitivity: 0.1,
    scopedSensitivity: 1,
    adsSensitivity: null,
    edpi: 160,
    pollingRate: 1000,
    resolution: "1280x960",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/crws/",
    },
  },

  crosshair: {
    code: "0;P;c;5;h;0;0l;3;0o;1;0a;1;0f;0;1b;0",
    color: "Cyan",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/crws/",
    },
  },

  gear: {
    mouse: "Razer DeathAdder V3 HyperSpeed",
    mousepad: "Artisan Type-99 Matcha",
    keyboard: "Wooting 80HE TenZ Edition",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/crws/",
    },
  },

  stats: {
    rating: 0.89,
    acs: 156,
    kd: 0.78,
    kast: 68,
    adr: 104.2,
    hs: 24,
  },

  updatedAt: "2026-08-24",
};