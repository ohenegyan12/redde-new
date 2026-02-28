import React from 'react';
import './WhyWeExist.css';

const WhyWeExist = () => {
    return (
        <section className="why-we-exist">
            <div className="why-we-exist-container">
                <div className="why-we-exist-content">
                    <div className="why-we-exist-text">
                        <h2 className="why-we-exist-title">Why We Exist</h2>
                        <div className="why-we-exist-paragraphs">
                            <p>
                                Money should move easily, but too often, it doesn't. From
                                collecting payments to managing transactions, businesses face
                                delays, complexity, and unnecessary friction.
                            </p>
                            <p>
                                That's why we built Redde, to simplify how money moves. We're
                                here to make payments seamless, reliable, and accessible, so
                                businesses can focus on what matters most: growing and
                                succeeding.
                            </p>
                        </div>
                    </div>
                    <div className="why-we-exist-image-wrapper">
                        <img src="/why-we-exist.webp" alt="Why We Exist - Team working together" className="why-we-exist-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWeExist;
