import React from "react";

const InputField = ({ placeholder, type }) => {
  return (
    <>
      <input
        class="appearance-none block w-full text-white py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent border-1 border-gray-800"
        id="grid-first-name"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputField;
