import React from "react";

const ButtonBlank = ({ text, textColor }) => {
  return (
    <button
      className={`${textColor} bg-yellow-600 text-gray-50 mr-4 w-36 border-1 border-yellow-600 transition-alll duration-200 hover:text-black  hover:bg-transparent  px-6 py-2`}
    >
      {text}
    </button>
  );
};

export default ButtonBlank;
