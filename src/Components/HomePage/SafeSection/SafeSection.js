import React from "react";
import styles from "./SafeSection.module.css";
import HeroTemplate from "../../Utilities/HeroTemplate/HeroTemplate";

export default function SafeSection() {
  return (
    <div className={styles.heroWrapper}>
      <HeroTemplate
        styles={styles}
        heading1="How we're keeping you safe during COVID-19"
        heading2=""
        para="As an outdoor shop, we’ve taken precautionary measures to ensure the safety of all our customers and team members."
        btnText="Read Our Statement"
        btnLink="/alert/how-were-responding-to-covid-19"
      />
    </div>
  );
}
