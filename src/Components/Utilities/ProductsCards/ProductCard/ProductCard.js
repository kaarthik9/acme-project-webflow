import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function ProductCard({name, price, sale, productName}) {
  return (
    <Router>
    <div>
      <div className="shop-item-wrapper">
        <Link to={"/product/"+productName} className="shop-item-link-wrapper">
          <div className={"shop-image "+productName}>
            {sale && <div className="sale-pill">SALE</div>}
          </div>

          <div className="shop-details-wrapper">
            <div className="shop-details-left">
              <div className="shop-item-name">
                {name}
              </div>
              <div className="price-wrapper">
                <div className="shop-item-price">
                  $ {price} USD
                </div>
                {sale && <div className="compare">
                  $ {sale} USD
                </div>}
              </div>
            </div>
          </div>
        </Link>

        <div className="shop-button-wrapper">
          <Link className="btn btn-orange" to={"/product/"+productName}>
            Details
          </Link>
        </div>

      </div>
    </div>
    </Router>
  )
}
