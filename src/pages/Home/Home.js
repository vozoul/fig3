import React, { useEffect, useContext} from "react"
import { AppContext } from "services/contexts/AppContext"
import {Container} from "components"
import "./Home.css"

const Home = () => {
    const {toggleSectionTitle} = useContext(AppContext)
    
    useEffect(() => {
        toggleSectionTitle('ACCUEIL')
    }, [toggleSectionTitle])

    return (
        <Container>
            <div className="home-card next-event">
                <h3>Our next event</h3>
                <div>
                    fsklgfjpdskfvmsdokfpodzkfposdkfposdkfposdkfposdkfpsdokfpsodkfpdskfposdofposdkfposdkfposdfposkdfposkdfposjdgponsdgpnzrognrzlnk
                </div>
            </div>
            <div className="home-card last-teamate">
                <h3>Welcome in team</h3>
                <p>
                    - @lphonse.933
                    - 5umm3rb0Dy
                </p>
            </div>
        </Container>
    )
}


export default Home