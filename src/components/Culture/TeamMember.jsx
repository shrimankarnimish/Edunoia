import React from 'react';
import styles from './TeamMember.module.css'

export const TeamMember = ({ image, name, title, hasBlueBackground }) => {
  return (
    <div className={styles.memberContainer}>
      {hasBlueBackground ? (
        <div className={styles.blueBackground}>
          <img 
            loading="lazy" 
            src={image} 
            className={styles.memberImage}
            alt={`${name} - ${title}`} 
          />
        </div>
      ) : (
        <img 
          loading="lazy" 
          src={image} 
          className={styles.memberImage}
          alt={`${name} - ${title}`} 
        />
      )}
      <div className={styles.memberInfo}>
        <div className={styles.memberName}>{name}</div>
        <div className={styles.memberTitle}>{title}</div>
      </div>
    </div>
  );
};