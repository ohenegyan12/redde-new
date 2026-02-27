import React from 'react';
import FeaturesHero from '../components/FeaturesHero';
import PowerfulFeatures from '../components/PowerfulFeatures';
import PayoutSpeed from '../components/PayoutSpeed';
import SendMoney from '../components/SendMoney';
import AccountIntegration from '../components/AccountIntegration';
import AccessAnywhere from '../components/AccessAnywhere';
import FraudProtection from '../components/FraudProtection';
import Contact from '../components/Contact';

const FeaturesPage = () => {
    return (
        <div className="features-page">
            <FeaturesHero />
            <PowerfulFeatures />
            <PayoutSpeed />
            <SendMoney />
            <AccountIntegration />
            <AccessAnywhere />
            <FraudProtection />
            <Contact />
        </div>
    );
};

export default FeaturesPage;
