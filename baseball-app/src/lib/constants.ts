// Game status options
const status = {
  Scheduled: "Scheduled",
  Live: "Live",
  Post: "Post",
} as const;

// Baseball positions with full names
const positions = {
  P: "Pitcher",
  C: "Catcher",
  "1B": "First Baseman",
  "2B": "Second Baseman",
  "3B": "Third Baseman",
  SS: "Shortstop",
  LF: "Left Fielder",
  CF: "Center Fielder",
  RF: "Right Fielder",
  DH: "Designated Hitter",
} as const;

// Jersey numbers 1–99
const jerseyNumbers = Array.from({ length: 99 }, (_, i) => i + 1);

// Heights from 5'0" to 7'0" (25 values, 1-inch increments)
const heights = Array.from(
  { length: 25 },
  (_, i) => `${5 + Math.floor(i / 12)}'${i % 12}"`
);

// Weights from 150 to 250 lbs (101 values)
const weights = Array.from({ length: 101 }, (_, i) => 150 + i);

// Innings 1–9
const innings = Array.from({ length: 9 }, (_, i) => i + 1);

// Batting hand options
const battingHands = { L: "Left", R: "Right", S: "Switch" } as const;

// Throwing hand options
const throwingHands = { L: "Left", R: "Right" } as const;

// League names
const leagueNames = ["AL", "NL"] as const;

// Division names
const divisionNames = ["East", "Central", "West"] as const;

// All 30 MLB team abbreviations
const teamsAbbreviations = [
  "ARI",
  "ATL",
  "BAL",
  "BOS",
  "CHC",
  "CWS",
  "CIN",
  "CLE",
  "COL",
  "DET",
  "HOU",
  "KC",
  "LAA",
  "LAD",
  "MIA",
  "MIL",
  "MIN",
  "NYM",
  "NYY",
  "OAK",
  "PHI",
  "PIT",
  "SD",
  "SEA",
  "SF",
  "STL",
  "TB",
  "TEX",
  "TOR",
  "WSH",
] as const;

// All 30 MLB team full names (same order as abbreviations)
const teamsFullNames = [
  "Arizona Diamondbacks",
  "Atlanta Braves",
  "Baltimore Orioles",
  "Boston Red Sox",
  "Chicago Cubs",
  "Chicago White Sox",
  "Cincinnati Reds",
  "Cleveland Guardians",
  "Colorado Rockies",
  "Detroit Tigers",
  "Houston Astros",
  "Kansas City Royals",
  "Los Angeles Angels",
  "Los Angeles Dodgers",
  "Miami Marlins",
  "Milwaukee Brewers",
  "Minnesota Twins",
  "New York Mets",
  "New York Yankees",
  "Oakland Athletics",
  "Philadelphia Phillies",
  "Pittsburgh Pirates",
  "San Diego Padres",
  "Seattle Mariners",
  "San Francisco Giants",
  "St. Louis Cardinals",
  "Tampa Bay Rays",
  "Texas Rangers",
  "Toronto Blue Jays",
  "Washington Nationals",
] as const;

// Derived TypeScript types
type Status = (typeof status)[keyof typeof status];
type PositionKey = keyof typeof positions;
type Position = (typeof positions)[keyof typeof positions];
type JerseyNumber = (typeof jerseyNumbers)[number];
type Height = (typeof heights)[number];
type Weight = (typeof weights)[number];
type Inning = (typeof innings)[number];
type BattingHand = (typeof battingHands)[keyof typeof battingHands];
type ThrowingHand = (typeof throwingHands)[keyof typeof throwingHands];
type League = (typeof leagueNames)[number];
type Division = (typeof divisionNames)[number];
type TeamAbbreviation = (typeof teamsAbbreviations)[number];
type TeamFullName = (typeof teamsFullNames)[number];

export {
  status,
  positions,
  jerseyNumbers,
  heights,
  weights,
  innings,
  battingHands,
  throwingHands,
  leagueNames,
  divisionNames,
  teamsAbbreviations,
  teamsFullNames,
};

export type {
  Status,
  PositionKey,
  Position,
  JerseyNumber,
  Height,
  Weight,
  Inning,
  BattingHand,
  ThrowingHand,
  League,
  Division,
  TeamAbbreviation,
  TeamFullName,
};
