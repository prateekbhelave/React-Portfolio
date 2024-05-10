import React from 'react'

const ProjectCard = ({data}) => {
  const { name, image, desc, website_link, code_link } = data;
  return (
    <div className="flex flex-wrap justify-center scroll-smooth">
      {/* <!-- Card --> */}
      <div className="max-w-sm w-full p-4">
        <div className="bg-zinc-500/20 rounded-lg shadow-md overflow-hidden object-cover">
          <img
            className="w-full h-40 sm:h-48 object-fit rounded-lg overflow-hidden object-center p-2"
            src={image}
            alt="Placeholder Image"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-white">{name}</h2>
            <p className="mt-2 text-white">{desc}</p>
            <div className="mt-4 flex justify-between">
              <a
                target="_blank"
                href={website_link}
                className="transition-all duration-1000 opacity-70 -insert-px bg-gradient-to-r from-[#32f3d9] via-[#82abb3] to-[#61a1d6]  text-white font-bold py-2 px-4 rounded hover:opacity-100 hover:-insert-1 hover:duration-200 animate-tilt"
              >
                View Project
              </a>
              <a
                target="_blank"
                href={code_link}
                className="transition-all duration-500 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                See Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard