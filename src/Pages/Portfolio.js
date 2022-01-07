import React from 'react';
import PortfolioContent from '../Component/PortfolioContent';
import HeadingDownLine from '../Component/HeadingDownLine';
import Import_1 from '../assets/portfolio/netflix-clone.png';
import Import_2 from '../assets/portfolio/ecommerce-app.png';

const Portfolio = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto  ">
        <HeadingDownLine text="Portfolio" textcolor="font-semibold" />
        <div className="md:flex w-full justify-between md:flex-wrap md:mt-16 mt-8">
          <PortfolioContent
            portfolio_img={Import_1}
            title="Netflix-Clone Using React"
            liveSite="https://netflix-clone-ae4e5.web.app/"
          />
          <PortfolioContent
            portfolio_img={Import_2}
            title="E-Commerce-App Using React"
            liveSite="https://e-commerce-app-6089a.web.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
