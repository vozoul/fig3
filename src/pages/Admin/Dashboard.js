import { useEffect, useContext } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import { AppContext } from "services/contexts/AppContext"
import { UserContext } from "services/contexts/UserContext"
import { Container, Nav } from "components"
import { Users, AdminServers } from "pages"

const Index = () => {
    return (
        <>
            Index of dashboard
        </>
    )
}

const Dashboard = () => {


    const {user} = useContext(UserContext)
    // console.log(user)
    const navigate = useNavigate()

    const { toggleSectionTitle } = useContext(AppContext)

    useEffect(() => {
        toggleSectionTitle('Community Manager')
    }, [toggleSectionTitle])

    useEffect(() => {
        if (user.isAdmin === false || user.isAdmin === undefined) {
            navigate('/error');
        }
      }, []);

    return (
        <Container>
            <Nav />
            <Routes>
                {/* <Route path="" element={(user.isAdmin === false || user.isAdmin === undefined) ? (<Navigate replace to="/error" />) : (<Index />)} /> */}
                <Route path="" element={<Index />} />
                <Route path="users" element={<Users />} />
                <Route path="servers" element={<AdminServers />} />
            </Routes>
        </Container>
    )
}

export default Dashboard