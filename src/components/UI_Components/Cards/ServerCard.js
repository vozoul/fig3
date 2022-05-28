import {useRef, useEffect, useState} from "react"
import './Cards.css'

const ServerCard = ({ props }) => {
    const eRef = useRef()
    const [hght, setHght] = useState()
    const [inHght, setInHght] = useState()
    const [toggleTabs, setToggleTab] = useState("info")

    const { id, info, players } = props
    const picture = (k) => {
        if (k === "info") {
            return <img src={"media" + props[k].picto} alt="" />
        } else if (k === "players") {
            return <img src={"media/img/svg/membres.svg"} alt="" />
        } else {
            return <img src={"media" + props[k].pic} alt="" />
        }
    }

    const getHeight = () => {
        const nh = eRef.current?.clientHeight
        setHght(nh)
        const nih = document.querySelector('.card-content-list')?.scrollHeight
        setInHght(nih)
    }

    const toggleTab = (index) => {
        setToggleTab(index)
    }

    useEffect(() => {
        window.addEventListener("load", getHeight)
        window.addEventListener("mousemove", getHeight)
        window.addEventListener("mouseout", getHeight)
        if (inHght > hght) {
            eRef.current.classList.add('scrollable')
        } else {
            eRef.current.classList.remove('scrollable')
        }
    }, [inHght, hght])

    return (
        <div className="serv-card" key={id}>
            <div className="card-header">
                <img src={"media" + info.picto} alt="" />
                <p className="server-name">{info.title}</p>
                <div className={info.status}>&nbsp;</div>
            </div>
            <form className="card-content">

                <div className={toggleTabs === "info" ? "card-content-element active-content" : "card-content-element"}>
                    <label>Adresse</label>
                    <input type="text" value={info.host + ":" + info.port} onChange={() => { }} />
                    {(info.connect) &&
                        <a className="connector" href={info.connect}>
                            <img src="./media/img/svg/rightArrow.svg" alt="connect" />
                        </a>}

                    {info.map && <div>
                        <label>Map</label>
                        <input type="text" value={info.map} onChange={() => { }} />
                    </div>}

                    {info.gameMode && <div>
                        <label>Game mode</label>
                        <input type="text" value={info.gameMode} onChange={() => { }} />
                    </div>}

                    {info.version && <div>
                        <label>version</label>
                        <input type="text" value={info.version} onChange={() => { }} />
                    </div>}

                    <div className="inline">
                        <p>players</p>
                        <div className="description">
                            <input className="left" type="text" value={players.length} onChange={() => { }} />
                            <input className="right" type="text" value={info.slots} onChange={() => { }} />
                        </div>
                    </div>

                </div>
                <div className={toggleTabs === "players" ? "card-content-element active-content" : "card-content-element"}>
                    <div className="inline">
                        <p>players</p>
                        <div className="description">
                            <input className="left" type="text" value={players.length} onChange={() => { }} />
                            <input className="right" type="text" value={info.slots} onChange={() => { }} />
                        </div>
                    </div>
                    <div className="card-content-list" ref={eRef}>

                    
                    {players.length >= 1 && players.map(player => {
                        return (
                            <p key={player.username}>- {player.username}</p>
                            )
                        }
                    )}
                    {players.length === 0 && <p>No Players on server</p>}
                    </div>
                </div>
            </form>
            <div className="card-footer">
                <div
                    key={props.id + "_info"}
                    className={(toggleTabs === "info") ? "active-tab" : undefined}
                    onClick={() => toggleTab('info')}
                    >
                    {picture("info")}
                </div>
                <div
                    key={props.id + "_players"}
                    className={(toggleTabs === "players") ? "active-tab" : undefined}
                    onClick={() => toggleTab("players")}
                >
                    {picture("players")}
                </div>
            </div>
        </div>
    )
}

export default ServerCard