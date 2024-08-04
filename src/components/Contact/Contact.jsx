import React from 'react'
import NavHeader from '../Home/NavHeader/NavHeader'
import ContactIntro from "./ContactIntro/ContactIntro"
import Footer from '../Home/Footer/Footer'
import ContactForm from './ContactForm/ContactForm'
import ContactInfo from './ContactInfo/ContactInfo'
import ContactMap from './ContactMap/ContactMap'


const Contact = () => {
  return (
    <div>
      <NavHeader/>
      <ContactIntro/>
      <ContactForm/>
      <ContactInfo/>
      <ContactMap/>
      <Footer/>
    </div>
  )
}

export default Contact
