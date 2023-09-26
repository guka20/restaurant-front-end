import { Routes, Route } from "react-router-dom";
import { MainLayout } from "src/Layouts";
import { Home, Login, Menu, Services, Signup } from "../pages";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      
    </Routes>
  );
};
