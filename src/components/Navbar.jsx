import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import '../styles/Navbar.css'

const Navbar = () => {

    
    return  <div className="navbar">
        
        <Link to="/">StoreName</Link>
        <div className="central-links-container">
            <Link to="products">Products</Link>
            <Link to="contact-us">Contact Us</Link>
        </div>
        <Link to="cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
    </div>
    
}

export default Navbar