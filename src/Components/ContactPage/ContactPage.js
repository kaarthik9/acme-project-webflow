import React from 'react'
import ContactForm from './ContactForm/ContactForm'
import ContactHero from './ContactHero/ContactHero'

export default function ContactPage() {
  document.title = 'Contact'
  return (
    <div>
      <ContactHero />
      <ContactForm />
    </div>
  )
}
