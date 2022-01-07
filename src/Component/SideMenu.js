import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = ({ setisSideMenuOpen }) => {
  return (
    <>
      <ul className="md:hidden md:flex-initial  z-10 h-screen font-light  bg-white w-full border-t-2 border-gray-500"></ul>
    </>
  );
};

export default SideMenu;
