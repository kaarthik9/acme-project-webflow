import React from 'react'
import ProductCard from './ProductCard/ProductCard'


export default function ProductsCards({productName}) {
  let name, price, sale;
  
  if (productName === 'white-tent') {
    name = 'White Tent'
    price = '200.00'
  } else if (productName === 'tin-coffee-tumbler') {
    name = 'Tin Coffee Tumbler'
    price = '35.00'
  } else if (productName === 'blue-canvas-pack') {
    name = 'Blue Canvas Pack'
    price = '95.00'
    sale = '145.00'
  } else if (productName === 'green-canvas-pack') {
    name = 'Green Canvas Pack'
    price = '125.00'
  } else if (productName === 'gift-card') {
    name = 'Gift Card'
    price = '25.00'
  }

  return (
    <ProductCard
      productName={productName}
      name={name}
      price={price}
      sale={sale}
    />
  )
}
