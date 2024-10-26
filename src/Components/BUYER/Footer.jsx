import "./Footer.css";
import Logo from "../../assets/Logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img className="logo-image" src={Logo} alt="Logo" />
                </div>
                <div className="footer-content">
                    <h1 className="footer-title">My Footer</h1>
                    <p className="footer-description">
                        Welcome to our site! We are dedicated to providing you with the best service and content.
                    </p>
                    <ul className="footer-links">
                        <NavLink to="/about-us">About Us</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                    </ul>
                </div>
                <div className="footer-social">
                    <h2>Follow Us On</h2>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="social-icon" />
                            <h3 className="links">FaceBook</h3>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="social-icon" />
                            <h3 className="links">Twitter</h3>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                            <h3 className="links">Instagram</h3>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                            <h3 className="links">Linkedin</h3>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
