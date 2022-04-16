import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/checkout">Checkout</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    );
};

export default Header;