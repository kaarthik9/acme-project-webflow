import React from "react";
import SupportCard from "./SupportCard/SupportCard";
import styles from "./SupportSection.module.css";

export default function SupportSection() {
  return (
    <div className={styles.supportSection}>
      <div className={styles.container}>
        <div className={styles.supportTopWrapper}>
          <div className={styles.supportTopLeft}>
            <div className={styles.supportTopDetailsText}>Ways to support</div>
            <h2 className={styles.supportTopHeading}>Support Acme Outdoors.</h2>
          </div>
          <div className={styles.supportTopRight}>
            <p>
              COVID-19 has forced us to close our retail space, but we need
              support from patrons like yourself now more than ever. Below,
              we’ve listed the best ways to help us through this season.
            </p>
          </div>
        </div>
        <div className={styles.supportWrapper}>
          <SupportCard
            number="01"
            heading1="SHOP"
            heading2="PRODUCTS"
            imgSrc="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57a5836db2a07bab0e3_Circle.svg"
            imgAlt="Circle Decoration in Shop Products Block"
            shape="circle"
            para="Our full product line is still available online here on our site!
            Getting outside and hiking is still something you can do. Get your
            gear now!"
          />
          <SupportCard
            number="02"
            heading1="DONATE"
            heading2=""
            shape="triangle"
            imgSrc="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adc54453434efb9ee_Triangle.svg"
            imgAlt="Triangle Decoration in Donate Block"
            para="Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat."
          />
          <SupportCard
            number="03"
            heading1="BUY"
            heading2="GIFT CARDS"
            shape="square"
            imgSrc="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57afea9a31a44d66db0_Rectangle.svg"
            imgAlt="Rectangle Decoration in Buy Gift Cards Block"
            para="Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family. "
          />
        </div>
      </div>
    </div>
  );
}