import React from 'react'
import styles from './PageHeading.module.css'

export default function PageHeading({heading}) {
  return (
    <div className={styles.pageHeadingSection} > 
      <div className="container">
        <h1 className={styles.pageHeading}>
          {heading}
        </h1>
      </div>
    </div>
  )
}
