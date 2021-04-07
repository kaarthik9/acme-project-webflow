import React from 'react'
import styles from './ShopLocalSection.module.css'

export default function ShopLocalSection() {
  return (
    <div className={styles.shopLocalSection}>
      <div className={styles.container}>
        <div className={styles.shopLocalWrapper}>
          <div className={styles.shopLocalLeft}></div>
          
          <div className={styles.shopLocalRight}>
            <div className={styles.shopLocalContentWrapper}>
              <h2 className={styles.shopLocalHeading}>Shop Local.</h2>
              <p>We know that during COVID-19, a lot of folks around the city and state are feeling uneasy about the future - we’re not sure what the future holds either.</p>
              <p>That said: we know that we love making sure you have the gear you need for your adventures, and we’re going to keep doing that - with our team - until the city tells us we can’t.</p>
              <p>But as long as folks like yourself support small businesses around the city, then we’ll be here — every day, making sure your orders arrive on time.</p>
              <p>-------</p>
              <div>Jane & John Doe</div>
              <div>
                <strong>Acme Outdoors</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
