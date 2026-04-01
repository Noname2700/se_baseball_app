interface BatterPlayerStats {
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
}

interface CathcherPlayerStats {
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
    baserunnersThrownOut: number; // Number of baserunners thrown out while attempting to steal
    DRS: number; // Defensive Runs Saved
    passedBallsAllowed: number;
    blockedBalls: number;
    catchersInterference: number;
    popTime: number; // Time taken to throw out a baserunner
    defensiveRatings: number; // Defensive ratings based on fielding performance
    errors: number;
    leagueRanking: number;
}

interface DesignatedHitterPlayerStats {
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
    leagueRanking: number;
}

interface FirstBasemanPlayerStats {
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
    defensiveRatings: number; // Defensive ratings based on fielding performance
    DRS: number; // Defensive Runs Saved
    errors: number;
    leagueRanking: number;
}

interface SecondBasemanPlayerStats {
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
    defensiveRatings: number; // Defensive ratings based on fielding performance
    DRS: number; // Defensive Runs Saved
    errors: number;
    leagueRanking: number;
}

interface ShortstopPlayerStats {
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
    defensiveRatings: number; // Defensive ratings based on fielding performance
    DRS: number; // Defensive Runs Saved
    errors: number;
    leagueRanking: number;
}

interface ThirdBasemanPlayerStats {
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
    defensiveRatings: number; // Defensive ratings based on fielding performance
    DRS: number; // Defensive Runs Saved
    errors: number;
    leagueRanking: number;
}

interface RightFielderPlayerStats {
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
    defensiveRatings: number; // Defensive ratings based on fielding performance
    DRS: number; // Defensive Runs Saved
    outfieldThrownOuts: number; // Number of baserunners thrown out while attempting to advance on the basepaths
    errors: number;
    leagueRanking: number;
} 

interface CenterFielderPlayerStats {
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
    defensiveRatings: number; // Defensive ratings based on fielding performance
    DRS: number; // Defensive Runs Saved
    outfieldThrownOuts: number; // Number of baserunners thrown out while attempting to advance on the basepaths
    errors: number;
    leagueRanking: number;
}

interface LeftFielderPlayerStats {
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
    defensiveRatings: number; // Defensive ratings based on fielding performance
    DRS: number; // Defensive Runs Saved
    outfieldThrownOuts: number; // Number of baserunners thrown out while attempting to advance on the basepaths
    errors: number;
    leagueRanking: number;
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
    leagueRanking: number;
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
    leagueRanking: number;
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
    leagueRanking: number;
}

export type { BatterPlayerStats, CathcherPlayerStats, DesignatedHitterPlayerStats, FirstBasemanPlayerStats, SecondBasemanPlayerStats, ShortstopPlayerStats, ThirdBasemanPlayerStats, RightFielderPlayerStats, CenterFielderPlayerStats, LeftFielderPlayerStats, StartingPitcherPlayer, ReliefPitcherPlayer, CloserPitcherPlayer };