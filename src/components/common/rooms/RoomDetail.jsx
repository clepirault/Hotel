import React from 'react';
import { Link } from 'react-router-dom';
import '../../views/rooms/Rooms.css';

function RoomDetail(props) {
  const { name, capacity, price } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>Pour {capacity} personnes</p>
      <p>Prix par nuit : {price}€ </p>
      <button type="button">
        <Link to={`/rooms/${name}`}>Réserver</Link>
      </button>
    </div>
  );
}

export default RoomDetail;
