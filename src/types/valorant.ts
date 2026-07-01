import type { GameMode } from "../constants/valorantModes";

export type MatchResult = "Win" | "Lose";

export type RecentMatch = {
  result: MatchResult;
  mode: GameMode;
  agent: string;
  map: string;
  kills: number;
  deaths: number;
  assists: number;
  acs: number;
  playedAt: string | null;
  score: {
    ally: number;
    enemy: number;
  };
  isMatchMvp: boolean;
  isTeamMvp: boolean;
};

export type PlayerData = {
  name: string;
  level: number;
  region: string;

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

  topAgents: string[];
  recentMatches: RecentMatch[];
};