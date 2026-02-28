import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutFeatures from '../components/AboutFeatures';
import WhoWeAre from '../components/WhoWeAre';
import WhyWeExist from '../components/WhyWeExist';
import Contact from '../components/Contact';

const AboutPage = () => {
    return (
        <div className="about-page">
            <AboutHero />
            <AboutFeatures />
            <WhoWeAre />
            <WhyWeExist />
            {/* Additional "About Us" sections will go here */}
            <Contact />
        </div>
    );
};

export default AboutPage;
