import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] =useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return(
        <header className="header">
            <div className="header-container">
                <h1 className="logo">Vivekanand College</h1>

                <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/courses" className="nav-link">Courses</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/admission" className="btn">Apply Now</Link>
               </nav>

                <button className="hamburger" onClick={toggleMenu}>
                 ☰
                </button>
            </div>

            <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
               <Link to="/" onClick={closeMenu} className="mobile-link">Home</Link>
               <Link to="about" onClick={closeMenu} className="mobile-link">About</Link>
               <Link to="about" onClick={closeMenu} className="mobile-link">Courses</Link>
               <Link to="about" onClick={closeMenu} className="mobile-link">Contact</Link>
               <Link to="about" onClick={closeMenu} className="mobile-link">Apply Now!</Link>
            </div>
        </header>
    );
};

export default Header;
