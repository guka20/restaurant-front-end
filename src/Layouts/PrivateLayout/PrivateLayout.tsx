import { Outlet } from "react-router-dom";
import { PrivateNavbar } from "src/components";
import "./PrivateLayout.css";

export const PrivateLayout = () => {
  return (
    <div className="private-layout">
      <PrivateNavbar />
      <div className="outlet-place">
        <Outlet />
      </div>
    </div>
  );
};
