import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) =>{
    return (
        <nav className="nav-wrapper transparent z-depth-0">
            <Link to="/" className="brand-logo black-text bold">Connect Me</Link>
            <a className="sidenav-trigger right" data-target="mobile-menu">
            <i className="material-icons black-text">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
            <li><Link to="/" className="navlink">Home</Link></li>
            <li><Link to="/" className="navlink">About Us</Link></li>
            <li><Link to="/" className="navlink">Contact</Link></li>
            <li><Link to="/dashboard" className="navlink">Dashboard</Link></li>
            <li><Link to="/signin" className="btn capitalize white z-depth-3 black-text radius bold">Log In</Link></li>
            </ul>
            
        <ul className="sidenav gradient lighten-2" id="mobile-menu">
            <li><Link to="/" className="navlink">Home</Link></li>
            <li><Link to="/" className="navlink">About Us</Link></li>
            <li><Link to="/" className="navlink">Contact</Link></li>
            <li><Link to="/dashboard" className="navlink">Dashboard</Link></li>
            <li><Link to="/signin" className="btn capitalize white z-depth-3 black-text radius bold">Log In</Link></li>
        </ul>
        </nav>
    )
}


export default NavBar;