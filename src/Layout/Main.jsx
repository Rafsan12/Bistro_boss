import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar";

export default function Main() {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <>
      {noHeaderFooter || <NavBar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </>
  );
}
