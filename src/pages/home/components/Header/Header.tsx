import React from "react";
import "./Header.css";
import { MainButton } from "src/components/Buttons/MainButton/MainButton";
import { MiniProductCard } from "../MiniProductCard/MiniProductCard";
export const Header = () => {
  const handleOrderButton = () => {
    console.log("ordered");
  };
  return (
    <header className="header">
      <div className="texture">
        <div className="delivery-icon">
          <span>Bike Delivery</span>
          <div className="image-place">
            <img src={require("src/assets/images/delivery.png")} alt="" />
          </div>
        </div>
        <div className="delivery-ad">
          The Fastest Food Delivery in <span>Accra</span>
        </div>
        <div className="sub-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam
          delectus sed, vel quaerat, libero nesciunt debitis, architecto
          repudiandae accusamus aut exercitationem nisi non doloribus!
          Temporibus officia architecto reiciendis blanditiis.
        </div>
        <div className="button-place">
          <MainButton handleButtonClick={handleOrderButton}>
            Order Now
          </MainButton>
        </div>
      </div>
      <div className="offers">
        <div className="background-image"></div>
        <div className="cards">
          <MiniProductCard />
          <MiniProductCard />
          <MiniProductCard />
          <MiniProductCard />
        </div>
      </div>
    </header>
  );
};
