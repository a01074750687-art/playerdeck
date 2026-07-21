import type { GameMode } from "../constants/valorantModes";

export type MatchResult = "Win" | "Lose";

export type WeaponKill = {
  weapon: string;
  kills: number;
};

export type TopAgentStat = {
  agent: string;
  matches: number;
  kd: number;
};

export type ActPeakRank = {
  actId: string;
  actLabel: string;
  rank: string;
};

export type PlayerCard = {
  uuid: string;
  displayName: string;
  smallArt: string | null;
  largeArt: string | null;
  wideArt: string | null;
};

export type MatchPlayer = {
  name: string;
  tag: string;
  team: string;
  agent: string;
  kills: number;
  deaths: number;
  assists: number;
  acs: number;
  isCurrentPlayer: boolean;
};

export type RecentMatch = {
  result: MatchResult;
  mode: GameMode;
  agent: string;
  map: string;

  kills: number;
  deaths: number;
  assists: number;

  acs: number;
  hsRate: number;

  playedAt: string | null;

  score: {
    ally: number;
    enemy: number;
  };

  isMatchMvp: boolean;
  isTeamMvp: boolean;

  allyTeam: MatchPlayer[];
  enemyTeam: MatchPlayer[];

  weaponKills?: WeaponKill[];
};

export type PlayerData = {
  name: string;
  level: number;
  region: string;

  playerCard: PlayerCard | null;

  rank: string;
  rr: number;
  peakRank: string;

  kd: number;
  winRate: string;
  hsRate: string;
  acs: number;

  adr: number;
  kills: number;
  deaths: number;
  assists: number;

  topAgents: TopAgentStat[];
  weaponKills: WeaponKill[];
  actPeakRanks: ActPeakRank[];
  recentMatches: RecentMatch[];
};