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

export interface VerificationInfo {
  /**
   * 마지막으로 데이터를 검증한 날짜
   *
   * YYYY-MM-DD 형식 권장
   */
  verifiedAt: string;

  /**
   * 데이터를 확인한 출처 이름
   *
   * 예:
   * - ProSettings
   * - Liquipedia
   * - Official Stream
   */
  sourceName: string;

  /**
   * 원본 페이지 URL
   */
  sourceUrl: string;
}

export interface ProPlayerSettings {
  dpi: number | null;
  sensitivity: number | null;

  scopedSensitivity: number | null;
  adsSensitivity: number | null;

  edpi: number | null;
  pollingRate: number | null;

  resolution: string | null;

  /**
   * 설정값의 출처와 마지막 검증 정보
   */
  verification?: VerificationInfo;
}

export interface ProPlayerCrosshair {
  code: string | null;

  color: string | null;

  outlines: boolean | null;
  centerDot: boolean | null;

  /**
   * 크로스헤어 정보의 출처와 마지막 검증 정보
   */
  verification?: VerificationInfo;
}

export interface ProPlayerGear {
  mouse: string | null;
  mousepad: string | null;
  keyboard: string | null;
  
  monitor: string | null;

  /**
   * 장비 정보의 출처와 마지막 검증 정보
   */
  verification?: VerificationInfo;
}

export interface ProPlayerCareerTeam {
  /**
   * 소속 팀 이름
   *
   * 예:
   * - DRX
   * - T1
   * - VARREL
   */
  teamName: string;

  /**
   * 팀 활동 시작 시점
   *
   * YYYY 또는 YYYY-MM 형식 권장
   */
  joinedAt?: string;

  /**
   * 팀 활동 종료 시점
   *
   * YYYY 또는 YYYY-MM 형식 권장
   */
  leftAt?: string;
}

export interface ProPlayerCareerHighlight {
  /**
   * 주요 경력을 기록한 연도
   */
  year: number;

  /**
   * 대회 또는 주요 경력명
   */
  title: string;

  /**
   * 대회 성적이나 추가 설명
   *
   * 예:
   * - 우승
   * - 준우승
   * - 진출
   */
  result?: string;
}

export interface ProPlayerCareer {
  /**
   * 현재 팀 합류 시점
   *
   * YYYY 또는 YYYY-MM 형식 권장
   */
  joinedAt?: string;

  /**
   * 이전 소속 팀 목록
   *
   * 오래된 팀부터 최근 팀 순서로 입력
   */
  previousTeams: ProPlayerCareerTeam[];

  /**
   * 우승, 준우승, 국제대회 출전 등 주요 팀 커리어
   */
  highlights: ProPlayerCareerHighlight[];
}

export interface ProPlayerAward {
  /**
   * 개인 수상을 기록한 연도
   */
  year: number;

  /**
   * 수상한 대회 또는 시상식 이름
   *
   * 예:
   * - VCT Pacific Stage 2 2024
   * - VCT Pacific Awards 2024
   */
  title: string;

  /**
   * 개인 수상명
   *
   * 예:
   * - MVP
   * - 결승 MVP
   * - 올해의 타격대
   */
  result: string;
}

export interface ProPlayerStats {
  rating: number | null;
  acs: number | null;
  kd: number | null;
  kast:number | null;
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

  /**
   * 현재 팀 합류 시점, 이전 소속 팀과 주요 팀 커리어
   */
  career?: ProPlayerCareer;

  /**
   * MVP, Finals MVP, 역할상 등 선수 개인 수상
   *
   * 개인 수상이 없는 선수는 생략
   */
  awards?: ProPlayerAward[];

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