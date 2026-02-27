import React from 'react';
import './Solutions.css';

const Solutions = () => {
    const solutions = [
        {
            title: "Card",
            description: "Accept all major debit and credit cards with ease. Fast, secure, and reliable processing for your business.",
            icon: "/Cardholder.svg"
        },
        {
            title: "Bulk Money Transfer",
            description: "Send funds to multiple recipients instantly and securely. Perfect for payroll and large scale disbursements.",
            icon: "/Money.svg"
        },
        {
            title: "POS",
            description: "Streamline your in-person sales with our modern point-of-sale systems. Integrated and easy to use.",
            icon: "/pos.svg"
        },
        {
            title: "USSD Payment",
            description: "Reach every customer with convenient offline USSD payment options. No internet required for payments.",
            icon: "/mobile.svg"
        },
        {
            title: "Bank to Bank Transfer",
            description: "Direct and secure bank transfers for seamless business operations. Reliable settlements you can trust.",
            icon: "/bank.svg"
        },
        {
            title: "Mobile Money",
            description: "Integrate with all major mobile money providers in Ghana. Receive payments directly from any mobile wallet.",
            icon: "/momo.svg"
        }
    ];

    return (
        <section className="solutions-section" id="solutions">
            <div className="solutions-header">
                <h2 className="solutions-main-title">Our Solutions</h2>
                <p className="solutions-subtitle">
                    Mix and match which products are right for your business and manage it all easily from one Dashboard.
                </p>
            </div>

            <div className="solutions-grid">
                {solutions.map((item, index) => (
                    <div key={index} className="solution-card">
                        <div className="solution-icon">
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <h3 className="solution-title">{item.title}</h3>
                        <p className="solution-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Solutions;
