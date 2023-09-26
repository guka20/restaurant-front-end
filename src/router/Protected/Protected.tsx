import { Navigate, Outlet } from "react-router-dom";
import { useUserTypeContext } from "src/context";
import { UserEnum } from "src/types/user.types";
export const Protected = () => {
  const { userType } = useUserTypeContext();
  return userType === UserEnum.ADMIN ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} replace />
  );
};
