import styles from "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Page404 from "./Components/Page404/Page404";
import AboutPage from "./Components/AboutPage/AboutPage";
import ShopPage from "./Components/ShopPage/ShopPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import DonationPage from "./Components/DonationPage/DonationPage";
import ProductPage from "./Components/ProductPage/ProductPage";
import HomePage from "./Components/HomePage/HomePage";
import { createBrowserHistory as history } from "history";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Route from "react-router-dom/Route"
import CovidPage from "./Components/CovidPage/CovidPage";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  // Hides the cart
  const hideCart = () => {
    setShowCart((prevState) => !prevState);
  };

  // ShowOverlay
  const showOverlayMenu = () => {
    setShowOverlay((prevState) => !prevState);
  };

  const addCartItems = (nickname, name, quantity, productName, price) => {
    let oldCartItems = { ...cartItems };

    if (oldCartItems[nickname]) {
      oldCartItems[nickname].quantity += parseInt(quantity);
    } else {
      oldCartItems[nickname] = {
        quantity: parseInt(quantity),
        productName: productName,
        price: parseInt(price),
        name: name,
        nickname: nickname,
      };
    }

    setCartItems(oldCartItems);
  };

  useEffect(() => {
    let subtotal = 0;
    Object.keys(cartItems).forEach(
      (key) =>
        (subtotal = subtotal + cartItems[key].price * cartItems[key].quantity)
    );
    setCartSubtotal(subtotal);
  }, [cartItems]);

  return (
    <Router history={history}>
      <div className={styles.App}>
        <Header
          setCartItems={setCartItems}
          showCart={showCart}
          cartItems={cartItems}
          cartSubtotal={cartSubtotal}
          hideCart={hideCart}
          showOverlayMenu={showOverlayMenu}
          showOverlay={showOverlay}
        />

        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/about" component={AboutPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/donations" component={DonationPage} />
          <Route path="/alert/how-were-responding-to-covid-19" component={CovidPage} />
          <Route path="/contact" component={ContactPage} />
          <Route
            path="/product/:name"
            component={(props) => (
              <ProductPage {...props} addCartItems={addCartItems} />
            )}
          />
          <Route path="*" component={Page404} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
