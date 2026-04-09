import * as info from "../utils/constants";

interface Player {
  id: number;
  name: string;
  teamId: number;
  position: info.Position;
  jersey: info.JerseyNumber;
  height: info.HeightAndInches;
  weight: info.Weight;
  DOB: string;
  BattingHand: info.BattingHand;
  ThrowingHand: info.ThrowingHand;
  Debut: string;
}

export type { Player };
