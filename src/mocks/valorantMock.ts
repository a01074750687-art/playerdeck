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

  topAgents: [
    {
      agent: "Jett",
      matches: 8,
      kd: 1.42,
    },
    {
      agent: "Raze",
      matches: 6,
      kd: 1.28,
    },
    {
      agent: "Omen",
      matches: 4,
      kd: 1.16,
    },
  ],

  weaponKills: [
    {
      weapon: "Vandal",
      kills: 48,
    },
    {
      weapon: "Phantom",
      kills: 31,
    },
    {
      weapon: "Sheriff",
      kills: 14,
    },
    {
      weapon: "Operator",
      kills: 9,
    },
    {
      weapon: "Spectre",
      kills: 6,
    },
  ],

  actPeakRanks: [
    {
      actId: "mock-v26-a3",
      actLabel: "V26 // ACT III",
      rank: "Radiant",
    },
    {
      actId: "mock-v26-a2",
      actLabel: "V26 // ACT II",
      rank: "Immortal 3",
    },
    {
      actId: "mock-v26-a1",
      actLabel: "V26 // ACT I",
      rank: "Immortal 2",
    },
    {
      actId: "mock-v25-a6",
      actLabel: "V25 // ACT VI",
      rank: "Immortal 1",
    },
  ],

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
      playedAt: null,

      score: {
        ally: 13,
        enemy: 8,
      },

      isMatchMvp: false,
      isTeamMvp: true,

      allyTeam: [],
      enemyTeam: [],

      weaponKills: [
        {
          weapon: "Vandal",
          kills: 15,
        },
        {
          weapon: "Sheriff",
          kills: 5,
        },
        {
          weapon: "Operator",
          kills: 4,
        },
      ],
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
      playedAt: null,

      score: {
        ally: 10,
        enemy: 13,
      },

      isMatchMvp: false,
      isTeamMvp: false,

      allyTeam: [],
      enemyTeam: [],

      weaponKills: [
        {
          weapon: "Phantom",
          kills: 12,
        },
        {
          weapon: "Sheriff",
          kills: 4,
        },
        {
          weapon: "Spectre",
          kills: 2,
        },
      ],
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
      playedAt: null,

      score: {
        ally: 5,
        enemy: 3,
      },

      isMatchMvp: false,
      isTeamMvp: false,

      allyTeam: [],
      enemyTeam: [],

      weaponKills: [
        {
          weapon: "Vandal",
          kills: 13,
        },
        {
          weapon: "Phantom",
          kills: 5,
        },
        {
          weapon: "Sheriff",
          kills: 2,
        },
      ],
    },
  ],
};