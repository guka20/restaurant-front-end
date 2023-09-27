import "./PrivateNavbar.css";
import { motion } from "framer-motion";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { UserEnum } from "src/types/user.types";
import { FiLogOut } from "react-icons/fi";
import { useUserTypeContext } from "src/context";
export const PrivateNavbar = () => {
  const navigate = useNavigate();
  const { setUserType } = useUserTypeContext();
  const handleLogOutButton = () => {
    navigate("/");
    setUserType(UserEnum.GUEST);
    localStorage.clear();
  };
  return (
    <nav className="private-navbar">
      <div className="in-nav-bar">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="logo"
          onClick={() => navigate("/admin")}
        >
          <img
            src={require("src/assets/logo/chef.png")}
            className="nav-bar-logo"
          />
          <span>Bentilzone</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="buttons"
        >
          <button
            className="add-button"
            onClick={() => navigate("new-product")}
          >
            New Product <IoMdAddCircle />
          </button>

          <motion.button
            className="login-button"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            onClick={handleLogOutButton}
          >
            <FiLogOut className="login-icon" /> <span>Logout</span>
          </motion.button>
        </motion.div>
      </div>
    </nav>
  );
};
