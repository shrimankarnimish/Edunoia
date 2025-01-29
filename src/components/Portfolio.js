import React from 'react';
import { WhyUsCard } from './WhyUsCard';
import styles from './WhyUs.module.css';
import img1 from '../images/assets/img1.png'
import img2 from '../images/assets/img2.png'
import img3 from '../images/assets/img3.png'
import { OfferingsSection } from './OfferingSection';

const features = [
  {
    imageSrc: img1,
    title: "Team of Designers & Strategists...",
    isHighlighted: false
  },
  {
    imageSrc: img2,
    title: "India's First & Only Education Centric Brand Consultant Agency",
    isHighlighted: true
  },
  {
    imageSrc: img3,
    title: "Panel of Educational Consultants...",
    isHighlighted: false
  }
];

export const WhyUsSection = () => {
  return (
    <>
    <section className={styles.whyUsSection} data-aos="fade-up">
          <div className={styles.header}>
              <h2 className={styles.heading}>WHY US?</h2>
              <div className={styles.underline} />
          </div>
          <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className={styles.cardContainer}>
              {features.map((feature, index) => (
                  <WhyUsCard key={index} {...feature} />
              ))}
          </div>
      </section>
      <OfferingsSection />
      </>
  );
};

export default WhyUsSection;