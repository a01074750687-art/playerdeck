import type {
  ProPlayer,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const killuaCareer: ProPlayerCareer = {
  joinedAt: "2025-12",

  previousTeams: [
    {
      teamName: "FW Esports",
      joinedAt: "2021-06",
      leftAt: "2022-12",
    },
    {
      teamName: "FULL SENSE",
      joinedAt: "2022-12",
      leftAt: "2023-12",
    },
    {
      teamName: "Made in Thailand",
      joinedAt: "2023-12",
      leftAt: "2025-01",
    },
    {
      teamName: "FULL SENSE",
      joinedAt: "2025-01",
      leftAt: "2025-02",
    },
    {
      teamName: "TALON",
      joinedAt: "2025-02",
      leftAt: "2025-11",
    },
  ],

  highlights: [
    {
      year: 2022,
      title: "VCT Thailand Stage 2 Challengers",
      result: "준우승",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Thailand Split 2",
      result: "우승",
    },
    {
      year: 2024,
      title: "Challengers League 2024 Southeast Asia Stage 3",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Challengers 2025 Southeast Asia Stage 1",
      result: "우승",
    },
    {
      year: 2026,
      title: "VCT Pacific Stage 1",
      result: "준우승",
    },
  ],
};

export const killua: ProPlayer = {
  id: "player-killua",
  slug: "killua",

  nickname: "Killua",
  realName: "Tanate Teerasawad",

  countryCode: "TH",
  countryName: "Thailand",

  region: "Pacific",
  status: "Active",

  profileImageUrl:
    "/images/valorant/players/fs/killua.png",

  team: getRequiredTeam("full-sense"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator"),
  mainAgents: ["Fade", "Sova", "Skye"],

  riotAccounts: [
    {
      name: "Fs killua",
      tag: "hrdm",

      verification: {
        verifiedAt: "2026-08-24",
        sourceName: "Tracker Network",
        sourceUrl:
          "https://tracker.gg/valorant/leaderboards/ranked/pc/default?act=dcde7346-4085-de4f-c463-2489ed47983b&page=1&platform=pc&region=ap",
      },
    },
  ],

  career: killuaCareer,

  settings: {
    dpi: 800,
    sensitivity: 0.35,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 280,
    pollingRate: null,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-killua/",
    },
  },

  crosshair: {
    code: "0;P;o;1;d;1;0b;0;1b;0",
    color: "White",
    outlines: true,
    centerDot: true,

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BetaGamer",
      sourceUrl: "https://www.betagamer.net/archives/7157",
    },
  },

  gear: {
    mouse: "Razer Viper V3 Pro Faker Edition",
    mousepad: "Artisan Ninja FX Hayate Otsu Black",
    keyboard: "Wooting 60HE",
    monitor: "ZOWIE XL2566K",

    verification: {
      verifiedAt: "2026-08-24",
      sourceName: "BestGamers",
      sourceUrl: "https://b-gamers.net/valorant-killua/",
    },
  },

  stats: {
    rating: 1.03,
    acs: 193,
    kd: 0.98,
    kast: 76,
    adr: 131.5,
    hs: 34,
  },

  updatedAt: "2026-08-24",
};