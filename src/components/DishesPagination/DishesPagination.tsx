import React, { useEffect } from "react";
import "./DishesPagination.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { ProductCart } from "src/components";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "src/helper";
import { ProductCardTypes } from "src/types/Types";
export const DishesPagination = () => {
  const [currentData, setCurrentData] = useState<string>("menu");
  const { data, isError } = useQuery({
    queryKey: ["products", currentData],
    queryFn: () => fetchProducts(currentData),
  });

  const handlePaginationClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    setCurrentData(id);
  };
  if (isError) {
    return <div>Something is wrong</div>;
  }
  return (
    <section className="dishes-section">
      <span className="dishes-header">Our Hot Dishes</span>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="pagination-buttons"
      >
        <div
          className={`pagination-btn ${currentData === "menu" && "active"}`}
          id="menu"
          onClick={(e) => handlePaginationClick(e)}
        >
          Menu
        </div>
        <div
          className={`pagination-btn ${currentData === "chicken" && "active"}`}
          id="chicken"
          onClick={(e) => handlePaginationClick(e)}
        >
          Chicken
        </div>
        <div
          className={`pagination-btn ${currentData === "fruits" && "active"}`}
          id="fruit"
          onClick={(e) => handlePaginationClick(e)}
        >
          Fruits
        </div>
        <div
          className={`pagination-btn ${currentData === "drinks" && "active"}`}
          id="drinks"
          onClick={(e) => handlePaginationClick(e)}
        >
          Soft Drinks
        </div>
        <div
          className={`pagination-btn ${currentData === "desserts" && "active"}`}
          id="desserts"
          onClick={(e) => handlePaginationClick(e)}
        >
          Desserts
        </div>
        <div
          className={`pagination-btn ${currentData === "icecream" && "active"}`}
          id="icecream"
          onClick={(e) => handlePaginationClick(e)}
        >
          Ice Creams
        </div>
        <div
          className={`pagination-btn ${currentData === "fish" && "active"}`}
          id="fish"
          onClick={(e) => handlePaginationClick(e)}
        >
          Fish
        </div>
        <div
          className={`pagination-btn ${currentData === "rice" && "active"}`}
          id="rice"
          onClick={(e) => handlePaginationClick(e)}
        >
          Rice
        </div>
        <div
          className={`pagination-btn ${currentData === "curry" && "active"}`}
          id="curry"
          onClick={(e) => handlePaginationClick(e)}
        >
          Curry
        </div>
      </motion.div>
      {data?.data.length === 0 ? (
        <div style={{ color: "black", textAlign: "center", padding: "50px 0" }}>
          There is no any product
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="products"
        >
          {data?.data.map((prod: ProductCardTypes) => (
            <ProductCart
              key={prod.product_id}
              name={prod.name}
              subtitle={prod.subtitle || ""}
              price={prod.price}
              product_id={prod.product_id}
              image={prod.image}
            />
          ))}
        </motion.div>
      )}
    </section>
  );
};
