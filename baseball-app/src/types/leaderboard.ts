interface LeaderboardPositionPlayerStats {
  playerId: number;
  season: number;
  teamId: number;
  gamesPlayed: number;
  battingAverage: number;
  hits: number;
  homeRuns: number;
  RBIs: number;
  stolenBases: number;
  OPS: number;
}

interface LeaderboardPitcherStats {
  playerId: number;
  season: number;
  teamId: number;
  wins: number;
  losses: number;
  earnedRuns: number;
  strikeouts: number;
  walks: number;
  WHIP: number;
  ERA: number;
  completeGames: number;
}

interface TeamBatterStats {
  teamId: number;
  season: number;
  homeRuns: number;
  RBIs: number;
  hits: number;
  OPS: number;
  stolenBases: number;
}

interface TeamPitcherStats {
  teamId: number;
  season: number;
  wins: number;
  losses: number;
  earnedRuns: number;
  strikeouts: number;
  walks: number;
  WHIP: number;
  ERA: number;
}

export type {
  LeaderboardPositionPlayerStats,
  LeaderboardPitcherStats,
  TeamBatterStats,
  TeamPitcherStats,
};
