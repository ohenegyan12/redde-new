import React from 'react';
import './FeaturesHero.css';

const FeaturesHero = () => {
    return (
        <section className="features-hero">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="hero-video-bg"
            >
                <source src="/feature-hero.mp4" type="video/mp4" />
            </video>

            <div className="features-hero-overlay"></div>

            <div className="features-hero-container">
                <div className="features-hero-content">
                    <h1 className="features-hero-title">
                        Everything you need to get paid
                    </h1>
                    <p className="features-hero-description">
                        From payment collection to powerful integrations, Redde gives you the tools to accept, manage, and grow your business with ease.
                    </p>
                    <a href="https://demoapp.reddeonline.com/register" target="_blank" rel="noopener noreferrer" className="features-hero-btn">Create account</a>
                </div>
            </div>
        </section>
    );
};

export default FeaturesHero;
