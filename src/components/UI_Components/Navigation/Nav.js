import "./Nav.css"
import { Link } from "react-router-dom";

const Navigator = () => {

    return (
        <div className="nav">
            <Link to="./"><span>Dashboard</span><i className='bx bxs-home' ></i></Link>
            <Link to="./users"><span>Users</span><i className='bx bxs-group'></i></Link>
            <Link to="./servers"><span>Servers</span><i className='bx bx-server'></i></Link>
            <Link to="./"><span>Events</span><i className='bx bx-party'></i></Link>
        </div>
    )
}

export default Navigator