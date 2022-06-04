import React, { useEffect, useContext } from "react"
import { Container, ServerList, AddServerForm } from "components"
import { AppContext } from "services/contexts/AppContext"
import { UserContext } from "services/contexts/UserContext"

const Servers = () => {
    const { user } = useContext(UserContext)
    const { toggleSectionTitle, toggleModal, setUseModal, setModalBg } = useContext(AppContext)

    const openForm = () => {
        setModalBg("url('./media/img/svg/bg_servers.svg')")
        setUseModal(<AddServerForm />)
        toggleModal()
    }

    useEffect(() => {
        toggleSectionTitle('Nos Serveurs')
    }, [toggleSectionTitle])

    return (
        <Container>
            <ServerList />
            {(user?.isAdmin && <button className="addServer_button" onClick={openForm}><i className='bx bx-plus' ></i></button>)}
        </Container>
    )
}

export default Servers