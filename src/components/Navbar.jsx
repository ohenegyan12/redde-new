import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to determine if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/redde-white.svg" alt="Redde Logo" />
                </Link>

                <div className="navbar-links">
                    <Link to="/features" className={`nav-link ${isActive('/features') ? 'active' : ''}`}>Features</Link>
                    <a href="https://developers.reddeonline.com/" className="nav-link" target="_blank" rel="noopener noreferrer">Developers</a>

                    <div
                        className="nav-item-dropdown"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button className={`nav-link dropdown-trigger ${isDropdownOpen ? 'active' : ''}`}>
                            Resources
                            <svg className={`chevron-icon ${isDropdownOpen ? 'rotate' : ''}`} width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M1 3L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <div className="dropdown-header">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                    Resources
                                </div>
                                <div className="dropdown-content">
                                    <Link to="/faq" className="dropdown-item">
                                        <div className="item-icon">
                                            <img src="/faq.svg" alt="FAQ" />
                                        </div>
                                        <div className="item-text">
                                            <span className="item-title">FAQ</span>
                                            <span className="item-desc">Get all questions answered in our forums or contact support</span>
                                        </div>
                                    </Link>
                                    <a href="https://www.reddeonline.com/assets/onboarding/redde-onboarding-document.pdf" className="dropdown-item" target="_blank" rel="noopener noreferrer">
                                        <div className="item-icon">
                                            <img src="/document.svg" alt="Onboarding" />
                                        </div>
                                        <div className="item-text">
                                            <span className="item-title">Onboarding Document</span>
                                            <span className="item-desc">Outline measures/procedures that onboarding clients need to know</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
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
