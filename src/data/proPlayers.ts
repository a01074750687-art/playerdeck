import type {
  ProPlayer,
  ProPlayerRole,
  ProRegion,
  ProTeam,
} from "../types/proPlayer";

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
 *
 * name:
 * 팀의 전체 공식 표시 이름입니다.
 *
 * shortName:
 * Riot Games의 VCT 경기 화면에서 사용하는 팀 태그입니다.
 */
export const proTeams: ProTeam[] = [
  {
    id: "team-gen-g",
    slug: "gen-g",
    name: "Gen.G",
    shortName: "GEN",
    region: "Pacific",
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
    logoUrl: TEAM_LOGOS.varrel,
    primaryColor: "#14B8A6",
    secondaryColor: "#111827",
  },
];

/**
 * 팀 slug를 이용해 팀 데이터를 가져옵니다.
 *
 * 데이터 작성 시 동일한 팀 객체를 참조하도록 사용합니다.
 */
const getRequiredTeam = (slug: string): ProTeam => {
  const team = proTeams.find((item) => item.slug === slug);

  if (!team) {
    throw new Error(`프로 팀 데이터를 찾을 수 없습니다: ${slug}`);
  }

  return team;
};

/**
 * 선수별 역할 배열을 안전하게 작성하기 위한 헬퍼입니다.
 */
const createRoles = (
  primaryRole: ProPlayerRole,
  additionalRoles: ProPlayerRole[] = [],
): ProPlayerRole[] => {
  return Array.from(new Set([primaryRole, ...additionalRoles]));
};

/**
 * UI 제작을 위한 프로 선수 로컬 데이터입니다.
 *
 * 주의:
 * - 통계와 설정값은 현재 화면 개발용 샘플 데이터입니다.
 * - 실제 서비스에서는 공식 데이터 또는 별도 API 응답으로 교체해야 합니다.
 * - profileImageUrl이 null이면 선수 사진 대신 팀 로고를 표시합니다.
 */
export const proPlayers: ProPlayer[] = [
  {
    id: "player-texture",
    slug: "texture",

    nickname: "t3xture",
    realName: "Kim Na-ra",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("gen-g"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Neon"],

    settings: {
      dpi: 800,
      sensitivity: 0.25,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 200,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "HyperX Cloud III",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.28,
      acs: 259.4,
      kd: 1.31,
      kast: 74,
      adr: 165.8,
      hs: 28,
    },

    updatedAt: null,
  },

  {
    id: "player-karon",
    slug: "karon",

    nickname: "Karon",
    realName: "Kim Won-tae",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("gen-g"),

    primaryRole: "Controller",
    roles: createRoles("Controller"),

    mainAgents: ["Omen", "Viper", "Astra"],

    settings: {
      dpi: 800,
      sensitivity: 0.28,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 224,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "Cyan",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Wooting 60HE",
      headset: "Logitech G Pro X 2",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.16,
      acs: 205.7,
      kd: 1.18,
      kast: 78,
      adr: 132.6,
      hs: 32,
    },

    updatedAt: null,
  },

  {
    id: "player-ash",
    slug: "ash",

    nickname: "Ash",
    realName: "Ha Hyun-cheol",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("gen-g"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist", ["Initiator"]),

    mainAgents: ["Sova", "Fade", "Gekko"],

    settings: {
      dpi: 800,
      sensitivity: 0.27,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 216,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "HyperX Cloud III",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.14,
      acs: 210.6,
      kd: 1.12,
      kast: 76,
      adr: 138.7,
      hs: 30,
    },

    updatedAt: null,
  },

  {
    id: "player-raxcal",
    slug: "raxcal",

    nickname: "RaxcaL",
    realName: "Kim Min-seok",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("gen-g"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Controller"]),

    mainAgents: ["Jett", "Raze", "Neon"],

    settings: {
      dpi: 800,
      sensitivity: 0.3,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 240,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "Cyan",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "Razer BlackShark V2 Pro",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.18,
      acs: 235.4,
      kd: 1.2,
      kast: 74,
      adr: 151.8,
      hs: 27,
    },

    updatedAt: null,
  },

  {
    id: "player-efina",
    slug: "efina",

    nickname: "Efina",
    realName: "Kim Nak-yeon",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("gen-g"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator", ["Sentinel"]),

    mainAgents: ["Cypher", "Killjoy", "Sova"],

    settings: {
      dpi: 800,
      sensitivity: 0.26,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 208,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Wooting 60HE",
      headset: "Logitech G Pro X 2",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.07,
      acs: 193.8,
      kd: 1.04,
      kast: 75,
      adr: 127.5,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-buzz",
    slug: "buzz",

    nickname: "BuZz",
    realName: "Yu Byeong-cheol",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("t1"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist", ["Sentinel"]),

    mainAgents: ["Jett", "Raze", "Killjoy"],

    settings: {
      dpi: 400,
      sensitivity: 0.57,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 228,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "Razer BlackShark V2 Pro",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.17,
      acs: 238.4,
      kd: 1.19,
      kast: 74,
      adr: 153.6,
      hs: 29,
    },

    updatedAt: null,
  },

  {
    id: "player-meteor",
    slug: "meteor",

    nickname: "Meteor",
    realName: "Kim Tae-o",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("t1"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Duelist"]),

    mainAgents: ["Killjoy", "Cypher", "Jett"],

    settings: {
      dpi: 800,
      sensitivity: 0.3,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 240,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "Razer BlackShark V2 Pro",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.2,
      acs: 222.8,
      kd: 1.24,
      kast: 76,
      adr: 145.2,
      hs: 30,
    },

    updatedAt: null,
  },

  {
    id: "player-dh",
    slug: "dh",

    nickname: "DH",
    realName: "Kang Dong-ho",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("t1"),

    primaryRole: "Controller",
    roles: createRoles("Controller", ["Initiator"]),

    mainAgents: ["Omen", "Viper", "Astra"],

    settings: {
      dpi: 800,
      sensitivity: 0.28,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 224,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "Cyan",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "Razer BlackShark V2 Pro",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.11,
      acs: 223.6,
      kd: 1.1,
      kast: 73,
      adr: 146.7,
      hs: 34,
    },

    updatedAt: null,
  },

  {
    id: "player-izu",
    slug: "izu",

    nickname: "iZu",
    realName: "Ham Woo-joo",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("t1"),

    primaryRole: "Flex",
    roles: createRoles("Flex", ["Duelist"]),

    mainAgents: ["Gekko", "Omen", "Breach"],

    settings: {
      dpi: 800,
      sensitivity: 0.27,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 216,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: true,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "Logitech G640",
      keyboard: "Wooting 60HE",
      headset: "Logitech G Pro X 2",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.12,
      acs: 211.3,
      kd: 1.11,
      kast: 75,
      adr: 138.4,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-munchkin",
    slug: "munchkin",

    nickname: "Munchkin",
    realName: "Byeon Sang-beom",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("t1"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator", ["Sentinel"]),

    mainAgents: ["KAY/O", "Skye", "Viper"],

    settings: {
      dpi: 800,
      sensitivity: 0.25,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 200,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "HyperX FURY S",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Sennheiser GSP 670",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.09,
      acs: 202.4,
      kd: 1.08,
      kast: 76,
      adr: 132.8,
      hs: 31,
    },

    updatedAt: null,
  },

  {
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

    settings: {
      dpi: 400,
      sensitivity: 0.44,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 176,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "Razer BlackShark V2 Pro",
      monitor: "ZOWIE XL2566K",
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
  },

  {
    id: "player-mako",
    slug: "mako",

    nickname: "MaKo",
    realName: "Kim Myeong-kwan",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("krx"),

    primaryRole: "Controller",
    roles: createRoles("Controller"),

    mainAgents: ["Omen", "Viper", "Astra"],

    settings: {
      dpi: 400,
      sensitivity: 0.45,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 180,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE Rouge",
      keyboard: "Wooting 60HE",
      headset: "Logitech G Pro X 2",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.19,
      acs: 211.8,
      kd: 1.27,
      kast: 79,
      adr: 137.9,
      hs: 34,
    },

    updatedAt: null,
  },

  {
    id: "player-beyn",
    slug: "beyn",

    nickname: "BeYN",
    realName: "Kang Ha-bin",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("krx"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator", ["Flex"]),

    mainAgents: ["Sova", "Fade", "Gekko"],

    settings: {
      dpi: 800,
      sensitivity: 0.26,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 208,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "Cyan",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "HyperX Cloud III",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.1,
      acs: 202.5,
      kd: 1.08,
      kast: 76,
      adr: 132.1,
      hs: 29,
    },

    updatedAt: null,
  },

  {
    id: "player-something",
    slug: "something",

    nickname: "something",
    realName: "Ilya Petrov",

    countryCode: "RU",
    countryName: "Russia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("paper-rex"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Reyna", "Neon"],

    settings: {
      dpi: 800,
      sensitivity: 0.33,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 264,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "White",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "Razer BlackShark V2 Pro",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.25,
      acs: 252.1,
      kd: 1.29,
      kast: 73,
      adr: 162.7,
      hs: 27,
    },

    updatedAt: null,
  },

  {
    id: "player-forsaken",
    slug: "forsaken",

    nickname: "f0rsakeN",
    realName: "Jason Susanto",

    countryCode: "ID",
    countryName: "Indonesia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("paper-rex"),

    primaryRole: "Flex",
    roles: createRoles("Flex", [
      "Duelist",
      "Initiator",
      "Controller",
      "Sentinel",
    ]),

    mainAgents: ["Yoru", "Breach", "Killjoy"],

    settings: {
      dpi: 800,
      sensitivity: 0.36,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 288,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Razer Strider",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "Razer BlackShark V2 Pro",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.18,
      acs: 224.6,
      kd: 1.17,
      kast: 76,
      adr: 146.8,
      hs: 33,
    },

    updatedAt: null,
  },
];

/**
 * 선수 slug를 이용해 선수 한 명을 조회합니다.
 *
 * 예:
 * getProPlayerBySlug("texture")
 */
export const getProPlayerBySlug = (
  slug: string,
): ProPlayer | undefined => {
  const normalizedSlug = slug.trim().toLowerCase();

  return proPlayers.find(
    (player) =>
      player.slug.toLowerCase() === normalizedSlug,
  );
};

/**
 * 팀 slug를 이용해 팀 한 개를 조회합니다.
 *
 * 예:
 * getProTeamBySlug("gen-g")
 */
export const getProTeamBySlug = (
  slug: string,
): ProTeam | undefined => {
  const normalizedSlug = slug.trim().toLowerCase();

  return proTeams.find(
    (team) =>
      team.slug.toLowerCase() === normalizedSlug,
  );
};

/**
 * 특정 팀에 소속된 선수들을 조회합니다.
 */
export const getProPlayersByTeamSlug = (
  teamSlug: string,
): ProPlayer[] => {
  const normalizedTeamSlug = teamSlug.trim().toLowerCase();

  return proPlayers.filter(
    (player) =>
      player.team?.slug.toLowerCase() ===
      normalizedTeamSlug,
  );
};

/**
 * 특정 지역의 선수들을 조회합니다.
 */
export const getProPlayersByRegion = (
  region: ProRegion,
): ProPlayer[] => {
  return proPlayers.filter(
    (player) => player.region === region,
  );
};

/**
 * 특정 역할을 수행할 수 있는 선수들을 조회합니다.
 *
 * primaryRole뿐 아니라 roles 배열 전체를 기준으로 검색합니다.
 */
export const getProPlayersByRole = (
  role: ProPlayerRole,
): ProPlayer[] => {
  return proPlayers.filter(
    (player) =>
      player.primaryRole === role ||
      player.roles.includes(role),
  );
};

/**
 * 선수 닉네임, 본명, 팀 이름을 기준으로 검색합니다.
 */
export const searchProPlayers = (
  keyword: string,
): ProPlayer[] => {
  const normalizedKeyword = keyword.trim().toLowerCase();

  if (!normalizedKeyword) {
    return proPlayers;
  }

  return proPlayers.filter((player) => {
    const searchableValues = [
      player.nickname,
      player.realName,
      player.countryName,
      player.primaryRole,
      player.team?.name ?? "",
      player.team?.shortName ?? "",
      ...player.roles,
      ...player.mainAgents,
    ];

    return searchableValues.some((value) =>
      value.toLowerCase().includes(normalizedKeyword),
    );
  });
};