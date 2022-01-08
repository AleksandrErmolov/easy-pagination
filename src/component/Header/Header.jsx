import React from 'react'
import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <div>

            <ul className='containerApp'>
              <NavLink to="/"> <li> Главная </li> </NavLink>
                <NavLink to="scroll"> <li> Scroll </li> </NavLink>
                <NavLink to="button"> <li> Button </li> </NavLink>

            </ul>
            
        </div>
    )
}
