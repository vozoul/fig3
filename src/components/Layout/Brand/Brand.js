import React from "react";
import config from "services/config/config.js";
import {Link} from "react-router-dom";
import "./Brand.css";

const Brand = () => {
    
    return (
        <Link to="/" className="brand">
            <img
                src={config.logo.image}
                alt={config.logo.description}
                className="brand-img"
            />
            <h2 className="brand-name">{config.brandName}</h2>
        </Link>
    )

}

export default Brand