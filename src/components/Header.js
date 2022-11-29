import React from "react";
import logo from "../assets/planet.png";

const Header = ()=>{
    return(
    <nav>
        <div className="logoTitle"><img src={logo} />
            <h1>Space Travelers Hub</h1>
        </div>
        <div className="navLinks">
            <Link to="/">Rockects</Link>
            <Link to="/">Missions</Link> |
            <Link to="/categories">My Profile</Link>
        </div>
    </nav>
    );
}

export default Header;