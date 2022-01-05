import React from "react";

const PortfolioContent = ({ bgImage }) => {
  return (
    <div
      className={`${bgImage} relative hover:bg-white bg-center bg-cover md:h-48 h-60 md:w-96 mt-6 cursor-pointer`}
    >
      <div className="hover:bg-gray-300 absolute h-full w-full text-transparent hover:text-red-500">
        <h1 className="text-center text-3xl  my-16  underline">
          Click to view project
        </h1>
      </div>
    </div>
  );
};

export default PortfolioContent;
