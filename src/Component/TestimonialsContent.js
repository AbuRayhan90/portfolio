import React from "react";

const TestimonialsContent = ({ number, text, icon }) => {
  return (
    <div className="text-white text-center md:mt-36 mt-28">
      <i className={`${icon} text-yellow-300 md:text-4xl text-lg`}></i>
      <h1 className="font-semibold md:text-4xl text-2xl">{number}</h1>
      <p className="mt-2">{text}</p>
    </div>
  );
};

export default TestimonialsContent;
