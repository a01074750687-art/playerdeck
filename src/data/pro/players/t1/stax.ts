import type {
  ProPlayer,
  ProPlayerAward,
  ProPlayerCareer,
} from "../../../../types/proPlayer";
import {
  createRoles,
  getRequiredTeam,
} from "../../common/helpers";

const staxCareer: ProPlayerCareer = {
  joinedAt: "2024-06",

  previousTeams: [
    {
      teamName: "Vision Strikers",
      joinedAt: "2020-06",
      leftAt: "2022-01",
    },
    {
      teamName: "DRX",
      joinedAt: "2022-01",
      leftAt: "2024-06",
    },
  ],

  highlights: [
    {
      year: 2020,
      title: "First Strike Korea",
      result: "우승",
    },
    {
      year: 2021,
      title: "VCT Korea Stage 1 Masters",
      result: "우승",
    },
    {
      year: 2022,
      title: "Champions Istanbul",
      result: "3위",
    },
    {
      year: 2023,
      title: "VCT Pacific",
      result: "준우승",
    },
    {
      year: 2025,
      title: "Masters Bangkok",
      result: "우승",
    },
  ],
};

const staxAwards: ProPlayerAward[] = [
  {
    year: 2023,
    title: "VCT 2023 End of Season Awards",
    result: "올해의 MVP",
  },
];

export const stax: ProPlayer = {
  id: "player-stax",
  slug: "stax",

  nickname: "stax",
  realName: "Kim Gu-taek",

  countryCode: "KR",
  countryName: "South Korea",

  region: "Pacific",
  status: "Active",

  profileImageUrl: null,

  team: getRequiredTeam("t1"),

  primaryRole: "Initiator",
  roles: createRoles("Initiator"),

  mainAgents: ["Breach", "KAY/O", "Skye"],

  career: staxCareer,
  awards: staxAwards,

  settings: {
    dpi: 400,
    sensitivity: 0.6,
    scopedSensitivity: 1,
    adsSensitivity: 1,
    edpi: 240,
    pollingRate: 1000,
    resolution: "1920x1080",

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/stax/",
    },
  },

  crosshair: {
    code: "0;P;c;5;h;0;0l;4;0o;2;0a;1;0f;0;1b;0",
    color: "Cyan",
    outlines: false,
    centerDot: false,

    verification: {
      verifiedAt: "2026-08-02",
      sourceName: "ProSettings.net",
      sourceUrl: "https://prosettings.net/players/stax/",
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
      sourceUrl: "https://prosettings.net/players/stax/",
    },
  },

  stats: {
    rating: 1.06,
    acs: 194.7,
    kd: 1.03,
    kast: 75,
    adr: 126.9,
    hs: 32,
  },

  updatedAt: null,
};