import React from 'react';
import './PowerfulFeatures.css';

const PowerfulFeatures = () => {
    return (
        <section className="powerful-features-section">
            <div className="powerful-features-container">
                <div className="powerful-features-header">
                    <h2 className="powerful-features-title">POWERFUL FEATURES FOR YOUR BUSINESS</h2>
                    <p className="powerful-features-subtitle">
                        Everything you need to accept payments, manage transactions, and grow, all in one place.
                    </p>
                </div>
                <div className="powerful-features-mockup">
                    <img
                        src="/assets/images/macbook-mock.webp"
                        alt="Redde Business Dashboard Mockup"
                        className="macbook-mock-img"
                    />
                </div>
            </div>
        </section>
    );
};

export default PowerfulFeatures;
