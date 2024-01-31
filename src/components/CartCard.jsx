import React, { useContext } from 'react'
import { cartContext } from "../contexts/CartContext";

const CartCard = ({ product, count, sideBar }) => {
    
  const { itemCart, setItemCart } = useContext(cartContext)
  const title = product.title
  const price = product.price
  const id = product.id

  const changeQuantity = (type) => {

    if(type === "+"){
      
      setItemCart([...itemCart, product])

    } else if(type === "-"){

      var dupe = itemCart.slice()
      dupe.splice(itemCart.indexOf(product), 1)
      setItemCart(dupe)

    }

  }
  
  const deleteCartItem = () => {
      
    setItemCart(itemCart.filter(item => item != product))

  }

  return (
  <div>
      <button className='quantity-button' onClick={() => {deleteCartItem()}}>x</button>
      <p>{title}</p>
      <div className='quantity'>
        <button className='quantity-button' onClick={() => {changeQuantity("-")}}>-</button>
        <div className='quantity-number'>{count}</div>
        <button className='quantity-button' onClick={() => {changeQuantity("+")}}>+</button>
      </div>
      

  </div>
)
}

export default CartCard