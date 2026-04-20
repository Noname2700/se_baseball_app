interface PositionPlayerStats {
  playerId: string;
  season: number;
  teamId: string;
  BattingAverage: number;
  homeRuns: number;
  RBIs: number;
  stolenBases: number;
  OPS: number;
  leagueRanking: number;
}

interface PitcherPlayerStats {
  playerId: string;
  season: number;
  teamId: string;
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
  teamId: string;
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
  teamId: string;
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
