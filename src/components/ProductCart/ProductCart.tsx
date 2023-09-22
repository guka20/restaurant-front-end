import React from "react";
import "./ProductCart.css";
import { BsCartPlus } from "react-icons/bs";
import img from "src/assets/products/cake.png";
import { ProductCardTypes } from "src/types/Types";
export const ProductCart = ({ title, subtitle, price }: ProductCardTypes) => {
  return (
    <div className="product-cart">
      <div className="image-cart-place">
        <div className="image-place">
          <img src={img} alt="" />
        </div>
        <button className="add-to-cart">
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
