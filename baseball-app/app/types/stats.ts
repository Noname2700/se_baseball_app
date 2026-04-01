interface BattingStats {
    playerId: number;
    gamesPlayed: number;
    atBats: number;
    runs: number;
    hits: number;
    doubles: number;
    triples: number;
    homeRuns: number;
    rbi: number;
    stolenBases: number;
    walks: number;
    strikeouts: number;
    battingAverage: number;
    onBasePercentage: number;
    sluggingPercentage: number;
    ops: number;
}

interface PitchingStats {
    playerId: number;
    gamesPlayed: number;
    gamesStarted: number;
    wins: number;
    losses: number;
    saves: number;
    inningsPitched: number;
    hitsAllowed: number;
    runsAllowed: number;
    earnedRuns: number;
    walksAllowed: number;
    strikeouts: number;
    era: number;
    whip: number;
}

interface FieldingStats {
    playerId: number;
    gamesPlayed: number;
    putouts: number;
    assists: number;
    errors: number;
    fieldingPercentage: number;
}

export type { BattingStats, PitchingStats, FieldingStats };
