import {createContext, useContext, useState, ReactNode} from "react";

interface ModalContextType {
    isOpen:boolean;
    selectedPlayerId: string | null;
    openModal: (playerId: string) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);

    const openModal = (playerId: string) => {
        setSelectedPlayerId(playerId);
        setIsOpen(true);
    };

    const closeModal = () => {
        setSelectedPlayerId(null);
        setIsOpen(false);
    };

    return (
        <ModalContext.Provider value={{ isOpen, selectedPlayerId, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
}
 
function useModal() {
    const context = useContext(ModalContext);
    if (!context) throw new Error("useModal must be used within a ModalProvider");
    return context;
}

export { ModalProvider, useModal };