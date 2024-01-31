import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Homepage from "./components/Homepage";
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import './styles/App.css';
import { cartContext } from './contexts/CartContext'

const App = () => {
  const [itemCart, setItemCart] = useState([]);
  const [showSidebarCart, setShowSidebarCart] = useState(true)
  
  const addToCart = (product) => {
    if (product in itemCart) {
      setItemCart(itemCart.filter(item => item !== product));
    } else {
      setItemCart([...itemCart, product]);
    }
  };

  return (
    <cartContext.Provider value={{ itemCart, setItemCart, addToCart }}>
      <Router>
        <Navbar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productname" element={<ProductPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/cart"
              element={<Cart sideBar={false} setShowSidebarCart = {setShowSidebarCart}/>}
              />
          </Routes>
          {showSidebarCart ? <Cart sideBar={true}/> : <></>}
        </div>
      </Router>
    </cartContext.Provider>
  );
};

export default App;
