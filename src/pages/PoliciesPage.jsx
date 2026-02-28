import React from 'react';
import PoliciesHero from '../components/PoliciesHero';
import PolicyTabs from '../components/PolicyTabs';
import Contact from '../components/Contact';

const PoliciesPage = () => {
    return (
        <div className="policies-page">
            <PoliciesHero />
            <PolicyTabs />
            <Contact />
        </div>
    );
};

export default PoliciesPage;
