import React, { useState, useEffect, useContext } from "react"
import {ServerCard, AddServerForm} from "components"
import Servers from "services/fakesData/servers_long"
import { UserContext } from 'services/contexts/UserContext'
import { AppContext } from 'services/contexts/AppContext'
import "./Lists.css"

const ServerList = () => {

    const user = useContext(UserContext)
    const {toggleModal, setUseModal, setModalBg} = useContext(AppContext)
    const [isAdmin, setIsAdmin] = useState(false)
    
    useEffect(() => {
        setIsAdmin(true)
    }, [user, isAdmin])
    
    const openForm = () => {
        setModalBg("url('./media/img/svg/bg_servers.svg') no-repeat")
        setUseModal(<AddServerForm />)
        toggleModal()
    }

    return (
        <>
            <div className="serv-list">
                <div className="content">
                    {Servers.length === 0 && "No Servers to display"}
                    {Servers.length > 0 && Servers.map(server =>
                        <ServerCard key={server.id} props={server} />
                    )}
                </div>
                {(isAdmin && <button className="addServer_button" onClick={openForm}>+</button>)}
            </div>
            
        </>
    )
}

export default ServerList