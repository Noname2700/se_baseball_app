import type { Position, JerseyNumber, HeightAndInches, Weight, BattingHand, ThrowingHand } from "../utils/constants";

interface Player {
    id: number;
    name: string;
    teamId: number;
    position: Position;
    jersey: JerseyNumber;
    height: HeightAndInches;
    weight: Weight;
    DOB: string;
    BattingHand: BattingHand;
    ThrowingHand: ThrowingHand;
    Debut: string;
}

export type { Player };
