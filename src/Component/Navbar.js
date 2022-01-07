import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideMenu from './SideMenu';

const Navbar = () => {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
  const [title, setTitle] = useState('Home');

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="bg-white fixed md:relative shadow-sm  w-full z-20 overflow-hidden">
      <div className="container mx-auto  ">
        <nav className="flex justify-items-start justify-between items-center h-16">
          <Link
            to="/"
            onClick={() => setTitle('Home')}
            className="text-3xl font-extrabold cursor-pointer"
          >
            <sapn className="text-green-500">A</sapn>
            <sapn className="text-red-500">R</sapn>
            <sapn className="text-black">R</sapn>
          </Link>
          <div className="">
            <ul className="hidden lg:flex  text-md font-light items-center ">
              <li className="">
                <Link
                  to="/"
                  onClick={() => setTitle('Home')}
                  className="px-8 py-2 transition-all delay-150 hover:text-yellow-500 "
                >
                  Home
                </Link>
              </li>
              <li className=" ">
                <Link
                  className="px-8 py-2 transition-all hover:text-yellow-500 delay-150"
                  to="/about"
                  onClick={() => setTitle('About')}
                >
                  About
                </Link>
              </li>
              <li className="">
                <Link
                  className="px-8 py-2 transition-all hover:text-yellow-500 delay-150"
                  to="/service"
                  onClick={() => setTitle('Service')}
                >
                  Services
                </Link>
              </li>
              <li className="">
                <Link
                  className="px-8 py-2 transition-all hover:text-yellow-500 delay-150 "
                  to="/portfolio"
                  onClick={() => setTitle('Portfolio')}
                >
                  Portfolio
                </Link>
              </li>
              <li className="">
                <Link
                  className="px-8 py-2 transition-all hover:text-yellow-500 delay-150 "
                  to="/contact"
                  onClick={() => setTitle('Contact')}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setisSideMenuOpen(!isSideMenuOpen)}
            className=" border-2 px-2 w-10 md:hidden"
          >
            {!isSideMenuOpen ? (
              <i className="fas fa-bars "></i>
            ) : (
              <i className="fas fa-times"></i>
            )}
          </button>
        </nav>
      </div>
      {isSideMenuOpen ? <SideMenu setisSideMenuOpen={setisSideMenuOpen} /> : ''}
    </div>
  );
};

export default Navbar;
