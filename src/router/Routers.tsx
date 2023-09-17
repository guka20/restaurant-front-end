import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "src/Layouts";
import { About, Home, Menu, Services } from "../pages";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};