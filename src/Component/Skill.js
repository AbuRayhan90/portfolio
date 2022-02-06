import React from 'react';

const Skill = ({ item }) => {
  return (
    <div className="md:w-2/4 w-full mx-auto text-white">
      <h1 className=" text-center my-2 font-serif text-lg">{item.title}</h1>
      <div className="flex h2">
        <div className="w-full bg-gray-900 h-2 rounded-full dark:bg-gray-700">
          <div
            className="bg-gradient-to-r from-[#D31A50] to-[#00BC40] h-2   text-blue-100 text-center  rounded-full"
            style={{ width: `${item.parsentage}` }}
          ></div>
        </div>
        <span className="text-sm -mt-1 leading-3">{item.parsentage}</span>
      </div>
    </div>
  );
};

export default Skill;
