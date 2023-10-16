import React from "react";
import "./Services.css";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsBook, BsFlag } from "react-icons/bs";
import { PiNotebookDuotone, PiMapPinLineBold } from "react-icons/pi";
import { FiMusic } from "react-icons/fi";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="services-page"
    >
      <h1>ABOUT OUR SERVICES</h1>
      <div className="services-container">
        <div className="service">
          <div className="icon">
            <AiOutlineGlobal />
          </div>
          <div>
            <h3>FREE WIFI</h3>
            <p>We have a free connection on the board. That's awesome</p>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <BsFlag />
          </div>
          <div>
            <h3>EVENTS</h3>
            <p>
              If you visit any shop of our network, you will stumble upon
              amazing performance
            </p>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <BsBook />
          </div>
          <div>
            <h3>BOOKS AND NESWPAPER</h3>
            <p>Hey, book geeks! Go get some coffee!</p>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <PiNotebookDuotone />
          </div>
          <div>
            <h3>RICH MENU</h3>
            <p>You can stay and drink coffee during the whole day</p>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <PiMapPinLineBold />
          </div>
          <div>
            <h3>NEW LOCATIONS</h3>
            <p>We open a new coffee shop every 5 months.</p>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <FiMusic />
          </div>
          <div>
            <h3>BEST MUSIC</h3>
            <p>
              Listen to the music of different genre and performance with
              pleasure.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Services;
