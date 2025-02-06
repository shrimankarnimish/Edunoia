import React from 'react';
import NavBar from '../Navbar/NavBar';
import banner from '../Impression/images/Impression.png';
import './impression.css';
import Testimonials from './testimonicals';
import { ImpactStats } from './ImpactStats';
import award from '../Impression/images/award1.png';
import tile from '../Impression/images/ASA.png'

const awards = [
  { id: 1, image: award, alt: "Design India Show Award 1" },
  { id: 1, image: award, alt: "Design India Show Award 1" },
  { id: 1, image: award, alt: "Design India Show Award 1" },
  { id: 1, image: award, alt: "Design India Show Award 1" },
];

const Page = () => {
  return (
    <div>
      <div className="page-container">
        <NavBar />
        {/* Edge-to-Edge Image Section */}
        <div className="hero-image-container">
          <img
            src={banner}
            alt="Hero Image"
            className="hero-image"
          />
        </div>
        <Testimonials />
        <ImpactStats />
        <div className="what-we-offer-container">
          <div className="content-wrapper">
            <h1 className="title">WHAT<br />WE OFFER </h1>
           
            {/* <div className="springboard-offer"></div> */}

            <div className="content-section">
              <p className="description">
                Edunoia's unwavering commitment to excellence in education branding has earned us numerous accolades and industry
                recognition over the past decade. Our innovative strategies and impactful campaigns have been celebrated by prestigious organisations and
                esteemed forums. We take pride in these honours as they reflect our dedication to creativity, consumer-centric approaches, and significant contributions to the education sector.
              </p>
              <div className="awards-grid">
                {awards.map((award) => (
                  <div key={award.id} className="award-item">
                    <img src={award.image} alt={award.alt} className="award-image" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <br></br><br></br><br></br><br></br>
        <div className="tile">
          <img
            src={tile}
            alt="Image"
            className="tile"
          />
        </div>
        <br></br><br></br><br></br><br></br>
   
      </div>
    </div>
  );
};

export default Page;
