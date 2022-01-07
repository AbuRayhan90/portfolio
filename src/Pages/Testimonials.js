import React from 'react';
import CarouselSlider from '../Component/CarouselSlider';
import HeadingDownLine from '../Component/HeadingDownLine';
import TestimonialsContent from '../Component/TestimonialsContent';

const Testimonials = () => {
  return (
    <div className=" bg-testimonial-area bg-gray-800 bg-blend-overlay bg-cover bg-center h-full md:h-screen py-10">
      <div className="container mx-auto">
        <HeadingDownLine
          text="Testimonials"
          textcolor="text-white text-semibold"
        />
        <CarouselSlider />
        <div className="flex flex-wrap md:justify-between">
          <TestimonialsContent
            icon="far fa-laugh"
            number="15"
            text="Customers"
          />
          <TestimonialsContent
            icon="fas fa-layer-group"
            number="48"
            text="Projects Completed"
          />
          <TestimonialsContent
            icon="far fa-star"
            number="56"
            text="Full Review"
          />
          <TestimonialsContent
            icon="fas fa-sync-alt"
            number="3"
            text="Running Project"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
