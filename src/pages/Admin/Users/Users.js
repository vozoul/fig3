import React, { useEffect, useContext } from "react"
import { Activity } from "components"
import { AppContext } from "services/contexts/AppContext"
import users from 'services/fakesData/users'
import "./Users.css"

const Users = () => {

    // const users = []

    const { toggleSectionTitle } = useContext(AppContext)

    useEffect(() => {
        toggleSectionTitle('Les membres inscrits')
    }, [toggleSectionTitle])

    return (
        <div className="contenu">
            <div className="line header">
                <div>Actions</div>
                <div>Avatar</div>
                <div>Pseudos</div>
                <div>mail</div>
                <div>Steamid</div>
                <div>Role</div>
            </div>
            {users.length === 0 && <div className="line" ><p>No users to display</p></div>}
            {users?.map((user) => {
                return (
                        <div key={user.id} className="line" >
                            <Activity />
                            <div>{user.avatar && <img src={user.avatar} alt={user.pseudo} />}</div>
                            <div>{user.pseudo}</div>
                            <div>{user.mail ?? "'empty'"}</div>
                            <div>{user.steamId ?? "'empty'"}</div>
                            <div>{user.role}</div>
                        </div>
                )
            }
            )}
        </div>
    )
}

export default Users