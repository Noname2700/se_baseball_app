interface LeaderboardEntry {
    rank: number;
    playerId: number;
    playerName: string;
    teamId: number;
    value: number;
    category: string;
}

interface Leaderboard {
    category: string;
    entries: LeaderboardEntry[];
}

export type { LeaderboardEntry, Leaderboard };
