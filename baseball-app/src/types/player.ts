import * as info from "../../utils/constants";

interface Player {
  id: string;
  name: string;
  teamId: string;
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
