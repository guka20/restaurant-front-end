import ReactDOM from "react-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineMessage } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import emptyCart from "src/assets/images/emptyCart.svg";
import { useContactContext } from "src/context";
import { InputElement } from "src/components";
import "./ContactPortal.css";
import { ContactTypes } from "src/types/Types";
import { MainButton } from "src/components/Buttons/MainButton/MainButton";

export const ContactPortal = () => {
  const { setIsContactOpen } = useContactContext();
  const [contactValues, setContactValues] = useState<ContactTypes>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleContactValueChange = (e: any) => {
    const { value, name } = e.target;

    setContactValues({
      ...contactValues,
      [name]: value,
    });
  };

  const handleButtonClick = () => {
    console.log(contactValues);
  };
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
        <img src={emptyCart} className="empty-cart-image" alt="" />
        <div className="forms">
          <InputElement
            type="text"
            name="name"
            placeholder="Your Name"
            value={contactValues.name}
            handleContactValueChange={handleContactValueChange}
          />
          <InputElement
            type="email"
            name="email"
            placeholder="Email ID"
            value={contactValues.email}
            handleContactValueChange={handleContactValueChange}
          />
          <InputElement
            type="text"
            name="subject"
            placeholder="Subject"
            value={contactValues.subject}
            handleContactValueChange={handleContactValueChange}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            onChange={handleContactValueChange}
            className="message-area"
          ></textarea>
          <MainButton handleButtonClick={handleButtonClick}>
            Send Message
          </MainButton>

          <div className="contacts">
            <div>guramidavitadze2002@gmail.com</div>
            <br />
            <div>+995 598 27 35 00</div>
          </div>
        </div>
      </div>
    </motion.div>,
    document.body
  );
};
