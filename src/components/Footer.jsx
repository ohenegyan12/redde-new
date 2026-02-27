import React from 'react';
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
                </div>

                <div className="footer-links">
                    <div className="footer-group">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#onboarding">Onboarding Guide</a></li>
                        </ul>
                    </div>

                    <div className="footer-group">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#about">About us</a></li>
                            <li><a href="#careers">Careers</a></li>
                            <li><a href="#press">Press</a></li>
                        </ul>
                    </div>

                    <div className="footer-group">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="https://developers.reddeonline.com/" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                            <li><a href="#checkout">Checkout</a></li>
                            <li><a href="https://developers.reddeonline.com/" target="_blank" rel="noopener noreferrer">Integration & API</a></li>
                            <li><a href="https://developers.reddeonline.com/" target="_blank" rel="noopener noreferrer">Plugins and SDKs</a></li>
                        </ul>
                    </div>

                    <div className="footer-group">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#policies">Our Policies</a></li>
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
