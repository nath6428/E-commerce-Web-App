import React, { useEffect, useState } from 'react'
import '../styles/Homepage.css'
import { Link } from 'react-router-dom'
import ad1 from '../assets/homepage-ads/airpods.jpg'
import ad2 from '../assets/homepage-ads/suitcase.jpg'
import ad3 from '../assets/homepage-ads/s24.jpg'
import ad4 from '../assets/homepage-ads/makeup.jpg'
import ad5 from '../assets/homepage-ads/iphone.jpg'
import ad6 from '../assets/homepage-ads/perfume.jpg'


const Homepage = () => {
  
  const ads = [ad1, ad2, ad3, ad4, ad5, ad6]
  const [currentAd, setCurrentAd] = useState(ads[0])
  
  const nextAdFunc = (currentAd) => {

    const index = ads.indexOf(currentAd)
    return ads[(index+1)%6]

  }

  useEffect(() => {
    setTimeout(() => {setCurrentAd(nextAdFunc(currentAd))}, 5000)
  }, [currentAd])

  return (
    <div className='homepage-container'>
      <div className='ad-container'>
        <img className='ad' src={currentAd}></img>
      </div>
      <p>View our selection of electronics, household items, fragrances, and much more:</p>
      <Link to={'/products'}><button>Products</button></Link>
    </div>
  )
}

export default Homepage