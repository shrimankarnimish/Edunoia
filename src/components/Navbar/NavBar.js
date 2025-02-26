import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import LogoWhite from '../../images/Logo.png'; // Path to the white logo
import LogoBlack from '../../images/LogoBlack.png'; // Path to the black logo
import './Navbar.css';
import NavLinks from '../Navbar/NavLinks';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation(); 

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        if (location.pathname !== '/culture') {
            setScrolled(window.scrollY > 50); // Set a threshold for the background color change
        } else {
            setScrolled(false); // Ensure navbar remains default on the Culture page
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

    const isHomePage = location.pathname === '/';

    return (
        <nav
            className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out ${
                scrolled ? 'navbar-scrolled' : 'navbar-default'
            }`}
        >
            <div className="flex flex-row justify-between items-center py-2">
                <div className="navbar-logo">
                    <HashLink smooth to="/">
                        <img
                            src={scrolled || !isHomePage ? LogoBlack : LogoWhite} // Change logo dynamically
                            alt="Logo"
                            className="logo"
                        />
                    </HashLink>
                </div>
                <div className="group flex flex-col items-center navbar-menu">
                    <button
                        className="p-2 rounded-lg lg:hidden text-blue-900"
                        onClick={handleClick}
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                                />
                            )}
                        </svg>
                    </button>
                    <div className="navbar-menu-items">
                        <div className="hidden space-x-6 lg:inline-block p-5">
                            <NavLinks />
                        </div>
                    </div>
                    {/* <div
                        className={`fixed transition-transform duration-300 ease-in-out flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${
                            isOpen ? 'block' : 'hidden'
                        }`}
                    >
                        <div className="flex flex-col space-y-6">
                            <NavLinks />
                        </div>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
