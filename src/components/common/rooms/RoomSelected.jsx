import axios from 'axios';
import React, { useEffect, useState } from 'react';
/* import { useAlert } from 'react-alert'; */
import { Link } from 'react-router-dom';
import Title from '../title/Title';

function RoomSelected(props) {
  /* const alert = useAlert(); */
  /* we get and store meals */
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
  /* we get and store the room selected */
  const [roomByName, setRoomByName] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/rooms/${name}`)
      .then((res) => res.data)
      .then((data) => {
        setRoomByName(data[0]);
      });
  }, []);
  const [selectedMeals, setSelectedMeals] = useState('petit déjeuner');
  const handleSelectedMeals = (e) => {
    setSelectedMeals(e.target.value);
  };
  /* const [selectedNights, setSelectedNights] = useState('');
  const handleSelectedNights = (e) => {
    setSelectedNights(e.target.value);
  }; */
  /* const [displaySummary, setDisplaySummary] = useState(true);
  const handleDisplaySummary = () => {
    if (!selectedNights) {
      alert.show('Tous les champs ne sont pas remplis');
    } else {
      setDisplaySummary(!displaySummary);
    }
  }; */

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
          <input type="date" name="checkin" id="checkin" />
        </label>
        <label htmlFor="checkout">
          <input type="date" name="checkout" id="checkout" />
        </label>
        {/* value={selectedNights}
        onChange={handleSelectedNights} */}
      </form>
      {/* <button type="button" onClick={handleDisplaySummary}>
        Valider
      </button>
      {displaySummary || (
        <div>
          <h3>Résumé</h3>
          <p>Vous avez choisi une chambre type {name}</p>
          <p>En {selectedMeals} </p>
          <p>Pour {selectedNights} nuits</p>
          <button type="button">Poursuivre</button>
        </div>
      )} */}
    </div>
  );
}

export default RoomSelected;
