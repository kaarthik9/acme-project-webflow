import React from "react";
import ProductsCards from "../../Utilities/ProductsCards/ProductsCards";
import styles from "./ShopList.module.css";

export default function ShopList({ category }) {
  let categoryDiv;
  if (category === "gift-cards") {
    document.title = 'Gift Cards';
    categoryDiv = <ProductsCards productName="gift-card" />;
  } else if (category === "tents") {
    document.title = 'Tents';
    categoryDiv = <ProductsCards productName="white-tent" />;
  } else if (category === "accessories") {
    document.title = 'Accessories';
    categoryDiv = <ProductsCards productName="tin-coffee-tumbler" />;
  } else if (category === "packs") {
    document.title = 'Packs';
    categoryDiv = <>
      <ProductsCards productName="blue-canvas-pack" />
      <ProductsCards productName="green-canvas-pack" />
    </>;
  }

  return (
    <div className={styles.shopList}>
      <div className="productListWrapper">
        <div className="products-list">
          {!category ? (
            <>
              <ProductsCards productName="gift-card" />
              <ProductsCards productName="tin-coffee-tumbler" />
              <ProductsCards productName="blue-canvas-pack" />
              <ProductsCards productName="green-canvas-pack" />
            </>
          ) : categoryDiv}
        </div>
      </div>
    </div>
  );
}
