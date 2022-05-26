import React, {useEffect, useContext} from "react";
import { AppContext } from "services/contexts/AppContext";
import "./Sign.css"

const Sign = () => {
    
    const {toggleSectionTitle} = useContext(AppContext)

    useEffect(() => {
        toggleSectionTitle('Connexion')
    }, [toggleSectionTitle])

    return <div className="container">
        <h2>Connexion</h2>
    </div>
}

export default Sign