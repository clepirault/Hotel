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
      .then(res => res.data)
      .then(data => {
        setBooking(data);
      });
  }, []);
  const handleDeleteBooking = value => {
    axios
      .delete(`http://localhost:8000/booking/${value}`)
      .then(() => alert.show('Réservation supprimée'));
  };
  const toRoomName = value => {
    switch (value) {
      case 1 :
        return 'economy';
      case 2 :
        return 'premium';
      case 3 :
        return 'suite';
      default:
        return '';
    }
  };
  const toMealName = value => {
    switch (value) {
      case 1 :
        return 'petit déjeuner';
      case 2 :
        return 'demi pension';
      case 3 :
        return 'pension complète';
      default:
        return '';
    }
  };
  return (
    <div className="admin">
      <Title>Demandes de réservation reçues</Title>
      <ul>
        {booking.map(element => (
          <li key={element.id}>
            {element.user_name} : {element.nb_pax} personnes, séjour du{' '}
            {element.checkin} au {element.checkout}, en chambre{' '}
            {toRoomName(element.room_id)} et {toMealName(element.meal_id)},{' '}
            commentaire facultatif : {element.comment}
            <button
              type="button"
              onClick={() => handleDeleteBooking(element.id)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
