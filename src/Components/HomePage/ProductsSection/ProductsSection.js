import React from "react";
import styles from "./ProductsSection.module.css";
import supportStyles from "../SupportSection/SupportSection.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ProductsCards from "../../Utilities/ProductsCards/ProductsCards";

export default function ProductsSection() {
  return (
    <div className={styles.productsSection}>
      <div className={styles.container}>
        <div className={styles.shopTopWrapper}>
          <div className={supportStyles.supportTopLeft}>
            <div className={supportStyles.supportTopDetailsText}>
              SHOP PRODUCTS
            </div>
            <h2 className={supportStyles.supportTopHeading}>Open 24/7/365.</h2>
          </div>
        </div>

        <div className="productListWrapper">
          <div className="products-list">
            <ProductsCards productName="white-tent" />
            <ProductsCards productName="tin-coffee-tumbler" />
            <ProductsCards productName="blue-canvas-pack" />
          </div>
        </div>

        <div className={styles.shopMore}>
          <Link to="/shop" className="btn btn-dark">
            View all products
          </Link>
        </div>
      </div>
    </div>
  );
}
