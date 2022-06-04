import { useState, useEffect, useContext } from 'react'
import { UserContext } from "services/contexts/UserContext"
import './Cards.css'

const MemberCard = ({ props, show }) => {

    const { id, pseudo, avatar, role } = props
    const { user } = useContext(UserContext)

    const [isRoled, setIsRoled] = useState("guest")

    useEffect(() => {
        if (role < 300) setIsRoled("guest")
        if (role === 300 && role < 700) setIsRoled("new")
        if ((role === 700 && role < 800) || role === 999) setIsRoled("member")
        if (role === 800 && role < 900) setIsRoled("modo")
        if (role > 900 && role !== 999) setIsRoled("admin")
    }, [role, isRoled, setIsRoled])

    const userClass = ((show === "all" && isRoled !== "guest") || (show === isRoled && isRoled !== "guest")) ?
        "member-card " + isRoled + " active" :
        "member-card " + isRoled + " inactive";

    return (
        <div className={userClass}>
            {user?.isAdmin && <div className="options">
                {/* <button className="add">A</button> */}
                <button className="edit"><i className='bx bxs-pencil'></i></button>
                {/* <button className="modify">C</button> */}
                <button className="delete"><i className='bx bxs-trash' ></i></button>
            </div>}
            <img src={avatar || "https://i.pravatar.cc/500"} alt="" />
            <div className="user-infos">
                <div>{pseudo}</div>
            </div>
        </div>
    )
}

export default MemberCard