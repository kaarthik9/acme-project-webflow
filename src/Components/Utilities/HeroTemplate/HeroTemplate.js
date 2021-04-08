import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import templateStyles from "./HeroTemplate.module.css";

export default function HeroTemplate({
  styles,
  heading1,
  heading2,
  para,
  btnText,
  btnLink,
}) {
  return (
    <div className={templateStyles.heroSection + " " + styles.section}>
      <div className={templateStyles.container}>
        <div
          id="heroWrapper"
          className={templateStyles.heroWrapper + " " + styles.wrapper}
        >
          <h1 className={templateStyles.heroHeading + " " + styles.heading}>
            {heading1}
            <br />
            {heading2}
          </h1>

          <page className={templateStyles.heroPara + " " + styles.para}>
            {para}
          </page>

          <div>
            <Link
              className={
                templateStyles.heroBtn + " btn btn-outline " + styles.btn
              }
              to={btnLink}
            >
              {btnText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
