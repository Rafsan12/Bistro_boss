import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Group 1.png";
import ShopIcon from "../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import { AuthContext } from "../../context";

export default function NavBar() {
  const { user, logOut } = useContext(AuthContext);
  const NavLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-black text-white fixed z-10 bg-opacity-30 max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {NavLinks}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          <img src={Logo} alt="Site Logo" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{NavLinks}</ul>
      </div>
      <div className="navbar-end flex items-center">
        <img className="w-12" src={ShopIcon} alt="Shopping Cart" />
        {user ? (
          <>
            <span className="ml-2">{user.fullName}</span>
            <button className="btn btn-sm ml-4" onClick={logOut}>
              Log Out
            </button>
          </>
        ) : (
          <ul className="menu menu-horizontal">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        )}
        <div className="avatar w-10 ml-2">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
            <img
              src={
                user?.photoURL ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              alt="User Avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
