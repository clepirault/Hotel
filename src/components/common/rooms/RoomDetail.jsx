import React from 'react';
import { Link } from 'react-router-dom';
import '../../views/rooms/Rooms.css';
import Title from '../title/Title';
import ContactButton from '../button/ContactButton';

function RoomDetail(props) {
  const { name, capacity, price, image } = props;
  return (
    <div className="roomsSection">
      <div className="roomsSectionTitle">
        <Title>{name}</Title>
      </div>
      <div className="roomDetail">
        <img src={image} alt="roomImage" className="roomImage" />
        <div className="roomInfo">
          <span>Pour {capacity} personnes</span>
          <span>Prix par nuit : {price}€ </span>
          <ContactButton title=" ">
            <Link to={`/rooms/${name}`}>Réserver</Link>
          </ContactButton>
        </div>
      </div>
    </div>
  );
}

export default RoomDetail;
