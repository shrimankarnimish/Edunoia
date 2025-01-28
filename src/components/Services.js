import React from 'react';
import flame from '../images/clients/flame.png'
import LondonBuiss from '../images/clients/LondonBuiss.png'
import artvillage from '../images/clients/artvillage.png'
import emversity from '../images/clients/emversity.png'
import oaktree from '../images/clients/oaktree.png'
import Yashbirla from '../images/clients/Yashbirla.png'
import isbr from '../images/clients/isbr.png'
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
      </div>
      
    )
}

export default Clients;