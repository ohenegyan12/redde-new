import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-card">
                    <div className="card-top">
                        <h2 className="card-title">CREATE AN<br />ACCOUNT</h2>
                        <div className="arrow-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                        </div>
                    </div>
                    <p className="card-footer-text">Create a free account with Redde</p>
                </div>

                <div className="contact-card">
                    <div className="card-top">
                        <h2 className="card-title">CONTACT<br />SUPPORT</h2>
                        <div className="arrow-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                        </div>
                    </div>
                    <p className="card-footer-text">Contact our support team to help you know more about Redde.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
