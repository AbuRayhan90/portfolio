import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = ({ setisSideMenuOpen }) => {
  return (
    <>
      <ul className="md:hidden md:flex-initial  z-10 h-screen font-light  bg-white w-full border-t-2 border-gray-500">
        <li
          onClick={() => setisSideMenuOpen(false)}
          className="hover:bg-yellow-600 transition-all cursor-pointer hover:text-white  "
        >
          <Link to="/" className="px-8 py-2 hover:text-white">
            Home
          </Link>
        </li>
        <li
          onClick={() => setisSideMenuOpen(false)}
          className="hover:bg-yellow-600 transition-all cursor-pointer hover:text-white  "
        >
          <Link className="px-8 py-2 hover:text-white" to="/about">
            About
          </Link>
        </li>
        <li
          onClick={() => setisSideMenuOpen(false)}
          className="hover:bg-yellow-600 transition-all cursor-pointer hover:text-white "
        >
          <Link className="px-8 py-2 hover:text-white" to="/service">
            Services
          </Link>
        </li>
        <li
          onClick={() => setisSideMenuOpen(false)}
          className="hover:bg-yellow-600 transition-all cursor-pointer hover:text-white "
        >
          <Link className="px-8 py-2 hover:text-white" to="/project">
            Projects
          </Link>
        </li>
        <li
          onClick={() => setisSideMenuOpen(false)}
          className="hover:bg-yellow-600 transition-all cursor-pointer hover:text-white "
        >
          <Link className="px-8 py-2 hover:text-white " to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SideMenu;
