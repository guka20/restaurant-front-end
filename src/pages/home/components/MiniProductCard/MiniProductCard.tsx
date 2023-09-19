import React from "react";
import "./MiniProductCard.css";
export const MiniProductCard = () => {
  return (
    <div className="mini-card">
      <img
        className="product-image"
        src={require("src/assets/products/cake.png")}
        alt=""
      />
      <h2 className="title">Strawberries</h2>
      <p className="sub-title">Fresh Strawberries</p>
      <p className="price">
        <span>$</span> 25
      </p>
    </div>
  );
};
