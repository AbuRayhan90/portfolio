import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Review1 from '../assets/img/review1.jpg';
import Review2 from '../assets/img/review2.jpg';
import Review3 from '../assets/img/review3.jpg';

const CarouselSlider = () => {
  return (
    <div className="text-center text-white mt-10">
      <Carousel>
        <Carousel.Item>
          <div className="">
            <div>
              <img
                className="h-24 w-24 text-center block rounded-full mx-auto"
                src={Review1}
                alt="First slide"
              />
            </div>
            <div className="">
              <p>
                Rayhan is a phenomenon. Hardworking, patient and always willing
                to give solutions. I worked with other developers but rayhan is
                the best and by far. He is now my permanent partner. Thanks
                Rayhan
              </p>
              <h3>Omerarbel</h3>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="">
            <div>
              <img
                className="h-24 w-24 text-center block rounded-full mx-auto"
                src={Review2}
                alt="First slide"
              />
            </div>
            <div className="">
              <p>great as always</p>
              <h3>Goldensio</h3>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="">
            <div>
              <img
                className="h-24 w-24 text-center block rounded-full mx-auto"
                src={Review3}
                alt="First slide"
              />
            </div>
            <div className="">
              <p>He is best seller i wishes best off luck</p>
              <h3>jhon</h3>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
