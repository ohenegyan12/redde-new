import React from 'react';
import './Developers.css';

const Developers = () => {
    return (
        <section className="developers-section" id="developers">
            <div className="developers-card">
                <div className="developers-main">
                    <div className="developers-content">
                        <span className="dev-pill">For Developers</span>
                        <h2 className="dev-title">Built for developers. Designed for global scale.</h2>
                        <p className="dev-description">
                            We have made it simple and easy to integrate our APIs into any application you want to develop or build that involves monetary transactions.
                        </p>
                        <a href="https://developers.reddeonline.com/" className="dev-btn" target="_blank" rel="noopener noreferrer">EXPLORE API</a>
                    </div>

                    <div className="dev-code-window">
                        <div className="code-header">
                            <span className="code-label">Receive Money</span>
                            <div className="code-actions">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="trash-icon"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" /></svg>
                            </div>
                        </div>
                        <div className="code-content">
                            <div className="code-payload-title">Payload:</div>
                            <pre>
                                {`{
  "amount": number, (2 decimal places allowed)
  "appid": "string", will be given by wigal when the app is setup
  "clientreference": "string", optional
  "clienttransid": "string",
  "description": "string", optional
  "nickname": "string",
  "paymentoption": "string", (MTN | AIRTELTIGO | VODAFONE)
  "walletnumber": "string"
}`}
                            </pre>
                        </div>
                    </div>
                </div>

                <div className="developers-footer">
                    <div className="dev-feature">
                        <h3>Merge Redde into your System</h3>
                        <p>Do you need access to an online payment service for easy integration? Look no further, Choose Redde. It is Safe, Fast and Secure.</p>
                    </div>
                    <div className="dev-feature">
                        <h3>Have your Peace of Mind</h3>
                        <p>Are you tired of online payment stress, and complaints? Switch to a fast reliable and Secure online payment service.</p>
                    </div>
                    <div className="dev-feature">
                        <h3>No Cumbersome Configuration</h3>
                        <p>Looking for a solution that can easily work with your system? You are at the right place. Redde API is tried and tested by experienced programmers.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Developers;
