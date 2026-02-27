import React from 'react';
import './Merchants.css';

const Merchants = () => {
    const cards = [
        {
            label: "Accept Payments Instantly",
            text: "Now you can easily accept payments from your customer without any hustle all you need to do is to sign up.",
            variant: "dark"
        },
        {
            label: "Receive Online Payments",
            text: "Receiving online payment from your customers has been made simple. It is Safe, Fast and Secure.",
            variant: "red"
        },
        {
            label: "Boost your Business",
            text: "Tired of complaints from customers ? Switch to a fast reliable and Secure online payment service.",
            variant: "light"
        }
    ];

    return (
        <section className="merchants-section">
            <div className="merchants-container">
                <div className="merchants-header">
                    <h2 className="merchants-title">FOR MERCHANTS</h2>
                    <p className="merchants-description">
                        A simple Dashboard for accepting and sending money, listing processed transactions,
                        has been crafted for you to make monetization in your business visualized
                    </p>
                </div>

                <div className="merchants-grid">
                    {cards.map((card, index) => (
                        <div key={index} className={`merchant-card ${card.variant}`}>
                            <div className="card-label">{card.label}</div>
                            <p className="card-text">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Merchants;
