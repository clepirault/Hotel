import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import Title from '../common/title/Title';

function Admin() {
  const alert = useAlert();
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8000/booking')
      .then((res) => res.data)
      .then((data) => {
        setBooking(data);
      });
  }, []);
  const handleDeleteBooking = (value) => {
    axios
      .delete(`http://localhost:8000/booking/${value}`)
      .then(() => alert.show('Réservation supprimée'));
  };
  const toRoomName = (value) => {
    let roomName = '';
    if (value === 1) {
      roomName = 'economy';
    } else if (value === 2) {
      roomName = 'premium';
    } else if (value === 3) {
      roomName = 'suite';
    }
    return roomName;
  };
  const toMealName = (value) => {
    let mealName = '';
    if (value === 1) {
      mealName = 'petit déjeuner';
    } else if (value === 2) {
      mealName = 'demi pension';
    } else if (value === 3) {
      mealName = 'pension complète';
    }
    return mealName;
  };
  return (
    <div className="admin">
      <Title>Demandes de réservation reçues</Title>
      {booking.map((element) => (
        <ul>
          <li key={element.id}>
            {element.user_name} : {element.nb_pax} personnes, séjour du{' '}
            {element.checkin} au {element.checkout}, en chambre{' '}
            {toRoomName(element.room_id)} et {toMealName(element.meal_id)},{' '}
            commentaire facultatif : {element.comment}
            <button
              type="button"
              onClick={() => handleDeleteBooking(element.id)}
            >
              Supprimer
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Admin;
