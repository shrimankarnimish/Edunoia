import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
// import FloatingButton from './FloatingButton';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import Work from './components/Work/page'
import Offerings from './components/Offerings/page'
import Impression from './components/Impression/page'
import Spotlight from './components/Spotlight/page'
// import NavBar from './components/Navbar/NavBar';
// import Footer from './components/Footer/Footer';



function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Edunoia");

  return (
    <>
      <Router>
        {/* <FloatingButton/> */}
     
          {/* <NavBar/> */}
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/get-demo" element={<DemoProduct />} />
              <Route path="/work" element={<Work />} />
              <Route path="/offerings" element={<Offerings />} />
              <Route path="/impressions" element={<Impression />} />
              <Route path="/spotlight" element={<Spotlight/>}/>

            </Routes>
          </ScrollToTop>
          {/* <Footer/> */}
        
      </Router>
    </>
  );
}


export default App;
