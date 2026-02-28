import React from 'react';
import './AboutFeatures.css';

const AboutFeatures = () => {
    const features = [
        {
            icon: '/ClockAfternoon.svg',
            title: '99.9% Uptime',
            description: 'Reliable payments you can count on, no downtime, no interruptions.'
        },
        {
            icon: '/BagSimple.svg',
            title: '24–48 Hours Payouts',
            description: 'Get your money fast with consistent and timely settlements.'
        },
        {
            icon: '/machine.svg',
            title: 'All-in-One Platform',
            description: 'Manage online, mobile, and in-person payments from a single dashboard.'
        },
        {
            icon: '/integration.svg',
            title: '100+ Integrations',
            description: 'Connect with popular tools, platforms, and APIs to scale your business.'
        }
    ];

    return (
        <section className="about-features">
            <div className="about-features-container">
                <div className="about-features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="about-feature-card">
                            <div className="about-feature-icon">
                                <img src={feature.icon} alt={feature.title} />
                            </div>
                            <h3 className="about-feature-title">{feature.title}</h3>
                            <p className="about-feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutFeatures;
