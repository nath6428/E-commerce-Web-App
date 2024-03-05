import { useState, useEffect } from "react"
import ProductBox from "./ProductBox"
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import '../styles/Products.css'

const Products = ({addToCart}) => {
    
    const navigate = useNavigate()
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
                {loading ? <div className="loading-page"><div className="loader"></div></div> : prodsList.map((item, index) => <ProductBox product = {item} key = {index} addToCart={addToCart}/>)}        
            </div>

        </>

    )
}

export default Products