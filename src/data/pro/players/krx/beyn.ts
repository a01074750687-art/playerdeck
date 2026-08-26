import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const beynCareer: ProPlayerCareer = {
  joinedAt: "2025-01",

  previousTeams: [
    {
      teamName: "F4Q",
      joinedAt: "2022-04",
      leftAt: "2022-10",
    },
    {
      teamName: "DRX Academy",
      joinedAt: "2022-10",
      leftAt: "2023-01",
    },
    {
      teamName: "Maru Gaming",
      joinedAt: "2023-01",
      leftAt: "2023-06",
    },
    {
      teamName: "DRX Academy",
      joinedAt: "2023-06",
      leftAt: "2024-03",
    },
    {
      teamName: "DRX",
      joinedAt: "2024-03",
      leftAt: "2024-11",
    },
  ],

  highlights: [
    {
      year: 2023,
      title: "VALORANT Challengers 2023 Korea: Split 1",
      result: "3위",
    },
    {
      year: 2023,
      title: "VALORANT Challengers 2023 Korea: Split 2",
      result: "3위",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Stage 1",
      result: "4위",
    },
    {
      year: 2024,
      title: "VCT 2024: Pacific Stage 2",
      result: "준우승",
    },
    {
      year: 2024,
      title: "VALORANT Champions 2024",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "VCT 2025: Pacific Kickoff",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Masters Bangkok 2025",
      result: "5~6위",
    },
    {
      year: 2025,
      title: "Asian Champions League 2025",
      result: "우승",
    },
    {
      year: 2025,
      title: "VALORANT Champions 2025",
      result: "3위",
    },
    {
      year: 2026,
      title: "VCT 2026: Pacific Stage 1",
      result: "5~6위",
    },
  ],
};

export const beyn: ProPlayer = {
  id: "player-beyn",
  slug: "beyn",

  nickname: "BeYN",
  realName: "Kang Ha-bin",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/krx/beyn.png",


  team: getRequiredTeam("krx"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator"),

  mainAgents: ["Sova", "Fade", "Skye"],

  riotAccounts: [
    {
      name: "DRX Beyn",
      tag: "V S",

      verification: {
        verifiedAt: "2026-08-14",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/profile/riot/DRX%20BeYN%23V%20S/overview",
      },
    },
  ],

  career: beynCareer,

  settings: {
    dpi: 400,
    sensitivity: 0.4,
    scopedSensitivity: 0.9,
    adsSensitivity: 1,
    edpi: 160,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/beyn/",
    },
  },

  crosshair: {
    code: "0;P;c;5;h;0;0l;3;0o;2;0a;1;0f;0;1b;0",
    color: "Cyan",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/beyn/",
    },
  },

  gear: {
    mouse: "Logitech G Pro X2 SUPERSTRIKE Lunar Eclipse",
    mousepad: "ARTISAN NINJA FX Zero XSoft Black",
    keyboard: "Wooting 80HE Black",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers / ProSettings.net",
      sourceUrl: "https://b-gamers.net/valorant-beyn/",
    },
  },

  stats: {
    rating: 1.01,
    acs: 187,
    kd: 0.97,
    kast: 73,
    adr: 124.9,
    hs: 30,
  },

  updatedAt: "2026-08-24",
};