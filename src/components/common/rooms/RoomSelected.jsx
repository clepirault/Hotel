import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom';

function RoomSelected(props) {
  const alert = useAlert();
  const [displayMeals, setDisplayMeals] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8000/meals')
      .then((res) => res.data)
      .then((data) => {
        setDisplayMeals(data);
      });
  }, []);
  const [selectedMeals, setSelectedMeals] = useState('petit déjeuner');
  const handleSelectedMeals = (e) => {
    setSelectedMeals(e.target.value);
  };
  const [selectedNights, setSelectedNights] = useState('');
  const handleSelectedNights = (e) => {
    setSelectedNights(e.target.value);
  };
  const [displaySummary, setDisplaySummary] = useState(true);
  const handleDisplaySummary = () => {
    if (!selectedNights) {
      alert.show('Tous les champs ne sont pas remplis');
    } else {
      setDisplaySummary(!displaySummary);
    }
  };
  // eslint-disable-next-line react/destructuring-assignment
  const { name } = props.match.params;
  return (
    <div>
      <Link to="/rooms">Retour</Link>
      <h2>{name}</h2>
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
        <br />
        <label htmlFor="nb_nights">
          Nombre de nuits
          <input
            type="text"
            id="nb_night"
            value={selectedNights}
            onChange={handleSelectedNights}
          />
        </label>
        <br />
      </form>
      <button type="button" onClick={handleDisplaySummary}>
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
      )}
    </div>
  );
}

export default RoomSelected;
