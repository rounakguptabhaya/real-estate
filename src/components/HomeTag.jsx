import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const HomeTag = () => {
    return (
        <div>
            <p>Real Estate Agency</p>
            <h1>Find Your Dream House</h1>
            <p>Empowering Dreams, Building Homes: Unleash the Journey to Your Perfect Space with Modern Assetz. Your Dream Home Awaits - Discover it Today!</p>
            <NavLink to="/enquiry"><Button>Make an Enquiry</Button></NavLink>
        </div>
    )
}

export default HomeTag