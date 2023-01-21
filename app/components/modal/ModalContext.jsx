import { createContext, useState } from "react";

export const ModalContext = createContext()

const ModalProvider = ({ children }) => {
    const [shouldShowModal, setShouldShowModal] = useState(false)
    const [shouldShowModalTwo, setShouldShowModalTwo] = useState(false)
    return (
        <ModalContext.Provider value={{ setShouldShowModal, shouldShowModal, setShouldShowModalTwo, shouldShowModalTwo }} {...children}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider