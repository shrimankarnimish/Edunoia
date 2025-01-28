import React from 'react'
import Emversity from '../Impression/images/Testimonical1.png'
import Flame from '../Impression/images/Testimonical2.png'
import Vidyashilp from '../Impression/images/Testimonical3.png'
import './testimonical.css'

const Testimonials = () => {
    return (
      <div className="testimonials-container">
        {/* Testimonial Item 1 */}
        <div className="testimonial-item">
          {/* <img src=alt="Person 1" className="person-image" /> */}
          <img src={Emversity}  alt="University 1" className="university-logo" />
          
        </div>
  
        {/* Testimonial Item 2 */}
        <div className="testimonial-item">
          {/* <img src={Flame} alt="Person 2" className="person-image" /> */}
          <img src={Flame} alt="University 2" className="university-logo" />
         
        </div>
  
        {/* Testimonial Item 3 */}
        <div className="testimonial-item">
          {/* <img src={ alt="Person 3" className="person-image" /> */}
          <img src={Vidyashilp} alt="University 3" className="university-logo" />
          
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  