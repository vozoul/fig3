import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    //constantes
    const [menu, setMenu] = useState(localStorage.collapsedMenu ?? "false")
    const [modalBg, setModalBg] = useState("")
    const [sectionTitle, setSectionTitle] = useState('Home')
    const [showModal, setShowModal] = useState(false)
    const [theme, setTheme] = useState(localStorage.theme ?? "dark")
    const [useModal, setUseModal] = useState()

    //methodes
    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const toggleMenu = () => {
        const nMenu = (menu === "true") ? "false" : "true"
        setMenu(nMenu)
    }

    const toggleTheme = () => {
        const nTheme = (theme === "dark") ? "light" : "dark"
        setTheme(nTheme)
    }
    
    const toggleSectionTitle = (title) => {
        setSectionTitle(title)
    }

    //persistance
    useEffect(() => {
        localStorage.setItem("theme", theme)
        localStorage.setItem("collapsedMenu", menu)
    }, [theme, setTheme, menu, setMenu])

    return (
        <AppContext.Provider value={{
            menu,
            modalBg,
            sectionTitle,
            showModal,
            theme,
            useModal,
            setModalBg,
            setShowModal,
            setUseModal,
            toggleMenu,
            toggleModal,
            toggleTheme,
            toggleSectionTitle
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider