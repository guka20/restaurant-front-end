import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "src/Layouts";
import {
  Home,
  Login,
  Menu,
  NewProduct,
  Services,
  Signup,
  UpdateProduct,
} from "../pages";
import { Protected } from "./Protected/Protected";
import { useUserTypeContext } from "src/context";
import { UserEnum } from "src/types/user.types";
export const Routers = () => {
  const { userType } = useUserTypeContext();
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/login"
          element={
            userType === UserEnum.GUEST ? (
              <Login />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/signup"
          element={
            userType === UserEnum.GUEST ? (
              <Signup />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Route>
      <Route path="/" element={<Protected />}>
        <Route path="new" element={<NewProduct />} />
        <Route path="update" element={<UpdateProduct />} />
      </Route>
    </Routes>
  );
};
