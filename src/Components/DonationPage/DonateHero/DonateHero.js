import React from "react";
import styles from "./DonateHero.module.css";

export default function DonateHero() {
  return (
    <div className={styles.donationExplainer}>
      <div className="container">
        <div className={styles.donateHeading1}>Here at Acme Outdoors</div>

        <div className={styles.donateHeading2}>every dollar counts</div>

        <div className={styles.donateParagraph}>
          Acme Outdoors is more than just a company, we're a community of people
          who care for one another and for our city. During this time, due to
          shelter in place orders, only a select few of our staff are able to
          work. Any donations you make to Acme will help make sure our employees
          are cared for and can stay safe in these uncertain times.
        </div>
      </div>
    </div>
  );
}
