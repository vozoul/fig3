import React, {useRef, useEffect, useState, useContext} from "react"
import { AppContext } from "services/contexts/AppContext"
import "./Home.css"

const Home = () => {
    const eRef = useRef()
    const [hght, setHght] = useState()
    const [inHght, setInHght] = useState()
    const {toggleSectionTitle} = useContext(AppContext)

    useEffect(() => {
        toggleSectionTitle('ACCUEIL')
    }, [toggleSectionTitle])

    const getHeight = () => {
        const nh = eRef.current?.clientHeight
        setHght(nh)
        const nih = document.querySelector('.container')?.scrollHeight
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
        <div ref={eRef} className="container">
            &nbsp;
        </div>
    )
}


export default Home