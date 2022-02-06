import React from 'react';

const HeadingDownLine = ({ text, anotherText, textcolor }) => {
  return (
    <div className="text-center heading_border mx-auto">
      <h1 className={`text-4xl font-bold ${textcolor}`}>{text}</h1>
      <p className="text-gray-600 ">{anotherText}</p>
    </div>
  );
};

export default HeadingDownLine;
