import { Link, useNavigate } from 'react-router-dom'
import '../styles/Products.css'
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
            <div className="product-img-container">
                <img className='product-img' src={image}></img>
            </div>
            <p onClick={() => {navigate(`${title}`, {state: {product}})}}>{title}</p>
            <p>${price}</p>
            <button onClick={() => {addToCart(product)}}>Add To Cart</button>

            
        </div>
    )
}

export default ProductBox