import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import '../styles/Navbar.css'

const Navbar = () => {

    
    return  <div className="navbar">
        
        <Link to="/" ><img className="logo" src="src\assets\scamazon.png"></img></Link>
        <div className="central-links-container">
            <Link to="products" className="central-links">Products</Link>
            <Link to="contact-us" className="central-links">Contact Us</Link>
        </div>
        <Link to="cart" className="cart-icon fa-2x"><FontAwesomeIcon  icon={faShoppingCart} /></Link>
    </div>
    
}

export default Navbar