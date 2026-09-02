export type ProRegion =
  | "Pacific"
  | "Americas"
  | "EMEA"
  | "China";

export type ProPlayerRole =
  | "Duelist"
  | "Initiator"
  | "Controller"
  | "Sentinel"
  | "Flex";

export type ProPlayerStatus =
  | "Active"
  | "Inactive"
  | "Substitute"
  | "Retired";

export interface ProTeamStaffMember {
  nickname: string;
  realName?: string;
}

export interface ProTeamAchievement {
  title: string;
  result: string;
  year: number;
}

export interface ProTeam {
  id: string;
  slug: string;

  name: string;
  shortName: string;

  region: ProRegion;
  countryName: string;

  logoUrl: string | null;

  primaryColor: string;
  secondaryColor: string;

  foundedYear?: number;
  headCoach?: ProTeamStaffMember | null;
  assistantCoaches?: ProTeamStaffMember[];
  achievements?: ProTeamAchievement[];
}

export interface VerificationInfo {
  verifiedAt: string;
  sourceName: string;
  sourceUrl: string;
}

export interface ProPlayerRiotAccount {
  /**
   * Riot ID의 게임 이름 부분
   *
   * 예:
   * - t3xture
   * - Meteor
   */
  name: string;

  /**
   * Riot ID의 태그 부분
   *
   * # 문자는 제외하고 저장
   */
  tag: string;

  /**
   * Riot 계정의 고유 식별자
   *
   * Riot ID(name/tag)가 변경되어도
   * 같은 계정이면 PUUID는 유지되므로
   * 이후 계정 추적의 기준으로 사용
   */
  puuid?: string;

  /**
   * 해당 Riot ID가 실제 선수 계정임을 확인한 출처
   *
   * 검증되지 않은 계정은 riotAccounts에 추가하지 않음
   */
  verification: VerificationInfo;
}

export interface ProPlayerSettings {
  dpi: number | null;
  sensitivity: number | null;

  scopedSensitivity: number | null;
  adsSensitivity: number | null;

  edpi: number | null;
  pollingRate: number | null;

  resolution: string | null;
  verification?: VerificationInfo;
}

export interface ProPlayerCrosshair {
  code: string | null;
  color: string | null;

  outlines: boolean | null;
  centerDot: boolean | null;

  verification?: VerificationInfo;
}

export interface ProPlayerGear {
  mouse: string | null;
  mousepad: string | null;
  keyboard: string | null;
  monitor: string | null;

  verification?: VerificationInfo;
}

export interface ProPlayerCareerTeam {
  teamName: string;
  joinedAt?: string;
  leftAt?: string;
}

export interface ProPlayerCareerHighlight {
  year: number;
  title: string;
  result?: string;
}

export interface ProPlayerCareer {
  joinedAt?: string;
  previousTeams: ProPlayerCareerTeam[];
  highlights: ProPlayerCareerHighlight[];
}

export interface ProPlayerAward {
  year: number;
  title: string;
  result: string;
}

export interface ProPlayerStats {
  rating: number | null;
  acs: number | null;
  kd: number | null;
  kast: number | null;
  adr: number | null;
  hs: number | null;
}

export interface ProPlayer {
  id: string;
  slug: string;

  nickname: string;
  realName: string;

  countryCode: string;
  countryName: string;

  region: ProRegion;
  status: ProPlayerStatus;

  profileImageUrl: string | null;

  team: ProTeam | null;

  primaryRole: ProPlayerRole;
  roles: ProPlayerRole[];
  mainAgents: string[];

  /**
   * 공개적으로 검증된 선수의 Riot ID 목록
   *
   * 한 선수가 여러 계정을 사용할 수 있어 배열로 관리
   * 검증되지 않은 계정은 입력하지 않음
   *
   * PUUID가 확보된 계정은
   * Riot ID가 변경되어도 같은 계정으로 추적 가능
   */
  riotAccounts?: ProPlayerRiotAccount[];

  career?: ProPlayerCareer;
  awards?: ProPlayerAward[];

  settings: ProPlayerSettings;
  crosshair: ProPlayerCrosshair;
  gear: ProPlayerGear;
  stats: ProPlayerStats;

  updatedAt: string | null;
}