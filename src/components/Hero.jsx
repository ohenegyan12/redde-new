import React from 'react';
import './Hero.css';

const Hero = () => {
    const leftImages = [
        '/assets/images/card1.webp',
        '/assets/images/card2.webp',
        '/assets/images/card3.webp',
        '/assets/images/card4.webp',
        '/assets/images/card5.webp',
        '/assets/images/card6.webp',
    ];

    const rightImages = [
        '/assets/images/card6.webp',
        '/assets/images/card5.webp',
        '/assets/images/card4.webp',
        '/assets/images/card3.webp',
        '/assets/images/card2.webp',
        '/assets/images/card1.webp',
    ];

    return (
        <section className="hero">
            {/* Left Scrolling Column */}
            <div className="hero-column hero-column-left">
                <div className="column-inner up">
                    {[...leftImages, ...leftImages].map((img, i) => (
                        <div key={`left-${i}`} className="hero-card">
                            <img src={img} alt={`Social ${i}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Centered Content */}
            <div className="hero-content">
                <h1 className="hero-title">
                    Payments <br />
                    without limits
                </h1>
                <p className="hero-description">
                    Redde helps you collect payments seamlessly for your products and services.
                </p>
                <button className="hero-btn">Get Started</button>
            </div>

            {/* Right Scrolling Column */}
            <div className="hero-column hero-column-right">
                <div className="column-inner down">
                    {[...rightImages, ...rightImages].map((img, i) => (
                        <div key={`right-${i}`} className="hero-card">
                            <img src={img} alt={`Fintech ${i}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Brands Section */}
            <div className="hero-brands">
                <div className="brands-container">
                    <img src="/assets/brand-logos/Zenith_Bank_Logo.svg" alt="Zenith Bank" />
                    <img src="/assets/brand-logos/af.svg" alt="AF" />
                    <img src="/assets/brand-logos/ipmc.png" alt="IPMC" className="no-filter" />
                    <img src="/assets/brand-logos/perez.png" alt="Perez" className="no-filter" />
                    <img src="/assets/brand-logos/vvu.png" alt="VVU" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
