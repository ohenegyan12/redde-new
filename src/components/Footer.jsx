import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <img src="/redde-white.svg" alt="Redde" className="footer-logo" />
                    <p className="footer-brand-description">
                        Redde helps you collect payments seamlessly for your products and services.
                    </p>
                    <div className="footer-socials">
                        <a href="https://web.facebook.com/Wigalgh/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <img src="/facebook.svg" alt="Facebook" className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/wigalgh/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <img src="/instagram.svg" alt="Instagram" className="social-icon" />
                        </a>
                        <a href="https://x.com/wigalgh" target="_blank" rel="noopener noreferrer" className="social-link">
                            <img src="/x.svg" alt="X (Twitter)" className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQG0C4wvItsHHgAAAZyh36b4YgLff40fgTo_BEKyrgcQGcRnwkBCwCCoL56pTq-A3c-x4M9ILSzqkWxWdx-0W8pw3-CxVDo1_2iot6gR2nlMJq-FxsqoZvomV6SN4yHuNU_T0x8=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fwigalgh%2Fmycompany%2F" target="_blank" rel="noopener noreferrer" className="social-link">
                            <img src="/LinkedIn.svg" alt="LinkedIn" className="social-icon" />
                        </a>
                        <a href="https://github.com/wigalgh" target="_blank" rel="noopener noreferrer" className="social-link">
                            <img src="/Github_logo_svg.svg" alt="Github" className="social-icon" />
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-group">
                        <h3>Resources</h3>
                        <ul>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><a href="#onboarding">Onboarding Guide</a></li>
                        </ul>
                    </div>

                    <div className="footer-group">
                        <h3>Company</h3>
                        <ul>
                            <li><Link to="/about">About us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-group">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="https://developers.reddeonline.com/" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                            <li><a href="https://developers.reddeonline.com/checkout.html" target="_blank" rel="noopener noreferrer">Checkout</a></li>
                            <li><a href="https://developers.reddeonline.com/rest-api.html" target="_blank" rel="noopener noreferrer">Integration & API</a></li>
                            <li><a href="https://developers.reddeonline.com/plugins.html" target="_blank" rel="noopener noreferrer">Plugins and SDKs</a></li>
                        </ul>
                    </div>

                    <div className="footer-group">
                        <h3>Legal</h3>
                        <ul>
                            <li><Link to="/policies">Our Policies</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-certs">
                    <h3>Certifications</h3>
                    <div className="cert-logos">
                        <img src="/pci.png" alt="PCI DSS" className="cert-logo" />
                        <img src="/iso.png" alt="ISO Certification" className="cert-logo" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Redde. All rights reserved.</p>
            </div>
        </footer >
    );
};

export default Footer;
