import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const HomeLayoutes = () => {
  return (
    <div>
      <header>
        <section >
            <Navbar></Navbar>
        </section>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayoutes;
