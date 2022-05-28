import {useContext} from 'react'
import { AppContext } from 'services/contexts/AppContext'
import "./Modal.css"

const Modal = () => {
    const {useModal, toggleModal, modalBg} = useContext(AppContext)

    document.documentElement.style.setProperty("--modal-bg", modalBg)

    return (
        <div className="modal_back">
            <div className="modal">
                <button className="exit" onClick={toggleModal}>X</button>
                {useModal}
            </div>
        </div>
    )
}

export default Modal