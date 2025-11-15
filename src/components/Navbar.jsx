import React from "react";
import { Link } from "react-router";
import userIcon from "../assets/user.png";
const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-2 text-xl">Home</li>
      </Link>
      <Link to="/toys">
        <li className="m-2 text-xl">Toys</li>
      </Link>
      <Link to="/auth/login" className="btn mr-2 text-xl">Login</Link>
    </>
  );
  return (
    <div className="w-11/12 mx-auto my-3 navbar bg-base-200 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold">ToyNook</a>
      </div>
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <img src={userIcon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
