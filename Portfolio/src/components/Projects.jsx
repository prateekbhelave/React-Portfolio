import React, { useState } from "react";
import portfolioWeb from "../assets/image.png";
import CC from "../assets/CC.png";
import PG from "../assets/pass.png";
import PD from "../assets/products.png";
import game from "../assets/game.png";

const Projects = () => {
  // const Projects_Data = [
  //   {
  //     image: "src/assets/image.png",
  //     name: "Portfolio Website",
  //     desc: "Personal Portfolio website using HTML, CSS and JavaScript",
  //     website_link: "https://prateekbhelave.github.io/Resume/",
  //     code_link: "https://github.com/prateekbhelave/Resume",
  //   },
  //   {
  //     image: "src/assets/CC.png",
  //     name: "Currency Convertor",
  //     desc: "Created currency convertor with the help of React JS",
  //     website_link: "https://currencycnv.netlify.app",
  //     code_link: "https://github.com/prateekbhelave/CurrencyConvertor",
  //   },
  //   {
  //     image: "src/assets/pass.png",
  //     name: "Password Generator",
  //     desc: "Created password generator with the help of React JS",
  //     website_link: "https://currencycnv.netlify.app",
  //     code_link: "https://github.com/prateekbhelave/Password-Generator",
  //   },
  //   {
  //     image: "src/assets/products.png",
  //     name: "Products Details",
  //     desc: "Created a products detail website by fetching products from API and shows the details ",
  //     website_link: "https://currencycnv.netlify.app",
  //     code_link: "https://github.com/prateekbhelave/productsDetails",
  //   },

  //   {
  //     image: "src/assets/game.png",
  //     name: "Bubble Game",
  //     desc: "Developed Bubble game using HTML, CSS and JavaScript",
  //     website_link: "https://unique-pass.netlify.app",
  //     code_link: "https://github.com/prateekbhelave/bubblegame",
  //   },
  // ];

  return (
    <div className="py-6 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center sm:justify-start ">
      <div className="sm:flex sm:flex-wrap px-[2%]">
        {/* card */}
        <div className="max-w-sm w-full p-4">
          <div className="bg-zinc-500/20 rounded-lg shadow-md overflow-hidden object-cover">
            <img
              className="w-full h-40 sm:h-48 object-fit rounded-lg overflow-hidden object-center p-2"
              src={portfolioWeb}
              alt="Placeholder Image"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">
                Portfolio Website
              </h2>
              <p className="mt-2 text-white">
                Personal Portfolio website using HTML, CSS and JavaScript
              </p>
              <div className="mt-4 flex justify-between">
                <a
                  target="_blank"
                  href="https://prateekbhelave.github.io/Resume/"
                  className="transition-all duration-1000 opacity-70 -insert-px bg-gradient-to-r from-[#32f3d9] via-[#82abb3] to-[#61a1d6]  text-white font-bold py-2 px-4 rounded hover:opacity-100 hover:-insert-1 hover:duration-200 animate-tilt"
                >
                  View Project
                </a>
                <a
                  target="_blank"
                  href="https://github.com/prateekbhelave/Resume"
                  className="transition-all duration-500 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  See Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-sm w-full p-4">
          <div className="bg-zinc-500/20 rounded-lg shadow-md overflow-hidden object-cover">
            <img
              className="w-full h-40 sm:h-48 object-fit rounded-lg overflow-hidden object-center p-2"
              src={CC}
              alt="Placeholder Image"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">
                Currency Convertor
              </h2>
              <p className="mt-2 text-white">
                Created currency convertor with the help of React JS
              </p>
              <div className="mt-4 flex justify-between">
                <a
                  target="_blank"
                  href="https://currencycnv.netlify.app"
                  className="transition-all duration-1000 opacity-70 -insert-px bg-gradient-to-r from-[#32f3d9] via-[#82abb3] to-[#61a1d6]  text-white font-bold py-2 px-4 rounded hover:opacity-100 hover:-insert-1 hover:duration-200 animate-tilt"
                >
                  View Project
                </a>
                <a
                  target="_blank"
                  href="https://github.com/prateekbhelave/CurrencyConvertor"
                  className="transition-all duration-500 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  See Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-sm w-full p-4">
          <div className="bg-zinc-500/20 rounded-lg shadow-md overflow-hidden object-cover">
            <img
              className="w-full h-40 sm:h-48 object-fit rounded-lg overflow-hidden object-center p-2"
              src={PG}
              alt="Placeholder Image"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">
                Password Generator
              </h2>
              <p className="mt-2 text-white">
                Created password generator with the help of React JS
              </p>
              <div className="mt-4 flex justify-between">
                <a
                  target="_blank"
                  href="https://unique-pass.netlify.app/"
                  className="transition-all duration-1000 opacity-70 -insert-px bg-gradient-to-r from-[#32f3d9] via-[#82abb3] to-[#61a1d6]  text-white font-bold py-2 px-4 rounded hover:opacity-100 hover:-insert-1 hover:duration-200 animate-tilt"
                >
                  View Project
                </a>
                <a
                  target="_blank"
                  href="https://github.com/prateekbhelave/Password-Generator"
                  className="transition-all duration-500 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  See Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-sm w-full p-4">
          <div className="bg-zinc-500/20 rounded-lg shadow-md overflow-hidden object-cover">
            <img
              className="w-full h-40 sm:h-48 object-fit rounded-lg overflow-hidden object-center p-2"
              src={PD}
              alt="Placeholder Image"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">
                Products Details
              </h2>
              <p className="mt-2 text-white">
                Created a products detail website by fetching products from API
                and shows the details
              </p>
              <div className="mt-4 flex justify-between">
                <a
                  target="_blank"
                  href="https://productsdetails.netlify.app/"
                  className="transition-all duration-1000 opacity-70 -insert-px bg-gradient-to-r from-[#32f3d9] via-[#82abb3] to-[#61a1d6]  text-white font-bold py-2 px-4 rounded hover:opacity-100 hover:-insert-1 hover:duration-200 animate-tilt"
                >
                  View Project
                </a>
                <a
                  target="_blank"
                  href="https://github.com/prateekbhelave/productsDetails"
                  className="transition-all duration-500 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  See Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-sm w-full p-4">
          <div className="bg-zinc-500/20 rounded-lg shadow-md overflow-hidden object-cover">
            <img
              className="w-full h-40 sm:h-48 object-fit rounded-lg overflow-hidden object-center p-2"
              src={game}
              alt="Placeholder Image"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">Bubble Game</h2>
              <p className="mt-2 text-white">
                Developed Bubble game using HTML, CSS and JavaScript
              </p>
              <div className="mt-4 flex justify-between">
                <a
                  target="_blank"
                  href="https://prateekbhelave.github.io/bubblegame/"
                  className="transition-all duration-1000 opacity-70 -insert-px bg-gradient-to-r from-[#32f3d9] via-[#82abb3] to-[#61a1d6]  text-white font-bold py-2 px-4 rounded hover:opacity-100 hover:-insert-1 hover:duration-200 animate-tilt"
                >
                  View Project
                </a>
                <a
                  target="_blank"
                  href="https://github.com/prateekbhelave/bubblegame"
                  className="transition-all duration-500 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  See Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
