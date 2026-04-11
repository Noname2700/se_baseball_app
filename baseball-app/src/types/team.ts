import type { TeamFullName, TeamAbbreviation, Division, League } from "../lib/constants";

interface Team {
  id: number;
  name: TeamFullName;
  city: string;
  abbreviation: TeamAbbreviation;
  logoUrl: string;
  record: {
    home: {
      wins: number;
      losses: number;
    };
    away: {
      wins: number;
      losses: number;
    };
  };
  division: Division;
  league: League;
}

export type { Team };
