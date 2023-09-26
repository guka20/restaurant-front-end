import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "src/Layouts";
import {
  Home,
  Login,
  Menu,
  NewProduct,
  NewService,
  Services,
  Signup,
  UpdateProduct,
} from "../pages";
import { Protected } from "./Protected/Protected";
import { useUserTypeContext } from "src/context";
import { UserEnum } from "src/types/user.types";
import { PrivateLayout } from "src/Layouts/PrivateLayout/PrivateLayout";
export const Routers = () => {
  const { userType } = useUserTypeContext();
  return (
    <Routes>
      <Route
        element={
          userType === UserEnum.ADMIN ? <Navigate to="admin" /> : <MainLayout />
        }
      >
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
        <Route path="/admin" element={<PrivateLayout />}>
          <Route index element={<Home />} />
          <Route path="new-product" element={<NewProduct />} />
          <Route path="new-service" element={<NewService />} />
          <Route path="update" element={<UpdateProduct />} />
        </Route>
      </Route>
    </Routes>
  );
};
