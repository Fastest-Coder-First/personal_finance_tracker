import React from 'react';
import styles from './TiltedCard.module.css';

const TiltedCard = ({ title, content }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default TiltedCard;
