import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Cart from "./components/Cart"
import Homepage from "./components/Homepage"
import './styles/App.css'
import { PropTypes } from "prop-types"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  
  const [itemCart, setItemCart] = useState([])

  const addToCart = (product) => {
    
    if (product in itemCart){
      
      setItemCart(itemCart.filter(item => item != product))
    
    } else {

      setItemCart([...itemCart, product])

    }

  }
    

  

  return (
    <Router>
      <Navbar />
        <Routes>

        <Route path="/" element = {<Homepage />} />
        <Route path="/products" element = {<Products addToCart={addToCart}/>} />
        <Route path="/contact-us" element = {<App />} />
        <Route path="/cart" element = {<Cart cart={itemCart}/>} />
        
    

      </Routes>
    </Router>
  )
  }


export default App

App.proptypes = {

  itemCart: PropTypes.array
}