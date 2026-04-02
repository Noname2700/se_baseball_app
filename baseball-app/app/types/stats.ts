interface PositionPlayerStats {
  playerId: number;
  season: number;
  teamId: number;
  BattingAverage: number;
  homeRuns: number;
  RBIs: number;
  stolenBases: number;
  OPS: number;
  leagueRanking: number;
}

interface PitcherPlayerStats {
  playerId: number;
  season: number;
  teamId: number;
  gamesPlayed: number;
  inningsPitched: number;
  wins: number;
  losses: number;
  ERA: number; // earned run on average
  strikeouts: number;
  walks: number;
  WHIP: number;
  leagueRanking: number;
}

interface TeamBatterStats {
  teamId: number;
  season: number;
  battingAverage: number;
  homeRuns: number;
  RBIs: number;
  hits: number;
  OPS: number;
  stolenBases: number;
  leagueRanking: number;
}

interface TeamPitcherStats {
  teamId: number;
  season: number;
  wins: number;
  losses: number;
  ERA: number;
  strikeouts: number;
  walks: number;
  WHIP: number;
  leagueRanking: number;
}

export type {
  PositionPlayerStats,
  PitcherPlayerStats,
  TeamBatterStats,
  TeamPitcherStats,
};
