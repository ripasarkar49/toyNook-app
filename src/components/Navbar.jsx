import React, { use, useState } from "react";
import { Link } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

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
      .catch((Error) => console.log(Error));
  };

  const links = (
    <>
      <Link to="/">
        <li className="m-2 text-xl">Home</li>
      </Link>
      <Link to="/toys">
        <li className="m-2 text-xl">Toys</li>
      </Link>

      {user ? (
        <button onClick={handleLogout} className="btn mr-2 text-xl">
          Logout
        </button>
      ) : (
        <Link to="/auth/login" className="btn mr-2 text-xl">
          Login
        </Link>
      )}
    </>
  );

  return (
    <>
      {/* ====== NAVBAR ====== */}
      <div className="w-11/12 mx-auto my-3 navbar bg-base-200 shadow-sm">
        <div className="navbar-start">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden mr-3"
            onClick={() => setOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <a className="btn btn-ghost text-3xl font-bold">ToyNook</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          <img
            className="w-12 rounded-full cursor-pointer"
            src={`${user ? user.photoURL : userIcon}`}
            alt="user"
            title={user ? user.displayName : "Guest"}
          />
        </div>
      </div>

      {/* ====== DRAWER OVERLAY (mobile only) ====== */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* ====== DRAWER ====== */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <span className="font-bold text-xl">
            {user ? user.email : "Guest User"}
          </span>
          <button onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        <ul className="p-4 text-lg">
          {links}
        </ul>
      </div>
    </>
  );
};

export default Navbar;