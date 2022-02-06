import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
  const [title, setTitle] = useState('Abu Rayhan');
  const location = useLocation();
  const getColor = (currLocation) => {
    return location.pathname === currLocation
      ? 'text-yellow-600 hover:text-yellow-600 border-b-2 border-t-2 border-yellow-600'
      : 'text-black border-b-2 border-t-2 border-transparent hover:border-b-2 border-t-2   hover:border-yellow-600';
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

  const logoClick = () => {
    setTitle('Home');
    setisSideMenuOpen(false);
  };

  return (
    <div className="fixed w-full z-30 bg-white  py-[1rem]   overflow-hidden">
      <div className="container mx-auto  flex justify-between items-center ">
        <Link
          to="/"
          onClick={() => logoClick()}
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
            className={`fixed left-0 right-0 pl-2  bg-white transition duration-200 text-black  pt-[.5rem] md:pt-[0rem] transform ${
              isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-6  md:translate-x-0 `}
          >
            <li onClick={() => setisSideMenuOpen(false)}>
              <Link
                to="/"
                onClick={() => setTitle('Home')}
                className={`px-2 py-2 block text-lg transition duration-300  hover:border-b-2 border-t-2   hover:border-yellow-600 ${getColor(
                  '/'
                )}`}
              >
                Home
              </Link>
            </li>
            <li onClick={() => setisSideMenuOpen(false)}>
              <Link
                to="/about"
                onClick={() => setTitle('About')}
                className={`px-2 py-2 block transition duration-300  hover:border-b-2 border-t-2   hover:border-yellow-600 text-lg ${getColor(
                  '/about'
                )}`}
              >
                About
              </Link>
            </li>

            <li onClick={() => setisSideMenuOpen(false)}>
              <Link
                to="/portfolio"
                onClick={() => setTitle('Portfolio')}
                className={`px-2 py-2 block transition duration-300  hover:border-b-2 border-t-2   hover:border-yellow-600 text-lg ${getColor(
                  '/portfolio'
                )}`}
              >
                Porfolio
              </Link>
            </li>
            <li onClick={() => setisSideMenuOpen(false)}>
              <Link
                to="/skills"
                onClick={() => setTitle('Skills')}
                className={`px-2 py-2 block transition duration-300  hover:border-b-2 border-t-2   hover:border-yellow-600 text-lg ${getColor(
                  '/skills'
                )}`}
              >
                Skills
              </Link>
            </li>
            <li onClick={() => setisSideMenuOpen(false)}>
              <Link
                to="/service"
                onClick={() => setTitle('Services')}
                className={`px-2 py-2 block transition duration-300  hover:border-b-2 border-t-2   hover:border-yellow-600 text-lg ${getColor(
                  '/service'
                )}`}
              >
                Services
              </Link>
            </li>
            <li onClick={() => setisSideMenuOpen(false)}>
              <Link
                to="/testimonial"
                onClick={() => setTitle('Testimonial')}
                className={`px-2 py-2 block text-lg transition duration-300  hover:border-b-2 border-t-2   hover:border-yellow-600 ${getColor(
                  '/testimonial'
                )}`}
              >
                Testimonial
              </Link>
            </li>
            <li onClick={() => setisSideMenuOpen(false)}>
              <Link
                to="/contact"
                onClick={() => setTitle('Contact')}
                className={`px-2 py-2 block text-lg transition duration-300  hover:border-b-2 border-t-2   hover:border-yellow-600 ${getColor(
                  '/contact'
                )}`}
              >
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
