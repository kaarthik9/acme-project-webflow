import React from "react";
import styles from "./Footer.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Footer() {
  return (
    <Router>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerWrapper}>
            <div className={styles.footerLogoColumn}>
              <Link to="/" className={styles.logoLink}>
                <img
                  src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
                  alt="Acme Outdoors Logo"
                />
              </Link>
            </div>

            <div>
              <a href="http://twitter.com/theminimalguy" className={styles.socialLink}>
                <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407a25b6234aeec960fb9_Twitter_Social_Icon_Rounded_Square_White.svg" width="30" alt="Twitter Logo" />
              </a>
              <a href="http://www.facebook.com/ask.kaarthik" className={styles.socialLink}>
                <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407aa3fb6cf5576f1658b_Facebook%20Logo.svg" width="30" alt="Twitter Logo" />
              </a>
              <a href="http://www.instagram.com/kaarthik.bekkem" className={styles.socialLink}>
                <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e840774014326b74bbeeeb6_Insta.svg" width="30" alt="Twitter Logo" />
              </a>
            </div>
          </div>

          <div className={styles.footerBottomWrapper}>
              <div className={styles.footerSmall}>
                Made by <a href="http://twitter.com/theminimalguy">
                  Kaarrthik Bekkem
                </a>
                . © 2021.
              </div>
            </div>
        </div>
      </div>
    </Router>
  );
}
