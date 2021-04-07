import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import HeroTemplate from '../../Utilities/HeroTemplate/HeroTemplate';
import styles from './Hero.module.css'

export default function Hero() {

  return (
    <HeroTemplate
      styles={styles}
      heading1 = 'Serving you'
      heading2 = 'since 1989'
      para = 'Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.'
      btnText = 'Shop merch'
      btnLink = '/shop'
    />
  )
}
