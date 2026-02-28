import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
    return (
        <section className="about-hero">
            <div className="about-hero-overlay"></div>
            <div className="about-hero-container">
                <div className="about-hero-content">
                    <h1 className="about-hero-title">
                        Redde moves money<br />
                        faster to power<br />
                        your business.
                    </h1>
                    <p className="about-hero-subtitle">
                        We're building the new digital payment service to make money flow more efficiently through businesses and the economy.
                    </p>
                    <a href="https://demoapp.reddeonline.com/register" target="_blank" rel="noopener noreferrer" className="about-hero-btn">
                        Try Redde now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
