import React from "react";
import PageHeading from "../Utilities/PageHeading/PageHeading";
import styles from "./ProductPage.module.css";
import ProductText from "./ProductText/ProductText"

export default function ProductPage({ name, productName, amount, sale }) {
  document.title = name;
  return (
    <div>
      <PageHeading heading={name} />
      <div className="content-section">
        <div className="container">
          <div className={styles.shoppingPageWrapper}>
            <div className={styles.shoppingPageLeft}>
              <div
                className={
                  styles.shoppingPageImage + " shop-image " + productName
                }
              >
                {sale && <div className="sale-pill">Sale</div>}
              </div>
            </div>

            <div className={styles.shoppingPageRight}>
              <h2 className={styles.productHeading}>{name}</h2>

              <div className={styles.priceWrapper}>
                <div className={styles.shopItemPrice}>$ {amount}.00 USD</div>
                {sale && (
                  <div
                    className={
                      styles.shopItemPrice + " " + styles.shopItemPriceSale
                    }
                  >
                    $ {sale}.00 USD
                  </div>
                )}
              </div>

              <div>
                <form className={styles.addToCartForm}>
                  <label for="quantity">Quantity</label>

                  <div className={styles.addToCartWrapper}>
                    <input
                      type="number"
                      pattern="^[0-9]+$"
                      inputmode="numeric"
                      id="quantity"
                      min="1"
                      className={styles.quantityInput}
                      value="1"
                    />

                    <input
                      type="submit"
                      value="Add To Cart"
                      data-loading-text="Adding to cart..."
                      className={styles.addToCartBtn+" btn btn-outline"}
                    />
                  </div>
                </form>
              </div>
            
              <ProductText />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
