import  *  as  status from "../utils/constants";

interface Game {
    id: number;
    date: string;
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
}

interface PreScheduledGame {
    id: number;
    date: string;
    time: string;
    homeTeam: string;
    awayTeam: string;
    status: typeof status[keyof typeof status];
} 

interface LiveGame {
    id: number;
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
    inning: number;
    isTopInning: boolean;
    strikes: number;
    balls: number;
    outs: number;
    baserunners: {
        first: boolean;
        second: boolean;
        third: boolean;
    };
    hits: number;
    errors: number;
    runs: number;
    status: typeof status[keyof typeof status];
}

interface PostGame {
    id: number;
    date: string;
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
    status: typeof status[keyof typeof status];
}

export type { Game, PreScheduledGame, LiveGame, PostGame };