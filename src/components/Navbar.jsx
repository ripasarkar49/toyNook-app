import React, { use, useState } from "react";
import { Link } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import logo from "../assets/paw_logo.png";
const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "LogOut Successful!",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <Link to="/">
        <li className="m-2 text-xl">Home</li>
      </Link>

      <Link to="/pets">
        <li className="m-2 text-xl">Pets & Supplies</li>
      </Link>

      {user && (
        <>
          <Link to="/add-listing">
            <li className="m-2 text-xl">Add Listing</li>
          </Link>

          <Link to="/my-listings">
            <li className="m-2 text-xl">My Listings</li>
          </Link>

          <Link to="/my-orders">
            <li className="m-2 text-xl">My Orders</li>
          </Link>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="w-11/12 mx-auto my-3 navbar bg-base-200 shadow-sm">
        {/* LEFT: Logo */}
        <div className="navbar-start">
          <button className="lg:hidden mr-3" onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="flex gap-2">
            <img src={logo} alt="" className="w-8 h-8" />
            <a className=" text-3xl font-extrabold ">
              <span className="bg-linear-to-r from-pink-500 to-blue-900 text-transparent bg-clip-text">
                PawMart
              </span>
            </a>
          </div>
        </div>

        {/* MIDDLE LINKS */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-end flex items-center gap-3">
          {/* BEFORE LOGIN → Login | Register */}
          {!user && (
            <>
              <Link
                to="/auth/login"
                className="btn bg-blue-600 text-white hover:bg-blue-700"
              >
                Login
              </Link>

              <Link
                to="/auth/register"
                className="btn bg-linear-to-r from-pink-500 to-purple-600 text-white"
              >
                Register
              </Link>
            </>
          )}

          {/* AFTER LOGIN → Avatar + Logout */}
          {user && (
            <>
              <img
                className="w-12 rounded-full cursor-pointer"
                src={user?.photoURL || userIcon}
                alt="user"
                title={user?.displayName}
              />

              <button onClick={handleLogout} className="btn bg-linear-to-r from-pink-500 to-purple-600 text-white">
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Drawer Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <span className="font-bold text-xl">
            {user ? user.email : "Guest User"}
          </span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <ul className="p-4 text-lg">{navLinks}</ul>

        {/* Drawer right-side items */}
        <div className="p-4 border-t">
          {!user ? (
            <>
              <Link to="/auth/login" className="btn w-full mb-2">
                Login
              </Link>
              <Link to="/auth/register" className="btn w-full">
                Register
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className="btn w-full">
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
