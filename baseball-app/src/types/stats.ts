interface BaseOffensiveStats {
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
  OBP: number;
  battingAverage: number;
}

interface BatterPlayerStats extends BaseOffensiveStats {
  leagueRanking: number;
}

interface CatcherPlayerStats extends BaseOffensiveStats {
  baserunnersThrownOut: number;
  DRS: number;
  passedBallsAllowed: number;
  blockedBalls: number;
  catchersInterference: number;
  popTime: number;
  defensiveRatings: number;
  errors: number;
  leagueRanking: number;
}

interface DesignatedHitterPlayerStats extends BaseOffensiveStats {
  leagueRanking: number;
}

interface InfieldPlayerStats extends BaseOffensiveStats {
  defensiveRatings: number;
  DRS: number;
  errors: number;
  leagueRanking: number;
}

interface OutfieldPlayerStats extends BaseOffensiveStats {
  defensiveRatings: number;
  DRS: number;
  outfieldThrownOuts: number;
  errors: number;
  leagueRanking: number;
}

interface StartingPitcherStats {
  playerId: number;
  season: number;
  teamId: number;
  gamesStarted: number;
  inningsPitched: number;
  wins: number;
  losses: number;
  earnedRuns: number;
  strikeouts: number;
  walks: number;
  WHIP: number;
  ERA: number;
  leagueRanking: number;
}

interface ReliefPitcherStats {
  playerId: number;
  season: number;
  teamId: number;
  gamesPlayed: number;
  inningsPitched: number;
  wins: number;
  losses: number;
  saves: number;
  earnedRuns: number;
  strikeouts: number;
  walks: number;
  WHIP: number;
  ERA: number;
  leagueRanking: number;
}

interface CloserStats {
  playerId: number;
  season: number;
  teamId: number;
  gamesPlayed: number;
  inningsPitched: number;
  wins: number;
  losses: number;
  saves: number;
  blownSaves: number;
  earnedRuns: number;
  strikeouts: number;
  walks: number;
  WHIP: number;
  ERA: number;
  leagueRanking: number;
}

export type {
  BaseOffensiveStats,
  BatterPlayerStats,
  CatcherPlayerStats,
  DesignatedHitterPlayerStats,
  InfieldPlayerStats,
  OutfieldPlayerStats,
  StartingPitcherStats,
  ReliefPitcherStats,
  CloserStats,
};
