import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import ShopPage from '../ShopPage';

export default function ShopByCategory(props) {

  return (
    <div>
      <ShopPage category={props.match.params.category} />
    </div>
  )
}
