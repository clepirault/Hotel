import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RoomDetail from '../../common/rooms/RoomDetail';
import ContactButton from '../../common/button/ContactButton';
import './Rooms.css';

function Rooms() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8000/rooms')
      .then((res) => res.data)
      .then((data) => {
        setRooms(data);
      });
    /* .catch((err)=>console.error(error)); */
  }, []);
  return (
    <div>
      <h2>Chambres</h2>
      <div className="roomList">
        {rooms.map((element) => (
          <RoomDetail {...element} />
        ))}
      </div>
      <ContactButton title="Vous avez une demande spécifique">
        <Link to="/contact">Nous contacter</Link>
      </ContactButton>
    </div>
  );
}

export default Rooms;
