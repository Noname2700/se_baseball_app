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
    leagueRanking: number;
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
    leagueRanking: number;
}

interface TeamBatterStats {
    teamId: number;
    season: number;
    homeRuns: number;
    RBIs: number;
    Hits: number;
    OPS: number;
   StolenBases: number;
   leagueRanking: number;
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
    leagueRanking: number;

}