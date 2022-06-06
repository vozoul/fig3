import React, { useEffect, useContext } from "react"
import { AppContext } from "services/contexts/AppContext"
import { Container } from "components"

const Home = () => {
    const { toggleSectionTitle } = useContext(AppContext)

    useEffect(() => {
        toggleSectionTitle('ACCUEIL')
    }, [toggleSectionTitle])

    return (
        <Container>
            <div className="home-card next-event">
                <h3>Our next event</h3>
                <div>
                    Inauguration de la F.I.G.
                    <h4>La Fédération Internationnal de Gaming,</h4>
                    vous invite pour leur nouvelle formule,<br/>
                    nous ouvrons prochainement nos portes,<br/>
                    pour vous présenter les différents univers et plateformes sur lequelles nous jouons,<br/>
                    nous vous invitons par la même occasion à vous fendre la FIG avec nous !!!
                </div>
            </div>
            <div className="home-card last-teamate">
                <h3>Welcome in team</h3>
                <div>
                    <ul>
                        <li>- @lphonse.933</li>
                        <li>- 5umm3rb0Dy</li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}


export default Home