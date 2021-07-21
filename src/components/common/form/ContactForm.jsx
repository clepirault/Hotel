import React from 'react';
import { useAlert } from 'react-alert';
import Tilte from '../title/Title';
import './ContactForm.css';
/* import PropTypes from 'prop-types'; */

function ContactForm() {
  const alert = useAlert();
  const handleClick = () => {
    alert.show('Votre demande a bien été envoyée');
  };
  return (
    <div className="contactFormSection">
      <form className="contactForm" action="submit">
        <Tilte>Contactez-nous</Tilte>
        <div className="contactFormInput">
          <input type="text" placeholder="Votre nom" />
          <input type="text" placeholder="Votre email" />
        </div>
        <label htmlFor="request">
          Votre demande concerne
          <select name="request" id="request">
            <option value="none">--</option>
            <option value="about">Des informations sur l&apos;hôtel</option>
            <option value="booking">Une réservation en cours</option>
            <option value="claim">Une réclamation</option>
          </select>
        </label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Votre message"
          className="contactFormMessage"
        />
        <button
          type="button"
          className="contactFormButton"
          onClick={handleClick}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

/* ContactForm.propTypes = {

} */

export default ContactForm;
