import React, {useRef, useEffect, useState, useContext} from "react"
import {MemberList} from "components"
import {AppContext} from "services/contexts/AppContext"
import "./Members.css"

const Members = () => {
    const eRef = useRef()
    const [hght, setHght] = useState()
    const [inHght, setInHght] = useState()
    const [show, setShow] = useState("all")
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
            <div className="element" onClick={() => setShow("admin")}>
                <img src="./media/img/svg/fig_rouge.svg" alt="admin" />
                <p>admins</p>
            </div>
            <div className="element" onClick={() => setShow("modo")}>
                <img src="./media/img/svg/fig_orange.svg" alt="admin" />
                <p>modos</p></div>
            <div className="element" onClick={() => setShow("member")}>
                <img src="./media/img/svg/fig_violet.svg" alt="admin" />
                <p>membres</p></div>
            <div className="element" onClick={() => setShow("new")}>
                <img src="./media/img/svg/fig_bleu.svg" alt="admin" />
                <p>newbies</p></div>
            <div className="element" onClick={() => setShow("all")}>ALL</div>
        </div>
        <div ref={eRef} className="container inner" >
            <MemberList show={show} />
        </div>
        </div>
    )
}

export default Members