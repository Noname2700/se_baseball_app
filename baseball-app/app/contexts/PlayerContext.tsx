import { createContext, useContext, useState, ReactNode } from "react";
import { Player } from "../types/player";

interface PlayerContextType {
  setPlayerId: (id: string) => Promise<void>;
  playerData: Player | null;
  playerId: string | null;
}

const PlayerContext = createContext<PlayerContextType>({
  setPlayerId: async () => {},
  playerData: null,
  playerId: null,
});

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [playerData, setPlayerData] = useState<Player | null>(null);
  const value = {
    playerId,
    playerData,
    setPlayerId: async (id: string) => {
      try {
        const response = await fetch(`/api/player/${id}`);
        const player: Player = await response.json();

        setPlayerId(String(player.id));
        setPlayerData(player);
      } catch (error: unknown) {
        console.error("Error fetching player data:", error);
      }
    }
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
}
