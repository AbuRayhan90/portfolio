import React from 'react';
import { Zoom } from 'react-reveal';
const PortfolioContent = ({ portfolio_img, title, liveSite }) => {
  return (
    <Zoom>
      <div className="">
        <img
          src={portfolio_img}
          className="h-[30rem] w-[25rem]"
          alt="portfolio"
        />
        <h1 className="text-lg mt-6 font-semibold">
          {title}{' '}
          <a
            href={liveSite}
            className="text-yellow-600 font-bold"
            target="_blank"
          >
            View Live Demo
          </a>
        </h1>
      </div>
    </Zoom>
  );
};

export default PortfolioContent;
