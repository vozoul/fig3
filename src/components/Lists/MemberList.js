// import React from "react"
import MemberCard from "components/Cards/MemberCard"
import Users from "services/fakesData/users"
import "./Lists.css"

const MemberList = (props) => {

    const {show} = props

    return (
        <div className="member-list">
            {Users.length === 0 && "No users to display"}
            {Users.length > 0 && Users.map((user) => {
                return(<MemberCard show={show} props={user}  key={user.id} />)
            })
            }
        </div>
    )
}

export default MemberList