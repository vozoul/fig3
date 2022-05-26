import React, {useRef, useEffect, useState, useContext} from "react"
// import {MemberList} from "components"
import {AppContext} from "services/contexts/AppContext"
import "./Members.css"

const Members = () => {
    const eRef = useRef()
    const [hght, setHght] = useState()
    const [inHght, setInHght] = useState()
    const {toggleSectionTitle} = useContext(AppContext)

    useEffect(() => {
        toggleSectionTitle('Members')
    }, [toggleSectionTitle])

    const getHeight = () => {
        const nh = eRef.current?.clientHeight
        setHght(nh)
        const nih = document.querySelector('.container.inner')?.scrollHeight
        setInHght(nih)
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
        <div className="container">
        <div className="navigator">
            {/* //TODO */}
            <div>admin</div>
            <div>modo</div>
            <div>membres</div>
            <div>nouveaux</div>
            <div>tous</div>
        </div>
        <div ref={eRef} className="container inner">
            <h2>Membres</h2>
            {/* //TODO <MemberList /> */}
        </div>
        </div>
    )
}

export default Members