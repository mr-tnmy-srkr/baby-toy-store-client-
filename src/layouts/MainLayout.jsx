import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <h1>MainLayout</h1>
      <Outlet />
    </div>
  );
};
export default MainLayout;
