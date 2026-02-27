import React from 'react';
import './FraudProtection.css';

const FraudProtection = () => {
    const protectionCards = [
        {
            title: "Real-Time Monitoring",
            description: "Every transaction is tracked and analyzed instantly. Suspicious activity is flagged and blocked before any damage is done, helping keep your funds safe at all times",
            icon: "/Warning.svg"
        },
        {
            title: "Intelligent Risk Detection",
            description: "Our system learns patterns and identifies unusual behavior — from unfamiliar devices to unexpected transaction activity — ensuring only legitimate payments go through.",
            icon: "/Warning.svg"
        }
    ];

    return (
        <section className="fraud-protection-section">
            <div className="fraud-container">
                <div className="fraud-header">
                    <h2 className="fraud-title">Smart Fraud Protection</h2>
                    <p className="fraud-subtitle">
                        Your money is protected with smart systems that detect and stop fraud before it happens.
                    </p>
                </div>

                <div className="fraud-grid">
                    {protectionCards.map((card, index) => (
                        <div key={index} className="fraud-card">
                            <div className="fraud-icon">
                                <img src={card.icon} alt="Warning Icon" />
                            </div>
                            <h3 className="fraud-card-title">{card.title}</h3>
                            <p className="fraud-card-description">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FraudProtection;
