import type { ProTeam } from "../types/proPlayer";

/**
 * Riot Games VALORANT Esports 이미지 서버의 공식 팀 로고입니다.
 *
 * 현재는 외부 URL을 사용합니다.
 * 추후 안정적인 배포를 위해 src/assets/pro-teams 폴더에
 * 로컬 이미지로 저장해 교체할 수 있습니다.
 */
const TEAM_LOGOS = {
  dfm:
    "https://static.lolesports.com/teams/1675669923678_190px-DetonatioN_FocusMe_2022_darkmode1.png",

  krx:
    "https://static.lolesports.com/teams/1774420104898_.png",

  fullSense:
    "https://static.lolesports.com/teams/1705915075330_FULLSENSE.png",

  genG:
    "https://static.lolesports.com/teams/1775114509356_GENGLOGO_GOLD.png",

  globalEsports:
    "https://static.lolesports.com/teams/1677137854820_GERedandBlue-WhiteBG.png",

  nongshim:
    "https://static.lolesports.com/teams/1674219422693_NS_.png",

  paperRex:
    "https://static.lolesports.com/teams/1630018120582_paper-rex-2021.png",

  rrq:
    "https://static.lolesports.com/teams/1707306458590_LOGO_RRQ_orange.png",

  t1:
    "https://static.lolesports.com/teams/1677137430839_T1_infoboximage1.png",

  teamSecret:
    "https://static.lolesports.com/teams/1636575342048_team-secret-on-dark.png",

  zeta:
    "https://static.lolesports.com/teams/1630017899610_zeta.png",

  varrel:
    "https://static.lolesports.com/teams/1706170514062_VARREL_darkmode.png",
} as const;

/**
 * 2026 VCT Pacific 프로 팀 데이터입니다.
 */
export const proTeams: ProTeam[] = [
  {
    id: "team-gen-g",
    slug: "gen-g",

    name: "Gen.G",
    shortName: "GEN",

    region: "Pacific",
    countryName: "South Korea",

    logoUrl: TEAM_LOGOS.genG,

    primaryColor: "#F5C400",
    secondaryColor: "#111111",

    foundedYear: 2017,

    headCoach: {
      nickname: "solo",
      realName: "Kang Geun-chul",
    },

    assistantCoaches: [
      {
        nickname: "HSK",
        realName: "Kim Hae-seong",
      },
      {
        nickname: "peri",
        realName: "Jung Bum-ki",
      },
    ],

    achievements: [
      {
        year: 2025,
        title: "Esports World Cup 2025",
        result: "3rd Place",
      },
      {
        year: 2025,
        title: "VCT 2025 Pacific Stage 1",
        result: "Runner-up",
      },
      {
        year: 2024,
        title: "VCT 2024 Masters Shanghai",
        result: "Champion",
      },
      {
        year: 2024,
        title: "VCT 2024 Pacific Stage 2",
        result: "Champion",
      },
      {
        year: 2024,
        title: "VCT 2024 Masters Madrid",
        result: "Runner-up",
      },
      {
        year: 2024,
        title: "VCT 2024 Pacific Kickoff",
        result: "Champion",
      },
    ],
  },

  {
    id: "team-t1",
    slug: "t1",

    name: "T1",
    shortName: "T1",

    region: "Pacific",
    countryName: "South Korea",

    logoUrl: TEAM_LOGOS.t1,

    primaryColor: "#E2012D",
    secondaryColor: "#111111",

    foundedYear: 2004,

    headCoach: {
      nickname: "KDG",
      realName: "Kim Dong-gun",
    },

    assistantCoaches: [
      {
        nickname: "CheongGak",
        realName: "Lee Il-ho",
      },
    ],

    achievements: [
      {
        year: 2026,
        title: "VCT 2026 Pacific Kickoff",
        result: "Runner-up",
      },
      {
        year: 2026,
        title: "VCT 2026 Pacific Stage 1",
        result: "Top 4",
      },
      {
        year: 2025,
        title: "VCT 2025 Masters Bangkok",
        result: "Champion",
      },
    ],
  },

  {
    id: "team-krx",
    slug: "krx",

    name: "Kiwoom DRX",
    shortName: "KRX",

    region: "Pacific",
    countryName: "South Korea",

    logoUrl: TEAM_LOGOS.krx,

    primaryColor: "#2563EB",
    secondaryColor: "#0F172A",

    foundedYear: 2012,

    headCoach: {
      nickname: "termi",
      realName: "Pyeon Seon-ho",
    },

    assistantCoaches: [
      {
        nickname: "glow",
        realName: "Kim Min-soo",
      },
      {
        nickname: "Argency",
        realName: "Kwon Soon-woo",
      },
    ],

    achievements: [
      {
        year: 2025,
        title: "VALORANT Champions Paris",
        result: "3rd Place",
      },
      {
        year: 2025,
        title: "HERO ESPORTS Asian Champions League",
        result: "Champion",
      },
      {
        year: 2024,
        title: "VCT 2024 Pacific Stage 2",
        result: "Runner-up",
      },
      {
        year: 2023,
        title: "VCT 2023 Pacific League",
        result: "Runner-up",
      },
      {
        year: 2022,
        title: "VALORANT Champions Istanbul",
        result: "3rd Place",
      },
      {
        year: 2022,
        title: "VCT 2022 Korea Stage 2 Challengers",
        result: "Champion",
      },
      {
        year: 2022,
        title: "VCT 2022 Korea Stage 1 Challengers",
        result: "Champion",
      },
    ],
  },

  {
    id: "team-paper-rex",
    slug: "paper-rex",

    name: "Paper Rex",
    shortName: "PRX",

    region: "Pacific",
    countryName: "Singapore",

    logoUrl: TEAM_LOGOS.paperRex,

    primaryColor: "#D946EF",
    secondaryColor: "#EC4899",

    foundedYear: 2020,

    headCoach: {
      nickname: "alecks",
      realName: "Alexandre Salle",
    },

    assistantCoaches: [
      {
        nickname: "Wendler",
        realName: "Ashton Wendler",
      },
    ],

    achievements: [
      {
        year: 2026,
        title: "VCT 2026 Masters London",
        result: "Runner-up",
      },
      {
        year: 2026,
        title: "VCT 2026 Pacific Stage 1",
        result: "Champion",
      },
      {
        year: 2026,
        title: "VCT 2026 Masters Santiago",
        result: "Runner-up",
      },
      {
        year: 2025,
        title: "VCT 2025 Pacific Stage 2",
        result: "Champion",
      },
      {
        year: 2025,
        title: "VCT 2025 Masters Toronto",
        result: "Champion",
      },
      {
        year: 2025,
        title: "VALORANT Champions Paris",
        result: "Top 4",
      },
      {
        year: 2024,
        title: "VCT 2024 Pacific Stage 1",
        result: "Champion",
      },
      {
        year: 2024,
        title: "VCT 2024 Masters Madrid",
        result: "3rd Place",
      },
      {
        year: 2023,
        title: "VALORANT Champions Los Angeles",
        result: "Runner-up",
      },
      {
        year: 2023,
        title: "VCT 2023 Masters Tokyo",
        result: "3rd Place",
      },
      {
        year: 2023,
        title: "VCT 2023 Pacific League",
        result: "Champion",
      },
      {
        year: 2022,
        title: "VCT 2022 Masters Copenhagen",
        result: "Runner-up",
      },
    ],
  },

  {
    id: "team-rrq",
    slug: "rrq",

    name: "Rex Regum Qeon",
    shortName: "RRQ",

    region: "Pacific",
    countryName: "Indonesia",

    logoUrl: TEAM_LOGOS.rrq,

    primaryColor: "#F97316",
    secondaryColor: "#111111",

    foundedYear: 2013,

    headCoach: {
      nickname: "Jovi",
      realName: "Jovanni Vera",
    },

    assistantCoaches: [
      {
        nickname: "Warbirds",
        realName: "Evan Olzem",
      },
    ],

    achievements: [
      {
        year: 2026,
        title: "VCT 2026 Pacific Kickoff",
        result: "Top 4",
      },
      {
        year: 2025,
        title: "VCT 2025 Pacific Stage 2",
        result: "Runner-up",
      },
      {
        year: 2025,
        title: "VCT 2025 Pacific Stage 1",
        result: "Champion",
      },
      {
        year: 2022,
        title: "Predator League Philippines",
        result: "Champion",
      },
    ],
  },

  {
    id: "team-secret",
    slug: "team-secret",

    name: "Team Secret",
    shortName: "TS",

    region: "Pacific",
    countryName: "Philippines",

    logoUrl: TEAM_LOGOS.teamSecret,

    primaryColor: "#111827",
    secondaryColor: "#FFFFFF",

    foundedYear: 2014,

    headCoach: {
      nickname: "Spin",
      realName: "Peter Bradford",
    },

    assistantCoaches: [],

    achievements: [
      {
        year: 2024,
        title: "Predator League Asia Pacific",
        result: "Champion",
      },
      {
        year: 2022,
        title: "VCT 2022 Philippines Stage 2 Challengers",
        result: "Champion",
      },
      {
        year: 2022,
        title: "VCT 2022 APAC Stage 2 Challengers",
        result: "3rd Place",
      },
    ],
  },

  {
    id: "team-global-esports",
    slug: "global-esports",

    name: "Global Esports",
    shortName: "GE",

    region: "Pacific",
    countryName: "India",

    logoUrl: TEAM_LOGOS.globalEsports,

    primaryColor: "#EF4444",
    secondaryColor: "#2563EB",

    foundedYear: 2017,

    headCoach: {
      nickname: "Platoon",
      realName: "Daniel Zhou",
    },

    assistantCoaches: [
      {
        nickname: "Aimix Strange",
        realName: "Derren dela Cruz",
      },
    ],

    achievements: [
      {
        year: 2026,
        title: "VCT 2026 Pacific Stage 1",
        result: "3rd Place",
      },
      {
        year: 2026,
        title: "Esports World Cup Pacific Qualifier Stage 2",
        result: "Runner-up",
      },
      {
        year: 2022,
        title: "Skyesports Champions Series",
        result: "Champion",
      },
      {
        year: 2021,
        title: "VALORANT Conquerors Championship",
        result: "Champion",
      },
      {
        year: 2021,
        title: "WD Black Cup Season 2",
        result: "Champion",
      },
    ],
  },

  {
    id: "team-full-sense",
    slug: "full-sense",

    name: "FULL SENSE",
    shortName: "FS",

    region: "Pacific",
    countryName: "Thailand",

    logoUrl: TEAM_LOGOS.fullSense,

    primaryColor: "#F97316",
    secondaryColor: "#111111",

    foundedYear: 2020,

    headCoach: {
      nickname: "FrosT",
      realName: "Hector Rosario",
    },

    assistantCoaches: [
      {
        nickname: "THEELOVEFAMILY",
        realName: "Thanaphat Limpaphan",
      },
      {
        nickname: "Sushiboys",
        realName: "Panyawat Subsiriroj",
      },
    ],

    achievements: [
      {
        year: 2026,
        title: "VCT 2026 Masters London",
        result: "Top 10",
      },
      {
        year: 2025,
        title: "SOOP League Southeast Asian Qualifier",
        result: "Champion",
      },
      {
        year: 2025,
        title: "Premier League 2026 Thailand",
        result: "Champion",
      },
      {
        year: 2021,
        title: "VCT 2021 APAC Last Chance Qualifier",
        result: "Champion",
      },
      {
        year: 2021,
        title: "VCT 2021 Thailand Stage 3 Challengers",
        result: "Champion",
      },
    ],
  },

  {
    id: "team-dfm",
    slug: "dfm",

    name: "DetonatioN FocusMe",
    shortName: "DFM",

    region: "Pacific",
    countryName: "Japan",

    logoUrl: TEAM_LOGOS.dfm,

    primaryColor: "#2563EB",
    secondaryColor: "#FFFFFF",

    foundedYear: 2012,

    headCoach: {
      nickname: "Vorz",
      realName: "Kakeru Ikarashi",
    },

    assistantCoaches: [
      {
        nickname: "Melofovia",
        realName: "Hirotaka Okazaki",
      },
      {
        nickname: "NorthernLights",
        realName: "Tsubasa Ando",
      },
    ],

    achievements: [
      {
        year: 2026,
        title: "VCT 2026 Pacific Stage 1",
        result: "Top 6",
      },
      {
        year: 2024,
        title: "VALORANT Radiant Asia Invitational",
        result: "Runner-up",
      },
      {
        year: 2023,
        title: "VALORANT Challengers Japan Split 2",
        result: "Top 4",
      },
    ],
  },

  {
    id: "team-zeta",
    slug: "zeta",

    name: "ZETA DIVISION",
    shortName: "ZETA",

    region: "Pacific",
    countryName: "Japan",

    logoUrl: TEAM_LOGOS.zeta,

    primaryColor: "#F3F4F6",
    secondaryColor: "#111111",

    foundedYear: 2018,

    headCoach: {
      nickname: "ryota-",
      realName: "Ryota Okayama",
    },

    assistantCoaches: [
      {
        nickname: "XQQ",
        realName: "Hibiki Motoyama",
      },
    ],

    achievements: [
      {
        year: 2025,
        title: "Red Bull Home Ground 2025",
        result: "3rd Place",
      },
      {
        year: 2023,
        title: "VCT 2023 Pacific Last Chance Qualifier",
        result: "Champion",
      },
      {
        year: 2022,
        title: "VCT 2022 Masters Reykjavík",
        result: "3rd Place",
      },
      {
        year: 2022,
        title: "VCT 2022 Japan Stage 1 Challengers",
        result: "Champion",
      },
      {
        year: 2021,
        title: "VCT 2021 Japan Stage 3 Challengers",
        result: "Champion",
      },
    ],
  },

  {
    id: "team-nongshim-redforce",
    slug: "nongshim-redforce",

    name: "Nongshim RedForce",
    shortName: "NS",

    region: "Pacific",
    countryName: "South Korea",

    logoUrl: TEAM_LOGOS.nongshim,

    primaryColor: "#DC2626",
    secondaryColor: "#111111",

    foundedYear: 2020,

    headCoach: {
      nickname: "SilKanoN",
      realName: "Kim Gyeong-min",
    },

    assistantCoaches: [
      {
        nickname: "yoman",
        realName: "Chae Young-moon",
      },
      {
        nickname: "Sungmin",
        realName: "So Seong-min",
      },
    ],

    achievements: [
      {
        year: 2026,
        title: "Esports World Cup 2026",
        result: "3rd Place",
      },
      {
        year: 2026,
        title: "VALORANT Masters Santiago",
        result: "Champion",
      },
      {
        year: 2026,
        title: "VCT 2026 Pacific Kickoff",
        result: "Champion",
      },
      {
        year: 2025,
        title: "VCT 2025 Pacific Ascension",
        result: "Runner-up",
      },
      {
        year: 2024,
        title: "WDG Challengers Korea Split 3",
        result: "Champion",
      },
      {
        year: 2024,
        title: "WDG Challengers Korea Split 2",
        result: "Runner-up",
      },
    ],
  },

  {
    id: "team-varrel",
    slug: "varrel",

    name: "VARREL",
    shortName: "VL",

    region: "Pacific",
    countryName: "Japan",

    logoUrl: TEAM_LOGOS.varrel,

    primaryColor: "#14B8A6",
    secondaryColor: "#111827",

    foundedYear: 2022,

    headCoach: {
      nickname: "TK9",
      realName: "Goo Tae-kyun",
    },

    assistantCoaches: [],

    achievements: [
      {
        year: 2026,
        title: "Esports World Cup Pacific Qualifier Stage 1",
        result: "Runner-up",
      },
    ],
  },
];

export const getProTeamBySlug = (
  slug: string,
): ProTeam | null => {
  return proTeams.find((team) => team.slug === slug) ?? null;
};

export const getRequiredProTeam = (
  slug: string,
): ProTeam => {
  const team = getProTeamBySlug(slug);

  if (!team) {
    throw new Error(
      `프로 팀 데이터를 찾을 수 없습니다: ${slug}`,
    );
  }

  return team;
};