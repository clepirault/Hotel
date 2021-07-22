import React from 'react';
import Title from '../../common/title/Title';
import ContactForm from '../../common/form/ContactForm';
import './Contact.css';
import Map from '../../common/Map';

function Contact() {
  return (
    <div className="contact">
      <div
        style={{ textAlign: 'center', paddingTop: '3em', paddingBottom: '3em' }}
      >
        <Title>Venir à l&apos;hôtel</Title>
      </div>
      <div className="contactInfo">
        <Map />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          obcaecati iusto maiores architecto voluptas vitae libero aliquam
          explicabo, sequi maxime atque beatae? Praesentium fugiat veritatis
          ipsam, facere nam dolorem. Consequuntur.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
