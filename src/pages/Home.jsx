import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Solutions from '../components/Solutions'
import Merchants from '../components/Merchants'
import Developers from '../components/Developers'
import Security from '../components/Security'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <Features />
            <Solutions />
            <Merchants />
            <Developers />
            <Security />
            <Contact />
        </div>
    );
};

export default Home;
