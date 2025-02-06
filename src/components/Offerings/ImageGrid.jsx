import React from 'react';
import styles from './OfferingsSection.module.css';

export default function ImageGrid({ images }) {
  return (
    <div className={styles.imageGrid}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageWrapper}>
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className={styles.gridImage}
          />
        </div>
      ))}
    </div>
  );
}