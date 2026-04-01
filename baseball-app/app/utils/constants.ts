let status ={
    Scheduled: "Scheduled",
    Live: "Live",
    Post: "Post"
} as const;

let positions = {"P": "Pitcher",
    "C": "Catcher",
    "1B": "First Baseman",
    "2B": "Second Baseman",
    "3B": "Third Baseman",
    "SS": "Shortstop",  
    "LF": "Left Fielder",
    "CF": "Center Fielder",
    "RF": "Right Fielder",
    "DH": "Designated Hitter"} as const;
let jerseyNumbers = Array.from({length:99}, (_, i) => i + 1);

let heightAndInches = Array.from({length: 25}, (_, i) => `${5 + Math.floor(i / 12)}'${i % 12}"`); // 5'0" to 6'0"
let weight = Array.from({length: 101}, (_, i) => 150 + i); // 150 to 250 lbs

let battingHands = { "L": "Left", "R": "Right", "S": "Switch" } as const;
let throwingHands = { "L": "Left", "R": "Right" } as const;

let leagueNames = ["AL", "NL"] as const;
let divisionNames = ["East", "Central", "West"] as const;

let teamsAbbreviations = ["NYM", "NYA", "BOS", "PHI", "ATL", "WSN", "MIA", "PIT", "CIN", "STL", "CHC", "MIL", "LAD", "SDP", "SFG", "ARI", "COL", "LAA", "OAK", "SEA", "TEX", "HOU", "MIN", "CLE", "DET", "CWS"] as const;
let teamsFullNames = ["New York Mets", "New York Yankees", "Boston Red Sox", "Philadelphia Phillies", "Atlanta Braves", "Washington Nationals", "Miami Marlins", "Pittsburgh Pirates", "Cincinnati Reds", "St. Louis Cardinals", "Chicago Cubs", "Milwaukee Brewers", "Los Angeles Dodgers", "San Diego Padres", "San Francisco Giants", "Arizona Diamondbacks", "Colorado Rockies", "Los Angeles Angels", "Oakland Athletics", "Seattle Mariners", "Texas Rangers", "Houston Astros", "Minnesota Twins", "Cleveland Guardians", "Detroit Tigers", "Chicago White Sox"] as const;




type Position = typeof positions[keyof typeof positions];
type Status = typeof status[keyof typeof status];
type JerseyNumber = typeof jerseyNumbers[number];
type HeightAndInches = typeof heightAndInches[number];
type Weight = typeof weight[number];
type BattingHand = typeof battingHands[keyof typeof battingHands];
type ThrowingHand = typeof throwingHands[keyof typeof throwingHands];
type League = typeof leagueNames[number];
type Division = typeof divisionNames[number];
type TeamAbbreviation = typeof teamsAbbreviations[number];
type TeamFullName = typeof teamsFullNames[number];
export type { Status, Position, JerseyNumber, HeightAndInches, Weight, BattingHand, ThrowingHand, League, Division, TeamAbbreviation, TeamFullName };
