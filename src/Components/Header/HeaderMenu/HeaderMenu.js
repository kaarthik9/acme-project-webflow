import React from "react";
import styles from "./HeaderMenu.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import CartContainer from "../../HomePage/CartContainer/CartContainer";

export default function HeaderMenu({ showCart, showTheCart }) {
  const cartDetailsStyles = {
    transform: "translateX(100%)",
  };

  showCart
    ? (cartDetailsStyles.transform = "translateX(0)")
    : (cartDetailsStyles.transform = "translateX(100%)");

  return (
    <Router>
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

              <Link onClick={() => showTheCart()} className={styles.cart}>
                <img
                  src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e86146bb854797d12a30a13_cart.svg"
                  className={styles.cartIcon}
                />
                <div className={styles.cartQuantity}>P</div>
              </Link>

              <div className={styles.burgerDiv}>
                <div className={styles.burger}>
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </div>

              {/* {showCart && } */}

              {/* <CartContainer /> */}

              {/* Cart container */}
              {/* <div className={styles.cartContainer}>
                <div className={styles.cartDetails}>
                  <div className={styles.cartHeader}>
                    <h4>Your Cart</h4>
                    <div className={styles.hideCart}>
                      <FontAwesomeIcon className={styles.hideCartLogo} icon={faTimes} />
                    </div>
                  </div>
                </div>
                
              </div> */}
            </div>
          </div>
        </div>

        {/* <div className={styles.navOverlay}>
          <div className={styles.navMenu}>
            <NavBtn text="Home" path="/" />
            <NavBtn text="About" path="/about" />
            <NavBtn text="Shop" path="/shop" />
            <NavBtn text="Donate" path="/donations" />
            <NavBtn text="Contact" path="/contact" />
          </div>
        </div> */}
      </div>
    </Router>
  );
}

function NavBtn({ text, path }) {
  return (
    <Link to={path} className={"btn btn-orange " + styles.navButton}>
      {text}
    </Link>
  );
}
