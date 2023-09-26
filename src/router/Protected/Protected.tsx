import { Navigate, Outlet } from "react-router-dom";
export const Protected = () => {
  const { isAuth } = { isAuth: false };
  return isAuth ? <Outlet /> : <Navigate to={"/"} replace />;
};
