interface Player {
    id: number;
    name: string;
    teamId: number;
    position: string;
    jerseyNumber: number;
    height: string;
    weight: string;
    DOB: string;
    BattingHand: string;
    ThrowingHand: string;
    Debut: string;
}


interface PositionPlayer{
    id: number;
    name: string;
    teamId: number;
    position: string;
    battingAverage: number;
    homeRuns: number;
    RBIs: number;
    stolenBases: number;
    OPS: number;
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
}