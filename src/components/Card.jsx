// src/components/Card.jsx - CORRECTED
import React from 'react';
import styles from './Card.module.css';

// Component now accepts and spreads the 'style' prop
const Card = ({ icon, title, description, style }) => {
  return (
    // The style prop (which contains the animation data) is applied here
    <div className={styles.card} style={style}>
      <div className={styles.icon}>
        {icon}
      </div>
      <h4 className={styles.title}>
        {title}
      </h4>
      <p className={styles.description}>
        {description}
      </p>
    </div>
  );
};

export default Card;