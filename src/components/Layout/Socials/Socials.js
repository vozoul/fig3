import React, {useContext} from "react";
import "./Socials.css"
import {AppContext} from "services/contexts/AppContext"

const Socials = () => {

    const {theme} = useContext(AppContext)

    return <div className="socials">
        <div className="social-list">
            <p className="social-item">
                <img src="media/img/svg/cup.svg" alt="Show scoreboard" />
            </p>
            <a href="https://discord.gg/AnRrwch" className="social-item" target="blank">
                <img src="media/img/svg/discord.svg" alt="Notre discord" />
            </a>
            <a href="https://steamcommunity.com/groups/lesfigues" target="blanck" className="social-item">
                <img src={(theme === "dark") ? "media/img/svg/steam.svg" : "media/img/svg/dark-steam.svg"} alt="Notre groupe Steam" />
            </a>
        </div>
    </div>
}

export default Socials