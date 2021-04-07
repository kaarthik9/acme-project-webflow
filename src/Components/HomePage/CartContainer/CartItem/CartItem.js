import React from "react";
import styles from "./CartItem.module.css";

export default function CartItem({ productName, price }) {
  return (
    <div className={styles.cartItem}>
      {/* Change HERE IMPPPPPP IMPP */}
      <div className={styles.cartImage + " blue-canvas-pack"}></div>

      <div className={styles.cartItemInfo}>
        <div className={styles.cartItemName}>Blue Canvas Pack</div>
        <div className={styles.cartItemprice}>$ 95{price}.00 USD</div>

        <div className={styles.cartItemRemove}>Remove</div>
      </div>

      <input
        value="4"
        className={styles.cartQuantity}
        pattern="^[0-9]+$"
        type="number"
      ></input>
    </div>
  );
}
