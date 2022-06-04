import React from "react"
import { ServerCard } from "components"
import Servers from "services/fakesData/servers_long"
import "./Lists.css"

const ServerList = () => {

    return (
        <div className="serv-list">
            <div className="content">
                {Servers.length === 0 && "No Servers to display"}
                {Servers.length > 0 && Servers.map(server =>
                    <ServerCard key={server.id} props={server} />
                )}
            </div>
        </div>
    )
}

export default ServerList