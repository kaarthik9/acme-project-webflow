import React from "react";
import styles from "./HeaderAnnounce.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function HeaderAnnounce() {
  return (
    <div className={styles.wrapper}>
      <Link
        to="/alert/how-were-responding-to-covid-19"
        className={styles.container}
      >
        <div className={styles.banner}>
          <div className={styles.pill + " bg-primary"}>Announcement</div>
          <div>How we're responding to COVID-19</div>
        </div>
      </Link>
    </div>
  );
}
