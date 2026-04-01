import type { Status } from "../utils/constants";

interface Game {
    id: number;
    homeTeamId: number;
    awayTeamId: number;
    homeScore: number;
    awayScore: number;
    status: Status;
    date: string;
    inning: number;
}

export type { Game };
