import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const Form = () => {
    return (
        <form action="#" method="post">
            <div className="form">
                <input type="text" placeholder="Full Name" autoComplete="off"/>
                <input type="Email" placeholder="Email" autoComplete="off"/>
                <input type="text" placeholder="Phone Number" autoComplete="off"/>
                <select id="type" name="plot">
                    <option value="" disabled selected>Choose your preference</option>
                    <option value="plot">Plot</option>
                    <option value="apartment">Apartment</option>
                </select>
                <NavLink to="/" className="form-btn"><Button>Submit</Button></NavLink>
            </div>
        </form>
        
    )
}

export default Form;