import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RoomDetail from '../../common/rooms/RoomDetail';
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
    </div>
  );
}

export default Rooms;
