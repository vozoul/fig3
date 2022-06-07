import React, {useState, useEffect} from "react"
import axios from "axios"
import { ServerCard } from "components"
import Config from "services/config/config"
// import Servers from "services/fakesData/servers"
import "./Lists.css"

const ServerList = () => {

    // const Servers = await fetch("http://localhost/servers", {method: "get"})
    const [servers, setServers] = useState([]);
    
    useEffect(() => {
        axios({
            method: "get",
            url: Config.apiUrl + "/servers"
        })
            .then(res => setServers(res.data))
        // setServers(data)
    }, [])

    return (
        <div className="serv-list">
            <div className="content">
                {servers.length === 0 && "No Servers to display"}
                {servers.length > 0 && servers.map(server =>
                    <ServerCard key={server.id} props={server} />
                )}
            </div>
        </div>
    )
}

export default ServerList