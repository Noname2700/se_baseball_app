interface Team {
    id: number;
    name: string;
    city: string;
    abbreviation: string;
    logoUrl: string;
    record: {
        home: {
            wins: number;
            losses: number;
    }
        away: {
            wins: number;
            losses: number;
        }
    };
    division: string;
}