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
  /**
   * 대회와 방송에서 주로 사용하는 닉네임
   *
   * 예:
   * - solo
   * - HSK
   */
  nickname: string;

  /**
   * 코칭스태프의 실명
   *
   * 현재는 닉네임만 표시할 수 있도록 선택값으로 사용
   */
  realName?: string;
}

export interface ProTeamAchievement {
  /**
   * 대회 또는 성적명
   *
   * 예:
   * - VALORANT Masters Shanghai 2024
   * - VCT Pacific 2024 Stage 1
   */
  title: string;

  /**
   * 해당 대회에서 기록한 성적
   *
   * 예:
   * - Champion
   * - Runner-up
   * - 3rd Place
   */
  result: string;

  /**
   * 성적을 기록한 연도
   */
  year: number;
}

export interface ProTeam {
  id: string;
  slug: string;

  name: string;
  shortName: string;

  region: ProRegion;

  /**
   * 팀 국가
   *
   * 예:
   * - South Korea
   * - Japan
   * - Singapore
   */
  countryName: string;

  logoUrl: string | null;

  primaryColor: string;
  secondaryColor: string;

  /**
   * 팀 또는 구단의 창단 연도
   *
   * 정확한 연도를 입력하기 어려운 팀은 생략 가능
   */
  foundedYear?: number;

  /**
   * 현재 헤드 코치
   *
   * 공식적으로 확인되지 않았거나 공석인 경우 null
   */
  headCoach?: ProTeamStaffMember | null;

  /**
   * 현재 어시스턴트 코치 목록
   *
   * 어시스턴트 코치가 없으면 빈 배열 사용
   */
  assistantCoaches?: ProTeamStaffMember[];

  /**
   * 팀의 주요 대회 성적
   *
   * 중요한 국제대회와 지역 리그 성적 중심으로 입력
   */
  achievements?: ProTeamAchievement[];
}

export interface ProPlayerSettings {
  dpi: number;
  sensitivity: number;

  scopedSensitivity: number;
  adsSensitivity: number;

  edpi: number;
  pollingRate: number;

  resolution: string;
}

export interface ProPlayerCrosshair {
  code: string | null;

  color: string;

  outlines: boolean;
  centerDot: boolean;
}

export interface ProPlayerGear {
  mouse: string;
  mousepad: string;
  keyboard: string;
  headset: string;
  monitor: string;
}

export interface ProPlayerStats {
  rating: number;
  acs: number;
  kd: number;
  kast: number;
  adr: number;
  hs: number;
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

  /**
   * 카드와 목록에서 보여줄 대표 역할
   *
   * 예:
   * - Duelist
   * - Controller
   * - Flex
   */
  primaryRole: ProPlayerRole;

  /**
   * 실제로 소화 가능한 역할 목록
   *
   * 예:
   * ["Duelist", "Sentinel"]
   */
  roles: ProPlayerRole[];

  /**
   * 선수의 대표 요원
   *
   * 추후 VALORANT 에이전트 API의 displayName과 연결
   */
  mainAgents: string[];

  settings: ProPlayerSettings;
  crosshair: ProPlayerCrosshair;
  gear: ProPlayerGear;
  stats: ProPlayerStats;

  /**
   * 데이터 갱신 시각
   *
   * ISO 문자열 사용 예정
   * 로컬 테스트 데이터에서는 null 허용
   */
  updatedAt: string | null;
}