import React from 'react';

const HeadingDownLine = ({ text, anotherText, textcolor }) => {
  return (
    <div className="text-center ">
      <h1 className={`text-4xl font-bold ${textcolor}`}>{text}</h1>
      <p className="text-gray-600">{anotherText}</p>
      <div
        className="w-[12rem] h-[0.1rem] relative bg-gray-600 text-center inline-block before:bg-yellow-600 
      before:h-[0.6rem] before:w-[2.4rem] before:block before:absolute before:left-[5rem] before:-top-[0.3rem] before:rounded-md before:transition-all before:duration-300 before:hover:left-0 hover:before:w-[12rem]"
      ></div>
    </div>
  );
};

export default HeadingDownLine;
