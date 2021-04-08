import React from "react";
import PageHeading from "../Utilities/PageHeading/PageHeading";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./ShopPage.module.css";
import CategoryMenu from "../Utilities/CategoryMenu/CategoryMenu";
import ShopList from "./ShopList/ShopList";

export default function ShopPage() {
  document.title = "Shop";
  return (
    <div>
      <PageHeading heading="Shop Our Products" />

      <div className={styles.featuredSection}>
        <div className="container">
          <div className="list-item">
            <Link to="/product/white-tent" className={styles.featuredWrapper}>
              <div className={styles.featuredPill}>Featured Item</div>

              <div className={styles.featuredTextWrapper}>
                <h3 className={styles.featuredItemName}>White Tent</h3>
                <div className={styles.featuredPrice}>$ 200.00 USD</div>
              </div>

              <div className={styles.featuredGradient}></div>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className="container">
          <div className={styles.shopPageWrapper}>
            <CategoryMenu />
            <ShopList />
          </div>
        </div>
      </div>
    </div>
  );
}
