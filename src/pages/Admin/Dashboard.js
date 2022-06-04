import { useEffect, useContext } from 'react'
import { Routes, Route } from "react-router-dom"
import { AppContext } from "services/contexts/AppContext"
import { Container, Nav } from "components"
import { Users, AdminServers as Servers } from "pages"

const Index = () => {
    return (
        <>
            Index of dashboard
        </>
    )
}

const Dashboard = () => {
    const { toggleSectionTitle } = useContext(AppContext)

    useEffect(() => {
        toggleSectionTitle('Community Manager')
    }, [toggleSectionTitle])

    return (
        <Container>
            <Nav />
            <Routes>
                <Route path="" element={<Index />} />
                <Route path="users" element={<Users />} />
                <Route path="servers" element={<Servers />} />
            </Routes>
        </Container>
    )
}

export default Dashboard