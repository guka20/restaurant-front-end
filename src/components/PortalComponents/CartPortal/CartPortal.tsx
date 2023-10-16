import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { useCartPortalContext, useUserTypeContext } from "src/context";
import { BsArrowLeft } from "react-icons/bs";
import emptycart from "src/assets/images/emptyCart.svg";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllCarts } from "src/helper";
import { CartItem } from "./components/CartItem/CartItem";
import { Loading } from "src/components/Loading/Loading";
import "./CartPortal.css";
import { CartType } from "./types/cart.types";
import { UserEnum } from "src/types/user.types";

export const CartPortal = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["carts"],
    queryFn: getAllCarts,
  });
  const navigate = useNavigate();
  const { userType } = useUserTypeContext();
  const { setIsCartOpen } = useCartPortalContext();
  if (isError) {
    return <h1>Something went wrong</h1>;
  }

  if (isLoading) return <Loading />;
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
            {userType === UserEnum.GUEST && (
              <>
                <FiLogIn className="login-icon" />
                Login
              </>
            )}
          </button>
        </div>
      </div>
      <div className="products">
        {data.length === 0 ? (
          <img src={emptycart} alt="empty cart" className="empty-cart" />
        ) : (
          <div className="cart-items-place">
            <div className="products-list">
              {data.map((cart: CartType) => (
                <CartItem cart={cart} key={cart.cart_item_id} />
              ))}
            </div>
            <div className="total-price">
              <p>
                Total Price - <span className="dollar-icon">$</span>30
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>,
    document.body
  );
};
