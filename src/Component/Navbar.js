import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
  const [title, setTitle] = useState('Home');

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="fixed w-full  px-4 md:px-12 z-30 bg-white  py-[1rem]   overflow-hidden">
      <div className="container mx-auto  flex justify-between items-center ">
        <Link
          to="/"
          onClick={() => setTitle('Home')}
          className="text-3xl font-extrabold cursor-pointer "
        >
          <sapn className="text-green-500">A</sapn>
          <sapn className="text-red-500">R</sapn>
          <sapn className="text-black">R</sapn>
        </Link>
        <nav className="">
          <button
            className="md:hidden"
            onClick={() => setisSideMenuOpen(!isSideMenuOpen)}
          >
            {isSideMenuOpen ? (
              <i className="fas fa-times text-3xl"></i>
            ) : (
              <i className="fas fa-bars text-3xl"></i>
            )}
          </button>
          <ul
            className={`fixed left-0 right-0 min-h-screen bg-white transition duration-200 text-black  pt-[.5rem] md:pt-[0rem] transform ${
              isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-6  md:translate-x-0 `}
          >
            <li
              onClick={() => setisSideMenuOpen(false)}
              className="hover:bg-yellow-600 transition-all cursor-pointer hover:text-white"
            >
              <Link to="/" className="px-8 py-2 block hover:text-white">
                Home
              </Link>
            </li>
            <li
              onClick={() => setisSideMenuOpen(false)}
              className="hover:bg-yellow-600 transition-all cursor-pointer hover:text-white  "
            >
              <Link
                className="px-8 md:py-2 py-2 block hover:text-white"
                to="/about"
              >
                About
              </Link>
            </li>
            <li
              onClick={() => setisSideMenuOpen(false)}
              className="hover:bg-yellow-600 transition-all cursor-pointer hover:text-white "
            >
              <Link className="px-8 py-2 block hover:text-white" to="/service">
                Services
              </Link>
            </li>
            <li
              onClick={() => setisSideMenuOpen(false)}
              className="hover:bg-yellow-600 transition-all cursor-pointer hover:text-white "
            >
              <Link
                className="px-8 py-2 block hover:text-white"
                to="/portfolio"
              >
                Porfolio
              </Link>
            </li>
            <li
              onClick={() => setisSideMenuOpen(false)}
              className="hover:bg-yellow-600 transition-all cursor-pointer hover:text-white "
            >
              <Link className="px-8 py-2 block hover:text-white " to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
