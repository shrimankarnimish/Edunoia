import React from 'react';
import styles from './WhyUs.module.css';

export const WhyUsCard = ({ imageSrc, title, isHighlighted }) => {
  return (
    <div className={styles.featureCard}>
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className={styles.featureIcon}
      />
      <div className={isHighlighted ? styles.titleHighlighted : styles.title}>
        {title}
      </div>
    </div>
  );
};