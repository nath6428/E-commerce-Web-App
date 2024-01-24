import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import ProductBox from "./ProductBox"


const Products = ({addToCart}) => {
    
    const [prodsList, setProdsList] = useState(["x"])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        fetch('https://dummyjson.com/products')
        .then(resp => resp.json())
        .then((data) => {
            setProdsList(data.products)
            setLoading(false)    
        })
        .catch(err => console.error(err))
        
        
    }, [])
       

    return (
        <>
            <div className="products-container">
                {loading ? <>Loading</> : prodsList.map((item, index) => <ProductBox product = {item} key = {index} addToCart={addToCart}/>)}        
            </div>

        </>

    )
}

export default Products