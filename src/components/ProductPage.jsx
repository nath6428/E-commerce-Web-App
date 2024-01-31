import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/ProductPage.css'
import { cartContext } from "../contexts/CartContext"

const ProductPage = () => {
  const location = useLocation()
  const product = location.state.product
  const { addToCart } = useContext(cartContext)

  const ratingDisplay = (rating) => {
    
    rating = Math.floor(rating)
    var stars = []

    for(let i = 0 ; i < rating ; i++){

      stars.push(<FontAwesomeIcon className = "golden-stars" icon={faStar} />)
    }

    for(let i = 0 ; i < (5 - rating) ; i++){

      stars.push(<FontAwesomeIcon icon={faStar} />)
    }

    return stars

  }


  return (
    <div>
      <p>{product.title}</p>
      <p>{ratingDisplay(product.rating)}</p>
      <p>${product.price}</p>
      <img src={product.thumbnail}></img>
      <p>{product.description}</p>
      <button onClick={() => {addToCart(product)}}>Add To Cart</button>
    </div>
  );
}

export default ProductPage;
