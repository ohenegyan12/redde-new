import React, { useRef } from 'react';
import './Features.css';

const Features = () => {
    const scrollRef = useRef(null);

    const features = [
        {
            title: "Secure & Stress-Free Payments",
            description: "Enjoy fast, secure, and hassle-free transactions without long queues or delays. Redde lets you make and receive payments anytime, from anywhere, giving you complete peace of mind."
        },
        {
            title: "Get Paid Anywhere, Anytime",
            description: "Collect payments effortlessly from customers across Ghana via mobile money and multiple channels. Whether it’s goods, services, or everyday sales, getting paid is simple and reliable."
        },
        {
            title: "Built for Your Business Growth",
            description: "Manage everything in one place with a simple dashboard to track transactions and cash flow. Easily integrate Redde into your apps with powerful APIs designed for seamless payment experiences."
        }
    ];

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = current.offsetWidth * 0.8;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="features-section">
            <div className="features-header">
                <h2 className="features-main-title">Designed for better<br />payments</h2>
                <div className="features-controls">
                    <button className="control-btn prev" onClick={() => scroll('left')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <button className="control-btn next" onClick={() => scroll('right')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                    </button>
                </div>
            </div>

            <div className="features-carousel" ref={scrollRef}>
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <h3 className="feature-card-title">{feature.title}</h3>
                        <p className="feature-card-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
