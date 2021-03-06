import React from 'react';
import { Flip } from 'react-reveal';
const TestimonialsContent = ({ number, text, icon }) => {
  return (
    <Flip>
      <div className="text-white text-center md:mt-36 mt-16 w-2/4 md:w-auto">
        <i className={`${icon} text-yellow-600 md:text-4xl text-lg`}></i>
        <h1 className="font-semibold md:text-4xl text-2xl">{number}</h1>
        <p className="mt-2">{text}</p>
      </div>
    </Flip>
  );
};

export default TestimonialsContent;
