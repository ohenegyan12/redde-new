import React from 'react';
import FAQHero from '../components/FAQHero';
import FAQTabs from '../components/FAQTabs';
import Contact from '../components/Contact';

const FAQPage = () => {
    return (
        <div className="faq-page">
            <FAQHero />
            <FAQTabs />
            <Contact />
        </div>
    );
};

export default FAQPage;
