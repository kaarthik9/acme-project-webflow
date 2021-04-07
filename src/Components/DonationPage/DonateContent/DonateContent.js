import React from 'react'
import styles from './DonateContent.module.css'
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function DonateContent() {
  return (
    <div className="content-section">
      <div className="container">
        <div className={styles.donateWrapper}>
          <div className={styles.donateList}>
            <DonateLink amount="100" />
            <DonateLink amount="50" />
            <DonateLink amount="20" />
            <DonateLink amount="15" />
            <DonateLink amount="5" />
          </div>
        </div>

      </div>
    </div>
  )
}


function DonateLink({amount}) {
  return (
    <Router>
    <div>
      <Link to={"product/donate-"+amount} className={"btn-orange "+styles.donateLink}>
        <div className={styles.textBlock}>
          Donate ${amount}
        </div>        
      </Link>
    </div>
    </Router>
  )
}

