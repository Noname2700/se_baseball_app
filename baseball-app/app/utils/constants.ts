let status ={
    Scheduled: "Scheduled",
    Live: "Live",
    Post: "Post"
} as const;

type Status = typeof status[keyof typeof status];

export type { Status };
