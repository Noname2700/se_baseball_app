import * as status from "../utils/constants";

interface Game {
  id: string;
  date: string;
  homeTeam: string; // team id
  awayTeam: string; // team id
  homeScore: number;
  awayScore: number;
}

interface PreScheduledGame {
  id: string;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  status: (typeof status)[keyof typeof status];
}

interface LiveGame {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  inning: number;
  isTopInning: boolean;
  strikes: number;
  balls: number;
  outs: number;

  batterId?: string;
  pitcherId?: string;

  baserunners?: {
    first: boolean;
    second: boolean;
    third: boolean;
  };

  hits: number;
  errors: number;
  runs: number;

  pitchCount?: number;
  lastPlay?: string;

  status: (typeof status)[keyof typeof status];
}

interface PostGame {
  id: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: (typeof status)[keyof typeof status];
}

export type { Game, PreScheduledGame, LiveGame, PostGame };
