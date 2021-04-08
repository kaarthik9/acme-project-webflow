import React from "react";
import HeaderAnnounce from "./HeaderAnnounce/HeaderAnnounce";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import styles from "./Header.module.css";

export default function Header({
  showCart,
  hideCart,
  cartItems,
  cartSubtotal,
  setCartItems,
  showOverlayMenu,
  showOverlay
}) {
  return (
    <div className={styles.header}>
      <HeaderAnnounce />
      <HeaderMenu
        setCartItems={setCartItems}
        showCart={showCart}
        cartItems={cartItems}
        cartSubtotal={cartSubtotal}
        hideCart={hideCart}
        showOverlayMenu={showOverlayMenu}
        showOverlay={showOverlay}
      />
    </div>
  );
}
