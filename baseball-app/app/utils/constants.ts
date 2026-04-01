const status = {
  Scheduled: "Scheduled",
  Live: "Live",
  Post: "Post",
} as const;

const positions = ["P", "C", "1B", "2B", "3B", "SS", "LF", "CF", "RF", "DH"] as const;
const jerseyNumbers = Array.from({ length: 99 }, (_, i) => i + 1);

const leagues = ["AL", "NL"] as const;
const divisions = ["East", "Central", "West"] as const;

const newsCategories = ["Game Recap", "Player News", "Team News", "Injury Report", "Trade", "Performance", "Other"] as const;

const battingHands = ["Left", "Right", "Switch"] as const;
const throwingHands = ["Left", "Right"] as const;

const heightAndInches = {
  min: 60, // 5 feet
  max: 84, // 7 feet

  minInches: 0,
  maxInches: 11,
};
const weight = {
  min: 150, // 150 lbs
  max: 300, // 300 lbs
};

const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"] as const;
const teamAbbreviations = ["NY", "LA", "CHI", "HOU", "PHX", "PHI", "SA", "SD", "DAL", "SJ"] as const;

type Position = (typeof positions)[number];
type Status = (typeof status)[keyof typeof status];
type League = (typeof leagues)[number];
type Division = (typeof divisions)[number];
type NewsCategory = (typeof newsCategories)[number];
type BattingHand = (typeof battingHands)[number];
type ThrowingHand = (typeof throwingHands)[number];
type HeightAndInches = typeof heightAndInches;
type Weight = typeof weight;
type City = (typeof cities)[number];
type TeamAbbreviation = (typeof teamAbbreviations)[number];
type JerseyNumber = (typeof jerseyNumbers)[number];
export type { Status, Position, League, Division, NewsCategory, BattingHand, ThrowingHand, HeightAndInches, Weight, City, TeamAbbreviation, JerseyNumber };
