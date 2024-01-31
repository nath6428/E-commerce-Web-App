import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import '../styles/Navbar.css'
import Logo from '../assets/scamazon.png'

const Navbar = () => {

    
    return  <div className="navbar">
        
        <Link to="/" ><img className="logo" src={Logo}></img></Link>
        <div className="central-links-container">
            <Link to="products" className="central-links">Products</Link>
            <Link to="contact-us" className="central-links">Contact Us</Link>
        </div>
        <Link to="cart" className="cart-icon fa-2x"><FontAwesomeIcon  icon={faShoppingCart} /></Link>
    </div>
    
}

export default Navbar