import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import "./CartPortal.css";
import { useCartPortalContext } from "src/context";
import { BsArrowLeft } from "react-icons/bs";
import emptycart from "src/assets/images/emptyCart.svg";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const products = [];
export const CartPortal = () => {
  const navigate = useNavigate();
  const { setIsCartOpen } = useCartPortalContext();
  return ReactDOM.createPortal(
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "350px" }}
      className="cart-portal"
    >
      <div className="header">
        <div className="secondary-header">
          <button onClick={() => setIsCartOpen(false)}>
            <BsArrowLeft
              fontSize={20}
              style={{ backgroundColor: "transparent" }}
            />
          </button>
          <div className="cart-icon">
            <span>
              Cart <FaShoppingCart className="shopping-cart" />
            </span>
          </div>
          <button
            className="login-button"
            onClick={() => {
              setIsCartOpen(false);
              navigate("/login");
            }}
          >
            <FiLogIn className="login-icon" />
            Login
          </button>
        </div>
      </div>
      <div className="products">
        {products.length === 0 ? (
          <img src={emptycart} className="empty-cart" />
        ) : (
          <div>Products</div>
        )}
      </div>
    </motion.div>,
    document.body
  );
};
