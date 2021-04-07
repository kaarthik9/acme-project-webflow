import React from 'react'
import ProductsCards from '../../Utilities/ProductsCards/ProductsCards'
import styles from './ShopList.module.css'

export default function ShopList() {
  return (
    <div className={styles.shopList}>
      <div className="productListWrapper">
        <div className="products-list">
          <ProductsCards
            productName="gift-card"
          />
          <ProductsCards
            productName="tin-coffee-tumbler"
          />
          <ProductsCards
            productName="blue-canvas-pack"
          />
          <ProductsCards
            productName="green-canvas-pack"
          />
        </div>
      </div>
    </div>
  )
}
