import React from 'react'
import {NavLink} from 'react-router-dom'

function NavigationLinks() {

    return(
        <div>
            <ul className="navigation-links">
                <li className="navigation-links">
                    <NavLink to='/home'>home</NavLink>
                </li>
                <li className="navigation-links">
                    <NavLink to='/programming'>programming</NavLink>
                </li>
                <li className="navigation-links">
                    <NavLink to='/photography'>photography</NavLink>
                </li>
                <li className="navigation-links">
                    <NavLink to='/dance'>dance</NavLink>
                </li>
            </ul>
        </div>
    )
    
}

export default NavigationLinks