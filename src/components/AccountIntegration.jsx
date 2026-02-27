import React, { useState } from 'react';
import './AccountIntegration.css';

const AccountIntegration = () => {
    const [activeTab, setActiveTab] = useState('momo');

    const content = {
        momo: {
            title: "ADD MOBILE MONEY WALLETS",
            description: "You can easily add mobile money wallets to your redde account to make transactions easier and faster",
            image: "/momo-image.png"
        },
        bank: {
            title: "Adding Bank Accounts Became easier",
            description: "Connect your bank account in seconds and start receiving payments without hassle. Redde makes it simple to link, manage, and use your accounts , all in one place.",
            image: "/bank-image.png"
        },
        // Placeholder for a 3rd if needed, but only 2 provided in details
    };

    const activeContent = content[activeTab];

    return (
        <section className="account-integration-section">
            <div className="account-integration-container">
                <div className="integration-header">
                    <h2 className="integration-title">{activeContent.title}</h2>
                    <p className="integration-description">{activeContent.description}</p>
                </div>

                <div className="integration-mockup">
                    <img
                        src={activeContent.image}
                        alt={activeContent.title}
                        className={`mockup-img ${activeTab}`}
                    />
                </div>

                <div className="integration-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'momo' ? 'active' : ''}`}
                        onClick={() => setActiveTab('momo')}
                    >
                        Add MoMo Walltets
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'bank' ? 'active' : ''}`}
                        onClick={() => setActiveTab('bank')}
                    >
                        Add Bank Accounts
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AccountIntegration;
