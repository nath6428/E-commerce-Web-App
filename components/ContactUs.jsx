import React, { useEffect } from 'react'
import '../styles/ContactUs.css'


const ContactUs = ({ setShowSidebarCart }) => {

  useEffect(() => {
    setShowSidebarCart(false)
    return () => {
      setShowSidebarCart(true)
    }
  })

  return (
    <div className='contact-us-container'>
      <p>Company Name: Scamazon LLC</p>
      <p>Address: 123 Fake Street, Anytown, USA</p>
      <p>Phone Number (Customer Service): +1 (555) 123-4567</p>
      <p>Email (General Inquiry): <a>info@scamazon.fake</a></p>
    </div>
  )
}

export default ContactUs