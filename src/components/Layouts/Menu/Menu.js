import React, {useState, useEffect, useRef, useContext} from "react";
import { Link } from "react-router-dom";
import { AppContext } from "services/contexts/AppContext";
import './Menu.css'
import {SwitchButton, ContactForm, SignForm} from "components";

const Menu = () => {

    // Constantes
    const {menu, theme, toggleTheme, toggleMenu, setModalBg, setUseModal, toggleModal} = useContext(AppContext)

    const eRef = useRef()
    const [menuClass, setMenuClass] = useState('menu')
    const [hght, setHght] = useState()
    const [inHght, setInHght] = useState()

    // Méthodes
    useEffect(() => {
            (menu === "true") ? setMenuClass('menu collapsed') : setMenuClass('menu')
    }, [menu, toggleMenu])

    const getListHeight = () => {
        const nh = eRef.current.clientHeight
        setHght(nh)
        const nih = document.querySelector('#menu').scrollHeight
        setInHght(nih)
    }
    
    useEffect(() => {
        window.addEventListener("load", getListHeight)
        window.addEventListener("mouseout", getListHeight)
        if (inHght > hght) {
            eRef.current.classList.add('scrollable')
        } else {
            eRef.current.classList.remove('scrollable')
        }
    }, [inHght, hght])

    const contactus = () => {
        setModalBg("url('./media/img/svg/contact.svg') no-repeat")
        setUseModal(<ContactForm />)
        toggleModal()
    }

    const signIn = () => {
        setModalBg("url('./media/img/svg/membres.svg') no-repeat")
        setUseModal(<SignForm />)
        toggleModal()
    }
    
    // Partie visuelle
    return (
        <div className={(menuClass)}>
            <ul id="menu" ref={eRef} className="menu-list">
                <Link to="/" className="menu-item">
                    <img src="./media/img/svg/home.svg" alt="" />
                    <span>Home</span>
                </Link>
                <Link to="/members" className="menu-item">
                    <img src="./media/img/svg/membres.svg" alt="" />
                    <span>Members</span>
                </Link>
                <Link to="/servers" className="menu-item">
                    <img src="./media/img/svg/servers.svg" alt="" />
                    <span>Servers</span>
                </Link>
                <p className="menu-item" onClick={() => contactus()}>
                    <img src="./media/img/svg/contact.svg" alt="" />
                    <span>Contact</span>
                </p>
                <p className="menu-item arrow" onClick={toggleMenu}>
                    <img src="./media/img/svg/rightArrow.svg" alt="" />
                    <span>Collapse</span>
                </p>
            </ul>
            <ul>
                <div className="menu-item">
                    <SwitchButton id="theme-toggler" action={toggleTheme} />
                    <label htmlFor="theme-toggler" className="style">{theme}</label>
                </div>
            </ul>
            <ul className="sign">
                <p className="menu-item" onClick={() => signIn()}>
                    <i className='bx bx-log-in-circle'></i>
                    <span>Connexion</span>
                </p>
            </ul>
        </div>
    )
}

export default Menu