import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { useContactContext } from "src/context";
import { ContactPortal } from "../PortalComponents/ContactPortal/ContactPortal";

export const Navbar = () => {
  const { isContactOpen, setIsContactOpen } = useContactContext();
  const element = document.createElement("div");
  return (
    <nav className="nav-bar">
      <div className="in-nav-bar">
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
        >
          <img
            src={require("src/assets/logo/chef.png")}
            className="nav-bar-logo"
          />
          <span>Bentilzone</span>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="links"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <div
              className="contact-btn"
              onClick={() => setIsContactOpen(!isContactOpen)}
            >
              Contact Us
            </div>
          </li>
          <li>
            <FaShoppingCart fontSize={23} />
            <div className="product-quantity">0</div>
          </li>
        </motion.ul>
        <motion.button
          className="login-button"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
        >
          <FiLogIn className="login-icon" /> Login
        </motion.button>
      </div>
      {isContactOpen && <ContactPortal />}
    </nav>
  );
};
