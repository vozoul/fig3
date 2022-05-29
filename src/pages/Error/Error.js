import {useEffect, useContext} from "react"
import { AppContext } from "services/contexts/AppContext"

const Error = () => {
    
    const {toggleSectionTitle} = useContext(AppContext)

    useEffect(() => {
        toggleSectionTitle('Une Erreur est survenue')
    }, [toggleSectionTitle])

    return (
        <div className="container">
        <h1>404 - Error Page</h1>
        <p>Page not found !</p>
        </div>
    )
}

export default Error