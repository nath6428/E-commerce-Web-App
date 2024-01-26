import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Cart = ({ cart }) => {
    
  const [numberedCart, setNumberedCart] = useState([])
  
  const cartify = (carts) => {
    
    
    var numberedCart = []
    var tempList = []
    
      carts.forEach((item) => {
        
        if(tempList.some((x) => item.id === x)){
          
          numberedCart.map((subArray) => {subArray[0] == item ? subArray[1] += 1: subArray })
          
        } else {
          
          tempList.push(item.id)
          numberedCart.push([item, 1])
            
        }


      })

               
      return numberedCart
    }
    
  
  
  useEffect(() => {
    setNumberedCart(cartify(cart))
  }, [cart])
  
  return (
    <div>
    
      {numberedCart.map((item) => {
        
        var returnArray = []
        for (let i = 0 ; i < 5 ; i++){
          returnArray.push(<p key={uuidv4()}>{item[0].title}</p>)
        console.log(returnArray)
        return returnArray
        }
      })}

    </div>
  )
}

export default Cart