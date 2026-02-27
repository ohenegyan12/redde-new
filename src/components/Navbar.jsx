import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    <img src="/redde-white.svg" alt="Redde Logo" />
                </a>

                <div className="navbar-links">
                    <a href="#about" className="nav-link">About Us</a>
                    <a href="#developers" className="nav-link">Developers</a>
                    <a href="#resources" className="nav-link">Resources</a>
                    <a href="#company" className="nav-link">Company</a>
                </div>

                <div className="navbar-actions">
                    <button className="btn-signin">Sign in</button>
                    <button className="btn-signup">Create Account</button>
                </div>

                {/* Mobile Toggle Placeholder */}
                <div className="mobile-toggle">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
