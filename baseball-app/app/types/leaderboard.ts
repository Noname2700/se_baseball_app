interface BatterPlayerStats {
  playerId: string;
  season: number;
  teamId: string;
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
}

interface CathcherPlayerStats {
  playerId: string;
  season: number;
  teamId: string;
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
  baserunnersThrownOut: number; // Number of baserunners thrown out while attempting to steal
  DRS: number; // Defensive Runs Saved
  passedBallsAllowed: number;
  blockedBalls: number;
  catchersInterference: number;
  popTime: number; // Time taken to throw out a baserunner
  defensiveRatings: number; // Defensive ratings based on fielding performance
  errors: number;
}

interface DesignatedHitterPlayerStats {
  playerId: string;
  season: number;
  teamId: string;
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
}

interface FirstBasemanPlayerStats {
  playerId: string;
  season: number;
  teamId: string;
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
  defensiveRatings: number; // Defensive ratings based on fielding performance
  DRS: number; // Defensive Runs Saved
  errors: number;
}

interface SecondBasemanPlayerStats {
  playerId: string;
  season: number;
  teamId: string;
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
  defensiveRatings: number; // Defensive ratings based on fielding performance
  DRS: number; // Defensive Runs Saved
  errors: number;
}

interface ShortstopPlayerStats {
  playerId: string;
  season: number;
  teamId: string;
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
  defensiveRatings: number; // Defensive ratings based on fielding performance
  DRS: number; // Defensive Runs Saved
  errors: number;
}

interface ThirdBasemanPlayerStats {
  playerId: string;
  season: number;
  teamId: string;
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
  defensiveRatings: number; // Defensive ratings based on fielding performance
  DRS: number; // Defensive Runs Saved
  errors: number;
}

interface RightFielderPlayerStats {
  playerId: string;
  season: number;
  teamId: string;
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
  defensiveRatings: number; // Defensive ratings based on fielding performance
  DRS: number; // Defensive Runs Saved
  outfieldThrownOuts: number; // Number of baserunners thrown out while attempting to advance on the basepaths
  errors: number;
}

interface CenterFielderPlayerStats {
  playerId: string;
  season: number;
  teamId: string;
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
  defensiveRatings: number; // Defensive ratings based on fielding performance
  DRS: number; // Defensive Runs Saved
  outfieldThrownOuts: number; // Number of baserunners thrown out while attempting to advance on the basepaths
  errors: number;
}

interface LeftFielderPlayerStats {
  playerId: string;
  season: number;
  teamId: string;
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
  defensiveRatings: number; // Defensive ratings based on fielding performance
  DRS: number; // Defensive Runs Saved
  outfieldThrownOuts: number; // Number of baserunners thrown out while attempting to advance on the basepaths
  errors: number;
}

interface StartingPitcherPlayer {
  id: string;
  name: string;
  teamId: string;
  position: string;
  inningsPitched: number;
  wins: number;
  losses: number;
  earnedRuns: number;
  strikeouts: number;
  walks: number;
  WHIP: number;
  ERA: number;
}

interface ReliefPitcherPlayer {
  id: string;
  name: string;
  teamId: string;
  position: string;
  inningsPitched: number;
  wins: number;
  losses: number;
  saves: number;
  earnedRuns: number;
  strikeouts: number;
  walks: number;
  WHIP: number;
  ERA: number;
}

interface CloserPitcherPlayer {
  id: string;
  name: string;
  teamId: string;
  position: string;
  inningsPitched: number;
  wins: number;
  losses: number;
  saves: number;
  earnedRuns: number;
  strikeouts: number;
  walks: number;
  WHIP: number;
  ERA: number;
}

export type {
  BatterPlayerStats,
  CathcherPlayerStats,
  DesignatedHitterPlayerStats,
  FirstBasemanPlayerStats,
  SecondBasemanPlayerStats,
  ShortstopPlayerStats,
  ThirdBasemanPlayerStats,
  RightFielderPlayerStats,
  CenterFielderPlayerStats,
  LeftFielderPlayerStats,
  StartingPitcherPlayer,
  ReliefPitcherPlayer,
  CloserPitcherPlayer,
};
