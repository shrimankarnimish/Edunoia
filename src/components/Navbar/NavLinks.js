import React from 'react';
import { HashLink } from 'react-router-hash-link'; // for hash links (internal page anchors)
import { Link } from 'react-router-dom'; // for normal routing links
import './Navbar.css';

const NavLinks = () => {
    return (
        <div className="navbar-links">
            <Link className="nav-link" to="/work">
                WORK
            </Link>
            <HashLink className="nav-link" smooth to="/Offerings">
                OFFERINGS
            </HashLink>
            <HashLink className="nav-link" to="/impressions">
                IMPRESSION
            </HashLink>
            <HashLink className="nav-link" to="/contact#contact">
                SPOTLIGHT
            </HashLink>
            <HashLink className="nav-link" to="/contact#contact">
                CULTURE
            </HashLink>
            <HashLink className="nav-link" to="/contact#contact">
                CONNECT
            </HashLink>
        </div>
    );
}

export default NavLinks;
