import React from 'react';
import ButtonBlank from '../Component/ButtonBlank';
import HeadingDownLine from '../Component/HeadingDownLine';
import AllData from '../ultsData';
import { Zoom } from 'react-reveal';

const Service = () => {
  return (
    <>
      <div className="container mx-auto pt-20 mb-6 md:mb-0 ">
        <HeadingDownLine text="My Services" textcolor="text-black" />
        <div className="flex w-full flex-wrap  md:justify-between mt-6 space-y-4">
          {AllData.services.map((item) => (
            <Zoom>
              <div
                key={item.id}
                className="md:w-96  duration-300 transform
            hover:scale-[1.05] w-full  h-64 mt-4 border shadow-md hover:shadow-2xl bg-white transition-all  text-center py-3 px-4  cursor-pointer"
              >
                <img
                  className="h-14 mx-auto border-b-2 py-1 border-yellow-600"
                  src={item.icon}
                  alt="icon"
                />
                <h1 className="text-xl font-semibold my-2">{item.title}</h1>
                <p className="text-gray-600 text-md text-justify">
                  {item.text}
                </p>
              </div>
            </Zoom>
          ))}
        </div>
        <div className="text-center mt-10">
          <ButtonBlank text="View More" />
        </div>
      </div>
    </>
  );
};

export default Service;
