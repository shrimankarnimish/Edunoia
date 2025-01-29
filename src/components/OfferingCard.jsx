import React from 'react';
import styles from './Offerings.module.css'

export const OfferingCard = ({ imageSrc, title }) => {
  return (
    <div className={styles.offeringCard}>
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className={styles.offeringImage}
      />
      <h3 className={styles.offeringTitle}>{title}</h3>
    </div>
  );
};