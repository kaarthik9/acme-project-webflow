import React from "react";
import styles from "./CategoryMenu.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function CategoryMenu() {
  return (
    <div className={styles.shopCategoryMenu}>
      <h2 className={styles.heading}>Shop By Category</h2>
      <div>
        <div className={styles.menuItem}>
          <Link
            className={styles.menuBtn + " btn btn-outline"}
            to="/category/gift-cards"
          >
            Gift Cards
          </Link>
        </div>

        <div className={styles.menuItem}>
          <Link
            className={"btn btn-outline " + styles.menuBtn}
            to="/category/tents"
          >
            Tents
          </Link>
        </div>

        <div className={styles.menuItem}>
          <Link
            className={"btn btn-outline " + styles.menuBtn}
            to="/category/accessories"
          >
            Accessories
          </Link>
        </div>

        <div className={styles.menuItem}>
          <Link
            className={styles.menuBtn + " btn btn-outline"}
            to="/category/packs"
          >
            Packs
          </Link>
        </div>
      </div>
    </div>
  );
}
