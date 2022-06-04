import React, { useEffect, useState, useContext } from "react"
import { Container, MemberList, Navigator } from "components"
import { AppContext } from "services/contexts/AppContext"

const Members = () => {
    const [show, setShow] = useState("all")
    const { toggleSectionTitle } = useContext(AppContext)

    useEffect(() => {
        toggleSectionTitle('Le Staff FIG')
    }, [toggleSectionTitle])

    return (
        <Container>
            <Navigator setShow={setShow} />
            <div className="container">
                <MemberList show={show} />
            </div>
        </Container>
    )
}

export default Members