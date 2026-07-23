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
  }
];

const getRequiredTeam = (slug: string): ProTeam => {
  const team = proTeams.find((item) => item.slug === slug);

  if (!team) {
    throw new Error(`프로 팀 데이터를 찾을 수 없습니다: ${slug}`);
  }

  return team;
};

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
 * - 기존 파일과 동일하게 선수별 상세 필드를 각 객체에 직접 작성합니다.
 * - 일부 장비/설정/통계는 화면 개발용 샘플값입니다.
 * - 검증된 실제 데이터가 확보되면 선수별로 교체할 수 있습니다.
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
      outlines: true,
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
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ASUS ROG Swift PG259QN",
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
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
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

    mainAgents: ["Cypher", "Killjoy", "Omen"],

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
      color: "White",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "Razer BlackShark V2 Pro",
      monitor: "ASUS ROG Swift PG259QN",
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

    mainAgents: ["Sova", "Fade", "Cypher"],

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
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
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
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ASUS ROG Swift PG259QN",
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
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ASUS ROG Swift PG259QN",
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
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
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
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "Razer BlackShark V2 Pro",
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
      color: "Cyan",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
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
      color: "Green",
      outlines: true,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ASUS ROG Swift PG259QN",
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
    roles: createRoles("Initiator", ["Controller"]),

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
    id: "player-yong",
    slug: "yong",

    nickname: "yong",
    realName: "Kim Ho-yong",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("krx"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel"),

    mainAgents: ["Cypher", "Killjoy", "Vyse"],

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
      color: "Cyan",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.08,
      acs: 199.4,
      kd: 1.06,
      kast: 75,
      adr: 130.8,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-free1ng",
    slug: "free1ng",

    nickname: "free1ng",
    realName: "No Ha-jun",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("krx"),

    primaryRole: "Flex",
    roles: createRoles("Flex", ["Initiator", "Sentinel"]),

    mainAgents: ["Sova", "Gekko", "Killjoy"],

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
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.1,
      acs: 207.2,
      kd: 1.09,
      kast: 76,
      adr: 136.1,
      hs: 30,
    },

    updatedAt: null,
  },

  {
    id: "player-hyunmin",
    slug: "hyunmin",

    nickname: "HYUNMIN",
    realName: "Song Hyun-min",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("krx"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Neon"],

    settings: {
      dpi: 800,
      sensitivity: 0.29,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 232,
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
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.18,
      acs: 239.6,
      kd: 1.2,
      kast: 74,
      adr: 154.2,
      hs: 28,
    },

    updatedAt: null,
  },

  {
    id: "player-flicker",
    slug: "flicker",

    nickname: "Flicker",
    realName: "Kim Tae-hee",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("krx"),

    primaryRole: "Flex",
    roles: createRoles("Flex", ["Initiator", "Sentinel"]),

    mainAgents: ["Breach", "Fade", "Cypher"],

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
      color: "Cyan",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.07,
      acs: 201.5,
      kd: 1.05,
      kast: 75,
      adr: 131.6,
      hs: 32,
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
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ASUS ROG Swift PG259QN",
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
    roles: createRoles("Flex", ["Duelist", "Initiator", "Controller", "Sentinel"]),

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
      rating: 1.18,
      acs: 224.6,
      kd: 1.17,
      kast: 76,
      adr: 146.8,
      hs: 33,
    },

    updatedAt: null,
  },

  {
    id: "player-jinggg",
    slug: "jinggg",

    nickname: "Jinggg",
    realName: "Wang Jing Jie",

    countryCode: "SG",
    countryName: "Singapore",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("paper-rex"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist", ["Controller"]),

    mainAgents: ["Raze", "Neon", "Omen"],

    settings: {
      dpi: 1600,
      sensitivity: 0.2,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 320,
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
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.22,
      acs: 247.8,
      kd: 1.24,
      kast: 74,
      adr: 159.6,
      hs: 27,
    },

    updatedAt: null,
  },

  {
    id: "player-d4v41",
    slug: "d4v41",

    nickname: "d4v41",
    realName: "Khalish Rusyaidee",

    countryCode: "MY",
    countryName: "Malaysia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("paper-rex"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Initiator"]),

    mainAgents: ["Cypher", "Killjoy", "Sova"],

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
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.1,
      acs: 205.9,
      kd: 1.09,
      kast: 76,
      adr: 134.4,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-invy",
    slug: "invy",

    nickname: "invy",
    realName: "Adrian Reyes",

    countryCode: "PH",
    countryName: "Philippines",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("paper-rex"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

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
      headset: "Razer BlackShark V2 Pro",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.13,
      acs: 213.7,
      kd: 1.12,
      kast: 77,
      adr: 139.1,
      hs: 30,
    },

    updatedAt: null,
  },

  {
    id: "player-jemkin",
    slug: "jemkin",

    nickname: "Jemkin",
    realName: "Jemkin",

    countryCode: "RU",
    countryName: "Russia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("rrq"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist", ["Sentinel"]),

    mainAgents: ["Jett", "Raze", "Cypher"],

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
      color: "Cyan",
      outlines: true,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.17,
      acs: 192.0,
      kd: 1.04,
      kast: 73,
      adr: 132.4,
      hs: 25,
    },

    updatedAt: null,
  },

  {
    id: "player-monyet",
    slug: "monyet",

    nickname: "Monyet",
    realName: "Cahya Nugraha",

    countryCode: "ID",
    countryName: "Indonesia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("rrq"),

    primaryRole: "Controller",
    roles: createRoles("Controller", ["Duelist"]),

    mainAgents: ["Omen", "Viper", "Raze"],

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
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.2,
      acs: 196.1,
      kd: 1.07,
      kast: 74,
      adr: 135.6,
      hs: 26,
    },

    updatedAt: null,
  },

  {
    id: "player-crazyguy",
    slug: "crazyguy",

    nickname: "crazyguy",
    realName: "Nguyen Van Manh",

    countryCode: "VN",
    countryName: "Vietnam",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("rrq"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Breach", "Sova", "KAY/O"],

    settings: {
      dpi: 800,
      sensitivity: 0.29,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 231,
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
      rating: 1.02,
      acs: 200.2,
      kd: 1.1,
      kast: 75,
      adr: 138.8,
      hs: 27,
    },

    updatedAt: null,
  },

  {
    id: "player-kushy",
    slug: "kushy",

    nickname: "Kushy",
    realName: "Kushy",

    countryCode: "ID",
    countryName: "Indonesia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("rrq"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel"),

    mainAgents: ["Cypher", "Killjoy", "Vyse"],

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
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.04,
      acs: 204.3,
      kd: 1.13,
      kast: 76,
      adr: 142.0,
      hs: 28,
    },

    updatedAt: null,
  },

  {
    id: "player-xffero",
    slug: "xffero",

    nickname: "xffero",
    realName: "David Monangin",

    countryCode: "ID",
    countryName: "Indonesia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("rrq"),

    primaryRole: "Controller",
    roles: createRoles("Controller", ["Initiator"]),

    mainAgents: ["Omen", "Viper", "Sova"],

    settings: {
      dpi: 800,
      sensitivity: 0.31,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 248,
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
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.07,
      acs: 208.4,
      kd: 1.16,
      kast: 77,
      adr: 145.2,
      hs: 29,
    },

    updatedAt: null,
  },

  {
    id: "player-zeus",
    slug: "zeus",

    nickname: "Zeus",
    realName: "Zeus",

    countryCode: "PH",
    countryName: "Philippines",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("team-secret"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Neon"],

    settings: {
      dpi: 800,
      sensitivity: 0.23,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 184,
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
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.09,
      acs: 212.5,
      kd: 1.19,
      kast: 78,
      adr: 148.4,
      hs: 30,
    },

    updatedAt: null,
  },

  {
    id: "player-keilys",
    slug: "keilys",

    nickname: "keilyS",
    realName: "keilyS",

    countryCode: "PH",
    countryName: "Philippines",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("team-secret"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Yoru"],

    settings: {
      dpi: 800,
      sensitivity: 0.24,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 192,
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
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.12,
      acs: 216.6,
      kd: 1.01,
      kast: 72,
      adr: 151.6,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-sylvan",
    slug: "sylvan",

    nickname: "Sylvan",
    realName: "Ko Young-sub",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("team-secret"),

    primaryRole: "Controller",
    roles: createRoles("Controller"),

    mainAgents: ["Omen", "Viper", "Astra"],

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
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.15,
      acs: 220.7,
      kd: 1.04,
      kast: 73,
      adr: 154.8,
      hs: 32,
    },

    updatedAt: null,
  },

  {
    id: "player-styron",
    slug: "styron",

    nickname: "STYRON",
    realName: "STYRON",

    countryCode: "PH",
    countryName: "Philippines",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("team-secret"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Breach"],

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
      acs: 224.8,
      kd: 1.07,
      kast: 74,
      adr: 126.0,
      hs: 33,
    },

    updatedAt: null,
  },

  {
    id: "player-nats",
    slug: "nats",

    nickname: "nAts",
    realName: "Ayaz Akhmetshin",

    countryCode: "RU",
    countryName: "Russia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("team-secret"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Controller"]),

    mainAgents: ["Cypher", "Viper", "Killjoy"],

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
      color: "Cyan",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.2,
      acs: 228.9,
      kd: 1.1,
      kast: 75,
      adr: 129.2,
      hs: 34,
    },

    updatedAt: null,
  },

  {
    id: "player-udotan",
    slug: "udotan",

    nickname: "UdoTan",
    realName: "UdoTan",

    countryCode: "IN",
    countryName: "India",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("global-esports"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Neon"],

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
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.02,
      acs: 233.0,
      kd: 1.13,
      kast: 76,
      adr: 132.4,
      hs: 35,
    },

    updatedAt: null,
  },

  {
    id: "player-kr1stal",
    slug: "kr1stal",

    nickname: "Kr1stal",
    realName: "Savva Fedorov",

    countryCode: "RU",
    countryName: "Russia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("global-esports"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel"),

    mainAgents: ["Cypher", "Killjoy", "Vyse"],

    settings: {
      dpi: 800,
      sensitivity: 0.29,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 231,
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
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "Razer BlackShark V2 Pro",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.04,
      acs: 192.0,
      kd: 1.16,
      kast: 77,
      adr: 135.6,
      hs: 25,
    },

    updatedAt: null,
  },

  {
    id: "player-xavi8k",
    slug: "xavi8k",

    nickname: "Xavi8K",
    realName: "Xavi8K",

    countryCode: "IN",
    countryName: "India",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("global-esports"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Breach"],

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
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.07,
      acs: 196.1,
      kd: 1.19,
      kast: 78,
      adr: 138.8,
      hs: 26,
    },

    updatedAt: null,
  },

  {
    id: "player-autumn",
    slug: "autumn",

    nickname: "autumn",
    realName: "autumn",

    countryCode: "AU",
    countryName: "Australia",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("global-esports"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Yoru"],

    settings: {
      dpi: 800,
      sensitivity: 0.31,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 248,
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
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.09,
      acs: 200.2,
      kd: 1.01,
      kast: 72,
      adr: 142.0,
      hs: 27,
    },

    updatedAt: null,
  },

  {
    id: "player-patmen",
    slug: "patmen",

    nickname: "PatMen",
    realName: "Patrick Mendoza",

    countryCode: "PH",
    countryName: "Philippines",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("global-esports"),

    primaryRole: "Controller",
    roles: createRoles("Controller"),

    mainAgents: ["Omen", "Viper", "Astra"],

    settings: {
      dpi: 800,
      sensitivity: 0.23,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 184,
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
      rating: 1.12,
      acs: 204.3,
      kd: 1.04,
      kast: 73,
      adr: 145.2,
      hs: 28,
    },

    updatedAt: null,
  },

  {
    id: "player-primmie",
    slug: "primmie",

    nickname: "Primmie",
    realName: "Primmie",

    countryCode: "TH",
    countryName: "Thailand",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("full-sense"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Neon"],

    settings: {
      dpi: 800,
      sensitivity: 0.24,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 192,
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
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.15,
      acs: 208.4,
      kd: 1.07,
      kast: 74,
      adr: 148.4,
      hs: 29,
    },

    updatedAt: null,
  },

  {
    id: "player-seph1roth",
    slug: "seph1roth",

    nickname: "seph1roth",
    realName: "seph1roth",

    countryCode: "TH",
    countryName: "Thailand",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("full-sense"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel"),

    mainAgents: ["Cypher", "Killjoy", "Vyse"],

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
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.17,
      acs: 212.5,
      kd: 1.1,
      kast: 75,
      adr: 151.6,
      hs: 30,
    },

    updatedAt: null,
  },

  {
    id: "player-crws",
    slug: "crws",

    nickname: "Crws",
    realName: "Thanamethk Mahatthananuyut",

    countryCode: "TH",
    countryName: "Thailand",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("full-sense"),

    primaryRole: "Controller",
    roles: createRoles("Controller", ["Initiator"]),

    mainAgents: ["Omen", "Viper", "Breach"],

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
      color: "White",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "Razer BlackShark V2 Pro",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.2,
      acs: 216.6,
      kd: 1.13,
      kast: 76,
      adr: 154.8,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-kiilua",
    slug: "kiilua",

    nickname: "kiilua",
    realName: "kiilua",

    countryCode: "TH",
    countryName: "Thailand",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("full-sense"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

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
      color: "Cyan",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.02,
      acs: 220.7,
      kd: 1.16,
      kast: 77,
      adr: 126.0,
      hs: 32,
    },

    updatedAt: null,
  },

  {
    id: "player-jitboys",
    slug: "jitboys",

    nickname: "JitboyS",
    realName: "JitboyS",

    countryCode: "TH",
    countryName: "Thailand",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("full-sense"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Yoru"],

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
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.04,
      acs: 224.8,
      kd: 1.19,
      kast: 78,
      adr: 129.2,
      hs: 33,
    },

    updatedAt: null,
  },

  {
    id: "player-meiy",
    slug: "meiy",

    nickname: "Meiy",
    realName: "Ibuki Seki",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("dfm"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Neon"],

    settings: {
      dpi: 800,
      sensitivity: 0.29,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 231,
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
      rating: 1.07,
      acs: 228.9,
      kd: 1.01,
      kast: 72,
      adr: 132.4,
      hs: 34,
    },

    updatedAt: null,
  },

  {
    id: "player-caedye",
    slug: "caedye",

    nickname: "Caedye",
    realName: "Caedye",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("dfm"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel"),

    mainAgents: ["Cypher", "Killjoy", "Vyse"],

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
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.09,
      acs: 233.0,
      kd: 1.04,
      kast: 73,
      adr: 135.6,
      hs: 35,
    },

    updatedAt: null,
  },

  {
    id: "player-akame",
    slug: "akame",

    nickname: "Akame",
    realName: "Akame",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("dfm"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Breach"],

    settings: {
      dpi: 800,
      sensitivity: 0.31,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 248,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "Green",
      outlines: true,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.12,
      acs: 192.0,
      kd: 1.07,
      kast: 74,
      adr: 138.8,
      hs: 25,
    },

    updatedAt: null,
  },

  {
    id: "player-ssees",
    slug: "ssees",

    nickname: "SSeeS",
    realName: "SSeeS",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("dfm"),

    primaryRole: "Controller",
    roles: createRoles("Controller"),

    mainAgents: ["Omen", "Viper", "Astra"],

    settings: {
      dpi: 800,
      sensitivity: 0.23,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 184,
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
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.15,
      acs: 196.1,
      kd: 1.1,
      kast: 75,
      adr: 142.0,
      hs: 26,
    },

    updatedAt: null,
  },

  {
    id: "player-yatsuka",
    slug: "yatsuka",

    nickname: "yatsuka",
    realName: "yatsuka",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("dfm"),

    primaryRole: "Flex",
    roles: createRoles("Flex"),

    mainAgents: ["Gekko", "Omen", "Killjoy"],

    settings: {
      dpi: 800,
      sensitivity: 0.24,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 192,
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
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.17,
      acs: 200.2,
      kd: 1.13,
      kast: 76,
      adr: 145.2,
      hs: 27,
    },

    updatedAt: null,
  },

  {
    id: "player-absol",
    slug: "absol",

    nickname: "Absol",
    realName: "Absol",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("zeta"),

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
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.2,
      acs: 204.3,
      kd: 1.16,
      kast: 77,
      adr: 148.4,
      hs: 28,
    },

    updatedAt: null,
  },

  {
    id: "player-sugarz3ro",
    slug: "sugarz3ro",

    nickname: "SugarZ3ro",
    realName: "Shota Watanabe",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("zeta"),

    primaryRole: "Controller",
    roles: createRoles("Controller"),

    mainAgents: ["Omen", "Viper", "Astra"],

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
      rating: 1.02,
      acs: 208.4,
      kd: 1.19,
      kast: 78,
      adr: 151.6,
      hs: 29,
    },

    updatedAt: null,
  },

  {
    id: "player-xdll",
    slug: "xdll",

    nickname: "Xdll",
    realName: "Xdll",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("zeta"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Breach"],

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
      color: "Cyan",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.04,
      acs: 212.5,
      kd: 1.01,
      kast: 72,
      adr: 154.8,
      hs: 30,
    },

    updatedAt: null,
  },

  {
    id: "player-eko",
    slug: "eko",

    nickname: "eko",
    realName: "eko",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("zeta"),

    primaryRole: "Flex",
    roles: createRoles("Flex"),

    mainAgents: ["Gekko", "Omen", "Killjoy"],

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
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.07,
      acs: 216.6,
      kd: 1.04,
      kast: 73,
      adr: 126.0,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-syouta",
    slug: "syouta",

    nickname: "SyouTa",
    realName: "SyouTa",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("zeta"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel"),

    mainAgents: ["Cypher", "Killjoy", "Vyse"],

    settings: {
      dpi: 800,
      sensitivity: 0.29,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 231,
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
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.09,
      acs: 220.7,
      kd: 1.07,
      kast: 74,
      adr: 129.2,
      hs: 32,
    },

    updatedAt: null,
  },

  {
    id: "player-dambi",
    slug: "dambi",

    nickname: "Dambi",
    realName: "Dambi",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("nongshim-redforce"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

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
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.12,
      acs: 224.8,
      kd: 1.1,
      kast: 75,
      adr: 132.4,
      hs: 33,
    },

    updatedAt: null,
  },

  {
    id: "player-xross",
    slug: "xross",

    nickname: "Xross",
    realName: "Xross",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("nongshim-redforce"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Yoru"],

    settings: {
      dpi: 800,
      sensitivity: 0.31,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 248,
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
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.15,
      acs: 228.9,
      kd: 1.13,
      kast: 76,
      adr: 135.6,
      hs: 34,
    },

    updatedAt: null,
  },

  {
    id: "player-francis",
    slug: "francis",

    nickname: "Francis",
    realName: "Francis",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("nongshim-redforce"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Breach"],

    settings: {
      dpi: 800,
      sensitivity: 0.23,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 184,
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
      acs: 233.0,
      kd: 1.16,
      kast: 77,
      adr: 138.8,
      hs: 35,
    },

    updatedAt: null,
  },

  {
    id: "player-rb",
    slug: "rb",

    nickname: "Rb",
    realName: "Goo Sang-min",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("nongshim-redforce"),

    primaryRole: "Controller",
    roles: createRoles("Controller", ["Flex"]),

    mainAgents: ["Omen", "Viper", "Gekko"],

    settings: {
      dpi: 800,
      sensitivity: 0.24,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 192,
      pollingRate: 1000,
      resolution: "1920x1080",
    },

    crosshair: {
      code: null,
      color: "Cyan",
      outlines: true,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.2,
      acs: 192.0,
      kd: 1.19,
      kast: 78,
      adr: 142.0,
      hs: 25,
    },

    updatedAt: null,
  },

  {
    id: "player-ivy",
    slug: "ivy",

    nickname: "Ivy",
    realName: "Ivy",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("nongshim-redforce"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel"),

    mainAgents: ["Cypher", "Killjoy", "Vyse"],

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
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.02,
      acs: 196.1,
      kd: 1.01,
      kast: 72,
      adr: 145.2,
      hs: 26,
    },

    updatedAt: null,
  },

  {
    id: "player-zexy",
    slug: "zexy",

    nickname: "zexy",
    realName: "zexy",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("varrel"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Neon"],

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
      color: "White",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer Viper V3 Pro",
      mousepad: "Artisan Ninja FX Zero Soft",
      keyboard: "Wooting 60HE",
      headset: "Razer BlackShark V2 Pro",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.04,
      acs: 200.2,
      kd: 1.04,
      kast: 73,
      adr: 148.4,
      hs: 27,
    },

    updatedAt: null,
  },

  {
    id: "player-xuna",
    slug: "xuna",

    nickname: "Xuna",
    realName: "Xuna",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("varrel"),

    primaryRole: "Initiator",
    roles: createRoles("Initiator"),

    mainAgents: ["Sova", "Fade", "Breach"],

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
      color: "Cyan",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.07,
      acs: 204.3,
      kd: 1.07,
      kast: 74,
      adr: 151.6,
      hs: 28,
    },

    updatedAt: null,
  },

  {
    id: "player-oonzmlp",
    slug: "oonzmlp",

    nickname: "oonzmlp",
    realName: "oonzmlp",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("varrel"),

    primaryRole: "Duelist",
    roles: createRoles("Duelist"),

    mainAgents: ["Jett", "Raze", "Yoru"],

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
      color: "Green",
      outlines: false,
      centerDot: false,
    },

    gear: {
      mouse: "Razer DeathAdder V3 Pro",
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.09,
      acs: 208.4,
      kd: 1.1,
      kast: 75,
      adr: 154.8,
      hs: 29,
    },

    updatedAt: null,
  },

  {
    id: "player-foxy9",
    slug: "foxy9",

    nickname: "Foxy9",
    realName: "Jung Jae-sung",

    countryCode: "KR",
    countryName: "South Korea",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("varrel"),

    primaryRole: "Sentinel",
    roles: createRoles("Sentinel", ["Duelist"]),

    mainAgents: ["Cypher", "Killjoy", "Jett"],

    settings: {
      dpi: 800,
      sensitivity: 0.29,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 231,
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
      rating: 1.12,
      acs: 212.5,
      kd: 1.13,
      kast: 76,
      adr: 126.0,
      hs: 30,
    },

    updatedAt: null,
  },

  {
    id: "player-c1ndenr",
    slug: "c1ndenr",

    nickname: "C1ndenR",
    realName: "C1ndenR",

    countryCode: "JP",
    countryName: "Japan",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("varrel"),

    primaryRole: "Controller",
    roles: createRoles("Controller"),

    mainAgents: ["Omen", "Viper", "Astra"],

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
      mouse: "Logitech G Pro X Superlight 2",
      mousepad: "ZOWIE G-SR-SE",
      keyboard: "Razer Huntsman V3 Pro Mini",
      headset: "HyperX Cloud III",
      monitor: "ASUS ROG Swift PG259QN",
    },

    stats: {
      rating: 1.15,
      acs: 216.6,
      kd: 1.16,
      kast: 77,
      adr: 129.2,
      hs: 31,
    },

    updatedAt: null,
  },

  {
    id: "player-klaus",
    slug: "klaus",

    nickname: "Klaus",
    realName: "Nicolas Ferrari",

    countryCode: "AR",
    countryName: "Argentina",

    region: "Pacific",
    status: "Active",

    profileImageUrl: null,

    team: getRequiredTeam("varrel"),

    primaryRole: "Controller",
    roles: createRoles("Controller", ["Initiator"]),

    mainAgents: ["Omen", "Viper", "KAY/O"],

    settings: {
      dpi: 800,
      sensitivity: 0.31,
      scopedSensitivity: 1,
      adsSensitivity: 1,
      edpi: 248,
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
      mousepad: "Logitech G640",
      keyboard: "HyperX Alloy Origins Core",
      headset: "Logitech G Pro X 2",
      monitor: "ZOWIE XL2566K",
    },

    stats: {
      rating: 1.17,
      acs: 220.7,
      kd: 1.19,
      kast: 78,
      adr: 132.4,
      hs: 32,
    },

    updatedAt: null,
  }
];

export const getProPlayerBySlug = (
  slug: string,
): ProPlayer | undefined => {
  const normalizedSlug = slug.trim().toLowerCase();

  return proPlayers.find(
    (player) =>
      player.slug.toLowerCase() === normalizedSlug,
  );
};

export const getProTeamBySlug = (
  slug: string,
): ProTeam | undefined => {
  const normalizedSlug = slug.trim().toLowerCase();

  return proTeams.find(
    (team) =>
      team.slug.toLowerCase() === normalizedSlug,
  );
};

export const getProPlayersByTeamSlug = (
  teamSlug: string,
): ProPlayer[] => {
  const normalizedTeamSlug =
    teamSlug.trim().toLowerCase();

  return proPlayers.filter(
    (player) =>
      player.team?.slug.toLowerCase() ===
      normalizedTeamSlug,
  );
};

export const getProPlayersByRegion = (
  region: ProRegion,
): ProPlayer[] => {
  return proPlayers.filter(
    (player) => player.region === region,
  );
};

export const getProPlayersByRole = (
  role: ProPlayerRole,
): ProPlayer[] => {
  return proPlayers.filter(
    (player) =>
      player.primaryRole === role ||
      player.roles.includes(role),
  );
};

export const searchProPlayers = (
  keyword: string,
): ProPlayer[] => {
  const normalizedKeyword =
    keyword.trim().toLowerCase();

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
      value
        .toLowerCase()
        .includes(normalizedKeyword),
    );
  });
};