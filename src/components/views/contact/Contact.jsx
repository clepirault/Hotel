import React from 'react';
import Tilte from '../../common/title/Title';
import ContactForm from '../../common/form/ContactForm';
import './Contact.css';
/* import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; */

function Contact() {
  return (
    <div>
      <Tilte>Nous contacter</Tilte>
      {/* <MapContainer
        center={[47.86899, 0.314787]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
      <div className="contactInfo">
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
