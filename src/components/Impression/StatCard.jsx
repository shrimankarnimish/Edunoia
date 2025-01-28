import React from 'react';
import styles from './ImpactStats.module.css';

export const StatCard = ({ number, description }) => {
  return (
    <div className={styles.statColumn}>
      <div className={styles.statContent}>
        <div className={styles.statNumber}>{number}</div>
        <div className={styles.statDescription}>{description}</div>
      </div>
    </div>
  );
};
export default StatCard