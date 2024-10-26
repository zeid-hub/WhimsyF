import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
// import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'; 
import "./Navbar.css"
import Logo from "../../assets/Logo.png"

function Navbar (){
    return(
        <div className="navbar-div">
            <div>
                <img className="image" src={Logo} alt="logo"/>
            </div>
            <div className="navlink-div">
                <NavLink className={"home"} to="/home">Home</NavLink>
                <NavLink className={"shop"} to="/shop">Shop</NavLink>
                <NavLink className={"about-us"} to="/about-us">About Us</NavLink>
                <NavLink className={"contact"} to="/contact">Contact</NavLink>
                <NavLink to="shopping-cart"><FontAwesomeIcon icon={faShoppingCart} className="cart-icon"/></NavLink>
                {/* <NavLink to="user-account"><FontAwesomeIcon icon={faUser} className="cart-icon"/></NavLink> */}
            </div>
        </div>
    )
}


export default Navbar;