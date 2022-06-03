import React, {useRef, useEffect, useState, useContext} from "react"
import {ServerList, AddServerForm} from "components"
import {AppContext} from "services/contexts/AppContext"
import {UserContext} from "services/contexts/UserContext"
import "./Servers.css"

const Servers = () => {
    const eRef = useRef()
    const user = useContext(UserContext)

    const [hght, setHght] = useState()
    const [inHght, setInHght] = useState()
    const {toggleSectionTitle, toggleModal, setUseModal, setModalBg} = useContext(AppContext)
    const [isAdmin, setIsAdmin] = useState(false)
    
    const getHeight = () => {
        const nh = eRef.current?.clientHeight
        setHght(nh)
        const nih = document.querySelector('.container')?.scrollHeight
        setInHght(nih)
    }
        
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
        <div ref={eRef} className="container">
            <ServerList />
            {(isAdmin && <button className="addServer_button" onClick={openForm}>+</button>)}
        </div>
    )
}

export default Servers