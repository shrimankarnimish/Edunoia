import React from 'react';
import clientlogos from '../images/assets/clientlogos.png'
import './Services.css'

const clientImage = {
    paddingLeft: '2rem',  // Space from the left for the first image
    paddingRight: '2rem'  // Space from the right for the last image
};


const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
        <section data-aos="fade-up">
      <img src ={clientlogos} alt='' ></img>
        </section>
        <br></br><br></br><br></br><br></br>     
      </div>
      
    )
}

export default Clients;