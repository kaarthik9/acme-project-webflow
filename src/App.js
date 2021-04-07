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
    
      <div className={styles.App}>
        <Header showCart={showTheCart} showTheCart={showTheCart} />
        {/* <HomePage /> */}
        {/* <AboutPage /> */}
        {/* <ShopPage /> */}
        {/* <ContactPage /> */}
        {/* <DonationPage /> */}
        <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/donations" component={DonationPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        </Router>

        {/* <ProductPage name="Blue Canvas Pack"
         productName="blue-canvas-pack"
         amount="95"
         sale="145"
       /> */}
        <Page404 />
        <Footer />
      </div>
        
    
  );
}

export default App;
