import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when location changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Helper to determine if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <button
                    className="mobile-menu-close"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <div className="mobile-menu-content">
                    <Link to="/features" className="mobile-nav-link">Features</Link>
                    <a href="https://developers.reddeonline.com/" className="mobile-nav-link" target="_blank" rel="noopener noreferrer">Developers</a>

                    <div className="mobile-nav-group">
                        <span className="mobile-group-title">Resources</span>
                        <Link to="/faq" className="mobile-sub-link">FAQ</Link>
                        <a href="https://www.reddeonline.com/assets/onboarding/redde-onboarding-document.pdf" className="mobile-sub-link" target="_blank" rel="noopener noreferrer">Onboarding Document</a>
                    </div>

                    <div className="mobile-menu-actions">
                        <a href="https://app.reddeonline.com/login?return=%2Fdashboard" target="_blank" rel="noopener noreferrer" className="btn-signin-mobile">Sign in</a>
                        <a href="https://demoapp.reddeonline.com/register" target="_blank" rel="noopener noreferrer" className="btn-signup-mobile">Create Account</a>
                    </div>
                </div>
            </div>

            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    <img src="/redde-white.svg" alt="Redde Logo" />
                </a>

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
                    <a href="https://app.reddeonline.com/login?return=%2Fdashboard" target="_blank" rel="noopener noreferrer" className="btn-signin">Sign in</a>
                    <a href="https://demoapp.reddeonline.com/register" target="_blank" rel="noopener noreferrer" className="btn-signup">Create Account</a>
                </div>

                <button
                    className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
