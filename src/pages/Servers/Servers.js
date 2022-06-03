import React, {useEffect, useState, useContext} from "react"
import {Container, ServerList, AddServerForm} from "components"
import {AppContext} from "services/contexts/AppContext"
import {UserContext} from "services/contexts/UserContext"
import "./Servers.css"

const Servers = () => {
    const user = useContext(UserContext)
    const {toggleSectionTitle, toggleModal, setUseModal, setModalBg} = useContext(AppContext)
    const [isAdmin, setIsAdmin] = useState(false)
        
    const openForm = () => {
        setModalBg("url('./media/img/svg/bg_servers.svg')")
        setUseModal(<AddServerForm />)
        toggleModal()
    }

    useEffect(() => {
        setIsAdmin(true)
    }, [user, isAdmin])

    useEffect(() => {
        toggleSectionTitle('Nos Serveurs')
    }, [toggleSectionTitle])

    return (
        <Container>
            <ServerList />
            {(isAdmin && <button className="addServer_button" onClick={openForm}>+</button>)}
        </Container>
    )
}

export default Servers