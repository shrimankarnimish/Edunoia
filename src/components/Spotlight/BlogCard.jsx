import React from 'react';
import styles from './Blog.module.css';

export const BlogCard = ({ image, title, description, onReadMore }) => {
  return (
    <div className={styles.blogCard}>
      <img loading="lazy" src={image} alt={title} className={styles.blogImage} />
      <h3 className={styles.blogTitle}>{title}</h3>
      <p className={styles.blogDescription}>{description}</p>
      <button 
        onClick={onReadMore}
        className={styles.readMoreButton}
        tabIndex={0}
      >
        Read More
      </button>
    </div>
  );
};