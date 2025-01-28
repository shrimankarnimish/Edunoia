import React from 'react';
import Clients from '../components/Clients';

import Footer from '../components/Footer/Footer';
import Hero from '../components/LandingPage/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Work from '../components/Work/page';




const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            <Portfolio />
            <Clients />
            <Footer />
           
            
      
            
        </>

    )
}

export default Home;

