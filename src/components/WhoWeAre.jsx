import React from 'react';
import './WhoWeAre.css';

const WhoWeAre = () => {
    return (
        <section className="who-we-are">
            <div className="who-we-are-container">
                <div className="who-we-are-header">
                    <h2 className="who-we-are-title">WHO WE ARE</h2>
                    <p className="who-we-are-description">
                        Redde is a payment collection platform that allows merchants to receive payments for goods and
                        services. Redde portal gives you realtime transactional reports with intuitive dashboard to enable you
                        monitor your transactions. You can use the redde portal to sweep your money into your bank account.
                    </p>
                </div>
                <div className="who-we-are-globe">
                    <img src="/globe.webp" alt="Global Coverage" className="globe-image" />
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
