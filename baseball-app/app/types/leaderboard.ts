interface PositionPlayerStats {
    playerId: number;
    season: number;
    teamId: number;
    gamesPlayed: number;
    BattingAverage: number;
    Hits: number;
    homeRuns: number;
    RBIs: number;
    stolenBases: number;
    OPS: number;
}

interface PitcherPlayerStats {
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
    Hits: number;
    OPS: number;
   StolenBases: number;
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