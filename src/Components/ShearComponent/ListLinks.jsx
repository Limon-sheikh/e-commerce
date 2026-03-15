import React from 'react';
import { NavLink } from 'react-router';

const ListLinks = () => {
    return (
        <nav>
            <ul className='capitalize flex gap-10'>
                <NavLink to='/' className={({isActive})=> isActive? "prcolor" : ""}>home</NavLink>
                <NavLink to='/shop' className={({isActive})=> isActive? "prcolor" : ""}>shop now</NavLink>
                <NavLink to='/about' className={({isActive})=> isActive? "prcolor" : ""}>about</NavLink>
                <NavLink to='/blog' className={({isActive})=> isActive? "prcolor" : ""}>blog</NavLink>
                <NavLink to='/contact' className={({isActive})=> isActive? "prcolor" : ""}>contact</NavLink>
            </ul>
        </nav>
    );
};

export default ListLinks;