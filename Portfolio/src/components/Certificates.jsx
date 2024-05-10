import React from "react";
import Img from "../assets/Certificate of Internship.webp";



const Certificates = ({data}) => {

    const {name,image, link} = data


  return (
    <div className=" h-fit sm:w-[30%] pb-5 m-5 justify-center bg-gray-400/20 align-center overflow-hidden rounded-lg">
      <div className="w-full filter brightness-[80%]">
        <img src={image}  alt="" />
      </div>
      <div className="text-xl py-5 px-4">
        <h1>{name}</h1>
      </div>
      <div className="w-fit mx-5 transition-all duration-1000 opacity-70 -insert-px bg-gradient-to-r from-[#32f3d9] via-[#82abb3] to-[#61a1d6] rounded-lg hover:opacity-100 hover:-insert-1 hover:duration-200 animate-tilt ">
        <a
          href={link}
          title="certificate"
          role="button"
          className=" w-[250px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-primary font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 "
        >
          See Certificate
        </a>
      </div>
    </div>
  );
};

export default Certificates;