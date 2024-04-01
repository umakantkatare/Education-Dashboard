import React from "react";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

function HomeLayout({ children }) {
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  return (
    <div className="min-h-screen">
      <div className="drawer drawer-end ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary absolute right-2 top-2 text-xl"
          >
            <FaBars />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          >
            {" "}
          </label>
          <ul className="menu p-4 w-80 h-auto bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a> Home </a>
            </li>
            <li>
              <a> All Courses </a>
            </li>
            <li>
              <a> Contact Us </a>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
          {/* {!isLoggedIn && (
            <li className="absolute  ">
              <div className="w-full flex items-center justify-center">
                <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                  <Link to="/login">Login</Link>
                </button>
                <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                  <Link to="/signup">Signup</Link>
                </button>
              </div>
            </li>
          )} */}
        </div>
      </div>
      {children}

      <Footer />
    </div>
  );
}

export default HomeLayout;
