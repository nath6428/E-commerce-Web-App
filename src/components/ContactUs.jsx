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
    <div className='contact-us-container'>ContactUs</div>
  )
}

export default ContactUs