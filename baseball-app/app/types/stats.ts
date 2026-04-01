interface PositionPlayerStats {
  playerId: number;
  season: number;
  teamId: number;
  gamesPlayed: number;
  atBats: number;
  runs: number;
  hits: number;
  doubles: number;
  triples: number;
  homeRuns: number;
  RBIs: number;
  stolenBases: number;
  caughtStealing: number;
  OPS: number;
  OBS: number;
  battingAverage: number;
  leagueRank: number;
}

interface PitcherPlayerStats {
  playerId: number;
  season: number;
  teamId: number;
  gamesPlayed: number;
  wins: number;
  losses: number;
  saves: number;
  inningsPitched: number;
  earnedRuns: number;
  strikeouts: number;
  walks: number;
  WHIP: number;
  ERA: number;
  leagueRank: number;
}

export type { PositionPlayerStats, PitcherPlayerStats };
