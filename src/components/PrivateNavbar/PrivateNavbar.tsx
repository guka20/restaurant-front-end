import React from "react";
import "./PrivateNavbar.css";
import { motion } from "framer-motion";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export const PrivateNavbar = () => {
  const navigate = useNavigate();
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
          <button
            className="add-button"
            onClick={() => navigate("new-service")}
          >
            New Service <IoMdAddCircle />
          </button>
        </motion.div>
      </div>
    </nav>
  );
};
