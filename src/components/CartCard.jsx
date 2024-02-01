import React, { useContext } from 'react'
import { cartContext } from "../contexts/CartContext";
import '../styles/CartCard.css'

const CartCard = ({ product, count, sideBar }) => {
    
  const { itemCart, setItemCart } = useContext(cartContext)
  const title = product.title
  const price = product.price
  const id = product.id
  const thumbnail = product.thumbnail
  const description = product.description

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
  <div className={sideBar ? 'cart-card-sidebar' : 'cart-card'}>

      <div className={sideBar ? 'cc-thumbnail-sidebar-container' : 'cc-thumbnail-container'}>
        <img className={sideBar ? 'cart-card-sidebar-thumbnail' : 'cart-card-thumbnail'} src={thumbnail}></img>
      </div>
      <div className={sideBar ? 'info-sb-container' : 'info-container'}>
        <div className='info-title-close'>
          <p>{title}</p>
          <button className='quantity-button' onClick={() => {deleteCartItem()}}>x</button>
        </div>
        <p>${price}</p>
        <p className={sideBar ? 'hidden' : 'cart-card-desc'}>{description}</p>
        <div className='quantity'>
          <button className='quantity-button' onClick={() => {changeQuantity("-")}}>-</button>
          <div className='quantity-number'>{count}</div>
          <button className='quantity-button' onClick={() => {changeQuantity("+")}}>+</button>
        </div>
      </div>
      

  </div>
)
}

export default CartCard