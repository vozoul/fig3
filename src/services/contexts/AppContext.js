import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    
    const [theme, setTheme] = useState(localStorage.theme ?? "dark")
    const [menu, setMenu] = useState(localStorage.collapsedMenu ?? "false")

    const [sectionTitle, setSectionTitle] = useState('Home')
        
    const toggleMenu = () => {
        const nMenu = (menu === "true") ? "false" : "true"
        setMenu(nMenu)
    }
    
    const toggleTheme = () => {
        const nTheme = (theme === "dark") ? "light" : "dark"
        setTheme(nTheme)
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        localStorage.setItem("collapsedMenu", menu)
    },[theme, setTheme, menu, setMenu])

    const toggleSectionTitle = (title) => {
        setSectionTitle(title)
    }

    return (
        <AppContext.Provider value={{theme, menu, toggleMenu, toggleTheme, sectionTitle, toggleSectionTitle}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider