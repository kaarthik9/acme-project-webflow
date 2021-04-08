import React from "react";
import styles from "./CartItem.module.css";
import { useState } from "react";

export default function CartItem({ productName, price, name, quantity, cartItems, setCartItems, nickname }) {

  // Removes item from cart
  const removeItem = () => {
    setCartItems(prevState => delete prevState[nickname])
  }

  
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartImage + " "+productName}></div>

      <div className={styles.cartItemInfo}>
        <div className={styles.cartItemName}>{name}</div>
        <div className={styles.cartItemprice}>$ {price}.00 USD</div>

        <div onClick={removeItem} className={styles.cartItemRemove}>Remove</div>
      </div>

      <input
        value={quantity}
        className={styles.cartQuantity}
        pattern="^[0-9]+$"
        type="number"
      ></input>
    </div>
  );
}
