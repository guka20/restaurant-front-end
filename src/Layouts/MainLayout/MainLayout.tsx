import { Navbar } from "../../components";
import { Footer } from "../../components";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";
export const MainLayout = () => {
  return (
    <main className="main-layout">
      <Navbar />
      <div className="outlet-place">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};
