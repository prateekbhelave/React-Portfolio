import React from "react";
import profilepic from "../assets/heroImg.png";
import {
  RiLinkedinBoxLine,
  RiGithubLine,
  RiInstagramLine,
} from "@remixicon/react";
import { TypeAnimation } from "react-type-animation";
import About from "./About";
import { NavLink, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center ">
        <div className="flex flex-col my-auto mx-auto relative md:w-1/2">
          <p className="md:text-5xl sm:text-4xl text-xl font bold text-gray-200 ">
            Hello I'm Prateek
          </p>

          {/* -------------Animated Text-------------- */}
          <h1 className="md:text-5xl sm:text-4xl text-xl flex flex-wrap font-semibold md:py-6">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "WordPress Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex justify-center items-center ">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500 "></p>
          </div>

          {/* -------------Social Icons-------------- */}
          <div className="text-5xl flex justify-start gap-10  text-blue-300 mt-6 md:mt-0">
            <NavLink to="www.linkedin.com/in/prateek-bhelave">
              <RiLinkedinBoxLine
                className="hover:bg-[#44BCFF] hover:text-white rounded-full p-3"
                size={50}
              />
            </NavLink>
            <NavLink to="https://www.instagram.com/prateek.web/">
              <RiInstagramLine
                className="hover:bg-[#44BCFF] hover:text-white rounded-full p-3"
                size={50}
              />
            </NavLink>
            <NavLink to="https://github.com/prateekbhelave">
              <RiGithubLine
                className="hover:bg-[#44BCFF] hover:text-white rounded-full p-3"
                size={50}
                href="https://github.com/prateekbhelave"
                to="https://github.com/prateekbhelave"
              />
            </NavLink>
          </div>

          {/* -------------Download & About button--------------- */}
          <div className="relative my-8 flex gap-5 flex-col sm:flex-row">
            <div className="w-fit transition-all duration-1000 opacity-70 -insert-px bg-gradient-to-r from-[#32f3d9] via-[#82abb3] to-[#61a1d6] rounded-lg hover:opacity-100 hover:-insert-1 hover:duration-200 animate-tilt ">
              <NavLink
                to="https://drive.google.com/file/d/1E_2hujJrfIKBbI8VQ9Ka-esTXeoIgoP1/view?usp=sharing"
                title="Download-resume"
                role="button"
                className=" w-[250px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-primary font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 "
              >
                Download Resume
              </NavLink>
            </div>
            <div className="w-fit transition-all duration-1000 opacity-70 -insert-px bg-gradient-to-r from-[#61a1d6] via-[#82abb3] to-[#32f3d9] rounded-lg hover:opacity-100 hover:-insert-1 hover:duration-200 animate-tilt">
              <NavLink
                to="/about"
                className=" w-[250px] h-[60px] relative inline-flex items-center justify-center px-6 py-4 text-lg font-semibold text-white transition-all duration-200 bg-primary font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 "
              >
                About
              </NavLink>
            </div>
          </div>
        </div>

        {/* -----------------Hero Image---------------- */}
        <div className="my-auto">
          <img
            src={profilepic}
            alt=""
            className="w-[250px] sm:w-[400px] h-auto mx-auto"
          />
        </div>
      </div>

      {/* --------------Link Route---------------- */}
      <Routes>
        <Route path="/about/*" element={<About />} />
      </Routes>
    </div>
  );
};

export default Home;
