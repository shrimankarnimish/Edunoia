import React from 'react';
import styles from './ProjectCard.module.css'

export default function ProjectCard({ 
  image, 
  title, 
  description, 
  imageAspectRatio, 
  dividerHeight 
}) {
  return (
    <div className={styles.projectCard}>
      <img 
        src={image} 
        alt={title}
        className={styles.projectImage}
        style={{ '--aspect-ratio': imageAspectRatio }}
        loading="lazy"
      />
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <div className={styles.descriptionWrapper}>
          <div 
            className={styles.divider} 
            style={{ '--divider-height': `${dividerHeight}px` }}
          />
          <p className={styles.projectDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}