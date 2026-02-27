import React from 'react';
import './AccessAnywhere.css';

const AccessAnywhere = () => {
    return (
        <section className="access-anywhere-section">
            <div className="access-anywhere-bg">
                <img src="/5140.webp" alt="Access Anywhere" className="bg-img" />
            </div>

            <div className="access-anywhere-overlay"></div>

            <div className="access-anywhere-container">
                <div className="access-anywhere-content">
                    <h2 className="access-title">Access Redde Anytime, Anywhere</h2>
                    <p className="access-description">
                        Run your business and manage payments wherever you are. With Redde, you can send, receive, and track payments seamlessly across mobile and web, all in one place. Stay in control, whether you’re at your desk or on the move.
                    </p>
                    <button className="access-btn">Open Your Account</button>
                </div>
            </div>
        </section>
    );
};

export default AccessAnywhere;
