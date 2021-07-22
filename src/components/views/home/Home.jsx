import React /* , { useContext } */ from 'react';
import { Link } from 'react-router-dom';
import MainTilte from '../../common/title/MainTilte';
import ContactButton from '../../common/button/ContactButton';
import './Home.css';
import Slideshow from '../../common/slideshow/Slideshow';
import Title from '../../common/title/Title';
import SecondaryTitle from '../../common/title/SecondaryTitle';
import RoomButton from '../../common/button/RoomButton';
/* import { RoomContext } from '../../context/roomsContext'; */

function Home() {
  /* const { room } = useContext(RoomContext); */
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
      <div className="roomSection">
        <div className="roomTitle">
          <Title>Découvrir nos chambres</Title>
        </div>
        <div className="rooms">
          <div className="economy">
            <SecondaryTitle>{/* {room[0].name} */}Economy</SecondaryTitle>
            <RoomButton>
              <Link to="/rooms">Découvrir</Link>
            </RoomButton>
          </div>
          <div className="premium">
            <SecondaryTitle>{/* {room[1].name} */}Premium</SecondaryTitle>
            <RoomButton>
              <Link to="/rooms">Découvrir</Link>
            </RoomButton>
          </div>
          <div className="suite">
            <SecondaryTitle>{/* {room[2].name} */}Suite</SecondaryTitle>
            <RoomButton>
              <Link to="/rooms">Découvrir</Link>
            </RoomButton>
          </div>
        </div>
      </div>
      {/* <Title>Découvrir nos services</Title> */}
      <ContactButton title=" ">
        <Link to="/contact">Nous contacter</Link>
      </ContactButton>
    </div>
  );
}

export default Home;
