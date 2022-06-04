import "./Navigator.css"

const Navigator = (props) => {
    const { setShow } = props

    return (
        <div className="navigator">
            <div className="element" onClick={() => setShow("admin")}>
                <img src="./media/img/svg/fig_rouge.svg" alt="admin" />
                <p>admins</p>
            </div>
            <div className="element" onClick={() => setShow("modo")}>
                <img src="./media/img/svg/fig_orange.svg" alt="modo" />
                <p>modos</p>
            </div>
            <div className="element" onClick={() => setShow("member")}>
                <img src="./media/img/svg/fig_violet.svg" alt="member" />
                <p>membres</p>
            </div>
            <div className="element" onClick={() => setShow("new")}>
                <img src="./media/img/svg/fig_bleu.svg" alt="new" />
                <p>newbies</p>
            </div>
            <div className="element" onClick={() => setShow("all")}>ALL</div>
        </div>
    )
}

export default Navigator