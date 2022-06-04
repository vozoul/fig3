import "./SwitchButton.css"

const SwitchButton = ({ id, action }) => {

    return (
        <label className="switch">
            <input id={id} name={id} type="checkbox" onClick={action} />
            <div className="slider"></div>
        </label>
    )
}

export default SwitchButton