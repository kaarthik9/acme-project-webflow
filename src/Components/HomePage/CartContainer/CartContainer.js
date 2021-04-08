import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CartContainer.module.css";
import CartItem from "./CartItem/CartItem";

export default function CartContainer({
  showCart,
  hideCart,
  cartItems,
  cartSubtotal,
  setCartItems,
}) {
  return (
    <>
      <div className={styles.cartContainer}>
        <div className={styles.cartDetails}>
          <div className={styles.cartHeader}>
            <h4>Your Cart</h4>
            <div onClick={hideCart} className={styles.hideCart}>
              <FontAwesomeIcon className={styles.hideCartLogo} icon={faTimes} />
            </div>
          </div>

          <div className={styles.cartFormWrapper}>
            <form className={styles.cartForm}>
              <div className={styles.commerceCartList}>
                {Object.keys(cartItems).length === 0 ? (
                  <div>No cart Items</div>
                ) : (
                  Object.keys(cartItems).map((key) => {
                    return (
                      <CartItem
                        productName={cartItems[key].productName}
                        price={cartItems[key].price}
                        name={cartItems[key].name}
                        quantity={cartItems[key].quantity}
                        nickname={cartItems[key].nickname}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                      />
                    );
                  })
                )}
              </div>

              <div className={styles.commerceCartFooter}>
                <div className={styles.commerceCartLineItem}>
                  <div>Subtotal</div>
                  <div className={styles.commerceCartTotal}>
                    $ {cartSubtotal}.00 USD
                  </div>
                </div>

                <div className={styles.checkoutBtn + " btn btn-orange"}>
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
