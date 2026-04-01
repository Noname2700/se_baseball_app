import type { TeamFullName, TeamAbbreviation, League, Division } from "../utils/constants";

interface Team {
    id: number;
    name: TeamFullName;
    abbreviation: TeamAbbreviation;
    league: League;
    division: Division;
    wins: number;
    losses: number;
}

export type { Team };
