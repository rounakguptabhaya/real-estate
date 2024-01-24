import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
    return (
        <div className="NavBar">
            <NavLink to="/" className="nav-logo"><h2>Modern Assetz</h2></NavLink>
            <Nav />
        </div>
    )
}

export default Header;