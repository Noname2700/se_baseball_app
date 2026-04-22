interface BoxScore {
  gameId: string;
  date: string;
  homeTeam: string; // team id
  awayTeam: string; // team id
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
}

export type { BoxScore };
