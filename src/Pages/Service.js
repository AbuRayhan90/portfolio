import React from 'react';
import ButtonBlank from '../Component/ButtonBlank';
import HeadingDownLine from '../Component/HeadingDownLine';
import AllData from '../ultsData';
import { Zoom } from 'react-reveal';

const Service = () => {
  return (
    <div>
      <div className="container mx-auto py-10">
        <HeadingDownLine text="My Services" textcolor="text-black" />
        <div className="flex w-full flex-wrap  md:justify-between mt-6 space-y-4">
          {AllData.services.map((item) => (
            <div key={item.id}>
              <Zoom>
                <div
                  className="md:w-96 transform duration-200
            hover:scale-[1.05] w-full  h-64 mt-4  bg-white shadow-md hover:shadow-3xl border-2 transition-all  text-center hover:border-yellow-600 py-3 px-4"
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
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <ButtonBlank text="View More" />
        </div>
      </div>
    </div>
  );
};

export default Service;
