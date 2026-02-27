import React from 'react';
import Lottie from 'lottie-react';
import lockAnimation from '../../public/assets/Lock.json';
import './Security.css';

const Security = () => {
    return (
        <section className="security-section">
            <div className="security-container">
                <div className="security-icon">
                    <Lottie
                        animationData={lockAnimation}
                        loop={true}
                        className="lottie-lock"
                    />
                </div>
                <h2 className="security-title">SECURITY<br />IS EVERYTHING</h2>
                <p className="security-description">
                    Peace of mind with your money shouldn't be a nice-to-have.
                    Redde is built with advanced biometrics, robust recoveries and
                    cryptographic controls all wrapped in a fully secure
                    system managed by you, and only you.
                </p>
            </div>
        </section>
    );
};

export default Security;
