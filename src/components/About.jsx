import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-content">
                    <h2 className="about-title">ABOUT<br />REDDE</h2>
                    <p className="about-description">
                        Redde is a payment collection platform that allows merchants to receive payments for goods and services.
                        Redde portal gives you realtime transactional reports with intuitive dashboard to enable you monitor your transactions.
                        You can use the redde portal to sweep your money into your bank account.
                    </p>
                    <button className="about-btn">Get Started</button>
                </div>
                <div className="about-mockup">
                    <img src="/assets/images/macbook-mock.webp" alt="Redde Dashboard Mockup" />
                </div>
            </div>
        </section>
    );
};

export default About;
