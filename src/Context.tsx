import { createContext, useState } from "react";

type ContextType = {
    openModal: boolean,
    setOpenModal: (arg: boolean) => void
}

type ContextChildrenType = {
    children: React.ReactNode
}

const Context = createContext<ContextType | null>(null);

function ContextProvider({ children }: ContextChildrenType) {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <Context.Provider value={{ openModal, setOpenModal }}>
            {children}
        </ Context.Provider>
    )
}

export { ContextProvider, Context }