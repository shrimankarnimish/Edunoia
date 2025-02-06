import React from 'react';
import styles from './OfferingsSection.module.css';

export default function CultureCard({ image, title, alt }) {
  return (
    <div className={styles.card}>
      <img 
        src={image}
        alt={alt}
        loading="lazy"
        className={styles.cardImage}
      />
      <div className={styles.cardTitle}>{title}</div>
    </div>
  );
}