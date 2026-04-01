import * as info from "../utils/constants";

interface PreScheduledGame {
  id: number;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  status: info.Status;
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

  baserunners?: {
    first: boolean;
    second: boolean;
    third: boolean;
  };
  hits: number;
  errors: number;
  runs: number;

  pitcherId: number;
  batterId: number;
  currentPitch: string;

  pitchPitchCount?: number;
  status: info.Status;
}

interface PostGame {
  id: number;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: info.Status;
}

export type { PreScheduledGame, LiveGame, PostGame };
