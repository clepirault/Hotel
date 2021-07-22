/* eslint-disable camelcase */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom';
import Title from '../title/Title';

function RoomSelected(props) {
  const alert = useAlert();
  /* WE GET AND STORE MEALS */
  const [displayMeals, setDisplayMeals] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8000/meals')
      .then((res) => res.data)
      .then((data) => {
        setDisplayMeals(data);
      });
  }, []);
  // eslint-disable-next-line react/destructuring-assignment
  const { name } = props.match.params;
  /* WE GET AND STORE THE ROOM SELECTED */
  const [roomByName, setRoomByName] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/rooms/${name}`)
      .then((res) => res.data)
      .then((data) => {
        setRoomByName(data[0]);
      });
  }, []);
  /* WE STORE VALUES WE WILL NEED FOR OUR POST REQ */
  let room_id = ''; // THE ROOM
  if (name === 'Economy') {
    room_id = '1';
  } else if (name === 'Premium') {
    room_id = '2';
  } else {
    room_id = '3';
  }
  const [selectedMeals, setSelectedMeals] = useState('petit déjeuner'); // THE MEAL
  const handleSelectedMeals = (e) => {
    setSelectedMeals(e.target.value);
  };
  let meal_id = '';
  if (selectedMeals === 'petit déjeuner') {
    meal_id = '1';
  } else if (name === 'demi pension') {
    meal_id = '2';
  } else {
    meal_id = '3';
  }
  const [checkin, setCheckin] = useState(''); // THE CHECKIN DATE
  const handleChecking = (e) => {
    setCheckin(e.target.value);
  };
  const [checkout, setCheckout] = useState(''); // THE CHECKOUT DATE
  const handleCheckout = (e) => {
    setCheckout(e.target.value);
  };
  const [user_name, setUserName] = useState(''); // THE USER NAME
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const [nb_pax, setNbPax] = useState(''); // THE NB OF PAX
  const handleNbPax = (e) => {
    setNbPax(e.target.value);
  };
  const [comment, setComment] = useState(''); // THE COMMENT (NULL)
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const [displaySummary, setDisplaySummary] = useState(true);
  const handleDisplaySummary = () => {
    if (!checkin && !checkout) {
      alert.show('Tous les champs ne sont pas remplis');
    } else {
      setDisplaySummary(!displaySummary);
    }
  };
  const [displayBooking, setDisplayBooking] = useState(true);
  const handleDisplayBooking = () => {
    setDisplayBooking(!displayBooking);
  };

  const handleSendBooking = () => {
    const newBooking = {
      user_name,
      nb_pax,
      checkin,
      checkout,
      comment,
      room_id,
      meal_id,
    };
    axios
      .post('http://localhost:8000/booking', newBooking)
      .then(() => alert.show('Merci pour votre réservation'));
  };

  return (
    <div>
      <Link to="/rooms">Retour</Link>
      <Title>Vous avez sélectionné la chambre {roomByName.name}</Title>
      <form>
        <label htmlFor="meals">
          Choisir vos options
          <select
            name="meals"
            id="meals"
            value={selectedMeals}
            onChange={handleSelectedMeals}
          >
            {displayMeals.map((element) => (
              <option value={element.type}>{element.type}</option>
            ))}
          </select>
        </label>
        <label htmlFor="checkin">
          <input
            type="date"
            name="checkin"
            id="checkin"
            value={checkin}
            onChange={handleChecking}
          />
        </label>
        <label htmlFor="checkout">
          <input
            type="date"
            name="checkout"
            id="checkout"
            value={checkout}
            onChange={handleCheckout}
          />
        </label>
      </form>
      <button type="button" onClick={handleDisplaySummary}>
        Valider
      </button>
      {displaySummary || (
        <div>
          <h3>Résumé</h3>
          <span>Vous avez sélectionné une chambre type {name}</span>
          <span>En {selectedMeals} </span>
          <span>
            Du {checkin} au {checkout}
          </span>
          <button type="button" onClick={handleDisplayBooking}>
            Réserver
          </button>
          {displayBooking || (
            <div>
              <input
                type="text"
                name="user_name"
                placeholder="Votre nom"
                value={user_name}
                onChange={handleUserName}
              />
              <input
                type="number"
                name="nb_pax"
                value={nb_pax}
                onChange={handleNbPax}
              />
              <input
                type="text"
                name="comment"
                placeholder="Commentaire (facultatif)"
                value={comment}
                onChange={handleComment}
              />
              <button type="button" onClick={handleSendBooking}>
                Confirmer la réservation
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RoomSelected;
