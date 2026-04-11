import type {
  Position,
  JerseyNumber,
  Height,
  Weight,
  BattingHand,
  ThrowingHand,
} from "../lib/constants";

interface Player {
  id: number;
  name: string;
  teamId: number;
  position: Position;
  jersey: JerseyNumber;
  height: Height;
  weight: Weight;
  DOB: string;
  battingHand: BattingHand;
  throwingHand: ThrowingHand;
  debut: string;
}

export type { Player };
