import React from 'react';
import PortfolioContent from '../Component/PortfolioContent';
import HeadingDownLine from '../Component/HeadingDownLine';

const Portfolio = () => {
  return (
    <div className="">
      <div className="container mx-auto my-16">
        <HeadingDownLine text="Portfolio" textcolor="font-semibold" />
        <div className="md:flex w-full justify-between md:flex-wrap">
          <PortfolioContent bgImage="bg-skills-area" />
          <PortfolioContent bgImage="bg-skills-area" />
          <PortfolioContent bgImage="bg-skills-area" />
          <PortfolioContent bgImage="bg-skills-area" />
          <PortfolioContent bgImage="bg-skills-area" />
          <PortfolioContent bgImage="bg-skills-area" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
