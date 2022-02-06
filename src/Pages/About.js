import React from 'react';
import OwnImage from '../assets/img/arr.png';
import AllData from '../ultsData';
import HeadingDownLine from '../Component/HeadingDownLine';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
const About = () => {
  return (
    <>
      <div className="container mx-auto pt-20 ">
        <HeadingDownLine text="About Me" anotherText="Why Choose Me ?" />
        <div className="flex flex-wrap py-10">
          <Fade bottom>
            <div className="md:w-2/4 w-full mb-10 ">
              <img
                className="md:h-96 md:pl-16 "
                src={OwnImage}
                alt="Personal"
              />
            </div>
          </Fade>
          <Fade right>
            <div className="ml-6 md:ml-0 md:w-2/4 w-full">
              <sapn className="text-3xl font-semibold border-b-2 border-yellow-600">
                I Am
                <span className="font-normal border-b-2 "> Web Developer</span>
              </sapn>
              <p className="md:mt-12 mt-8 text-gray-600 mr-2">
                I am Rayhan. I have 1+ years of experience in Web Development.
                Customer service: 20/7. You will get 100% full support of work
                assured until you are fully satisfied. My key skills are: 1.
                HTML5, CSS3, JavaScript & Jquery, Bootstrap,Wordpress Elementor,
                PHP, MySql 2. Any sketch, PSD, ai, photo, xd to HTML, Bootstrap,
              </p>
              <div className="md:mt-16 mt-8  ">
                {AllData.socialIcon.map((icon) => (
                  <a
                    href={icon.link}
                    target="_blank"
                    rel="noreferrer"
                    key={icon.id}
                    className="mr-2 cursor-pointer border-2 rounded-sm border-yellow-600 hover:border-black  hover:text-yellow-600 transition-all duration-100 shadow-sm bg-white px-2 py-1"
                  >
                    {icon.icon}
                  </a>
                ))}
              </div>
              <div className="md:mt-10 my-8">
                <Link
                  to="/contact"
                  className="hire_btn bg-yellow-600 text-gray-50 cursor-pointer px-6 py-2 border-2 transition-all duration-200 rounded-3xl border-yellow-600 hover:text-black
                hover:bg-transparent mr-4"
                ></Link>
                <a
                  href="../assets/cv/cv.pdf"
                  download="Abu Rayhan Cv.pdf"
                  className="cv_btn hover:text-white rounded-3xl cursor-pointer px-6 py-2 border-2 transition-all duration-200 border-yellow-600 hover:bg-yellow-600"
                ></a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default About;
