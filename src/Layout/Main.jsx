import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar";

export default function Main() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
