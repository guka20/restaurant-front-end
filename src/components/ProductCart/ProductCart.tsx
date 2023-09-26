import React from "react";
import "./ProductCart.css";
import { BsCartPlus } from "react-icons/bs";
import img from "src/assets/products/cake.png";
import { ProductCardTypes } from "src/types/Types";
import { useUserTypeContext } from "src/context";
import { UserEnum } from "src/types/user.types";
import { useNavigate } from "react-router-dom";
export const ProductCart = ({ title, subtitle, price }: ProductCardTypes) => {
  const { userType } = useUserTypeContext();
  const navigate = useNavigate();
  const handleAddInCartButton = () => {
    if (userType === UserEnum.GUEST) {
      navigate("/login");
    }
  };
  return (
    <div className="product-cart">
      <div className="image-cart-place">
        <div className="image-place">
          <img src={img} alt="" />
        </div>
        <button className="add-to-cart" onClick={handleAddInCartButton}>
          <BsCartPlus />
        </button>
      </div>
      <div className="textures">
        <span>{title}</span>
        <span>{subtitle}</span>
        <span>
          <span className="dollar-icon">$ </span>
          {price}
        </span>
      </div>
    </div>
  );
};
