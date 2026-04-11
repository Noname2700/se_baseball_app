import type { Status } from "../lib/constants";

interface PreScheduledGame {
  id: number;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  status: Status;
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
  batterId?: number;
  pitcherId?: number;
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
  status: Status;
}

interface PostGame {
  id: number;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: Status;
}

export type { PreScheduledGame, LiveGame, PostGame };
