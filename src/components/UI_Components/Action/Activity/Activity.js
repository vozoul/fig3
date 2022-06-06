import "./Activity.css"

const Activity = () => {

    const path = window.location.href

    return (
        <div className="activity">
            <button className="modify"><i className='bx bxs-pencil' ></i><span>modify</span></button>
            {path.includes('users') && <button className="modify"><i className='bx bxs-bug-alt'></i><span>punish</span></button>}
            <button className="delete"><i className='bx bxs-trash' ></i><span>delete</span></button>
        </div>
    )

}

export default Activity