import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RoomDetail from '../../common/rooms/RoomDetail';
import ContactButton from '../../common/button/ContactButton';
import './Rooms.css';
import Tilte from '../../common/title/Title';
import { RoomContext } from '../../context/roomsContext';

function Rooms() {
  const { room } = useContext(RoomContext);
  return (
    <div>
      <div className="roomsSectionMainTitle">
        <Tilte>Nos chambres</Tilte>
      </div>
      <div className="roomList">
        {room.map((element) => (
          <RoomDetail key={element.id} {...element} />
        ))}
      </div>
      <ContactButton title="Vous avez une demande spécifique">
        <Link to="/contact">Nous contacter</Link>
      </ContactButton>
    </div>
  );
}

export default Rooms;
