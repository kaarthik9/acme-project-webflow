import React from "react";
import PageHeading from "../Utilities/PageHeading/PageHeading";
import styles from "./ProductPage.module.css";
import ProductText from "./ProductText/ProductText"
import { useState } from "react";

export default function ProductPage(props) {

  let [quantity, setQuantity] = useState(1)
  // Updates quantity
  const updateQuantity = (e) => {
    setQuantity(e.target.value)
  }

  let name, productName, sale, nickname, price;
  productName = props.match.params.name

  // Sets product properties
  if (productName === 'white-tent') {
    name = 'White Tent'
    price = '200.00'
    nickname = 'white'
  } else if (productName === 'tin-coffee-tumbler') {
    name = 'Tin Coffee Tumbler'
    price = '35.00'
    nickname = 'coffee'
  } else if (productName === 'blue-canvas-pack') {
    name = 'Blue Canvas Pack'
    price = '95.00'
    sale = '145.00'
    nickname = 'blue'
  } else if (productName === 'green-canvas-pack') {
    name = 'Green Canvas Pack'
    price = '125.00'
    nickname = 'green'
  } else if (productName === 'gift-card') {
    name = 'Gift Card'
    price = '25.00'
    nickname = 'gift'
  }
  document.title = name;

  // Adds to cart
  const sendToCart = (e) => {
    e.preventDefault();
    props.addCartItems(nickname, name, quantity, productName, price)

  }

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
                <div className={styles.shopItemPrice}>$ {price}.00 USD</div>
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
                <form className={styles.addToCartForm} onSubmit={sendToCart}>
                  <label for="quantity">Quantity</label>

                  <div className={styles.addToCartWrapper}>
                    <input
                      type="number"
                      pattern="^[0-9]+$"
                      inputmode="numeric"
                      id="quantity"
                      min="1"
                      className={styles.quantityInput}
                      value={quantity}
                      onChange={updateQuantity}
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
