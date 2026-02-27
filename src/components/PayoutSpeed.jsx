import React from 'react';
import './PayoutSpeed.css';

const PayoutSpeed = () => {
    return (
        <section className="payout-speed-section">
            <div className="payout-container">
                <div className="payout-header">
                    <h2 className="payout-title">Get paid faster, every single day</h2>
                    <p className="payout-description">
                        Start accepting payments in minutes and keep your cash flow moving, without delays.
                    </p>
                    <p className="payout-tagline">Simple setup. Reliable payouts. Built for your business.</p>
                </div>

                <div className="payout-visual">
                    <span className="payout-text payout-prefix">Up to</span>
                    <span className="payout-number">24</span>
                    <span className="payout-text payout-suffix">hours payout</span>
                </div>
            </div>
        </section>
    );
};

export default PayoutSpeed;
