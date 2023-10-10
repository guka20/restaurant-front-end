import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { UserEnum } from "src/types/user.types";
import {
  useCartPortalContext,
  useContactContext,
  useUserTypeContext,
} from "src/context";
import { ContactPortal } from "../PortalComponents/ContactPortal/ContactPortal";
import { CartPortal } from "../PortalComponents/CartPortal/CartPortal";
import "./Navbar.css";
import { useQuery } from "@tanstack/react-query";
import { getAllCarts } from "src/helper";

export const Navbar = () => {
  const { isContactOpen, setIsContactOpen } = useContactContext();
  const { isCartOpen, setIsCartOpen } = useCartPortalContext();
  const { userType, setUserType } = useUserTypeContext();
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const { data } = useQuery({
    queryKey: ["carts"],
    queryFn: getAllCarts,
  });

  const navigate = useNavigate();

  const handleLoginButton = () => {
    navigate("/login");
  };
  const handleLogOutButton = () => {
    navigate("/");
    setUserType(UserEnum.GUEST);
    localStorage.clear();
  };
  return (
    <nav className="nav-bar">
      <div className={isNavbarOpen ? "in-nav-bar open" : "in-nav-bar"}>
        <div
          className="navbar-responsive-icon"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <div className="long"></div>
          <div className="long"></div>
          <div className="short"></div>
        </div>
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
            <div
              className="contact-btn"
              onClick={() => setIsContactOpen(!isContactOpen)}
            >
              Contact Us
            </div>
          </li>
          <li
            className="shoping-cart-icon"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <FaShoppingCart className="shoping-cart" />
            <div className="product-quantity">{data?.length}</div>
          </li>
        </motion.ul>
        {userType === UserEnum.GUEST ? (
          <motion.button
            className="login-button"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            onClick={handleLoginButton}
          >
            <FiLogIn className="login-icon" /> <span>Login</span>
          </motion.button>
        ) : (
          <motion.button
            className="login-button"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            onClick={handleLogOutButton}
          >
            <FiLogOut className="login-icon" /> <span>Logout</span>
          </motion.button>
        )}
      </div>
      {isContactOpen && <ContactPortal />}
      {isCartOpen && <CartPortal />}
    </nav>
  );
};
