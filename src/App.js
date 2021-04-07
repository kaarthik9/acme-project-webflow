import styles from "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Page404 from "./Components/Page404/Page404";
import AboutPage from "./Components/AboutPage/AboutPage";
import ShopPage from "./Components/ShopPage/ShopPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import DonationPage from "./Components/DonationPage/DonationPage";
import ProductPage from "./Components/ProductPage/ProductPage";
import HomePage from "./Components/HomePage/HomePage";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showTheCart = () => {
    console.log("ski");
    setShowCart((prevState) => !prevState);
  };

  return (
    <Router>
      <div className={styles.App}>
        <Header showCart={showTheCart} showTheCart={showTheCart} />
       
        <Switch>
          <Route exact path="/acme-project-webflow" component={HomePage} />
          <Route path="/acme-project-webflow/about" component={AboutPage} />
          <Route path="/acme-project-webflow/shop" component={ShopPage} />
          <Route path="/acme-project-webflow/donations" component={DonationPage} />
          <Route path="/acme-project-webflow/contact" component={ContactPage} />
          <Route path="*" component={Page404} />
        </Switch>

        
        <Footer />
      </div>
      </Router>
    
  );
}

export default App;
