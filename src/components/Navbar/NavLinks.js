import React from 'react';
import { HashLink } from 'react-router-hash-link'; // for hash links (internal page anchors)
import { Link, useLocation } from 'react-router-dom'; // for normal routing links
import './Navbar.css';

const NavLinks = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="navbar-links">
            <Link
                className={`nav-link ${isActive('/work') ? 'active' : ''}`}
                to="/work"
            >
                WORK
            </Link>
            <HashLink
                className={`nav-link ${isActive('/Offerings') ? 'active' : ''}`}
                smooth
                to="/Offerings"
            >
                OFFERINGS
            </HashLink>
            <HashLink
                className={`nav-link ${isActive('/impressions') ? 'active' : ''}`}
                to="/impressions"
            >
                IMPRESSION
            </HashLink>
            <HashLink
                className={`nav-link ${isActive('/spotlight') ? 'active' : ''}`}
                to="/spotlight"
            >
                SPOTLIGHT
            </HashLink>
            <HashLink
                className={`nav-link ${isActive('/culture') ? 'active' : ''}`}
                to="/culture"
            >
                CULTURE
            </HashLink>
            <HashLink
                className={`nav-link ${isActive('/contact#connect') ? 'active' : ''}`}
                to="/contact#connect"
            >
                CONNECT
            </HashLink>
        </div>
    );
};

export default NavLinks;
