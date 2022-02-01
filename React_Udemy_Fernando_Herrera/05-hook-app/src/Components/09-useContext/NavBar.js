import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link to='#' className='navbar-brand'>useContext</Link>
                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink end='active' to='/' className='nav-link'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink end='active' to='about' className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink end='active' to='login' className="nav-link">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
