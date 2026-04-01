interface PositionPlayerStats {
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
  leagueRank: number;
}

interface StartingPitcherPlayer {
  id: number;
  name: string;
  teamId: number;
  position: string;
  inningsPitched: number;
  wins: number;
  losses: number;
  earnedRuns: number;
  strikeouts: number;
  walks: number;
  WHIP: number;
  ERA: number;
  leagueRank: number;
}

interface ReliefPitcherPlayer {
  id: number;
  name: string;
  teamId: number;
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
  leagueRank: number;
}

interface CloserPitcherPlayer {
  id: number;
  name: string;
  teamId: number;
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
  leagueRank: number;
}

interface TeamBatterStats {
  teamId: number;
  season: number;
  homeRuns: number;
  RBIs: number;
  hits: number;
  OPS: number;
  OBP: number;
  stolenBases: number;
  leagueRank: number;
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
  leagueRank: number;
}

export type {
  PositionPlayerStats,
  StartingPitcherPlayer,
  ReliefPitcherPlayer,
  CloserPitcherPlayer,
  TeamBatterStats,
  TeamPitcherStats,
};
