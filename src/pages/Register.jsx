import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4">
        <h2 className="font-semibold text-2xl text-center">
          Register Your Account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Name*/}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            {/* Photo UrL*/}
            <label className="label">Photo URl</label>
            <input type="text" className="input" placeholder="Photo URl" />
            {/* Email  */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p>
            Already have an account. Please{" "}
            <Link to="/auth/login" className="text-secondary font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
