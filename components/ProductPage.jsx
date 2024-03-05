import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/ProductPage.css'
import { cartContext } from "../contexts/CartContext"

const ProductPage = () => {

  const location = useLocation()
  const product = location.state.product
  const { addToCart } = useContext(cartContext)
  const images = product.images.reverse()
  const imageCount = images.length
  const [currentImg, setCurrentImg] = useState(images[0])
  
  console.log(images)

  const prevImgFunc = (currentImg) => {

    const index = images.indexOf(currentImg)
    const nextImg = images[(index+1)%imageCount]
    setCurrentImg(nextImg)

  }

  const nextImgFunc = (currentImg) => {

    const index = images.indexOf(currentImg)
    const prevImg = images[(index+(imageCount-1))%imageCount]
    setCurrentImg(prevImg)
  }

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
    <div className='product-page-container'>
      <div className='header-img-container'>
        <h1 className='product-title'>{product.title}</h1>
        <div className='img-container'>
          <img className='img' src={currentImg}></img>
        </div>
        <div className='img-button-container'>
          <button className='img-button' onClick={() => {prevImgFunc(currentImg)}}><div>{"<"}</div></button>
          <button className='img-button' onClick={() => {nextImgFunc(currentImg)}}><div>{">"}</div></button>
        </div>
      </div>
      <div className='information-container'>
        <p className='category'>{product.category.toUpperCase()}</p>
        <p className='brand'>{product.brand}</p>
        <p>{product.description}</p>
        <p>{ratingDisplay(product.rating)}</p>
        <p className='price'>${product.price}</p>
        <button className = 'cart-btn' onClick={() => {addToCart(product)}}>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductPage;
