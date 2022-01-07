import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import { Zoom } from 'react-reveal';

const HeroArea = () => {
  return (
    <div className="bg-hero-area  bg-cover bg-gray-900 bg-blend-overlay bg-center md:h-screen h-96 overflow-hidden ">
      <div className="container mx-auto">
        <Zoom>
          <div className="text-center text-white md:pt-56 pt-48">
            <h1 className="md:text-6xl  text-4xl font-semibold ">
              Hello, I'M <span className="text-yellow-600">Rayhan</span>
              <span className="text-5xl   my-4">
                <Typical
                  steps={[
                    'Front-end Developer 🏚️',
                    2000,
                    'Web Designer 🖥️',
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="h1"
                />
              </span>
            </h1>
          </div>
          <div className="md:mt-12 mt-6">
            <Link to="/about" className=" cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mx-auto bg-transparent hover:bg-gray text-yellow-500 p-1 rounded-full  "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default HeroArea;
