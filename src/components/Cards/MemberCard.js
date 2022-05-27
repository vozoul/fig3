import './Cards.css'

const MemberCard = ({props, show}) => {

    const {pseudo, avatar, role} = props

    const isRoled = (role) => {
        if (role < 300) return "guest"
        if (role === 300 && role < 700) return "new"
        if (role === 700 && role < 800) return "member"
        if (role === 800 && role < 900) return "modo"
        if (role > 900) return "admin"
        if (role === 999) return "member"
    }

    const userClass = ((show === "all" && isRoled(role) !== "guest") || (show === isRoled(role) && isRoled(role) !== "guest")) ? "member-card " + isRoled(role) + " active" : "member-card " + isRoled(role) + " inactive"

    return (
        <div className={userClass}>
            <img src={avatar || "https://i.pravatar.cc/500"} alt="" />
            <div className="user-infos">
                <div>{pseudo}</div>
            </div>
        </div>
    )
}

export default MemberCard