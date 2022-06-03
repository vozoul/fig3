import React, { useEffect, useState, useContext} from "react"
import {Container, MemberList} from "components"
import {AppContext} from "services/contexts/AppContext"
import "./Members.css"

const Members = () => {
    const [show, setShow] = useState("all")
    const {toggleSectionTitle} = useContext(AppContext)

    useEffect(() => {
        toggleSectionTitle('Le STAFF FIG')
    }, [toggleSectionTitle])

    return (
        <Container>
            <div className="navigator">
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
            <div className="container">
                <MemberList show={show} />
            </div>
        </Container>
    )
}

export default Members