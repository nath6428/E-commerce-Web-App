import { Link, useNavigate } from 'react-router-dom'
import '../styles/ProductBox.css'
import ProductPage from './ProductPage'
import { cartContext } from "../contexts/CartContext"
import { useContext } from 'react'

const ProductBox = ({product, identifier}) => {
    
    const navigate = useNavigate()
    const title = product.title
    const price = product.price
    const image = product.thumbnail
    const { addToCart } = useContext(cartContext)

    return (
        <div className="product-box">
            <div className="product-img-container" onClick={() => {navigate(`${title}`, {state: {product}})}}>
                <img className='product-img' src={image}></img>
            </div>
            <h3 className='product-box-title' onClick={() => {navigate(`${title}`, {state: {product}})}}>{title}</h3>
            <p>${price}</p>
            <button onClick={() => {addToCart(product)}}>Add To Cart</button>

            
        </div>
    )
}

export default ProductBox