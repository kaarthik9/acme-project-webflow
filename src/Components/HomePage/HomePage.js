import React from 'react'
import SupportSection from './SupportSection/SupportSection'
import Hero from './Hero/Hero'
import ProductsSection from './ProductsSection/ProductsSection'
import SafeSection from './SafeSection/SafeSection'
import ShopLocalSection from './ShopLocalSection/ShopLocalSection'

export default function HomePage() {
  document.title = 'Home'
  return (
    <>
      <Hero />
      <SupportSection />
      <SafeSection />
      <ProductsSection />
      <ShopLocalSection />
    </>
  )
}
