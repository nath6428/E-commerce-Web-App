import React, { useEffect, useState,useContext } from "react";
import CartCard from "./CartCard";
import '../styles/Cart.css';
import { cartContext } from "../contexts/CartContext";

const Cart = ({ sideBar, setShowSidebarCart = () => {} }) => {
  const [numberedCart, setNumberedCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0)
  const { itemCart } = useContext(cartContext)
  

  const cartify = (carts) => {
    var newCart = [];
    var tempList = [];

    carts.forEach((item) => {
      if (tempList.some((x) => item.id === x)) {
        newCart.map((subArray) => {
          return subArray[0].id === item.id ? (subArray[1] += 1) : subArray;
        });
      } else {
        tempList.push(item.id);
        newCart.push([item, 1]);
      }
    });

    return newCart;
  }
  
  const calcCartTotal = () => {
    var total = 0
    
    numberedCart.forEach((item) => {
      const price = item[0].price
      const count = item[1]
      total += price*count
    })
    return total

  }


  useEffect(() => {
    setNumberedCart(cartify(itemCart));
    setShowSidebarCart(false)
    return () => {setShowSidebarCart(true)}
    }, [itemCart]);
  
  useEffect(() => {
    setCartTotal(calcCartTotal())
  }, [numberedCart])



  return (
    <div className={sideBar ? "cart-sidebar" : "cart"}>
      {numberedCart.map((item, index) => (
        <CartCard product={item[0]} count={item[1]} key={index} sideBar = {sideBar} />
      ))}
      <div className={sideBar ? "total-sidebar" : "total"}>
        <p>Total: ${cartTotal}</p>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
