import React from 'react';
import { Zoom } from 'react-reveal';
const PortfolioContent = ({ portfolio_img, title, liveSite }) => {
  return (
    <Zoom>
      <div className="">
        <img
          src={portfolio_img}
          className="h-[20rem] w-full md:h-[30rem] md:w-[25rem] rounded-md"
          alt="portfolio"
        />
        <h1 className="text-lg my-6 font-semibold">
          {title}
          <a
            href={liveSite}
            rel="noreferrer"
            className="text-yellow-600 font-bold"
            target="_blank"
            rel="site"
          >
            View Live Demo
          </a>
        </h1>
      </div>
    </Zoom>
  );
};

export default PortfolioContent;
