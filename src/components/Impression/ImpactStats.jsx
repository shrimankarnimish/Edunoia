import React from 'react';
import StatCard from './StatCard'
import styles from './ImpactStats.module.css';

const statsData = [
  {
    number: '90+',
    description: 'Lorem ipsum dolor sit amet.'
  },
  {
    number: '15%',
    description: (
      <>
        <span className={styles.lightText}>Student retention </span>
        <span className={styles.boldText}>rates improved by 15% </span>
        <span className={styles.lightText}>
          due to enhanced communication strategies implemented by Edunoia.
        </span>
      </>
    )
  },
  {
    number: '35%',
    description: (
      <>
        Corporate partnerships{' '}
        <span className={styles.boldText}>increased by 35%</span>,
        providing more opportunities for student internships and
        placements at London Business School.
      </>
    )
  },
  {
    number: '50+',
    description: 'Lorem ipsum dolor sit amet.'
  }
];

export const ImpactStats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.impactSection}>
        <div className={styles.wrapper}>
          <div className={styles.statsGrid}>
            {statsData.map((stat, index) => (
              <StatCard
                key={index}
                number={stat.number}
                description={stat.description}
              />
            ))}
          </div>
          <h2 className={styles.sectionTitle}>our impact</h2>
          <div className={styles.underline} />
        </div>
      </div>
    </div>
  );
};