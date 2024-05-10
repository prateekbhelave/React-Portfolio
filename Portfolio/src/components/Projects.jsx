import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const Projects_Data = [
    {
      image: "src/assets/Projects_img/image.png",
      name: "Portfolio Website",
      desc: "Personal Portfolio website using HTML, CSS and JavaScript",
      website_link: "https://prateekbhelave.github.io/Resume/",
      code_link: "https://github.com/prateekbhelave/Resume",
    },
    {
      image: "src/assets/Projects_img/CC.png",
      name: "Currency Convertor",
      desc: "Created currency convertor with the help of React JS",
      website_link: "https://currencycnv.netlify.app",
      code_link: "https://github.com/prateekbhelave/CurrencyConvertor",
    },
    {
      image: "src/assets/Projects_img/pass.png",
      name: "Password Generator",
      desc: "Created password generator with the help of React JS",
      website_link: "https://currencycnv.netlify.app",
      code_link: "https://github.com/prateekbhelave/Password-Generator",
    },
    {
      image: "src/assets/Projects_img/products.png",
      name: "Products Details",
      desc: "Created a products detail website by fetching products from API and shows the details ",
      website_link: "https://currencycnv.netlify.app",
      code_link: "https://github.com/prateekbhelave/productsDetails",
    },

    {
      image: "src/assets/Projects_img/game.png",
      name: "Bubble Game",
      desc: "Developed Bubble game using HTML, CSS and JavaScript",
      website_link: "https://unique-pass.netlify.app",
      code_link: "https://github.com/prateekbhelave/bubblegame",
    },
  ];

  return (
    <div className="py-6 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center sm:justify-start ">
      <div className="sm:flex sm:flex-wrap px-[2%]">
        {Projects_Data.map((obj, index) => (
          <ProjectCard key={index} data={obj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
