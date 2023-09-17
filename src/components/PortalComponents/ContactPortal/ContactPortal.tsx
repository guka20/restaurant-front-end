import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { MdOutlineMessage } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import "./ContactPortal.css";

import { useContactContext } from "src/context";
export const ContactPortal = () => {
  const { setIsContactOpen } = useContactContext();
  return ReactDOM.createPortal(
    <motion.div
      className="contact-portal"
      initial={{ width: 0 }}
      animate={{ width: "350px" }}
    >
      <div className="inside-container">
        <div className="header">
          <div className="secondary-header">
            <div className="left-side">
              <MdOutlineMessage fontSize={22} color="rgb(234, 88, 12)" />
              <span> CONTACT US</span>
            </div>
            <button onClick={() => setIsContactOpen(false)}>
              <BsArrowLeft
                fontSize={20}
                style={{ backgroundColor: "transparent" }}
              />
            </button>
          </div>
        </div>
        <img src={require("src/assets/images/emptyCart.svg")} alt="" />
      </div>
    </motion.div>,
    document.body
  );
};
