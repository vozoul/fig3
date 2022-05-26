import React, { useState, useEffect, useContext } from "react"
import {ServerCard, Modal, AddServerForm} from "components"
import Servers from "../../services/fakesData/servers_long"
import { UserContext } from 'services/contexts/UserContext'
import "./Lists.css"

const ServerList = () => {

    const user = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)
    
    useEffect(() => {
        setIsAdmin(true)
    }, [user, isAdmin])

    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <div className="serv-list">
                <div className="content">
                    {Servers.map(server =>
                        <ServerCard key={server.id} props={server} />
                    )}
                </div>
                {(isAdmin && <button className="addServer_button" onClick={toggleModal}>+</button>)}
            </div>
            {showModal && <Modal close={toggleModal}>
                <AddServerForm close={toggleModal} />
            </Modal>}
        </>
    )
}

export default ServerList