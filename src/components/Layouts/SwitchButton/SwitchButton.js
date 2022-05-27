import React, {useContext} from "react"
import "./SwitchButton.css"
import { AppContext } from "services/contexts/AppContext"

const SwitchButton = () => {
    const {theme, toggleTheme} = useContext(AppContext)
    return (
        <div className="menu-item">
        <label className="switch">
            <input type="checkbox" onClick={toggleTheme} />
            <p className="slider"></p>
        </label>
        <p className="style">{theme}</p>
        </div>
    )
}

export default SwitchButton