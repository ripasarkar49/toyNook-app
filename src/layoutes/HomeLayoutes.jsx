import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const HomeLayoutes = () => {
  return (
    <div>
      <header>
        <section>
          <Navbar></Navbar>
        </section>
        <section>
          <Slider></Slider>
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
