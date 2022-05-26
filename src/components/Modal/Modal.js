import "./Modal.css"

const Modal = (props) => {
    const {close} = props

    return (
        <div className="modal_back">
            <div className="modal">
                <button className="exit" onClick={close}>X</button>
                {props.children}
            </div>
        </div>
    )
}

export default Modal