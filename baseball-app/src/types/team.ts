import * as info from "../../utils/constants";

interface Team {
  id: string;
  name: info.TeamFullName;
  city: string;
  abbreviation: info.TeamAbbreviation;
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
  division: info.Division;
  league: info.League;
}

export type { Team };
