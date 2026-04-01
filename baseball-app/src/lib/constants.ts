// Jersey numbers 1–99
export const jerseyNumbers: number[] = Array.from({ length: 99 }, (_, i) => i + 1);

// Heights from 5'0" to 7'0" (25 values: 5'0"–5'11", 6'0"–6'11", 7'0")
export const heights: string[] = Array.from(
  { length: 25 },
  (_, i) => `${5 + Math.floor(i / 12)}'${i % 12}"`
);

// Weights from 150 to 250 lbs (101 values)
export const weights: number[] = Array.from({ length: 101 }, (_, i) => 150 + i);
