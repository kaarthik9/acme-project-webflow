import React from "react";
import styles from "./HeaderMenu.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import CartContainer from "../../HomePage/CartContainer/CartContainer";

export default function HeaderMenu({
  showCart,
  hideCart,
  cartItems,
  cartSubtotal,
  setCartItems,
  showOverlayMenu,
  showOverlay,
  burgerStyles
}) {
  let cartQuantity = Object.keys(cartItems).length;

  return (
    <div className={styles.navbar + " bg-primary"}>
      <div className={styles.container}>
        <div className={styles.navWrapper}>
          <Link to="/">
            <img
              className={styles.brand}
              src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
              alt="Acme Outdoors Logo"
            />
          </Link>

          <div className={styles.cartNavWrapper}>
            <div className={styles.navMenu}>
              <NavBtn text="Home" path="/" />
              <NavBtn text="About" path="/about" />
              <NavBtn text="Shop" path="/shop" />
              <NavBtn text="Donate" path="/donations" />
              <NavBtn text="Contact" path="/contact" />
            </div>

            <div onClick={hideCart} className={styles.cart}>
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e86146bb854797d12a30a13_cart.svg"
                className={styles.cartIcon}
              />
              <div className={styles.cartQuantity}>{cartQuantity}</div>
            </div>

            <div onClick={showOverlayMenu} style={burgerStyles} className={styles.burgerDiv}>
              <div className={styles.burger}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>

            {showCart && (
              <CartContainer
                setCartItems={setCartItems}
                showCart={showCart}
                cartItems={cartItems}
                cartSubtotal={cartSubtotal}
                hideCart={hideCart}
              />
            )}
          </div>
        </div>
      </div>

      {/* Overlay nav */}
      {showOverlay && (
        <div className={styles.navOverlay}>
          <div className={styles.navMenu}>
            <NavBtn showOverlayMenu={showOverlayMenu} text="Home" path="/" />
            <NavBtn
              showOverlayMenu={showOverlayMenu}
              text="About"
              path="/about"
            />
            <NavBtn
              showOverlayMenu={showOverlayMenu}
              text="Shop"
              path="/shop"
            />
            <NavBtn
              showOverlayMenu={showOverlayMenu}
              text="Donate"
              path="/donations"
            />
            <NavBtn
              showOverlayMenu={showOverlayMenu}
              text="Contact"
              path="/contact"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function NavBtn({ text, path, showOverlayMenu }) {
  return (
    <Link
      to={path}
      onClick={showOverlayMenu}
      className={"btn btn-orange " + styles.navButton}
    >
      {text}
    </Link>
  );
}
