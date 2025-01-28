import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css'; // Import the CSS file
import img1 from '../images/assets/img1.png'
import img2 from '../images/assets/img2.png'
import img3 from '../images/assets/img3.png'
import img4 from '../images/assets/img4.png'
import img5 from '../images/assets/img5.png'
import img6 from '../images/assets/img6.png'
import whyus from '../images/assets/whyus.png'


const Portfolio = () => {
    return (
        <>
            <div className="layout">
                <section className="why-us" data-aos="fade-up">
                    <h2 className="why-us-title" style={{ fontSize: '3rem', marginTop: '2%' }}>WHY US?</h2>
                    <div className="springboard-1"></div> {/* Springboard below the WHY US text */}
                    {/* <p style={{ marginTop: ''}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> */}
                    <div className='styles-1' style={{ position: 'relative', bottom: '65px', paddingLeft: '35%', textAlign: 'left' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br></br> magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div className="why-us-content">
                        <img src={whyus} alt='whyus' />
                    </div>
                </section>

                <section className="what-we-offer"  data-aos="fade-up">
                    <h2 className="what-we-offer-title" style={{ fontSize: '3rem' }}>
                        <span style={{ position: 'relative', right: '2.8%' }}>WHAT</span><br /> WE OFFER
                    </h2>
                    <div className="springboard-1"></div>
                    {/* <p style={{ fontSize: '1.2rem' }}>
                        At our education brand consultancy, we offer a comprehensive suite of services designed to elevate your institution's
                        identity and visibility. From crafting a compelling brand strategy and visual identity to executing targeted digital
                        marketing campaigns and community engagement initiatives, we ensure your brand stands out in the competitive education sector.
                    </p> */}

                    <div className='styles-1' style={{ position: 'relative', bottom: '129px', paddingLeft: '35%', textAlign: 'left' }}>
                        At our education brand consultancy, we offer a comprehensive suite of services designed to elevate your institution's identity and visibility.<br></br>
                        From crafting a compelling brand strategy and visual identity to executing targeted digital marketing campaigns and community engagement<br></br>
                        initiatives, we ensure your brand stands out in the competitive education sector. <br></br> <a href="#know-more">Know More</a></div>

                    <div className="image-section">
                        <div className="image-item">
                            <img src={img4} style={{ width: '500px',position:'relative',left:'8%' }} alt="img4" />
                            <p style={{fontSize:'35px',color:'rgb(255, 127, 9)'}}> STRATEGY</p>
                        </div>
                        <div className="image-item">
                            <img src={img5} style={{ width: '500px',position:'relative',left:'5%',right:'5%' }} alt="img5" />
                            <p style={{fontSize:'35px',color:'rgb(255, 127, 9)'}}>DESIGN</p>
                        </div>
                        <div className="image-item">
                            <img src={img6} style={{ width: '500px',position:'relative',left:'5%',right:'8%' }} alt="img6" />
                            <p style={{fontSize:'35px',color:'rgb(255, 127, 9)'}}>CULTURE</p>
                        </div>
                    </div>

                    
                </section>

            </div>
        </>
    )
}

export default Portfolio;