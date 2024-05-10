import React from "react";

const Contact = () => {
  return (
    <div className="min-h-[90vh] ">
      <div class="flex flex-col md:flex-row justify-evenly items-center">
        {/* ------------------Left Section with SVG-------------*/}
        <div class="  p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="sm:w-60 sm:h-60 text-blue-500"
          >
            <path d="M10 0a10 10 0 0110 10c0 2.976-1.305 5.67-3.38 7.511l-.002-.002a32.124 32.124 0 01-2.387 2.285l-.01.01a.748.748 0 01-.867 0l-.01-.01a32.124 32.124 0 01-2.387-2.285l-.002.002C1.305 15.67 0 12.976 0 10A10 10 0 0110 0zM8 14a2 2 0 100-4 2 2 0 000 4zm4-8a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>

        {/* --------------------Right Section with Form------------------ */}
        <div class="md:w-1/2 p-6">
          <form
            class=" shadow-md rounded px-8 pt-6 pb-8 mb-4"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input type="hidden" name="access_key" value="bb6855d4-02c5-4b75-8d90-51d05c9523af"></input>
            <div class="mb-4">
              <label
                class="block text-lg text-white font-semibold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-lg text-white font-semibold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-lg text-white font-semibold mb-2"
                for="query"
              >
                Query
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="query"
                placeholder="Enter your query"
              ></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
