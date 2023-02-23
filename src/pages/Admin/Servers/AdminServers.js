import React, { useEffect, useContext } from "react"
import { Activity } from "components"
import { AppContext } from "services/contexts/AppContext"
import servers from 'services/fakesData/servers'
import "./Servers.css"

const AdminServers = () => {

    const servers = fetch("http://localhost/servers").then(data => console.log(data))

    const { toggleSectionTitle } = useContext(AppContext)

    useEffect(() => {
        toggleSectionTitle('Les membres inscrits')
    }, [toggleSectionTitle])

    return (
        <div className="contenu">
            <div className="line header">
                <div>Actions</div>
                <div>Picto</div>
                <div>Title</div>
                <div>Host</div>
                <div>Port</div>
                <div>Slots</div>
            </div>
            {servers?.map((server) => {
                const serv = server.info
                return (
                        <div key={server.id} className="line" >
                            <Activity />
                            <div>{serv.picto && <img src={"/media/" + serv.picto} />}</div>
                            <div>{serv.title}</div>
                            <div>{serv.host}</div>
                            <div>{serv.port ?? "'default'"}</div>
                            <div>{serv.slots}</div>
                        </div>
                )
            }
            )}
        </div>
    )
}

export default AdminServers