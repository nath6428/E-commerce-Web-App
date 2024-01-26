import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/ProductPage.css'


const ProductPage = () => {
  const location = useLocation()
  const product = location.state.product
  

  const ratingDisplay = (rating) => {
    
    console.log(rating)
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
    </div>
  );
}

export default ProductPage;
