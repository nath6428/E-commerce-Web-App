import { Link } from 'react-router-dom'
import '../styles/Products.css'
import ProductPage from './ProductPage'

const ProductBox = ({product, key, addToCart}) => {
    
    const title = product.title
    const price = product.price
    const image = product.thumbnail
    
    return (
        <div className="product-box">
            <div className="product-img-container">
                <img className='product-img' src={image}></img>
            </div>
            <p>{title}</p>
            <p>${price}</p>
            <button onClick={() => {addToCart(product)}}>Add To Cart</button>

            
        </div>
    )
}

export default ProductBox