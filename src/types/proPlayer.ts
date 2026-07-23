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

export interface ProTeam {
  id: string;
  slug: string;

  name: string;
  shortName: string;

  region: ProRegion;

  logoUrl: string | null;

  primaryColor: string;
  secondaryColor: string;
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