/* eslint-disable camelcase */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom';
import Title from '../title/Title';
import '../../views/rooms/Rooms.css';

const
  roomTextToId = text => {
    switch (text) {
      case 'Economy':
        return '1';
      case 'Premium':
        return '2';
      default:
        return '3';
    }
  },

  mealTextToId = text => {
    switch (text) {
      case 'petit déjeuner':
        return '1';
      case 'demi pension':
        return '2';
      default:
        return '3';
    }
  }

function RoomSelected(props) {
  const alert = useAlert();
  /* WE GET AND STORE MEALS */
  const [displayMeals, setDisplayMeals] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8000/meals')
      .then(res => res.data)
      .then(data => {
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
      .then(res => res.data)
      .then(data => {
        setRoomByName(data[0]);
      });
  }, []);
  /* WE STORE VALUES WE WILL NEED FOR OUR POST REQ */
  const room_id = roomTextToId(name);
  const [selectedMeals, setSelectedMeals] = useState('petit déjeuner'); // THE MEAL
  const handleSelectedMeals = (e) => {
    setSelectedMeals(e.target.value);
  };
  const meal_id = mealTextToId(selectedMeals)
  /*let meal_id = '';
  if (selectedMeals === 'petit déjeuner') {
    meal_id = '1';
  } else if (name === 'demi pension') { <<====== C'est une erreur ici non ? la variable name ?
    meal_id = '2';
  } else {
    meal_id = '3';
  }*/
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
      alert.show('Merci de compléter tous les champs');
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
  const convertPrice = value => (value === 0) ? 'inclus' : `${value}€/jour`;

  const mealPrice = value => {
    switch (value) {
      case 'petit déjeuner':
        return 0;
      case 'demi pension':
        return 15;
      case 'pension complète':
        return 35;
      default:
        return '';
    }
  };

  const roomPrice = value => {
    switch (value) {
      case 'Economy':
        return 80;
      case 'Premium':
        return 100;
      case 'Suite':
        return 200;
      default:
        return '';
    }
  };

  // find total price by days selected

  const selectedDays = (c, d) => {
    const a = c.split('-').map(x => +x);
    const b = d.split('-').map(x => +x);
    if (a[1] === b[1]) {
      return b[2] - a[2];
    }
    if (a[1] === 2) {
      return 28 - a[2] + b[2];
    }
    if (a[1] !== 4 && a[1] !== 6 && a[1] !== 9 && a[1] !== 11) {
      return 31 - a[2] + b[2];
    }
    return 30 - a[2] + b[2];
  };

  const totalPrice = (meal, room, days) => (meal + room) * days;

  return (
    <div className="roomSelectedSection">
      <Link to="/rooms" className="toRoomsLink">
        Retour
      </Link>
      <Title>Vous avez sélectionné la chambre {roomByName.name}</Title>
      <form className="form">
        <label htmlFor="meals">
          Choisir vos options
          <select
            name="meals"
            id="meals"
            value={selectedMeals}
            onChange={handleSelectedMeals}
          >
            {displayMeals.map((element) => (
              <option key={element.id} value={element.type}>
                {element.type} ({convertPrice(element.price)})
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="checkin">
          <span>Date d&apos;arrivée souhaitée</span>
          <input
            type="date"
            name="checkin"
            id="checkin"
            value={checkin}
            onChange={handleChecking}
          />
        </label>
        <label htmlFor="checkout">
          <span>Date de départ souhaitée</span>
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
        <div className="summary">
          <h3>Résumé</h3>
          <span>Vous avez sélectionné une chambre type {name}</span>
          <span>En {selectedMeals} </span>
          <span>
            Du {checkin} au {checkout}
          </span>
          <span>Soit {selectedDays(checkin, checkout)} nuits</span>
          <span>
            Prix total à payer :{' '}
            {totalPrice(
              mealPrice(selectedMeals),
              roomPrice(name),
              selectedDays(checkin, checkout)
            )}{' '}
            €
          </span>
          <button type="button" onClick={handleDisplayBooking}>
            Réserver
          </button>
          {displayBooking || (
            <div className="booking">
              <label htmlFor="username">
                <span>Votre nom</span>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={user_name}
                  onChange={handleUserName}
                />
              </label>
              <label htmlFor="nb_pax">
                <span>Nombre de personnes</span>
                <input
                  type="number"
                  id="nb_pax"
                  name="nb_pax"
                  value={nb_pax}
                  onChange={handleNbPax}
                />
              </label>
              <label htmlFor="comment">
                <span>Commentaire (facultatif)</span>
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  value={comment}
                  onChange={handleComment}
                  className="textarea"
                />
              </label>
              <button
                type="button"
                onClick={handleSendBooking}
                className="bookingButton"
              >
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
