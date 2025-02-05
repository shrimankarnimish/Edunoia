import React from 'react';
import styles from './Blog.module.css';

export const NewsCard = ({ image, description, title }) => {
  return (
    <div className={styles.newsCard}>
      <img loading="lazy" src={image} alt={title} className={styles.newsImage} />
      <p className={styles.newsDescription}>{description}</p>
      <h3 className={styles.newsTitle}>{title}</h3>
    </div>
  );
};