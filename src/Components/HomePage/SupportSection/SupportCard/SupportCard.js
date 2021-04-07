import React from 'react'
import styles from './SupportCard.module.css'

export default function SupportCard({ number, heading1, heading2, imgSrc, shape, imgAlt, para }) {
  return (
    <div className={styles.supportColumn}>
      <div className={styles.supportSquare}>
        <div className={styles.supportSquareNumber}>{number}</div>
        <div className={styles.supportSquareText}>
          {heading1}
          <br />
          {heading2}
        </div>
        <img src={imgSrc} alt={imgAlt} className={styles.supportSquareImage+" "+styles[shape]} />
      </div>
      <p>{para}</p>
    </div>
  );
}
