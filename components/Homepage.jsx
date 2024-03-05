import React, { useEffect, useState } from 'react'
import '../styles/Homepage.css'
import { Link } from 'react-router-dom'
import ad1 from '../assets/homepage-ads/airpods.jpg'
import ad2 from '../assets/homepage-ads/suitcase.jpg'
import ad3 from '../assets/homepage-ads/s24.jpg'
import ad4 from '../assets/homepage-ads/makeup.jpg'
import ad5 from '../assets/homepage-ads/iphone.jpg'
import ad6 from '../assets/homepage-ads/perfume.jpg'


const Homepage = ({ setShowSidebarCart }) => {
  
  const ads = [ad1, ad2, ad3, ad4, ad5, ad6]
  const [currentAd, setCurrentAd] = useState(ads[0])
  
  const nextAdFunc = (currentAd) => {

    const index = ads.indexOf(currentAd)
    const nextAd = ads[(index+1)%6]
    setCurrentAd(nextAd)

  }

  const prevAdFunc = (currentAd) => {

    const index = ads.indexOf(currentAd)
    const prevAd = ads[(index+5)%6]
    setCurrentAd(prevAd)
  }
                                   
  useEffect(() => {
    setShowSidebarCart(false)
    const adSwitchDelay = setTimeout(() => {nextAdFunc(currentAd)}, 5000)
    return () => {
      clearTimeout(adSwitchDelay)
      setShowSidebarCart(true)
    }
  }, [currentAd])

  return (
    <div className='homepage-container'>
      <div className='ad-container'>
        <button className='ad-button' onClick={() => {prevAdFunc(currentAd)}}><div>{"<"}</div></button>
        <img className='ad' src={currentAd}></img>
        <button className='ad-button' onClick={() => {nextAdFunc(currentAd)}}><div>{">"}</div></button>
      </div>
      <div className='redirect-container'>
        <h2 className='redirect-text'>View our selection of electronics, household items, fragrances, and much more:</h2>
        <Link to={'/products'}><button className='redirect-button'>Products</button></Link>
      </div>
    </div>
  )
}

export default Homepage