import React from "react";
import styles from "./Page404.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Page404() {
  document.title = "Not Found"
  return (
    <Router>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContent}>
          <img
            src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e864c0ece09d715e9004fe0_danger.svg"
            alt="Not found"
          />
          <h2>So sorry! We can't find that page</h2>
          <p>
            The page you are looking for doesn't exist or has been moved. You
            can go back to the
            <Link to="/"> home page</Link>, or you can contact us and let us know
            about
            <Link to="/contact"> this error</Link>.
          </p>
        </div>
      </div>
    </Router>
  );
}
