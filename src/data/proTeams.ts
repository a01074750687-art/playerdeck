import type { ProTeam } from "../types/proPlayer";

import { TEAM_LOGOS } from "./teamLogos";

/**
 * 2026 VCT Pacific 프로 팀 데이터입니다.
 *
 * 팀의 기본 정보는 이 파일에서 관리합니다.
 *
 * 추후 추가할 수 있는 정보:
 * - foundedYear
 * - headCoach
 * - assistantCoaches
 * - achievements
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
  },

  {
    id: "team-nongshim-redforce",
    slug: "nongshim-redforce",
    name: "NONGSHIM REDFORCE",
    shortName: "NS",
    region: "Pacific",
    countryName: "South Korea",
    logoUrl: TEAM_LOGOS.nongshim,
    primaryColor: "#DC2626",
    secondaryColor: "#111111",
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
  },
];

/**
 * slug와 일치하는 팀 데이터를 반환합니다.
 *
 * 선수 데이터에서 문자열 slug를 실제 ProTeam 객체로
 * 연결하기 위해 사용합니다.
 */
export const getRequiredTeam = (slug: string): ProTeam => {
  const team = proTeams.find((item) => item.slug === slug);

  if (!team) {
    throw new Error(`프로 팀 데이터를 찾을 수 없습니다: ${slug}`);
  }

  return team;
};