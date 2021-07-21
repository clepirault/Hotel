import React from 'react';
import { Link } from 'react-router-dom';
import MainTilte from '../../common/title/MainTilte';
import Title from '../../common/title/Title';
import ContactButton from '../../common/button/ContactButton';
/* import images from '../../../images'; */
import './Home.css';
import Slideshow from '../../common/slideshow/Slideshow';

function Home() {
  return (
    <div>
      <MainTilte>Bienvenue à l&apos;hôtel</MainTilte>
      <div className="hotel">
        <div className="carousel">
          <Slideshow />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente
          doloremque repudiandae perferendis maiores id, sequi modi rerum, ex
          atque nihil molestiae labore tempore, facere explicabo culpa
          voluptates neque numquam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis ipsa temporibus deserunt, ab obcaecati
          pariatur aliquid aliquam, dignissimos vero, atque alias doloribus
          dicta? Odit accusantium sequi corrupti vitae nisi hic.
        </p>
      </div>
      <Title>Découvrir nos chambres</Title>
      <Title>Découvrir nos services</Title>
      <ContactButton title=" ">
        <Link to="/contact">Nous contacter</Link>
      </ContactButton>
    </div>
  );
}

export default Home;
