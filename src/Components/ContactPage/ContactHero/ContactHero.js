import React from "react";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <div className={styles.contactHeroSection}>
      <div className={styles.contactHeroBgWrapper}>
        <div className={"container " + styles.contact}>
          <h1 className={styles.heading}>Contact Acme Outdoors</h1>
          <div className={styles.contactBlockWrapper}>
            <div className={styles.contactBlock}>
              <img
                className={styles.contactIcon}
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg"
              />
              <h2>Contact Us</h2>
              <p>
                Just want to say hi? We'd love to hear from you. We love our
                customers and community!
              </p>
              <a href="##" className={styles.contactLink + " btn btn-orange"}>
                Send Us A Message
              </a>
            </div>

            <div className={styles.contactBlock}>
              <img
                className={styles.contactIcon}
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg"
              />
              <h2>Get Support</h2>
              <p>
                Have an issue with an order or with a product you purchased from
                us? Fill out our support form.
              </p>
              <a href="##" className={styles.contactLink + " btn btn-orange"}>
                Contact Support
              </a>
            </div>
          </div>
        </div>
      
        <div className={styles.imageDiv}></div>
      </div>
    </div>
  );
}
