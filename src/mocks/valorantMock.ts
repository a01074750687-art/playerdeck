import type { PlayerData } from "../types/valorant";

export const mockPlayer: PlayerData = {
  name: "Unknown Player",
  level: 421,
  region: "KR",

  rank: "Radiant",
  rr: 865,
  peakRank: "Radiant",

  kd: 1.32,
  winRate: "58%",
  hsRate: "31%",
  acs: 256,

  adr: 168,
  kills: 21.3,
  deaths: 15.8,
  assists: 6.4,

  topAgents: ["Jett", "Raze", "Omen"],

  recentMatches: [
    {
      result: "Win",
      mode: "competitive",
      agent: "Jett",
      map: "Ascent",
      kills: 24,
      deaths: 15,
      assists: 6,
      acs: 278,
    },
    {
      result: "Lose",
      mode: "unrated",
      agent: "Raze",
      map: "Bind",
      kills: 18,
      deaths: 17,
      assists: 5,
      acs: 231,
    },
    {
      result: "Win",
      mode: "swiftplay",
      agent: "Omen",
      map: "Haven",
      kills: 20,
      deaths: 14,
      assists: 9,
      acs: 244,
    },
  ],
};