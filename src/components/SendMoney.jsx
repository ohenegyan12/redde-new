import React from 'react';
import './SendMoney.css';

const SendMoney = () => {
    const cards = [
        {
            title: "With you 24/7",
            description: "Redde Support team is available by phone, live chat and on social media to help resolve any questions you may have.",
            icon: "/Clock.svg"
        },
        {
            title: "Easy Integration",
            description: "Build Something Brilliant with Redde's API. We've made it simple and easy to integrate our APIs into any application you want to develop or build that involves monetary transactions.",
            icon: "/Gear.svg"
        },
        {
            title: "Rooted in the Ghanaian Economy",
            description: "As a Ghanaian company born and bred, we’re proud to be the payment solution partner Ghanaian businesses trust.",
            icon: "/GlobeHemisphereEast.svg"
        },
        {
            title: "Stress free set-up",
            description: "We'll get you up and running quickly and easily, helping you to integrate our products and services to make doing business that much easier.",
            icon: "/Smiley.svg"
        },
        {
            title: "Secure",
            description: "Redde is very secured because we implement World Class Security Standards such as ISO/IEC 27001:2022, PCI DSS, etc. We enforce strict adherence to data protection and data security compliance.",
            icon: "/ShieldCheck.svg"
        },
        {
            title: "Easy Payments",
            description: "Keep your distant and your customers with our online solutions. Start taking payments straight away. It's easy to get started and you'll receive your funds the next day.",
            icon: "/Coins.svg"
        }
    ];

    return (
        <section className="send-money-section">
            <div className="send-money-container">
                <div className="send-money-header">
                    <h2 className="send-money-title">A better way to send money.</h2>
                    <p className="send-money-description">
                        Send money faster, easier, and with total confidence. Redde makes every transfer seamless, so your money gets where it needs to go, without stress.
                    </p>
                    <button className="send-money-btn">Get started</button>
                </div>

                <div className="send-money-grid">
                    {cards.map((card, index) => (
                        <div key={index} className="send-money-card">
                            <div className="card-icon">
                                <img src={card.icon} alt={card.title} />
                            </div>
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-description">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SendMoney;
