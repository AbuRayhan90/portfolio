import React from 'react';

const ButtonBlank = ({ text, textColor, type, value }) => {
  return (
    <>
      <button
        type={type}
        value={value}
        className={`${textColor} bg-yellow-600 w-full text-gray-50 mr-4 md:w-36 rounded-3xl border-1 border-yellow-600 transition-alll duration-200 hover:text-black  hover:bg-transparent  px-6 py-2 mb-3`}
      >
        {text}
      </button>
    </>
  );
};

export default ButtonBlank;
