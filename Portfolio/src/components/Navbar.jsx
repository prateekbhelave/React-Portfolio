import React, { useState } from "react";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "@remixicon/react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handelNav = () => setNav(!nav);
  return (
    <>
      <div
        className="max-w-[1240px] mx-auto rounded-b-2xl
        h-[10vh] w-full text-gray-400 flex items-center justify-between px-10"
      >
        {/*------------------ Large Screen Nav Bar -----------------------------*/}
        <h1 className="text-2xl primary-color font-medium">Portfolio</h1>
        <nav className="hidden md:flex text-lg gap-10 ">
          <NavLink
            style={(e) => {
              return {
                color: e.isActive ? "skyblue" : "",
                borderBottom: e.isActive ? "1px solid" : "",
              };
            }}
            className="hover:text-gray-100 hover:border-b"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={(e) => {
              return {
                color: e.isActive ? "skyblue" : "",
                borderBottom: e.isActive ? "1px solid" : "",
              };
            }}
            className="hover:text-gray-100 hover:border-b"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={(e) => {
              return {
                color: e.isActive ? "skyblue" : "",
                borderBottom: e.isActive ? "1px solid" : "",
              };
            }}
            className="hover:text-gray-100 hover:border-b"
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            style={(e) => {
              return {
                color: e.isActive ? "skyblue" : "",
                borderBottom: e.isActive ? "1px solid" : "",
              };
            }}
            className="hover:text-gray-100 hover:border-b"
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>


        {/*-------------------------------Mobile Menu Icon------------------------------*/}
        <div onClick={handelNav} className="block md:hidden ease-in-out">
          {nav ? (
            <RiMenuFoldFill size={20} color="white" />
          ) : (
            <RiMenuUnfoldFill size={20} color="white" />
          )}
        </div>

        {/*------------------------------- Mobile Navbar ------------------------------*/}
        <div
          className={
            nav
              ? "text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-gray-900 bg-[#202121] ease-in-out duration-500 z-10"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="text-2xl primary-color mx-8 my-4 font-medium">
            Portfolio
          </h1>
          <nav className="p-8 text-2xl w-full flex flex-col gap-5 z-10">
            <NavLink
              style={(e) => {
                return {
                  color: e.isActive ? "white" : "",
                };
              }}
              className="block"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={(e) => {
                return {
                  color: e.isActive ? "white" : "",
                };
              }}
              className="block"
              to="/about"
            >
              About
            </NavLink>
                <NavLink
                  style={(e) => {
                    return {
                      color: e.isActive ? "white" : "",
                    };
                  }}
                  className="block"
                  to="/projects"
                >
                  Projects
                </NavLink>
            <NavLink
              style={(e) => {
                return {
                  color: e.isActive ? "white" : "",
                };
              }}
              className="block"
              to="/contact"
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Navbar;
