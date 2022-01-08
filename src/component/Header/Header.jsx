import React from 'react'
import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <div>

            <ul className='container'>
              <NavLink to="/"> <li> Главная </li> </NavLink>
               <NavLink to="scroll"> <li> Scroll </li> </NavLink>
            </ul>
            
        </div>
    )
}
