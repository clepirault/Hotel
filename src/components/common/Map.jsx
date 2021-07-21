import React from 'react';
import { MapContainer, TileLayer /* Marker, Popup */ } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  return (
    <MapContainer
      center={[47.869577, 0.315104]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ width: '40vw', height: '300px' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[47.869577, 0.315104]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
}

export default Map;
