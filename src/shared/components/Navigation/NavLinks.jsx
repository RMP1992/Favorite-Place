import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
    return <ul className='nav-links'>
        <li>
            <NavLinks to='/' exact>All Users</NavLinks>
        </li>
        <li>
            <NavLinks to='/u1/places'>My Places</NavLinks>
        </li>
        <li>
            <NavLinks to='/places/new'>New Place</NavLinks>
        </li>
        <li>
            <NavLinks to='/auth'>Authenticate</NavLinks>
        </li>
    </ul>
}

export default NavLinks;