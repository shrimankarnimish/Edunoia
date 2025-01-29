import React from 'react';
import { OfferingCard } from './OfferingCard';
import styles from './Offerings.module.css'
import img4 from '../images/assets/img4.png'
import img5 from '../images/assets/img5.png'
import img6 from '../images/assets/img6.png'
import { Link } from 'react-router-dom';

const offerings = [
  {
    imageSrc: img4,
    title: "STRATEGY"
  },
  {
    imageSrc: img5,
    title: "CULTURE"
  },
  {
    imageSrc: img6,
    title: "DESIGN"
  },
];

export const OfferingsSection = () => {
  return (
    <section className={styles.offeringsSection} data-aos="fade-up">
      <div className={styles.header}>
        <h2 className={styles.heading}>
          WHAT
          <br />
          WE OFFER
        </h2>
        <div className={styles.underline} />
      </div>
      <div className={styles.content}>
        <p className={styles.description}>
          At our education brand consultancy, we offer a comprehensive
          suite of services designed to elevate your institution's
          identity and visibility. From crafting a compelling brand
          strategy and visual identity to executing targeted digital
          marketing campaigns and community engagement initiatives, we
          ensure your brand stands out in the competitive education
          sector.
        </p>
        <button className={styles.knowMoreBtn}>
        <Link to="/Offerings" style={{ textDecoration: "underline" }}> Know More</Link>
           </button>
      </div>
      <div className={styles.cardContainer}>
        {offerings.map((offering, index) => (
          <OfferingCard key={index} {...offering} />
        ))}
      </div>
    </section>
  );
};