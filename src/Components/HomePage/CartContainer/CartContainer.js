import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CartContainer.module.css";
import CartItem from "./CartItem/CartItem";

export default function CartContainer({totalPrice}) {
  return (
    <>
      <div style={styles} className={styles.cartContainer}>
        <div className={styles.cartDetails}>
          <div className={styles.cartHeader}>
            <h4>Your Cart</h4>
            <div className={styles.hideCart}>
              <FontAwesomeIcon className={styles.hideCartLogo} icon={faTimes} />
            </div>
          </div>

          <div className={styles.cartFormWrapper}>
            <form className={styles.cartForm}>
              <div className={styles.commerceCartList}>
                <CartItem />
                <CartItem />
              </div>
            
              <div className={styles.commerceCartFooter}>
                <div className={styles.commerceCartLineItem}>
                  <div>Subtotal</div>
                  <div className={styles.commerceCartTotal}>
                    $ {totalPrice}.00 USD
                  </div>
                </div>

                <div className={styles.checkoutBtn+" btn btn-orange"}>
                  Continue to Checkout
                </div>
              </div>
            </form>
          </div>
        
          
        </div>
      </div>
    </>
  );
}
