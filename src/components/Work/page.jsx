import React from 'react';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import clientlogos2 from '../../images/assets/clientlogos2.png';
import img1 from '../Work/images/img1.png';
import img2 from '../Work/images/img2.png';
import img3 from '../Work/images/img3.png';
import img4 from '../Work/images/img4.png';
import img5 from '../Work/images/img5.png';
import img6 from '../Work/images/img6.png'

// Changed img1 to img6 for variety

import './page.css';

const Page = () => {
    const imageDetails = [
        {
            src: img1,
            alt: 'Flame University',
            // title: 'Flame University',
            // description: 'Building India’s Pioneers in Liberal Education through a Decade of Partnership.'
        },
        {
            src: img4,
            alt: 'London Business School',
            // title: 'London Business School',
            // description: 'World-class education meets global knowledge with direct communication.'
        },
        {
            src: img2,
            alt: 'ISBR',
            // title: 'ISBR',
            // description: 'Building a student-centric immersive experience.'
        },
        {
            src: img5,
            alt: 'Vidyashilp University',
            // title: 'Vidyashilp University',
            // description: 'Creating an identity for a management institute in India.'
        },
        {
            src: img3,
            alt: 'Art Village',
            // title: 'Art Village',
            // description: 'Branding an artist collaborative retreat through sustainable architectural practices and eco stays.'
        },
        {
            src: img6,
            alt: 'Emversity',
            // title: 'Emversity',
            // description: 'Branding India’s leading institute in skill-based education.'
        }
    ];

    return (
        <div className="page-container">

            <NavBar />
            <div className="content">
                <div className="layout">
                    <section className="why-us">
                        <div className="why-us-container" style={{ textAlign: 'center', marginTop: '2%' }}>
                            <h2 className="why-us-title2">OUR WORK</h2>
                            <div className="springboard-2"></div>
                            <p className="why-us-text1" >
                                Lorem ipsum dolor sit amet. Ut galisum corrupti qui magni officiis eos galisum sint eum dolor voluptatem quo laudantium deleniti. Non accusantium iste ea consequatur distinctio ut dolorem quis quo quia alias est maxime maxime.
                            </p>
                        </div>
                        <div className="mt-8 bg-gray-100">
                            <section data-aos="fade-up">
                                <img src={clientlogos2} alt="clientlogos2" />
                            </section>
                        </div>
                        <div className="image-gallery" data-aos="fade-right">
                            {imageDetails.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image.src} alt={image.alt} />
                                    <h3>{image.title}</h3>
                                    <p>{image.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
            <div className="see-more-container">
                <a href="#more" className="see-more-link">See More</a>
            </div>
            <Footer />
        </div>
    );
};

export default Page;
