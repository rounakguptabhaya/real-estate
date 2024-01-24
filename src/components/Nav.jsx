import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <ul className='navList'>
            <li>
                <NavLink className='navList-item' to="/"><p>Home</p></NavLink> 
            </li>

            <li>
                <NavLink className='navList-item' to="/contact"><p>Contact us</p></NavLink> 
            </li>

            <li>
                <NavLink className='navList-item' to="/about"><p>About</p></NavLink> 
            </li>
            
        </ul>
    </div>
  )
}

export default Nav