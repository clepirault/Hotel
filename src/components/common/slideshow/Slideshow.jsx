import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Slideshow.css';
import images from '../../../images';

const img = [
  { id: 1, image: images.indoor },
  { id: 2, image: images.garden },
  { id: 3, image: images.living },
];

function Slideshow() {
  return (
    <div className="slide-container">
      <Carousel>
        {img.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="hotelImages" className="carouselImage" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slideshow;
